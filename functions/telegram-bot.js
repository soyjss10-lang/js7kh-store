// ==============================================================================
// JS7KH Store - Telegram Bot Google Apps Script (script.google.com)
// ==============================================================================

const TELEGRAM_BOT_TOKEN = "8670114174:AAGL8DPDl7tjEJzXF-hr2xYQ1pNZY8K7MKA";
const TELEGRAM_OWNER_CHAT_ID = "1188063440";
const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/soyjss10-lang/js7kh-store/main";
const SELLER_CONTACT_URL = "https://t.me/SOYCHES7";

const PRODUCTS = [
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

function setWebhook() {
  const webAppUrl = "https://script.google.com/macros/s/AKfycbxqV_xk-IVHUPglR6xTvF24vtk0ek-4lWnYXZuzpfkWpgVwXyZ6hPsXCyPSXbohLqQBoQ/exec";
  const url = "https://api.telegram.org/bot" + TELEGRAM_BOT_TOKEN + "/setWebhook?url=" + webAppUrl;
  const res = UrlFetchApp.fetch(url);
  Logger.log(res.getContentText());
}

function doGet(e) {
  return ContentService.createTextOutput("JS7KH Telegram Bot is running successfully!").setMimeType(ContentService.MimeType.TEXT);
}

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

function doPost(e) {
  try {
    const update = JSON.parse(e.postData.contents);
    const botUrl = "https://api.telegram.org/bot" + TELEGRAM_BOT_TOKEN;

    if (update.callback_query) {
      const query = update.callback_query;
      const data = query.data;
      const message = query.message;
      const chatId = message.chat.id;
      const messageId = message.message_id;

      UrlFetchApp.fetch(botUrl + "/answerCallbackQuery", {
        method: "post",
        contentType: "application/json",
        payload: JSON.stringify({ callback_query_id: query.id })
      });

      if (data === "menu_home" || data === "cat_all") {
        sendCategoryView(botUrl, chatId, messageId, "all");
      } else if (data.indexOf("prod_") === 0) {
        sendProductDetail(botUrl, chatId, messageId, data.split("_")[1]);
      } else if (data.indexOf("qty_") === 0) {
        const parts = data.split("_");
        sendCheckoutOptions(botUrl, chatId, messageId, parts[1], parts[2] || 1);
      } else if (data.indexOf("pay_") === 0) {
        const parts = data.split("_");
        sendPaymentDetails(botUrl, chatId, messageId, parts[2], parts[3] || 1, parts[4] || 100000, parts[1]);
      } else if (data.indexOf("approve_") === 0) {
        const parts = data.split("_");
        const customerChatId = parts[1];
        const productId = parts[2];
        const qty = parts[3] || 1;
        const billNo = parts[4] || "000";

        const p = PRODUCTS.find(function(item) { return item.id === productId; });
        const prodTitle = p ? p.title : "កម្មវិធី/សេវាកម្ម";
        const downloadLink = p ? p.downloadLink : SELLER_CONTACT_URL;
        const licenseKey = p ? p.licenseKey : "JS7KH-PREMIUM-KEY";

        const customerMsg = "🎉 **ការទូទាត់ប្រាក់របស់បងត្រូវបានអនុម័តជោគជ័យ!** (វិក្កយបត្រ៖ #" + billNo + ")\n\n" +
          "📦 **ផលិតផល៖** " + prodTitle + " (ចំនួន: " + qty + ")\n" +
          "🔑 **លេខកូដអាជ្ញាប័ណ្ណ (License Key)៖** `" + licenseKey + "`\n\n" +
          "💬 **សូមចុចប៊ូតុងខាងក្រោមដើម្បីទាក់ទងមកកាន់អ្នកលក់ដើម្បីទទួលយកឯកសារ/គណនីដែលបានទិញ៖**";

        const customerKeyboard = {
          inline_keyboard: [
            [
              { text: "📩 ទាក់ទងអ្នកលក់ (Contact Seller)", url: SELLER_CONTACT_URL }
            ],
            [
              { text: "📥 តំណភ្ជាប់ទាញយកឯកសារ", url: downloadLink }
            ]
          ]
        };

        sendFastMessage(botUrl, customerChatId, null, customerMsg, customerKeyboard, null);

        const newCaption = (message.caption || message.text || "") + "\n\n✅ **បានអនុម័ត និងផ្ញើប្រាប់អតិថិជនឱ្យទាក់ទងយកឯកសាររួចរាល់ហើយ!**";
        if (message.photo) {
          UrlFetchApp.fetch(botUrl + "/editMessageCaption", {
            method: "post",
            contentType: "application/json",
            payload: JSON.stringify({
              chat_id: TELEGRAM_OWNER_CHAT_ID,
              message_id: messageId,
              caption: newCaption,
              reply_markup: { inline_keyboard: [] }
            })
          });
        }
      } else if (data.indexOf("reject_") === 0) {
        const parts = data.split("_");
        const customerChatId = parts[1];
        const billNo = parts[2];

        const customerMsg = "❌ **ការទូទាត់ប្រាក់របស់បងមិនត្រូវបានអនុម័តឡើយ!** (វិក្កយបត្រ៖ #" + billNo + ")\n\n" +
          "សូមពិនិត្យមើលរូបភាពបង្កាន់ដៃបាញ់លុយឡើងវិញ ឬទាក់ទងមកកាន់ Admin តាមរយៈ៖ " + SELLER_CONTACT_URL;

        sendFastMessage(botUrl, customerChatId, null, customerMsg, {
          inline_keyboard: [[{ text: "💬 ទំនាក់ទំនង Admin", url: SELLER_CONTACT_URL }]]
        }, null);

        const newCaption = (message.caption || message.text || "") + "\n\n❌ **បានបដិសេធការទូទាត់ប្រាក់នេះ!**";
        if (message.photo) {
          UrlFetchApp.fetch(botUrl + "/editMessageCaption", {
            method: "post",
            contentType: "application/json",
            payload: JSON.stringify({
              chat_id: TELEGRAM_OWNER_CHAT_ID,
              message_id: messageId,
              caption: newCaption,
              reply_markup: { inline_keyboard: [] }
            })
          });
        }
      }

      return ContentService.createTextOutput("OK");
    }

    const message = update.message;
    if (!message) return ContentService.createTextOutput("OK");

    const chatId = message.chat.id;
    const text = message.text;
    const photo = message.photo;
    const from = message.from;

    if (text && (text.indexOf("/start") === 0 || text.indexOf("/menu") === 0 || text.indexOf("/shop") === 0 || text.indexOf("/help") === 0)) {
      const parts = text.split(" ");
      if (parts.length > 1) {
        const param = parts[1];
        const prodMatch = param.match(/prod_([a-zA-Z0-9-]+)/i);
        const billMatch = param.match(/bill_([0-9]+)/i);

        const productId = prodMatch ? prodMatch[1] : "";
        const billNo = billMatch ? billMatch[1] : "";

        if (productId) {
          sendProductDetail(botUrl, chatId, null, productId);
          return ContentService.createTextOutput("OK");
        } else if (billNo) {
          const welcomeMsg = "👋 **សួស្តីបង " + (from.first_name || "") + "!** សូមស្វាគមន៍មកកាន់ JS7KH Store Bot! 🇰🇭\n\n" +
            "🧾 **លេខវិក្កយបត្រ៖** #" + billNo + "\n\n" +
            "⚠️ សូមផ្ញើរូបភាពបង្កាន់ដៃបាញ់លុយ (Receipt Screenshot) មកកាន់ Chat នេះដើម្បីឱ្យអ្នកលក់ផ្ទៀងផ្ទាត់។";
          sendFastMessage(botUrl, chatId, null, welcomeMsg, {
            inline_keyboard: [[{ text: "🛍️ មើលផលិតផលទាំងអស់", callback_data: "cat_all" }]]
          }, null);
          return ContentService.createTextOutput("OK");
        }
      }

      sendCategoryView(botUrl, chatId, null, "all");
      return ContentService.createTextOutput("OK");
    }

    if (text && /^[0-9]+$/.test(text.trim())) {
      const customQty = parseInt(text.trim());
      if (customQty > 0 && customQty <= 1000) {
        let activeProdId = CacheService.getScriptCache().get("last_prod_" + chatId);
        if (!activeProdId) {
          activeProdId = "js7-gemini";
        }

        sendCheckoutOptions(botUrl, chatId, null, activeProdId, customQty);
        return ContentService.createTextOutput("OK");
      }
    }

    if (photo && photo.length > 0) {
      const fileId = photo[photo.length - 1].file_id;
      let productId = CacheService.getScriptCache().get("last_prod_" + chatId) || "js7-gemini";
      let billNo = "";
      let qty = "1";

      if (message.reply_to_message) {
        const replyText = message.reply_to_message.text || message.reply_to_message.caption || "";
        const prodMatch = replyText.match(/កូដ(?:ផលិតផល)?៖\s*`?\[([a-zA-Z0-9-]+)\]`?/i) || replyText.match(/Product:\s*\*\*([^\*]+)\*\*/i);
        const billMatch = replyText.match(/លេខវិក្កយបត្រ៖\s*#([0-9]+)/i) || replyText.match(/Bill ID:\s*\*\*#([0-9]+)\*\*/i);
        const qtyMatch = replyText.match(/ចំនួន:\s*([0-9]+)/i) || replyText.match(/\(([0-9]+)x\)/i);
        if (prodMatch) productId = prodMatch[1];
        if (billMatch) billNo = billMatch[1];
        if (qtyMatch) qty = qtyMatch[1];
      }

      const p = PRODUCTS.find(function(item) { return item.id === productId; });
      const prodTitle = p ? p.title : (productId || "សេវាកម្ម/កម្មវិធី");

      const autoReplyText = "សូមអរគុណសម្រាប់ការផ្ញើបង្កាន់ដៃទូទាត់ប្រាក់ (" + prodTitle + ")!\n\n" +
        "ប្រព័ន្ធបានផ្ញើបង្កាន់ដៃបាញ់លុយទៅកាន់អ្នកលក់ (Admin) ដើម្បីផ្ទៀងផ្ទាត់រួចរាល់ហើយ។ បងនឹងទទួលបានការបញ្ជាក់ និងឯកសារភ្លាមបន្ទាប់ពីអ្នកលក់ពិនិត្យរួចរាល់!";
      sendFastMessage(botUrl, chatId, null, autoReplyText, null, null);

      if (chatId.toString() !== TELEGRAM_OWNER_CHAT_ID.toString()) {
        const customerName = ((from.first_name || "") + " " + (from.last_name || "")).trim();
        const usernameText = from.username ? "@" + from.username : "គ្មាន";
        const caption = "🔔 **បង្កាន់ដៃទូទាត់ថ្មីពីអតិថិជន!**\n\n" +
          "- **ឈ្មោះ៖** " + customerName + "\n" +
          "- **Username៖** " + usernameText + "\n" +
          "- **លេខវិក្កយបត្រ៖** #" + (billNo || "មិនមាន") + "\n" +
          "- **ទិញផលិតផល៖** " + prodTitle + " (ចំនួន: " + qty + ")\n" +
          "- **Chat ID៖** `" + chatId + "`\n\n" +
          "សូមពិនិត្យមើលរូបភាព រួចចុចប៊ូតុងខាងក្រោមដើម្បីសម្រេច៖";

        const keyboard = {
          inline_keyboard: [
            [
              { text: "✅ យល់ព្រម & ផ្ញើគណនី", callback_data: "approve_" + chatId + "_" + (productId || "all") + "_" + qty + "_" + (billNo || "000") },
              { text: "❌ បដិសេធ", callback_data: "reject_" + chatId + "_" + (billNo || "000") }
            ]
          ]
        };

        UrlFetchApp.fetch(botUrl + "/sendPhoto", {
          method: "post",
          contentType: "application/json",
          payload: JSON.stringify({
            chat_id: TELEGRAM_OWNER_CHAT_ID,
            photo: fileId,
            caption: caption,
            parse_mode: "Markdown",
            reply_markup: keyboard
          })
        });
      }
      return ContentService.createTextOutput("OK");
    }

    return ContentService.createTextOutput("OK");
  } catch (err) {
    Logger.log("Error: " + err.toString());
    return ContentService.createTextOutput("OK");
  }
}

function sendFastMessage(botUrl, chatId, messageId, text, keyboard, imageUrl) {
  const cleanImageUrl = imageUrl ? imageUrl.split('?')[0] : null;
  let contentText = text;
  if (cleanImageUrl) {
    contentText = "[\u200B](" + cleanImageUrl + ")\n" + text;
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

  if (messageId) {
    try {
      payload.message_id = messageId;
      const res = UrlFetchApp.fetch(botUrl + "/editMessageText", {
        method: "post",
        contentType: "application/json",
        payload: JSON.stringify(payload),
        muteHttpExceptions: true
      });
      const data = JSON.parse(res.getContentText());
      if (data.ok) return;
    } catch (e) {}
  }

  delete payload.message_id;
  UrlFetchApp.fetch(botUrl + "/sendMessage", {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload)
  });
}

function sendCategoryView(botUrl, chatId, messageId, categoryId) {
  const text = "🛍️ **AI TOOLS & DIGITAL SERVICES STORE** 🔥\n\nសូមជ្រើសរើសកម្មវិធី/សេវាកម្មខាងក្រោម ដើម្បីទិញ៖";
  const inline_keyboard = [];
  PRODUCTS.forEach(function(p) {
    const priceFormatted = "$" + p.price.toFixed(2);
    const stockText = p.stock !== undefined ? " | 📦 " + p.stock : "";
    inline_keyboard.push([{ text: p.title + " | " + priceFormatted + stockText, callback_data: "prod_" + p.id }]);
  });
  inline_keyboard.push([{ text: "📞 ទំនាក់ទំនងអ្នកលក់ / Help", url: SELLER_CONTACT_URL }]);
  sendFastMessage(botUrl, chatId, messageId, text, { inline_keyboard: inline_keyboard }, null);
}

function sendProductDetail(botUrl, chatId, messageId, productId) {
  const p = PRODUCTS.find(function(item) { return item.id === productId; });
  if (!p) return;

  try {
    CacheService.getScriptCache().put("last_prod_" + chatId, productId, 600);
  } catch (e) {}

  const imageUrl = GITHUB_RAW_BASE + "/" + p.image;
  const stockCount = p.stock !== undefined ? p.stock : 100;
  const soldCount = p.sold !== undefined ? p.sold.toLocaleString() : "500";

  let promotionsText = "";
  if (p.promotions && p.promotions.length > 0) {
    promotionsText = "\n🎁 **Promotions:**\n" + p.promotions.map(function(promo) { return "- " + promo; }).join("\n") + "\n";
  }

  const caption = "1️⃣ **" + p.title + "**\n" +
                  "💵 **Price:** `$" + p.price.toFixed(2) + "`\n" +
                  "➕ **Stock:** " + stockCount + " accounts\n" +
                  "📊 **Sold:** " + soldCount + " accounts\n\n" +
                  "❞ **Description:**\n" + p.description + "\n❞\n" +
                  promotionsText + "\n" +
                  "✏️ **Enter quantity to buy (1-" + stockCount + "):**";

  const inline_keyboard = [
    [
      { text: "🔙 ត្រឡប់ក្រោយ (Back)", callback_data: "cat_all" }
    ]
  ];

  sendFastMessage(botUrl, chatId, messageId, caption, { inline_keyboard: inline_keyboard }, imageUrl);
}

function sendCheckoutOptions(botUrl, chatId, messageId, productId, qty) {
  const p = PRODUCTS.find(function(item) { return item.id === productId; });
  if (!p) return;

  const quantity = parseInt(qty) || 1;
  const unitPrice = getUnitPrice(p, quantity);
  const totalPrice = (unitPrice * quantity).toFixed(2);
  const billNo = Math.floor(100000 + Math.random() * 900000);

  const text = "Choose payment method:\nTotal: $" + totalPrice + "\n\n🛒 Product: **" + p.title + "**\n🔢 Quantity: **" + quantity + "** (តម្លៃក្នុងមួយអាខោន: $" + unitPrice.toFixed(2) + ")";

  const inline_keyboard = [
    [{ text: "💰 Pay with Wallet", callback_data: "pay_wallet_" + p.id + "_" + quantity + "_" + billNo }],
    [{ text: "Pay with Binance", callback_data: "pay_binance_" + p.id + "_" + quantity + "_" + billNo }],
    [{ text: "⚪ Pay with USDT (BEP20)", callback_data: "pay_usdtbep_" + p.id + "_" + quantity + "_" + billNo }],
    [{ text: "⚪ Pay with USDT (TRC20)", callback_data: "pay_usdttrc_" + p.id + "_" + quantity + "_" + billNo }],
    [{ text: "🏦 ABA Bank (KHQR)", callback_data: "pay_aba_" + p.id + "_" + quantity + "_" + billNo }],
    [{ text: "🔙 ត្រឡប់ក្រោយ", callback_data: "prod_" + p.id }]
  ];

  sendFastMessage(botUrl, chatId, messageId, text, { inline_keyboard: inline_keyboard }, null);
}

function sendPaymentDetails(botUrl, chatId, messageId, productId, qty, billNo, method) {
  const p = PRODUCTS.find(function(item) { return item.id === productId; });
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
    caption = "🏦 **ABA Bank Payment (KHQR)**\n\n" +
              "• ឈ្មោះគណនី៖ **CHES SOY**\n" +
              "• លេខគណនី ABA៖ `081 887 350` (ចុចដើម្បីចម្លង)\n" +
              "• ចំនួនទឹកប្រាក់សរុប៖ **$" + totalPrice + " USD**\n" +
              "• លេខវិក្កយបត្រ៖ **#" + billNo + "**\n" +
              "• ផលិតផល៖ **" + p.title + "** (ចំនួន: " + quantity + ")\n\n" +
              "⚠️ **សូមស្កែនរូបភាព ABA KHQR កូដខាងលើ ឬផ្ទេរប្រាក់ រួចផ្ញើរូបភាពបង្កាន់ដៃបង់ប្រាក់ (Receipt Screenshot) មកកាន់ Chat នេះបាទ។**";
  } else if (method === "binance" || method === "usdtbep" || method === "usdttrc") {
    qrUrl = GITHUB_RAW_BASE + "/assets/images/binance_qr.png";
    const networkInfo = method === "usdtbep" ? "BEP20" : (method === "usdttrc" ? "TRC20" : "Binance Pay / USDT");
    caption = "Binance ID (tap to copy): `294507047`\n" +
              "Amount to transfer: $" + totalPrice + "\n" +
              "Network: **" + networkInfo + "**\n" +
              "Bill ID: **#" + billNo + "**\n" +
              "Product: **" + p.title + "** (" + quantity + "x)\n\n" +
              "Please send the order ID or off-chain transaction reference (or screenshot photo) after payment for verification.";
  } else {
    qrUrl = GITHUB_RAW_BASE + "/assets/images/binance_qr.png";
    caption = "💰 **Pay with Wallet / Admin Transfer**\n\n" +
              "• Binance ID / Wallet: `294507047`\n" +
              "• Amount to transfer: **$" + totalPrice + " USD**\n" +
              "• Bill ID: **#" + billNo + "**\n" +
              "• Product: **" + p.title + "** (" + quantity + "x)\n\n" +
              "Please send the receipt screenshot or transaction reference after payment for verification.";
  }

  sendFastMessage(botUrl, chatId, messageId, caption, { inline_keyboard: inline_keyboard }, qrUrl);
}
