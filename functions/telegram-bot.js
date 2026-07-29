const token = process.env.TELEGRAM_BOT_TOKEN || "8670114174:AAGL8DPDl7tjEJzXF-hr2xYQ1pNZY8K7MKA";
const ownerChatId = process.env.TELEGRAM_OWNER_CHAT_ID || "1188063440";
const products = require("../products_init.json");

const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/soyjss10-lang/js7kh-store/main";

// Helper to construct absolute image URL on raw GitHub CDN
function getProductImageUrl(p) {
  if (!p || !p.image) return `${GITHUB_RAW_BASE}/assets/images/user_aba_khqr.jpg`;
  let imgPath = p.image;
  if (imgPath.startsWith('./')) {
    imgPath = imgPath.substring(2);
  } else if (imgPath.startsWith('/')) {
    imgPath = imgPath.substring(1);
  }
  return `${GITHUB_RAW_BASE}/${imgPath}`;
}

// Ultra-fast message sender/editor with instant image preview
async function sendFastMessage(botUrl, chatId, messageId, text, keyboard, imageUrl = null) {
  const cleanImageUrl = imageUrl ? imageUrl.split('?')[0] : null;

  let contentText = text;
  if (cleanImageUrl) {
    contentText = `[\u200B](${cleanImageUrl})\n` + text;
  }

  const payload = {
    chat_id: chatId,
    text: contentText,
    parse_mode: "Markdown",
    reply_markup: keyboard
  };

  if (cleanImageUrl) {
    payload.link_preview_options = {
      is_disabled: false,
      url: cleanImageUrl,
      prefer_large_media: true,
      show_above_text: true
    };
  }

  let success = false;
  if (messageId) {
    try {
      const res = await fetch(`${botUrl}/editMessageText`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message_id: messageId,
          ...payload
        })
      });
      const data = await res.json();
      if (data.ok) success = true;
    } catch (e) {
      console.error("editMessageText error:", e);
    }
  }

  if (!success) {
    try {
      await fetch(`${botUrl}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    } catch (e) {
      console.error("sendMessage error:", e);
    }
  }
}

// Helper function to send the main shop category menu
async function sendMainMenu(botUrl, chatId, messageId = null) {
  const text = `👋 **សួស្តីបង! សូមស្វាគមន៍មកកាន់ JS7KH Store Bot!** 🇰🇭\n\n` +
               `ពួកយើងជាហាងលក់សេវាកម្មឌីជីថល លឿន រហ័ស និងមានទំនុកចិត្តខ្ពស់។\n\n` +
               `សូមជ្រើសរើសប្រភេទផលិតផលខាងក្រោមដើម្បីទិញ៖`;

  const keyboard = {
    inline_keyboard: [
      [
        { text: "💳 UPGRADE ACCOUNT", callback_data: "cat_account" },
        { text: "🛠️ TOOLS & SOFTWARES", callback_data: "cat_tools" }
      ],
      [
        { text: "📱 FACEBOOK PAGES", callback_data: "cat_fb-page" },
        { text: "📦 ផលិតផលទាំងអស់", callback_data: "cat_all" }
      ],
      [
        { text: "📞 ទំនាក់ទំនងអ្នកលក់", url: "https://t.me/SOYCHES7" }
      ]
    ]
  };

  await sendFastMessage(botUrl, chatId, messageId, text, keyboard);
}

// Helper function to show products in a specific category
async function sendCategoryView(botUrl, chatId, messageId, categoryId) {
  let filtered = products;
  let catTitle = "ផលិតផលទាំងអស់";

  if (categoryId !== "all") {
    filtered = products.filter(p => p.category === categoryId);
    const firstProd = filtered[0];
    if (firstProd && firstProd.categoryLabel) {
      catTitle = firstProd.categoryLabel;
    } else {
      catTitle = categoryId.toUpperCase();
    }
  }

  const text = `📂 **ប្រភេទ៖ ${catTitle}**\n\nសូមជ្រើសរើសផលិតផលខាងក្រោម ដើម្បីមើលលម្អិត៖`;

  const inline_keyboard = [];
  filtered.forEach(p => {
    inline_keyboard.push([
      { text: `${p.title} - $${p.price.toFixed(2)}`, callback_data: `prod_${p.id}` }
    ]);
  });

  // Back button
  inline_keyboard.push([
    { text: "🔙 ត្រឡប់ទៅម៉ឺនុយដើម", callback_data: "menu_home" }
  ]);

  await sendFastMessage(botUrl, chatId, messageId, text, { inline_keyboard });
}

// Helper function to display detailed product info with fast image preview
async function sendProductDetail(botUrl, chatId, messageId, productId) {
  const p = products.find(item => item.id === productId);
  if (!p) return;

  const imageUrl = getProductImageUrl(p);

  const featuresText = (p.features && p.features.length > 0)
    ? p.features.map(f => `• ${f}`).join("\n")
    : "• ដំណើរការបានល្អ ១០០%";

  const caption = `🏷️ **${p.title}**\n` +
                  `------------------------------\n` +
                  `ℹ️ **ការពិពណ៌នា៖**\n${p.description}\n\n` +
                  `✨ **លក្ខណៈពិសេស៖**\n${featuresText}\n\n` +
                  `💰 **តម្លៃពិសេស៖** \`$${p.price.toFixed(2)} USD\` (តម្លៃដើម៖ ~~$${p.originalPrice.toFixed(2)} USD~~)\n` +
                  `📊 **ស្ថានភាព៖** ${p.stockStatus === 'in-stock' ? '🟢 មានក្នុងស្តុក (In Stock)' : '🔴 អស់ពីស្តុក'}\n` +
                  `------------------------------\n` +
                  `សូមចុចប៊ូតុងខាងក្រោមដើម្បីទិញ ឬត្រឡប់ក្រោយ៖`;

  const inline_keyboard = [];
  if (p.stockStatus === 'in-stock') {
    inline_keyboard.push([
      { text: "🛒 ទិញឥឡូវនេះ (Buy Now)", callback_data: `checkout_${p.id}` }
    ]);
  } else {
    inline_keyboard.push([
      { text: "🔴 អស់ពីស្តុក (Out of Stock)", callback_data: "none" }
    ]);
  }

  inline_keyboard.push([
    { text: "🔙 ត្រឡប់ក្រោយ", callback_data: `cat_${p.category}` }
  ]);

  await sendFastMessage(botUrl, chatId, messageId, caption, { inline_keyboard }, imageUrl);
}

// Helper to show checkout payment selection options
async function sendCheckoutOptions(botUrl, chatId, messageId, productId) {
  const p = products.find(item => item.id === productId);
  if (!p) return;

  const billNo = Math.floor(100000 + Math.random() * 900000);
  const text = `🛒 **ការបញ្ជាទិញ៖** ${p.title}\n` +
               `💰 **តម្លៃ៖** \`$${p.price.toFixed(2)} USD\`\n` +
               `លេខវិក្កយបត្រ៖ #${billNo}\n\n` +
               `សូមជ្រើសរើសវិធីសាស្ត្រទូទាត់ប្រាក់៖`;

  const inline_keyboard = [
    [
      { text: "🏦 ABA Bank (ABA KHQR)", callback_data: `pay_aba_${p.id}_${billNo}` }
    ],
    [
      { text: "💰 Binance / USDT", callback_data: `pay_crypto_${p.id}_${billNo}` }
    ],
    [
      { text: "🔙 ត្រឡប់ក្រោយ", callback_data: `prod_${p.id}` }
    ]
  ];

  await sendFastMessage(botUrl, chatId, messageId, text, { inline_keyboard });
}

// Helper function to display selected payment QR Code with fast image preview
async function sendPaymentDetails(botUrl, chatId, messageId, productId, billNo, method) {
  const p = products.find(item => item.id === productId);
  if (!p) return;

  let caption = "";
  let qrUrl = "";

  const inline_keyboard = [
    [
      { text: "🔙 ត្រឡប់ក្រោយ", callback_data: `checkout_${p.id}` }
    ]
  ];

  if (method === "aba") {
    qrUrl = `${GITHUB_RAW_BASE}/assets/images/user_aba_khqr.jpg`;
    caption = `🏦 **ABA Bank Payment (KHQR)**\n\n` +
              `• ឈ្មោះគណនី៖ **CHES SOY**\n` +
              `• លេខគណនី ABA៖ \`081 887 350\` (ចុចដើម្បីចម្លង)\n` +
              `• ចំនួនទឹកប្រាក់៖ **$${p.price.toFixed(2)} USD**\n` +
              `• លេខវិក្កយបត្រ៖ **#${billNo}**\n` +
              `• កូដផលិតផល៖ \`[${p.id}]\`\n\n` +
              `⚠️ **ការណែនាំ៖** សូមស្កែនរូបភាព ABA KHQR កូដខាងលើ ឬផ្ទេរប្រាក់តាមគណនី ABA រួចផ្ញើ **រូបភាពបង្កាន់ដៃបង់ប្រាក់ (Receipt Screenshot)** មកកាន់ Chat នេះបាទ។`;
  } else {
    qrUrl = `${GITHUB_RAW_BASE}/assets/images/binance_qr.png`;
    caption = `💰 **Crypto / Binance Payment**\n\n` +
              `• Binance ID៖ \`294507047\` (ចុចដើម្បីចម្លង)\n` +
              `• បណ្តាញ USDT៖ **TRC20 / BEP20**\n` +
              `• ចំនួនទឹកប្រាក់៖ **$${p.price.toFixed(2)} USD**\n` +
              `• លេខវិក្កយបត្រ៖ **#${billNo}**\n` +
              `• កូដផលិតផល៖ \`[${p.id}]\`\n\n` +
              `⚠️ **ការណែនាំ៖** សូមស្កែនរូបភាព Binance QR កូដខាងលើ ឬផ្ទេរប្រាក់ រួចហើយសូមផ្ញើ **រូបភាពបង្កាន់ដៃ (Receipt Screenshot)** មកកាន់ Chat នេះបាទ។`;
  }

  await sendFastMessage(botUrl, chatId, messageId, caption, { inline_keyboard }, qrUrl);
}

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 200, body: "Only POST requests allowed" };
  }

  try {
    if (!token || !ownerChatId) {
      console.error("Missing environment variables: TELEGRAM_BOT_TOKEN or TELEGRAM_OWNER_CHAT_ID");
      return { statusCode: 200, body: "Bot settings missing on server" };
    }

    const update = JSON.parse(event.body);
    const botUrl = `https://api.telegram.org/bot${token}`;

    // 1. Handle Callback Queries (Button Clicks)
    if (update.callback_query) {
      const query = update.callback_query;
      const data = query.data;
      const message = query.message;
      const chatId = message.chat.id;
      const messageId = message.message_id;

      // Answer Callback Query immediately to stop loading spinner on button in 1ms
      fetch(`${botUrl}/answerCallbackQuery`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ callback_query_id: query.id })
      }).catch(err => console.error("answerCallbackQuery error:", err));

      if (data.startsWith("approve_")) {
        const parts = data.split("_");
        const customerChatId = parts[1];
        const productId = parts[2];
        const billNo = parts[3];

        const p = products.find(item => item.id === productId);
        if (p) {
          const customerMsg = `🎉 **ការទូទាត់ប្រាក់របស់បងត្រូវបានអនុម័តជោគជ័យ!** (វិក្កយបត្រ៖ #${billNo})\n\n` +
            `📦 **ផលិតផល៖** ${p.title}\n` +
            `🔑 **លេខកូដអាជ្ញាប័ណ្ណ (License Key)៖** \`${p.licenseKey}\`\n` +
            `📥 **តំណភ្ជាប់ទាញយក៖** ${p.downloadLink}\n\n` +
            `សូមអរគុណសម្រាប់ការគាំទ្រ JS7KH Store!`;

          await sendFastMessage(botUrl, customerChatId, null, customerMsg, null);

          const newCaption = `${message.caption || message.text || ""}\n\n` +
            `✅ **បានអនុម័ត និងផ្ញើឯកសារទៅកាន់ភ្ញៀវរួចរាល់ហើយ!**`;

          if (message.photo) {
            await fetch(`${botUrl}/editMessageCaption`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                chat_id: ownerChatId,
                message_id: message.message_id,
                caption: newCaption,
                reply_markup: { inline_keyboard: [] }
              })
            });
          }
        }
      } else if (data.startsWith("reject_")) {
        const parts = data.split("_");
        const customerChatId = parts[1];
        const billNo = parts[2];

        const customerMsg = `❌ **ការទូទាត់ប្រាក់របស់បងមិនត្រូវបានអនុម័តឡើយ!** (វិក្កយបត្រ៖ #${billNo})\n\n` +
          `សូមពិនិត្យមើលរូបភាពបង្កាន់ដៃបង់ប្រាក់ឡើងវិញ ឬទាក់ទងមកកាន់អ្នកលក់ផ្ទាល់។`;

        await sendFastMessage(botUrl, customerChatId, null, customerMsg, null);

        const newCaption = `${message.caption || message.text || ""}\n\n` +
          `❌ **បានបដិសេធការបញ្ជាទិញនេះ!**`;

        if (message.photo) {
          await fetch(`${botUrl}/editMessageCaption`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: ownerChatId,
              message_id: message.message_id,
              caption: newCaption,
              reply_markup: { inline_keyboard: [] }
            })
          });
        }
      } else if (data === "menu_home") {
        await sendMainMenu(botUrl, chatId, messageId);
      } else if (data.startsWith("cat_")) {
        const categoryId = data.split("_")[1];
        await sendCategoryView(botUrl, chatId, messageId, categoryId);
      } else if (data.startsWith("prod_")) {
        const productId = data.split("_")[1];
        await sendProductDetail(botUrl, chatId, messageId, productId);
      } else if (data.startsWith("checkout_")) {
        const productId = data.split("_")[1];
        await sendCheckoutOptions(botUrl, chatId, messageId, productId);
      } else if (data.startsWith("pay_aba_")) {
        const parts = data.split("_");
        const productId = parts[2];
        const billNo = parts[3];
        await sendPaymentDetails(botUrl, chatId, messageId, productId, billNo, "aba");
      } else if (data.startsWith("pay_crypto_")) {
        const parts = data.split("_");
        const productId = parts[2];
        const billNo = parts[3];
        await sendPaymentDetails(botUrl, chatId, messageId, productId, billNo, "crypto");
      }

      return { statusCode: 200, body: "OK" };
    }

    // 2. Handle Incoming Chat Messages
    const message = update.message;
    if (!message) {
      return { statusCode: 200, body: "No message received" };
    }

    const chatId = message.chat.id;
    const text = message.text;
    const photo = message.photo;
    const from = message.from;

    // Handle /start, /menu, /shop commands ONLY
    if (text && (text.startsWith("/start") || text.startsWith("/menu") || text.startsWith("/shop"))) {
      const parts = text.split(" ");
      let billNo = "";
      let productId = "";

      if (parts.length > 1) {
        const param = parts[1]; // bill_123456_prod_js7-gemini
        const billMatch = param.match(/bill_([0-9]+)/);
        const prodMatch = param.match(/prod_([a-zA-Z0-9-]+)/);
        if (billMatch) billNo = billMatch[1];
        if (prodMatch) productId = prodMatch[1];
      }

      if (billNo && productId) {
        // Deep link from website checkout page
        const p = products.find(item => item.id === productId);
        const prodTitle = p ? p.title : "មិនស្គាល់";

        let welcomeMsg = `សួស្តីបង ${from.first_name || ""}! សូមស្វាគមន៍មកកាន់ JS7KH Store Bot។\n\n` +
          `សូមផ្ញើរូបភាពបង្កាន់ដៃបាញ់លុយ (Receipt Screenshot) ដើម្បីទិញ៖\n` +
          `👉 **ផលិតផល៖** ${prodTitle}\n` +
          `👉 **លេខវិក្កយបត្រ៖** #${billNo}\n` +
          `👉 **កូដ៖** \`[${productId}]\`\n\n` +
          `⚠️ **សំខាន់៖** សូមផ្ញើរូបថតបង្កាន់ដៃមកកាន់ Chat នេះដើម្បីឱ្យអ្នកលក់ផ្ទៀងផ្ទាត់។`;

        await sendFastMessage(botUrl, chatId, null, welcomeMsg, null);
      } else {
        // Clean start - send all products category view directly
        await sendCategoryView(botUrl, chatId, null, "all");
      }

      return { statusCode: 200, body: "OK" };
    }

    // Handle photo messages (Receipt uploads)
    if (photo && photo.length > 0) {
      const highestResPhoto = photo[photo.length - 1];
      const fileId = highestResPhoto.file_id;

      let productId = "";
      let billNo = "";

      // Extract details from reply message or text if available
      if (message.reply_to_message) {
        const replyText = message.reply_to_message.text || message.reply_to_message.caption || "";
        const prodMatch = replyText.match(/កូដ(?:ផលិតផល)?៖\s*`?\[([a-zA-Z0-9-]+)\]`?/);
        const billMatch = replyText.match(/លេខវិក្កយបត្រ៖\s*#([0-9]+)/);
        if (prodMatch) productId = prodMatch[1];
        if (billMatch) billNo = billMatch[1];
      }

      const p = productId ? products.find(item => item.id === productId) : null;
      const prodTitle = p ? p.title : (productId || "ផលិតផលមិនស្គាល់");

      const autoReplyText = `សូមអរគុណសម្រាប់ការផ្ញើបង្កាន់ដៃទូទាត់ប្រាក់ (${prodTitle})! ` +
        `ប្រព័ន្ធបានផ្ញើទៅកាន់អ្នកលក់ដើម្បីផ្ទៀងផ្ទាត់រួចរាល់ហើយ។ បងនឹងទទួលបានឯកសារ/គណនីភ្លាមបន្ទាប់ពីអ្នកលក់ពិនិត្យរួចរាល់!`;

      await sendFastMessage(botUrl, chatId, null, autoReplyText, null);

      const usernameText = from.username ? `@${from.username}` : "គ្មាន";
      const customerName = `${from.first_name || ""} ${from.last_name || ""}`.trim();
      const caption = `🔔 **បង្កាន់ដៃទូទាត់ថ្មីពីអតិថិជន!**\n\n` +
        `- **ឈ្មោះ៖** ${customerName}\n` +
        `- **Username៖** ${usernameText}\n` +
        `- **លេខវិក្កយបត្រ៖** #${billNo || "មិនមាន"}\n` +
        `- **ទិញផលិតផល៖** ${prodTitle}\n` +
        `- **Chat ID៖** \`${chatId}\`\n\n` +
        `សូមពិនិត្យមើលរូបភាព រួចចុចប៊ូតុងខាងក្រោមដើម្បីសម្រេច៖`;

      const keyboard = {
        inline_keyboard: [
          [
            { text: "✅ យល់ព្រម & ផ្ញើគណនី", callback_data: `approve_${chatId}_${productId || 'all'}_${billNo || '000'}` },
            { text: "❌ បដិសេធ", callback_data: `reject_${chatId}_${billNo || '000'}` }
          ]
        ]
      };

      // Only forward notification to owner if the sender is an actual customer (not owner testing)
      if (chatId.toString() !== ownerChatId.toString()) {
        await fetch(`${botUrl}/sendPhoto`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: ownerChatId,
            photo: fileId,
            caption: caption,
            parse_mode: "Markdown",
            reply_markup: keyboard
          })
        });
      }

      return { statusCode: 200, body: "OK" };
    }

    // Do NOT send auto-spam messages for normal text chat messages
    return { statusCode: 200, body: "OK" };
  } catch (err) {
    console.error("Error in webhook handler:", err);
    return { statusCode: 200, body: "Error occurred" };
  }
};
