// ==============================================================================
// JS7KH Store - Telegram Bot Google Apps Script (script.google.com)
// របៀបប្រើប្រាស់៖
// 1. ចូលទៅកាន់ https://script.google.com រួចបង្កើត New Project
// 2. Copy កូដខាងក្រោមទាំងស្រុងទៅដាក់ក្នុង Google Apps Script
// 3. ចុច Deploy -> New Deployment -> Select type: Web App
// 4. ត្រង់ Execute as: ជ្រើសរើស "Me" | ត្រង់ Who has access: ជ្រើសរើស "Anyone"
// 5. ចុច Deploy រួច Copy យក Web App URL នោះមក Run មុខងារ setWebhook() ខាងក្រោម។
// ==============================================================================

const TELEGRAM_BOT_TOKEN = "8670114174:AAGL8DPDl7tjEJzXF-hr2xYQ1pNZY8K7MKA";
const TELEGRAM_OWNER_CHAT_ID = "1188063440";
const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/soyjss10-lang/js7kh-store/main";

const PRODUCTS = [
  {
    "id": "js7-gemini",
    "title": "Link upgrade Account Gemini ធម្មតា ទៅជា Gemini Pro 5TB 18M",
    "category": "account",
    "categoryLabel": "UPGRADE ACCOUNT",
    "price": 4.99,
    "originalPrice": 35.00,
    "stockStatus": "in-stock",
    "image": "assets/images/gemini.png",
    "description": "Link upgrade Account Gemini ធម្មតា ទៅជា Gemini Pro 5TB 18M ល្បឿនលឿន ទំនុកចិត្ត 100% សម្រាប់ប្រើប្រាស់គណនី Google របស់អ្នកដើម្បីទទួល...",
    "features": [
      "១ គណនី (1 Account) = $4.99",
      "២ គណនី (2 Accounts) = $7.99",
      "៣ គណនី (3 Accounts) = $11.99",
      "ទទួលបាន Google One Storage 5TB រយៈពេល 18 ខែ",
      "ចូលប្រើប្រាស់ Gemini 1.5 Pro AI Advanced ឥតដែនកំណត់",
      "សុវត្ថិភាព ១០០% លើអ៊ីមែលផ្ទាល់ខ្លួនរបស់អ្នក",
      "ធានារយៈពេលពេញ 18 ខែ"
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
    "image": "assets/images/canva.png",
    "description": "CANVA Pro 1 ឆ្នាំ Subscription រយៈពេល ៣៦៥ ថ្ងៃ។ សម្រស់គណនីផ្ទាល់ខ្លួន (Private Account) និង គណនី Edu PRO...",
    "features": [
      "ទទួលបាន Premium Templates, Stock Photos & Fonts ឥតដែនកំណត់",
      "គាំទ្រ Magic Studio AI Tools",
      "គ្មាន Logo Watermark និង Export វីដេអូ/រូបភាព 4K",
      "ធានារយៈពេលប្រើប្រាស់ពេញ ១ ឆ្នាំ"
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
    "image": "assets/images/capcut.png",
    "description": "ប្រើប្រាស់មុខងារ PRO ពេញលេញ Export វីដេអូគ្មានសញ្ញាសម្គាល់ គ្មាន Watermark Effects...",
    "features": [
      "ទទួលបានរាល់ Pro Effects, Transitions & Filters",
      "គាំទ្រ AI Auto Caption ភាសាខ្មែរ និង ភាសាបរទេស",
      "គ្មាន Logo Watermark ពេល Export វីដេអូ 4K",
      "ធានារយៈពេលប្រើប្រាស់ពេញ ១ ខែ"
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
    "image": "assets/images/facebook_cm.png",
    "description": "កាត់ឈ្មោះបានភ្លាមៗ Stars, Ads on Reels និង Partnership Ads... អាចរកចំណូលបានភ្លាមៗ...",
    "features": [
      "អ្នកតាមដានពិតប្រាកដ (Organic Followers) 100%",
      "កាត់ឈ្មោះ និងផ្ទេរសិទ្ធិ Admin ភ្លាមៗ",
      "ធានាសុវត្ថិភាព ១០០% លើការផ្ទេរកម្មសិទ្ធិ",
      "គាំទ្រការប្រើប្រាស់ 24/7"
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
    "image": "assets/images/facebook_page_3_6.png",
    "description": "អាចរត់អេដបាន Follower 10K និង 60K Views ជិតគ្រប់លក្ខខណ្ឌ (3/6 Criteria)...",
    "features": [
      " Follower 10K Real Organic",
      "ជិតគ្រប់លក្ខខណ្ឌបើកប្រាក់ Finding Ads",
      "ធានាផេកស្អាត គ្មានដែនកំណត់"
    ],
    "downloadLink": "https://t.me/SOYCHES7",
    "licenseKey": "JS7KH-FBPAGE-3-6-CRITERIA"
  }
];

function setWebhook() {
  const webAppUrl = "PASTE_YOUR_GOOGLE_WEB_APP_URL_HERE"; // Replace with your deployed Web App URL
  const url = "https://api.telegram.org/bot" + TELEGRAM_BOT_TOKEN + "/setWebhook?url=" + webAppUrl;
  const res = UrlFetchApp.fetch(url);
  Logger.log(res.getContentText());
}

function doGet(e) {
  return ContentService.createTextOutput("JS7KH Telegram Bot is running successfully!").setMimeType(ContentService.MimeType.TEXT);
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

      // Answer Callback Query immediately
      UrlFetchApp.fetch(botUrl + "/answerCallbackQuery", {
        method: "post",
        contentType: "application/json",
        payload: JSON.stringify({ callback_query_id: query.id })
      });

      if (data === "menu_home") {
        sendMainMenu(botUrl, chatId, messageId);
      } else if (data.indexOf("cat_") === 0) {
        sendCategoryView(botUrl, chatId, messageId, data.split("_")[1]);
      } else if (data.indexOf("prod_") === 0) {
        sendProductDetail(botUrl, chatId, messageId, data.split("_")[1]);
      } else if (data.indexOf("checkout_") === 0) {
        sendCheckoutOptions(botUrl, chatId, messageId, data.split("_")[1]);
      } else if (data.indexOf("pay_aba_") === 0) {
        const parts = data.split("_");
        sendPaymentDetails(botUrl, chatId, messageId, parts[2], parts[3], "aba");
      } else if (data.indexOf("pay_crypto_") === 0) {
        const parts = data.split("_");
        sendPaymentDetails(botUrl, chatId, messageId, parts[2], parts[3], "crypto");
      }

      return ContentService.createTextOutput("OK");
    }

    const message = update.message;
    if (!message) return ContentService.createTextOutput("OK");

    const chatId = message.chat.id;
    const text = message.text;
    const photo = message.photo;

    if (text && (text.indexOf("/start") === 0 || text.indexOf("/menu") === 0 || text.indexOf("/shop") === 0)) {
      sendCategoryView(botUrl, chatId, null, "all");
      return ContentService.createTextOutput("OK");
    }

    if (photo && photo.length > 0) {
      const fileId = photo[photo.length - 1].file_id;
      const autoReplyText = "សូមអរគុណសម្រាប់ការផ្ញើបង្កាន់ដៃទូទាត់ប្រាក់! ប្រព័ន្ធបានផ្ញើទៅកាន់អ្នកលក់ដើម្បីផ្ទៀងផ្ទាត់រួចរាល់ហើយបាទ។";
      sendFastMessage(botUrl, chatId, null, autoReplyText, null, null);

      if (chatId.toString() !== TELEGRAM_OWNER_CHAT_ID.toString()) {
        const caption = "🔔 **បង្កាន់ដៃទូទាត់ថ្មីពីអតិថិជន!**\n- Chat ID: " + chatId;
        UrlFetchApp.fetch(botUrl + "/sendPhoto", {
          method: "post",
          contentType: "application/json",
          payload: JSON.stringify({
            chat_id: TELEGRAM_OWNER_CHAT_ID,
            photo: fileId,
            caption: caption,
            parse_mode: "Markdown"
          })
        });
      }
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

function sendMainMenu(botUrl, chatId, messageId) {
  const text = "👋 **សួស្តីបង! សូមស្វាគមន៍មកកាន់ JS7KH Store Bot!** 🇰🇭\n\nសូមជ្រើសរើសប្រភេទផលិតផលខាងក្រោមដើម្បីទិញ៖";
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
  sendFastMessage(botUrl, chatId, messageId, text, keyboard, null);
}

function sendCategoryView(botUrl, chatId, messageId, categoryId) {
  let filtered = PRODUCTS;
  if (categoryId !== "all") {
    filtered = PRODUCTS.filter(p => p.category === categoryId);
  }
  const text = "📂 **ប្រភេទផលិតផល**\n\nសូមជ្រើសរើសផលិតផលខាងក្រោម ដើម្បីមើលលម្អិត៖";
  const inline_keyboard = [];
  filtered.forEach(p => {
    inline_keyboard.push([{ text: p.title + " - $" + p.price.toFixed(2), callback_data: "prod_" + p.id }]);
  });
  inline_keyboard.push([{ text: "🔙 ត្រឡប់ទៅម៉ឺនុយដើម", callback_data: "menu_home" }]);
  sendFastMessage(botUrl, chatId, messageId, text, { inline_keyboard: inline_keyboard }, null);
}

function sendProductDetail(botUrl, chatId, messageId, productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;
  const imageUrl = GITHUB_RAW_BASE + "/" + p.image;
  const caption = "🏷️ **" + p.title + "**\n\nℹ️ **ការពិពណ៌នា៖**\n" + p.description + "\n\n💰 **តម្លៃពិសេស៖** `$`" + p.price.toFixed(2) + " USD`";
  const inline_keyboard = [
    [{ text: "🛒 ទិញឥឡូវនេះ (Buy Now)", callback_data: "checkout_" + p.id }],
    [{ text: "🔙 ត្រឡប់ក្រោយ", callback_data: "cat_" + p.category }]
  ];
  sendFastMessage(botUrl, chatId, messageId, caption, { inline_keyboard: inline_keyboard }, imageUrl);
}

function sendCheckoutOptions(botUrl, chatId, messageId, productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;
  const billNo = Math.floor(100000 + Math.random() * 900000);
  const text = "🛒 **ការបញ្ជាទិញ៖** " + p.title + "\n💰 **តម្លៃ៖** `$" + p.price.toFixed(2) + " USD`\nលេខវិក្កយបត្រ៖ #" + billNo;
  const inline_keyboard = [
    [{ text: "🏦 ABA Bank (ABA KHQR)", callback_data: "pay_aba_" + p.id + "_" + billNo }],
    [{ text: "💰 Binance / USDT", callback_data: "pay_crypto_" + p.id + "_" + billNo }],
    [{ text: "🔙 ត្រឡប់ក្រោយ", callback_data: "prod_" + p.id }]
  ];
  sendFastMessage(botUrl, chatId, messageId, text, { inline_keyboard: inline_keyboard }, null);
}

function sendPaymentDetails(botUrl, chatId, messageId, productId, billNo, method) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;
  let qrUrl = GITHUB_RAW_BASE + "/assets/images/user_aba_khqr.jpg";
  let caption = "🏦 **ABA Bank Payment (KHQR)**\n\n• ឈ្មោះគណនី៖ **CHES SOY**\n• លេខគណនី ABA៖ `081 887 350`\n• ចំនួនទឹកប្រាក់៖ **$" + p.price.toFixed(2) + " USD**\n• លេខវិក្កយបត្រ៖ **#" + billNo + "**\n\n⚠️ សូមស្កែនរូបភាព ABA KHQR ខាងលើ ឬផ្ទេរប្រាក់ រួចផ្ញើ **រូបភាពបង្កាន់ដៃបង់ប្រាក់** មកកាន់ Chat នេះបាទ។";

  if (method !== "aba") {
    qrUrl = GITHUB_RAW_BASE + "/assets/images/binance_qr.png";
    caption = "💰 **Crypto / Binance Payment**\n\n• Binance ID៖ `294507047`\n• បណ្តាញ USDT៖ **TRC20 / BEP20**\n• ចំនួនទឹកប្រាក់៖ **$" + p.price.toFixed(2)} USD**\n• លេខវិក្កយបត្រ៖ **#" + billNo + "**\n\n⚠️ សូមស្កែនរូបភាព Binance QR ខាងលើ រួចផ្ញើ **រូបភាពបង្កាន់ដៃ** មកកាន់ Chat នេះបាទ។";
  }

  sendFastMessage(botUrl, chatId, messageId, caption, { inline_keyboard: [[{ text: "🔙 ត្រឡប់ក្រោយ", callback_data: "checkout_" + p.id }]] }, qrUrl);
}
