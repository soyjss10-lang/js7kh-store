const token = process.env.TELEGRAM_BOT_TOKEN || "8670114174:AAGL8DPDl7tjEJzXF-hr2xYQ1pNZY8K7MKA";
const ownerChatId = process.env.TELEGRAM_OWNER_CHAT_ID || "1188063440";
const userLastProduct = {};
const products = [
  {
    "id": "js7-gemini",
    "title": "Gemini 18 Month Link No Warranty",
    "category": "account",
    "categoryLabel": "UPGRADE ACCOUNT",
    "price": 4.99,
    "originalPrice": 35.00,
    "stockStatus": "in-stock",
    "stock": 159,
    "sold": 7636,
    "image": "assets/images/gemini.png",
    "description": "Click the link And activate it in a single click No need of Credit Card!!!\nActivate it immediately after purchase otherwise no warranty\n\nNote ⚠️ : Activate it under 30 min otherwise no Replacement will be given and Report the error within 30 min window otherwise no replacement or refund will be Provided Thanks 🙏",
    "promotions": [
      "Buy 29+ for $4.65",
      "Buy 45+ for $4.60",
      "Buy 100+ for $4.55",
      "Buy 250+ for $4.50"
    ],
    "tierPricing": [
      { "minQty": 250, "price": 4.50 },
      { "minQty": 100, "price": 4.55 },
      { "minQty": 45,  "price": 4.60 },
      { "minQty": 29,  "price": 4.65 }
    ],
    "downloadLink": "https://t.me/SOYCHES7",
    "licenseKey": "JS7KH-GEMINI-5TB-7762-KEY"
  },
  {
    "id": "js7-canva",
    "title": "CANVA Pro 1 ឆ្នាំ Subscription (Global)",
    "category": "account",
    "categoryLabel": "UPGRADE ACCOUNT",
    "price": 19.99,
    "originalPrice": 99.00,
    "stockStatus": "in-stock",
    "stock": 50,
    "sold": 880,
    "image": "assets/images/canva.png",
    "description": "CANVA Pro 1 ឆ្នាំ Subscription រយៈពេល ៣៦៥ ថ្ងៃ។ ប្រើប្រាស់គណនី Private ឬ Edu PRO មិនរញ៉េរញ៉ៃ ប្រើប្រាស់មុខងារ Pro ពេញលេញ (រួមទាំង AI គូររូប)។",
    "promotions": [
      "ទិញ 2+ ឡើងទៅ ចុះថ្លៃ $18.99/មួយ",
      "ទិញ 5+ ឡើងទៅ ចុះថ្លៃ $17.50/មួយ"
    ],
    "tierPricing": [
      { "minQty": 5, "price": 17.50 },
      { "minQty": 2, "price": 18.99 }
    ],
    "downloadLink": "https://t.me/SOYCHES7",
    "licenseKey": "JS7KH-CANVA-PRO-1YEAR-VIP"
  },
  {
    "id": "js7-capcut",
    "title": "CapCut Pro Private Account 1 ខែ",
    "category": "tools",
    "categoryLabel": "TOOL",
    "price": 3.00,
    "originalPrice": 9.99,
    "stockStatus": "in-stock",
    "stock": 100,
    "sold": 2100,
    "image": "assets/images/capcut.png",
    "description": "ប្រើប្រាស់មុខងារ PRO ពេញលេញ Export វីដេអូគ្មានសញ្ញាសម្គាល់ គ្មាន Watermark Effects, Templates, Fonts & Transitions...",
    "promotions": [
      "ទិញ 3+ ឡើងទៅ ចុះថ្លៃ $2.50/មួយ",
      "ទិញ 10+ ឡើងទៅ ចុះថ្លៃ $2.00/មួយ"
    ],
    "tierPricing": [
      { "minQty": 10, "price": 2.00 },
      { "minQty": 3,  "price": 2.50 }
    ],
    "downloadLink": "https://t.me/SOYCHES7",
    "licenseKey": "JS7KH-CAPCUT-PRO-3USD-VIP"
  },
  {
    "id": "js7-fbacc-1",
    "title": "Facebook ផេកលក់ Facebook CM",
    "category": "fb-page",
    "categoryLabel": "FACEBOOK PAGE",
    "price": 30.00,
    "originalPrice": 100.00,
    "stockStatus": "in-stock",
    "stock": 10,
    "sold": 340,
    "image": "assets/images/facebook_cm.png",
    "description": "កាត់ឈ្មោះបានភ្លាមៗ Stars, Ads on Reels និង Partnership Ads... អាចរកចំណូលបានភ្លាមៗ។",
    "promotions": [
      "ទិញ 2+ ឡើងទៅ ចុះថ្លៃ $28.00/មួយ"
    ],
    "tierPricing": [
      { "minQty": 2, "price": 28.00 }
    ],
    "downloadLink": "https://t.me/SOYCHES7",
    "licenseKey": "JS7KH-FB-ACC-ADS-VIP"
  },
  {
    "id": "js7-fbpage-1",
    "title": "Facebook Page 3/6 criteria",
    "category": "fb-page",
    "categoryLabel": "FACEBOOK PAGE",
    "price": 5.00,
    "originalPrice": 10.00,
    "stockStatus": "in-stock",
    "stock": 25,
    "sold": 120,
    "image": "assets/images/facebook_page_3_6.png",
    "description": "អាចរត់អេដបាន Follower 10K និង 60K Views ជិតគ្រប់លក្ខខណ្ឌ (3/6 Criteria) អាចរត់ Ads រកលុយបាន។",
    "promotions": [
      "ទិញ 5+ ឡើងទៅ ចុះថ្លៃ $4.50/មួយ"
    ],
    "tierPricing": [
      { "minQty": 5, "price": 4.50 }
    ],
    "downloadLink": "https://t.me/SOYCHES7",
    "licenseKey": "JS7KH-FBPAGE-3-6-CRITERIA"
  }
];

const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/soyjss10-lang/js7kh-store/main";
const SELLER_CONTACT_URL = "https://t.me/SOYCHES7";

function getUnitPrice(p, qty) {
  if (p.tierPricing && p.tierPricing.length > 0) {
    for (let i = 0; i < p.tierPricing.length; i++) {
      if (qty >= p.tierPricing[i].minQty) {
        return p.tierPricing[i].price;
      }
    }
  }
  return p.price;
}

function escapeHtml(text) {
  if (!text) return "";
  return text.toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

async function sendFastMessage(botUrl, chatId, messageId, text, keyboard, imageUrl = null) {
  const cleanImageUrl = imageUrl ? imageUrl.split('?')[0] : null;
  let contentText = text;
  if (cleanImageUrl) {
    contentText = "<a href=\"" + cleanImageUrl + "\">&#8203;</a>" + text;
  }

  const payload = {
    chat_id: chatId,
    text: contentText,
    parse_mode: "HTML",
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

  if (messageId) {
    try {
      payload.message_id = messageId;
      const res = await fetch(botUrl + "/editMessageText", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.ok) return;
    } catch (e) {}
  }

  delete payload.message_id;
  try {
    await fetch(botUrl + "/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } catch (e) {}
}

async function sendCategoryView(botUrl, chatId, messageId) {
  const text = "🛍️ <b>AI TOOLS &amp; DIGITAL SERVICES STORE</b> 🔥\n\nសូមជ្រើសរើសកម្មវិធី/សេវាកម្មខាងក្រោម ដើម្បីទិញ៖";
  const inline_keyboard = [];
  products.forEach(function(p) {
    const priceFormatted = "$" + p.price.toFixed(2);
    const stockText = p.stock !== undefined ? " | 📦 " + p.stock : "";
    inline_keyboard.push([{ text: p.title + " | " + priceFormatted + stockText, callback_data: "prod_" + p.id }]);
  });
  inline_keyboard.push([{ text: "📞 ទំនាក់ទំនងអ្នកលក់ / Help", url: SELLER_CONTACT_URL }]);
  await sendFastMessage(botUrl, chatId, messageId, text, { inline_keyboard: inline_keyboard }, null);
}

async function sendProductDetail(botUrl, chatId, messageId, productId) {
  const p = products.find(function(item) { return item.id === productId; });
  if (!p) return;

  userLastProduct[chatId] = productId;

  const imageUrl = GITHUB_RAW_BASE + "/" + p.image;
  const stockCount = p.stock !== undefined ? p.stock : 100;
  const soldCount = p.sold !== undefined ? p.sold.toLocaleString() : "500";

  let promotionsText = "";
  if (p.promotions && p.promotions.length > 0) {
    promotionsText = "\n🎁 <b>Promotions:</b>\n" + p.promotions.map(function(promo) { return "- " + escapeHtml(promo); }).join("\n") + "\n";
  }

  const caption = "1️⃣ <b>" + escapeHtml(p.title) + "</b>\n" +
                  "💵 <b>Price:</b> <code>$" + p.price.toFixed(2) + "</code>\n" +
                  "➕ <b>Stock:</b> " + stockCount + " accounts\n" +
                  "📊 <b>Sold:</b> " + soldCount + " accounts\n\n" +
                  "❞ <b>Description:</b>\n" + escapeHtml(p.description) + "\n❞\n" +
                  promotionsText + "\n" +
                  "🔴 <b>សញ្ញាបញ្ជាក់របៀបទិញ (How to Buy):</b>\n" +
                  "👉 <b>សូមវាយបញ្ជូន \"លេខចំនួន\" អាខោនដែលបងចង់ទិញ ចូលក្នុង Chat នេះ</b> (ឧទាហរណ៍៖ វាយលេខ <code>1</code> ឬ <code>2</code> ឬ <code>5</code> រួចចុច Send)\n\n" +
                  "✏️ <b>Enter quantity to buy (1-" + stockCount + "):</b>";

  const inline_keyboard = [
    [
      { text: "🔙 ត្រឡប់ក្រោយ (Back)", callback_data: "cat_all" }
    ]
  ];

  await sendFastMessage(botUrl, chatId, messageId, caption, { inline_keyboard: inline_keyboard }, imageUrl);
}

async function sendCheckoutOptions(botUrl, chatId, messageId, productId, qty) {
  const p = products.find(function(item) { return item.id === productId; });
  if (!p) return;

  const quantity = parseInt(qty) || 1;
  const unitPrice = getUnitPrice(p, quantity);
  const totalPrice = (unitPrice * quantity).toFixed(2);
  const billNo = Math.floor(100000 + Math.random() * 900000);

  const text = "🛒 <b>វិក្កយបត្របញ្ជាទិញ / ORDER SUMMARY</b>\n\n" +
               "• <b>ផលិតផល៖</b> " + escapeHtml(p.title) + "\n" +
               "• <b>ចំនួនទិញ៖</b> " + quantity + " អាខោន (តម្លៃរាយ: $" + unitPrice.toFixed(2) + ")\n" +
               "• <b>តម្លៃសរុប៖</b> <b>$" + totalPrice + " USD</b>\n\n" +
               "👇 <b>សូមជ្រើសរើសវិធីសាស្ត្រទូទាត់ប្រាក់ (Select Payment Method)៖</b>";

  const inline_keyboard = [
    [{ text: "🏦 ABA Bank (KHQR)", callback_data: "pay_aba_" + p.id + "_" + quantity + "_" + billNo }],
    [{ text: "Pay with Binance", callback_data: "pay_binance_" + p.id + "_" + quantity + "_" + billNo }],
    [{ text: "⚪ Pay with USDT (BEP20)", callback_data: "pay_usdtbep_" + p.id + "_" + quantity + "_" + billNo }],
    [{ text: "⚪ Pay with USDT (TRC20)", callback_data: "pay_usdttrc_" + p.id + "_" + quantity + "_" + billNo }],
    [{ text: "💰 Pay with Wallet", callback_data: "pay_wallet_" + p.id + "_" + quantity + "_" + billNo }],
    [{ text: "🔙 ត្រឡប់ក្រោយ (Back)", callback_data: "prod_" + p.id }]
  ];

  await sendFastMessage(botUrl, chatId, messageId, text, { inline_keyboard: inline_keyboard }, null);
}

async function sendPaymentDetails(botUrl, chatId, messageId, productId, qty, billNo, method) {
  const p = products.find(function(item) { return item.id === productId; });
  if (!p) return;

  const quantity = parseInt(qty) || 1;
  const unitPrice = getUnitPrice(p, quantity);
  const totalPrice = (unitPrice * quantity).toFixed(2);

  let caption = "";
  let qrUrl = "";

  const inline_keyboard = [
    [{ text: "🔙 ត្រឡប់ក្រោយ", callback_data: "prod_" + p.id }]
  ];

  if (method === "aba") {
    qrUrl = GITHUB_RAW_BASE + "/assets/images/user_aba_khqr.jpg";
    caption = "🏦 <b>ABA Bank Payment (KHQR)</b>\n\n" +
              "• ឈ្មោះគណនី៖ <b>CHES SOY</b>\n" +
              "• លេខគណនី ABA៖ <code>081 887 350</code> (ចុចដើម្បីចម្លង)\n" +
              "• ចំនួនទឹកប្រាក់សរុប៖ <b>$" + totalPrice + " USD</b>\n" +
              "• លេខវិក្កយបត្រ៖ <b>#" + billNo + "</b>\n" +
              "• ផលិតផល៖ <b>" + escapeHtml(p.title) + "</b> (ចំនួន: " + quantity + ")\n\n" +
              "⚠️ <b>សូមស្កែនរូបភាព ABA KHQR កូដខាងលើ ឬផ្ទេរប្រាក់ រួចផ្ញើរូបភាពបង្កាន់ដៃបង់ប្រាក់ (Receipt Screenshot) មកកាន់ Chat នេះបាទ។</b>";
  } else if (method === "binance" || method === "usdtbep" || method === "usdttrc") {
    qrUrl = GITHUB_RAW_BASE + "/assets/images/binance_qr.png";
    const networkInfo = method === "usdtbep" ? "BEP20" : (method === "usdttrc" ? "TRC20" : "Binance Pay / USDT");
    caption = "Binance ID (tap to copy): <code>294507047</code>\n" +
              "Amount to transfer: $" + totalPrice + "\n" +
              "Network: <b>" + networkInfo + "</b>\n" +
              "Bill ID: <b>#" + billNo + "</b>\n" +
              "Product: <b>" + escapeHtml(p.title) + "</b> (" + quantity + "x)\n\n" +
              "Please send the order ID or off-chain transaction reference (or screenshot photo) after payment for verification.";
  } else {
    qrUrl = GITHUB_RAW_BASE + "/assets/images/binance_qr.png";
    caption = "💰 <b>Pay with Wallet / Admin Transfer</b>\n\n" +
              "• Binance ID / Wallet: <code>294507047</code>\n" +
              "• Amount to transfer: <b>$" + totalPrice + " USD</b>\n" +
              "• Bill ID: <b>#" + billNo + "</b>\n" +
              "• Product: <b>" + escapeHtml(p.title) + "</b> (" + quantity + "x)\n\n" +
              "Please send the receipt screenshot or transaction reference after payment for verification.";
  }

  await sendFastMessage(botUrl, chatId, messageId, caption, { inline_keyboard: inline_keyboard }, qrUrl);
}

module.exports = async (req, res) => {
  if (req.method === "GET") {
    const host = req.headers.host || "js7kh-store.vercel.app";
    const protocol = req.headers["x-forwarded-proto"] || "https";
    const currentUrl = `${protocol}://${host}/api/telegram-bot`;
    const botUrl = "https://api.telegram.org/bot" + token;

    if (req.query && req.query.setwebhook) {
      const targetUrl = req.query.setwebhook === "true" ? currentUrl : req.query.setwebhook;
      try {
        const setRes = await fetch(botUrl + "/setWebhook?url=" + encodeURIComponent(targetUrl));
        const setData = await setRes.json();
        return res.status(200).json({
          success: setData.ok,
          message: "Webhook update status",
          targetUrl: targetUrl,
          telegramResponse: setData
        });
      } catch (err) {
        return res.status(500).json({ error: err.toString() });
      }
    }

    return res.status(200).send(`JS7KH Telegram Bot Vercel Endpoint is Live! Webhook URL: ${currentUrl}`);
  }

  if (req.method !== "POST") {
    return res.status(200).send("Only POST / GET requests allowed");
  }

  try {
    const update = req.body || {};
    const botUrl = "https://api.telegram.org/bot" + token;

    if (update.update_id) {
      const cacheKey = "upd_" + update.update_id;
      if (userLastProduct[cacheKey]) {
        return res.status(200).send("OK");
      }
      userLastProduct[cacheKey] = true;
    }

    if (update.callback_query) {
      const query = update.callback_query;
      const data = query.data;
      const message = query.message;
      const chatId = message.chat.id;
      const messageId = message.message_id;

      if (query.id) {
        const cbKey = "cb_" + query.id;
        if (userLastProduct[cbKey]) {
          return res.status(200).send("OK");
        }
        userLastProduct[cbKey] = true;
      }

      fetch(botUrl + "/answerCallbackQuery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ callback_query_id: query.id })
      }).catch(err => {});

      if (data === "menu_home" || data === "cat_all") {
        await sendCategoryView(botUrl, chatId, messageId);
      } else if (data.indexOf("prod_") === 0) {
        await sendProductDetail(botUrl, chatId, messageId, data.split("_")[1]);
      } else if (data.indexOf("pay_") === 0) {
        const parts = data.split("_");
        await sendPaymentDetails(botUrl, chatId, messageId, parts[2], parts[3] || 1, parts[4] || 100000, parts[1]);
      } else if (data.indexOf("approve_") === 0) {
        const parts = data.split("_");
        const customerChatId = parts[1];
        const productId = parts[2];
        const qty = parts[3] || 1;
        const billNo = parts[4] || "000";

        const p = products.find(function(item) { return item.id === productId; });
        const prodTitle = p ? escapeHtml(p.title) : "កម្មវិធី/សេវាកម្ម";
        const downloadLink = p ? p.downloadLink : SELLER_CONTACT_URL;
        const licenseKey = p ? escapeHtml(p.licenseKey) : "JS7KH-PREMIUM-KEY";

        const customerMsg = "🎉 <b>ការទូទាត់ប្រាក់របស់បងត្រូវបានអនុម័តជោគជ័យ!</b> (វិក្កយបត្រ៖ #" + billNo + ")\n\n" +
          "📦 <b>ផលិតផល៖</b> " + prodTitle + " (ចំនួន: " + qty + ")\n" +
          "🔑 <b>លេខកូដអាជ្ញាប័ណ្ណ (License Key)៖</b> <code>" + licenseKey + "</code>\n\n" +
          "💬 <b>សូមចុចប៊ូតុងខាងក្រោមដើម្បីទាក់ទងមកកាន់អ្នកលក់ដើម្បីទទួលយកឯកសារ/គណនីដែលបានទិញ៖</b>";

        const customerKeyboard = {
          inline_keyboard: [
            [{ text: "📩 ទាក់ទងអ្នកលក់ (Contact Seller)", url: SELLER_CONTACT_URL }],
            [{ text: "📥 តំណភ្ជាប់ទាញយកឯកសារ", url: downloadLink }]
          ]
        };

        await sendFastMessage(botUrl, customerChatId, null, customerMsg, customerKeyboard, null);

        const oldText = escapeHtml(message.caption || message.text || "");
        const newCaption = oldText + "\n\n✅ <b>បានអនុម័ត និងផ្ញើប្រាប់អតិថិជនឱ្យទាក់ទងយកឯកសាររួចរាល់ហើយ!</b>";
        if (message.photo) {
          try {
            await fetch(botUrl + "/editMessageCaption", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                chat_id: ownerChatId,
                message_id: messageId,
                caption: newCaption,
                parse_mode: "HTML",
                reply_markup: { inline_keyboard: [] }
              })
            });
          } catch (e) {}
        }
      } else if (data.indexOf("reject_") === 0) {
        const parts = data.split("_");
        const customerChatId = parts[1];
        const billNo = parts[2];

        const customerMsg = "❌ <b>ការទូទាត់ប្រាក់របស់បងមិនត្រូវបានអនុម័តឡើយ!</b> (វិក្កយបត្រ៖ #" + billNo + ")\n\n" +
          "សូមពិនិត្យមើលរូបភាពបង្កាន់ដៃបាញ់លុយឡើងវិញ ឬទាក់ទងមកកាន់ Admin តាមរយៈ៖ " + SELLER_CONTACT_URL;

        await sendFastMessage(botUrl, customerChatId, null, customerMsg, {
          inline_keyboard: [[{ text: "💬 ទំនាក់ទំនង Admin", url: SELLER_CONTACT_URL }]]
        }, null);

        const oldText = escapeHtml(message.caption || message.text || "");
        const newCaption = oldText + "\n\n❌ <b>បានបដិសេធការទូទាត់ប្រាក់នេះ!</b>";
        if (message.photo) {
          try {
            await fetch(botUrl + "/editMessageCaption", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                chat_id: ownerChatId,
                message_id: messageId,
                caption: newCaption,
                parse_mode: "HTML",
                reply_markup: { inline_keyboard: [] }
              })
            });
          } catch (e) {}
        }
      }

      return res.status(200).send("OK");
    }

    const message = update.message;
    if (!message) return res.status(200).send("OK");

    const chatId = message.chat.id;
    const text = message.text;
    const photo = message.photo;
    const from = message.from;

    if (text && (text.indexOf("/start") === 0 || text.indexOf("/menu") === 0 || text.indexOf("/shop") === 0 || text.indexOf("/help") === 0)) {
      await sendCategoryView(botUrl, chatId, null);
      return res.status(200).send("OK");
    }

    if (text && /^[0-9]+$/.test(text.trim())) {
      const customQty = parseInt(text.trim());
      if (customQty > 0 && customQty <= 1000) {
        let activeProdId = null;

        if (message.reply_to_message) {
          const replyText = message.reply_to_message.text || message.reply_to_message.caption || "";
          for (let i = 0; i < products.length; i++) {
            if (replyText.indexOf(products[i].title) !== -1 || replyText.indexOf(products[i].id) !== -1) {
              activeProdId = products[i].id;
              break;
            }
          }
        }

        if (!activeProdId && userLastProduct[chatId]) {
          activeProdId = userLastProduct[chatId];
        }

        if (!activeProdId) {
          const alertMsg = "🔴 <b>សូមជ្រើសរើស ផលិតផល/កម្មវិធី ដែលលោកអ្នកចង់ទិញជាមុនសិន!</b>\n\n" +
            "សូមចុចប៊ូតុង <b>🛍️ មើលផលិតផលទាំងអស់</b> ខាងក្រោម ដើម្បីជ្រើសរើសផលិតផលដែលត្រូវទិញ។";
          const keyboard = {
            inline_keyboard: [[{ text: "🛍️ មើលផលិតផលទាំងអស់", callback_data: "cat_all" }]]
          };
          await sendFastMessage(botUrl, chatId, null, alertMsg, keyboard, null);
          return res.status(200).send("OK");
        }

        await sendCheckoutOptions(botUrl, chatId, null, activeProdId, customQty);
        return res.status(200).send("OK");
      }
    }

    if (photo && photo.length > 0) {
      const fileId = photo[photo.length - 1].file_id;
      let productId = null;
      let billNo = "";
      let qty = "1";

      if (message.reply_to_message) {
        const replyText = message.reply_to_message.text || message.reply_to_message.caption || "";
        for (let i = 0; i < products.length; i++) {
          if (replyText.indexOf(products[i].title) !== -1 || replyText.indexOf(products[i].id) !== -1) {
            productId = products[i].id;
            break;
          }
        }
        const billMatch = replyText.match(/លេខវិក្កយបត្រ៖\s*#([0-9]+)/i) || replyText.match(/Bill ID:\s*#([0-9]+)/i);
        const qtyMatch = replyText.match(/ចំនួន:\s*([0-9]+)/i) || replyText.match(/Quantity:\s*([0-9]+)/i);
        if (billMatch) billNo = billMatch[1];
        if (qtyMatch) qty = qtyMatch[1];
      }

      if (!productId && userLastProduct[chatId]) {
        productId = userLastProduct[chatId];
      }

      if (!productId) {
        productId = "js7-gemini";
      }

      const p = products.find(function(item) { return item.id === productId; });
      const prodTitle = p ? escapeHtml(p.title) : (productId || "សេវាកម្ម/កម្មវិធី");

      const autoReplyText = "សូមអរគុណសម្រាប់ការផ្ញើបង្កាន់ដៃទូទាត់ប្រាក់ (" + prodTitle + ")!\n\n" +
        "ប្រព័ន្ធបានផ្ញើបង្កាន់ដៃបាញ់លុយទៅកាន់អ្នកលក់ (Admin) ដើម្បីផ្ទៀងផ្ទាត់រួចរាល់ហើយ។ បងនឹងទទួលបានការបញ្ជាក់ និងឯកសារភ្លាមបន្ទាប់ពីអ្នកលក់ពិនិត្យរួចរាល់!";
      await sendFastMessage(botUrl, chatId, null, autoReplyText, null, null);

      if (true) { // Allow notification to owner for both customers and owner tests
        const customerName = escapeHtml(((from.first_name || "") + " " + (from.last_name || "")).trim());
        const usernameText = from.username ? "@" + escapeHtml(from.username) : "គ្មាន";
        const caption = "🔔 <b>បង្កាន់ដៃទូទាត់ថ្មីពីអតិថិជន!</b>\n\n" +
          "- <b>ឈ្មោះ៖</b> " + customerName + "\n" +
          "- <b>Username៖</b> " + usernameText + "\n" +
          "- <b>លេខវិក្កយបត្រ៖</b> #" + (billNo || "មិនមាន") + "\n" +
          "- <b>ទិញផលិតផល៖</b> " + prodTitle + " (ចំនួន: " + qty + ")\n" +
          "- <b>Chat ID៖</b> <code>" + chatId + "</code>\n\n" +
          "សូមពិនិត្យមើលរូបភាព រួចចុចប៊ូតុងខាងក្រោមដើម្បីសម្រេច៖";

        const keyboard = {
          inline_keyboard: [
            [
              { text: "✅ យល់ព្រម & ផ្ញើគណនី", callback_data: "approve_" + chatId + "_" + (productId || "js7-gemini") + "_" + qty + "_" + (billNo || "000") },
              { text: "❌ បដិសេធ", callback_data: "reject_" + chatId + "_" + (billNo || "000") }
            ]
          ]
        };

        try {
          await fetch(botUrl + "/sendPhoto", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: ownerChatId,
              photo: fileId,
              caption: caption,
              parse_mode: "HTML",
              reply_markup: keyboard
            })
          });
        } catch (e) {}
      }
      return res.status(200).send("OK");
    }

    return res.status(200).send("OK");
  } catch (err) {
    console.error("Error:", err);
    return res.status(200).send("OK");
  }
};
