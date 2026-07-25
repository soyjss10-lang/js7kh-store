// JS7KH Store - Core Application Logic with Real-time Cloud Database Integration

const USER_TELEGRAM_LINK = typeof CONFIG !== 'undefined' && CONFIG.USER_TELEGRAM_LINK ? CONFIG.USER_TELEGRAM_LINK : "https://t.me/SOYCHES7?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBEySTdMZjFYOWRWSTVRM3ZCdHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7KZ60TQJm85UhC183DtqwfsruAmsVKquXiurPO6OKUP7UNr5MnDVZEp5A8gA_aem_kaeDhpTxenx1HMq6wUZGnw";

// Change this to your Bot Username (e.g. "js7kh_store_bot") once you create it via @BotFather.
// If left as "YOUR_BOT_USERNAME", the website will fallback to your personal Telegram contact.
const TELEGRAM_BOT_USERNAME = typeof CONFIG !== 'undefined' && CONFIG.TELEGRAM_BOT_USERNAME ? CONFIG.TELEGRAM_BOT_USERNAME : "js7kh_bot";

// Initial Built-in Fallback Products Data
const defaultProducts = [
  {
    id: "js7-gemini",
    title: "Link upgrade Account Gemini ធម្មតា ទៅជា Gemini Pro 5TB 18M",
    category: "account",
    categoryLabel: "UPGRADE ACCOUNT",
    badgeClass: "badge-account",
    price: 1.99,
    originalPrice: 35.00,
    stockStatus: "in-stock",
    enrolled: 154,
    image: "./assets/images/gemini.png",
    description: "Link upgrade Account Gemini ធម្មតា ទៅជា Gemini Pro 5TB 18M ល្បឿនលឿន ទំនុកចិត្ត 100% សម្រាប់ប្រើប្រាស់គណនី Google របស់អ្នកដើម្បីទទួល...",
    features: [
      "ទទួលបាន Google One Storage 5TB រយៈពេល 18 ខែ",
      "ចូលប្រើប្រាស់ Gemini 1.5 Pro AI Advanced ឥតដែនកំណត់",
      "សុវត្ថិភាព ១០០% លើអ៊ីមែលផ្ទាល់ខ្លួនរបស់អ្នក",
      "ធានារយៈពេលពេញ 18 ខែ"
    ],
    downloadLink: USER_TELEGRAM_LINK,
    licenseKey: "JS7KH-GEMINI-5TB-7762-KEY"
  },
  {
    id: "js7-canva",
    title: "CANVA Pro 1 ឆ្នាំ Subscription (Global)",
    category: "account",
    categoryLabel: "UPGRADE ACCOUNT",
    badgeClass: "badge-account",
    price: 19.99,
    originalPrice: 99.00,
    stockStatus: "in-stock",
    enrolled: 88,
    image: "./assets/images/canva.png",
    description: "CANVA Pro 1 ឆ្នាំ Subscription រយៈពេល ៣៦៥ ថ្ងៃ។ សម្រស់គណនីផ្ទាល់ខ្លួន (Private Account) និង គណនី Edu PRO មិនរញ៉េរញ៉ៃ ប្រើប្រាស់មុខងារ Pro បាន (រួមទាំង AI គូររូប)...",
    features: [
      "ទទួលបាន Premium Templates, Stock Photos & Fonts ឥតដែនកំណត់",
      "គាំទ្រ Magic Studio AI Tools (Magic Erase, Expand, Design)",
      "គ្មាន Logo Watermark និង Export វីដេអូ/រូបភាព 4K",
      "ធានារយៈពេលប្រើប្រាស់ពេញ ១ ឆ្នាំ"
    ],
    downloadLink: USER_TELEGRAM_LINK,
    licenseKey: "JS7KH-CANVA-PRO-1YEAR-VIP"
  },
  {
    id: "js7-capcut",
    title: "CapCut Pro Private Account 1 ខែ",
    category: "tools",
    categoryLabel: "TOOL",
    badgeClass: "badge-tool",
    price: 3.00,
    originalPrice: 9.99,
    stockStatus: "in-stock",
    enrolled: 210,
    image: "./assets/images/capcut.png",
    description: "ប្រើប្រាស់មុខងារ PRO ពេញលេញ Export វីដេអូគ្មានសញ្ញាសម្គាល់ គ្មាន Watermark Effects, Templates, Fonts & Transitions... Premium ជួយឲ្យការកាត់តវីដេអូលឿន ងាយស្រួល តាមតម្រូវការ...",
    features: [
      "ទទួលបានរាល់ Pro Effects, Transitions & Filters",
      "គាំទ្រ AI Auto Caption ភាសាខ្មែរ និង ភាសាបរទេស",
      "គ្មាន Logo Watermark ពេល Export វីដេអូ 4K",
      "ធានារយៈពេលប្រើប្រាស់ពេញ ១ ខែ"
    ],
    downloadLink: USER_TELEGRAM_LINK,
    licenseKey: "JS7KH-CAPCUT-PRO-3USD-VIP"
  },
  {
    id: "js7-fbacc-1",
    title: "Facebook ផេកលក់ Facebook CM",
    category: "fb-page",
    categoryLabel: "FACEBOOK PAGE",
    badgeClass: "badge-fb-page",
    price: 30.00,
    originalPrice: 100.00,
    stockStatus: "in-stock",
    enrolled: 34,
    image: "./assets/images/facebook_cm.png",
    description: "កាត់ឈ្មោះបានភ្លាមៗ Stars, Ads on Reels និង Partnership Ads... អាចរកចំណូលបានភ្លាមៗ...",
    features: [
      "អ្នកតាមដានពិតប្រាកដ (Organic Followers) 100%",
      "កាត់ឈ្មោះ និងផ្ទេរសិទ្ធិ Admin ភ្លាមៗ",
      "ធានាសុវត្ថិភាព ១០០% លើការផ្ទេរកម្មសិទ្ធិ",
      "គាំទ្រការប្រើប្រាស់ 24/7"
    ],
    downloadLink: USER_TELEGRAM_LINK,
    licenseKey: "JS7KH-FB-ACC-ADS-VIP"
  },
  {
    id: "js7-fbpage-1",
    title: "Facebook Page 3/6 criteria",
    category: "fb-page",
    categoryLabel: "FACEBOOK PAGE",
    badgeClass: "badge-fb-page",
    price: 5.00,
    originalPrice: 10.00,
    stockStatus: "in-stock",
    enrolled: 12,
    image: "./assets/images/facebook_page_3_6.png",
    description: "អាចរត់អេដបាន Follower 10K និង 60K Views ជិតគ្រប់លក្ខខណ្ឌ (3/6 Criteria) អាចរត់ Ads រកលុយបាន...",
    features: [
      "Followers 10K+ ពិតប្រាកដ និងសកម្ម",
      "60K Views ជិតគ្រប់លក្ខខណ្ឌសម្រាប់រកលុយ",
      "ធានាសុវត្ថិភាព និងគាំទ្រប្តូរឈ្មោះបាន",
      "គាំទ្រការប្រើប្រាស់ 24/7"
    ],
    downloadLink: USER_TELEGRAM_LINK,
    licenseKey: "JS7KH-FB-PAGE-10K-VIP"
  }
];

// App State
let products = [...defaultProducts];
let currentCategory = "all";
let currentSearch = "";
let currentSort = "popular";
let khqrTimerInterval = null;

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
  setupEventListeners();
  renderProducts();
  checkURLDirectLink();
});

// Check if customer opened a direct product link e.g. ?buy=js7-001 or ?admin=true
function checkURLDirectLink() {
  const params = new URLSearchParams(window.location.search);
  
  // Check Admin mode URL or Session
  if (params.get("admin") === "true" || params.get("admin") === "js7kh" || sessionStorage.getItem("js7kh_is_admin") === "true") {
    enableAdminMode();
  }

  const buyId = params.get("buy") || params.get("product");
  if (buyId) {
    const p = products.find(item => item.id === buyId);
    if (p) {
      setTimeout(() => {
        showProductDetail(buyId);
      }, 400);
    }
  }
}

// Enable Admin Portal Mode
function enableAdminMode() {
  sessionStorage.setItem("js7kh_is_admin", "true");
  document.body.classList.add("admin-mode-active");
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.innerHTML = `<i class="fa-solid fa-crown"></i> Admin Mode`;
    loginBtn.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)";
  }
}

// Copy Direct Product Purchase Link
function copyProductLink(productId, e) {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
  const p = products.find(item => item.id === productId);
  if (!p) return;

  const url = `${window.location.origin}${window.location.pathname}?buy=${productId}`;
  navigator.clipboard.writeText(url).then(() => {
    showToast(`បានចម្លងលីងទិញ "${p.title}" រួចរាល់! អាចផ្ញើអោយអតិថិជនបាន។`);
  }).catch(() => {
    showToast(`លីងទិញ៖ ${url}`);
  });
}

// Load products instantly from memory/cache then sync from Cloud DB in background
// Load products instantly from memory/cache then sync from local CDN products_init.json
function loadProducts() {
  // 1. Instant load from local storage or defaults
  const stored = localStorage.getItem("js7kh_products_v7");
  if (stored) {
    try {
      products = JSON.parse(stored);
    } catch (e) {
      products = [...defaultProducts];
    }
  } else {
    products = [...defaultProducts];
  }

  // 2. Render instantly in 0.01s (lightning-fast storefront)
  renderProducts();

  // 3. Defer background CDN file sync to run after page is fully active
  setTimeout(() => {
    const version = typeof CONFIG !== 'undefined' && CONFIG.ASSET_VERSION ? CONFIG.ASSET_VERSION : "14.3";
    fetch(`./products_init.json?v=${version}`)
      .then(res => {
        if (!res.ok) throw new Error("Local products file error");
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          // Compare data before re-rendering to prevent flicker
          if (JSON.stringify(products) !== JSON.stringify(data)) {
            products = data;
            localStorage.setItem("js7kh_products_v7", JSON.stringify(products));
            renderProducts();
          }
        }
      })
      .catch(err => {
        console.warn("⚡ Background CDN Sync offline/deferred:", err);
      });
  }, 1000);
}

// Save products to LocalStorage for preview
function saveProducts() {
  try {
    localStorage.setItem("js7kh_products_v7", JSON.stringify(products));
  } catch (e) {
    console.warn("LocalStorage Quota Exceeded.", e);
  }
  showToast("💾 រក្សាទុកក្នងម៉ាស៊ីនរួចរាល់! សូមកែប្រែ products_init.json រួច Push ទៅ GitHub ដើម្បីដាក់ឱ្យដំណើរការផ្លូវការ។");
}

// Image compression helper (resizes heavy computer uploads to lightweight JPEG)
function compressImage(base64Str, maxWidth = 600, maxHeight = 400, quality = 0.75, callback) {
  if (!base64Str || !base64Str.startsWith("data:image")) {
    return callback(base64Str);
  }
  const img = new Image();
  img.src = base64Str;
  img.onload = () => {
    const canvas = document.createElement("canvas");
    let width = img.width;
    let height = img.height;

    if (width > maxWidth) {
      height = Math.round((height * maxWidth) / width);
      width = maxWidth;
    }
    if (height > maxHeight) {
      width = Math.round((width * maxHeight) / height);
      height = maxHeight;
    }

    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);
    const compressedDataUrl = canvas.toDataURL("image/jpeg", quality);
    callback(compressedDataUrl);
  };
  img.onerror = () => callback(base64Str);
}

// Event Listeners setup
function setupEventListeners() {
  // Category tab clicks
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategory = tab.dataset.category;
      renderProducts();
    });
  });

  // Search input
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }

  // Sort select
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Admin Add Product Form
  const addForm = document.getElementById("addProductForm");
  if (addForm) {
    addForm.addEventListener("submit", handleAddProduct);
  }

  // Admin Edit Product Form
  const editForm = document.getElementById("editProductForm");
  if (editForm) {
    editForm.addEventListener("submit", handleEditProduct);
  }

  // Add Image File Upload Listener
  const addImageFile = document.getElementById("addImageFile");
  if (addImageFile) {
    addImageFile.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          compressImage(event.target.result, 600, 400, 0.75, (compressed) => {
            document.getElementById("addImage").value = compressed;
            const preview = document.getElementById("addImgPreview");
            if (preview) {
              preview.src = compressed;
              preview.style.display = "block";
            }
          });
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Edit Image File Upload Listener
  const editImageFile = document.getElementById("editImageFile");
  if (editImageFile) {
    editImageFile.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          compressImage(event.target.result, 600, 400, 0.75, (compressed) => {
            document.getElementById("editImage").value = compressed;
            const preview = document.getElementById("editImgPreview");
            if (preview) {
              preview.src = compressed;
              preview.style.display = "block";
            }
          });
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Open Admin Modal Btn
  const openAdminBtn = document.getElementById("openAdminBtn");
  if (openAdminBtn) {
    openAdminBtn.addEventListener("click", () => openModal("adminModal"));
  }

  // Admin Login Modal & Passcode Check
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      if (document.body.classList.contains("admin-mode-active")) {
        showToast("អ្នកកំពុងស្ថិតក្នុង Admin Mode រួចរាល់ហើយ!");
        openModal("adminModal");
      } else {
        openModal("loginModal");
      }
    });
  }

  const adminLoginForm = document.getElementById("adminLoginForm");
  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const code = document.getElementById("adminPasscode").value.trim().toLowerCase();
      if (code === "js7kh" || code === "123456" || code === "soyches7") {
        enableAdminMode();
        closeModal("loginModal");
        adminLoginForm.reset();
        showToast("ចូលប្រើប្រាស់ Admin Portal ដោយជោគជ័យ!");
      } else {
        showToast("លេខកូដសម្ងាត់មិនត្រឹមត្រូវទេ! (Default: js7kh)");
      }
    });
  }
}

// Helper to get image URL with asset versioning (bypasses browser caching for modified images)
function getVersionedImageUrl(imgUrl) {
  if (!imgUrl) return "./assets/images/telegram.png";
  if (imgUrl.startsWith("data:")) return imgUrl; // Base64 data URLs don't need cache busting
  
  const version = typeof CONFIG !== 'undefined' && CONFIG.ASSET_VERSION ? CONFIG.ASSET_VERSION : "14.0";
  return imgUrl.includes('?') ? `${imgUrl}&v=${version}` : `${imgUrl}?v=${version}`;
}

// Render Products Grid
function renderProducts() {
  const container = document.getElementById("productsContainer");
  if (!container) return;

  // Filter products
  let filtered = products.filter(p => {
    const matchCat = currentCategory === "all" || p.category === currentCategory;
    const matchSearch = p.title.toLowerCase().includes(currentSearch) || 
                        p.description.toLowerCase().includes(currentSearch);
    return matchCat && matchSearch;
  });

  // Sort products
  if (currentSort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === "newest") {
    filtered.reverse();
  } else {
    // popular
    filtered.sort((a, b) => b.enrolled - a.enrolled);
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <i class="fa-solid fa-box-open" style="font-size: 3rem; margin-bottom: 15px; color: var(--text-dim);"></i>
        <h3>មិនរកឃើញកម្មវិធីដែលអ្នកស្វែងរកទេ</h3>
        <p style="font-size: 0.9rem; margin-top: 8px;">សូមសាកល្បងស្វែងរកពាក្យគន្លឹះផ្សេងទៀត ឬ ជ្រើសរើសប្រភេទទាំងអស់។</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => {
    const isOutOfStock = p.stockStatus === 'out-of-stock';
    const isComingSoon = p.stockStatus === 'coming-soon';

    let stockOverlay = '';
    if (isOutOfStock) {
      stockOverlay = `<div class="stock-overlay"><span class="badge-out-of-stock"><i class="fa-solid fa-ban"></i> លក់អស់ហើយ (Out of Stock)</span></div>`;
    } else if (isComingSoon) {
      stockOverlay = `<div class="stock-overlay"><span class="badge-coming-soon"><i class="fa-solid fa-clock"></i> ជិតមកដល់ (Coming Soon)</span></div>`;
    }

    let buyButtonHtml = `
      <button class="btn-card-buy" onclick="startKHQRCheckout('${p.id}')">
        <i class="fa-solid fa-bolt"></i> ទិញឥឡូវនេះ
      </button>
    `;

    if (isOutOfStock) {
      buyButtonHtml = `
        <button class="btn-card-buy btn-disabled" disabled>
          <i class="fa-solid fa-lock"></i> លក់អស់ហើយ
        </button>
      `;
    } else if (isComingSoon) {
      buyButtonHtml = `
        <button class="btn-card-buy btn-disabled" style="background: #d97706 !important; color: white !important;" disabled>
          <i class="fa-solid fa-hourglass-start"></i> ជិតមកដល់
        </button>
      `;
    }

    return `
      <div class="product-card">
        ${stockOverlay}
        <div class="card-img-wrapper">
          <span class="card-badge ${p.badgeClass || 'badge-tool'}">${p.categoryLabel || 'TOOL'}</span>
          <div class="price-tag">
            ${p.originalPrice ? `<span class="original-price">$${p.originalPrice.toFixed(2)}</span>` : ''}
            <span class="current-price">$${p.price.toFixed(2)}</span>
          </div>

          <!-- Quick Admin Action Overlay Buttons -->
          <div class="card-admin-controls">
            <button class="btn-admin-edit" onclick="openEditModal('${p.id}', event)" title="កែប្រែកម្មវិធីនេះ"><i class="fa-solid fa-pen"></i> កែប្រែ</button>
            <button class="btn-admin-delete" onclick="deleteProduct('${p.id}', event)" title="លុបកម្មវិធីនេះ"><i class="fa-solid fa-trash"></i> លុប</button>
            <button class="btn-card-share" onclick="copyProductLink('${p.id}', event)" title="ចម្លងលីងផ្ញើអោយគេទិញ"><i class="fa-solid fa-share-nodes"></i> ចម្លងលីង</button>
          </div>

          <img src="${getVersionedImageUrl(p.image)}" alt="${p.title}" onerror="this.src='./assets/images/telegram.png'">
        </div>
        <div class="card-body">
          <h3 class="product-title">${p.title}</h3>
          <p class="product-desc">${p.description}</p>
          <div class="product-meta">
            <span class="meta-enrolled"><i class="fa-solid fa-users"></i> ${p.enrolled} Enrolled</span>
            <span><i class="fa-solid fa-star" style="color: var(--accent-gold);"></i> 5.0</span>
          </div>
          <div class="card-actions">
            <button class="btn-card-learn" onclick="showProductDetail('${p.id}')">
              <i class="fa-solid fa-circle-info"></i> មើលលម្អិត
            </button>
            ${buyButtonHtml}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Show Product Detail Modal
function showProductDetail(productId) {
  const p = products.find(item => item.id === productId);
  if (!p) return;

  const titleElem = document.getElementById("detailTitle");
  const bodyElem = document.getElementById("detailBody");

  titleElem.innerHTML = `<i class="fa-solid fa-microchip" style="color: var(--accent-cyan);"></i> ${p.title}`;

  const featuresList = (p.features && p.features.length > 0) 
    ? p.features.map(f => `<li style="margin-bottom: 8px;"><i class="fa-solid fa-check-circle" style="color: var(--accent-green);"></i> ${f}</li>`).join("")
    : `<li><i class="fa-solid fa-check-circle" style="color: var(--accent-green);"></i> កម្មវិធីដំណើរការបានល្អ ១០០%</li>`;

  const isOutOfStock = p.stockStatus === 'out-of-stock';

  bodyElem.innerHTML = `
    <div style="display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 20px;">
      <img src="${getVersionedImageUrl(p.image)}" alt="${p.title}" style="width: 100%; max-height: 240px; object-fit: cover; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
    </div>
    
    <div style="margin-bottom: 20px;">
      <h4 style="color: var(--accent-cyan); font-size: 1.1rem; margin-bottom: 10px;">អំពីកម្មវិធីនេះ:</h4>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">${p.description}</p>
    </div>

    <div style="margin-bottom: 24px;">
      <h4 style="color: var(--accent-cyan); font-size: 1.1rem; margin-bottom: 10px;">លក្ខណៈពិសេស (Key Features):</h4>
      <ul style="list-style: none; padding-left: 0; color: var(--text-main); font-size: 0.92rem;">
        ${featuresList}
      </ul>
    </div>

    <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 18px; border-top: 1px solid var(--border-subtle);">
      <div>
        <span style="font-size: 0.85rem; color: var(--text-dim); display: block;">តម្លៃសរុប:</span>
        <span style="font-size: 1.6rem; font-weight: 800; color: var(--accent-cyan);">$${p.price.toFixed(2)} USD</span>
      </div>
      ${isOutOfStock ? 
        `<button class="btn-primary btn-disabled" disabled><i class="fa-solid fa-ban"></i> លក់អស់ហើយ</button>` :
        `<div style="display: flex; gap: 10px;">
          <button class="btn-outline" style="padding: 10px 16px;" onclick="copyProductLink('${p.id}')">
            <i class="fa-solid fa-share-nodes"></i> ចម្លងលីងទិញ
          </button>
          <button class="btn-primary" style="padding: 10px 24px;" onclick="closeModal('detailModal'); startKHQRCheckout('${p.id}');">
            <i class="fa-solid fa-qrcode"></i> ទូទាត់ប្រាក់ KHQR ឥឡូវនេះ
          </button>
        </div>`
      }
    </div>
  `;

  openModal("detailModal");
}

// Start KHQR Checkout Modal & Timer
function startKHQRCheckout(productId) {
  const p = products.find(item => item.id === productId);
  if (!p || p.stockStatus === 'out-of-stock') return;

  const khqrBody = document.getElementById("khqrBody");
  const billNo = "JS7-" + Math.floor(100000 + Math.random() * 900000);

  const tgMsg = encodeURIComponent(`ជំរាបសួរ! ខ្ញុំបានទូទាត់ប្រាក់ទិញកម្មវិធី: ${p.title} (Bill No: #${billNo} - តម្លៃ: $${p.price.toFixed(2)} USD)។ សូមផ្ញើរូបបង្កាន់ដៃទូទាត់ ABA ជូនអ្នកលក់!`);
  let tgUrl = `https://t.me/SOYCHES7?text=${tgMsg}`;
  if (typeof TELEGRAM_BOT_USERNAME !== "undefined" && TELEGRAM_BOT_USERNAME !== "YOUR_BOT_USERNAME") {
    tgUrl = `tg://resolve?domain=${TELEGRAM_BOT_USERNAME}&start=bill_${billNo}_prod_${p.id}`;
  }

  khqrBody.innerHTML = `
    <div class="khqr-card-container">
      <div class="khqr-card-header">
        <i class="fa-solid fa-qrcode"></i> ABA KHQR PAYMENT
      </div>

      <div class="khqr-merchant-info">
        <div class="khqr-store-name" style="color: #0d1324; font-size: 1.25rem;">CHES SOY</div>
        <div style="font-size: 0.82rem; color: #64748b;">Bill No: #${billNo}</div>
        <div class="khqr-amount">$${p.price.toFixed(2)} USD</div>
        <div style="font-size: 0.88rem; font-weight: 600; color: #1e293b; margin-top: 4px;">
          ${p.title}
        </div>
        <div style="font-size: 0.82rem; color: #475569; margin-top: 8px; border-top: 1px dashed #cbd5e1; padding-top: 8px; text-align: left; padding-left: 10px; padding-right: 10px; line-height: 1.6;">
          • <strong>ABA QR</strong>: ស្កែនរូបខាងក្រោម<br>
          • <strong>Bakong Address</strong>: <code style="background: #e2e8f0; padding: 2px 6px; border-radius: 4px; font-family: monospace;">ches_soy@bkrt</code> <i class="fa-solid fa-copy" style="cursor: pointer; color: #0088cc; margin-left: 4px;" onclick="navigator.clipboard.writeText('ches_soy@bkrt'); showToast('📋 ចម្លង Bakong Address រួចរាល់!');"></i><br>
          • <strong>លេខទូរស័ព្ទ (Bakong/ABA)</strong>: <code style="background: #e2e8f0; padding: 2px 6px; border-radius: 4px; font-family: monospace;">081 887 350</code> <i class="fa-solid fa-copy" style="cursor: pointer; color: #0088cc; margin-left: 4px;" onclick="navigator.clipboard.writeText('081887350'); showToast('📋 ចម្លង លេខទូរស័ព្ទ រួចរាល់!');"></i>
        </div>
      </div>

      <div class="qr-code-box" style="padding: 10px; border-color: #e6192d; background: #fafafa;">
        <!-- Authentic User ABA KHQR Code Image -->
        <img src="./assets/images/user_aba_khqr.jpg" alt="ABA KHQR - CHES SOY" style="width: 100%; max-width: 290px; height: auto; border-radius: 10px; display: block; margin: 0 auto; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
      </div>

      <div class="khqr-timer" style="margin-top: 14px; margin-bottom: 14px;">
        សូមស្កែនទូទាត់ប្រាក់ក្នុងរយៈពេល: <span id="countdownTimer" class="timer-countdown">14:59</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 10px;">
        <a href="${tgUrl}" target="_blank" class="btn-primary" style="background: #0088cc; width: 100%; justify-content: center; text-decoration: none; padding: 12px; font-size: 0.95rem;">
          <i class="fa-brands fa-telegram"></i> ផ្ញើបង្កាន់ដៃទូទាត់តាម Telegram
        </a>
        
        <button class="btn-simulate-pay" style="margin-top: 0; padding: 10px; font-size: 0.9rem; background: #10b981;" onclick="simulatePaymentSuccess('${p.id}', '${billNo}')">
          <i class="fa-solid fa-bolt"></i> ពិនិត្យការទូទាត់ស្វ័យប្រវត្តិ (Simulate Auto Unlock)
        </button>
      </div>
    </div>
  `;

  openModal("khqrModal");

  // Start 15 min countdown
  let duration = 15 * 60;
  if (khqrTimerInterval) clearInterval(khqrTimerInterval);
  
  khqrTimerInterval = setInterval(() => {
    duration--;
    if (duration <= 0) {
      clearInterval(khqrTimerInterval);
      closeModal("khqrModal");
      showToast("ផុតកំណត់វេលាទូទាត់ប្រាក់! សូមសាកល្បងម្តងទៀត។");
      return;
    }
    const mins = Math.floor(duration / 60);
    const secs = duration % 60;
    const timerElem = document.getElementById("countdownTimer");
    if (timerElem) {
      timerElem.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
  }, 1000);
}

// Simulate KHQR Payment Success
function simulatePaymentSuccess(productId, billNo) {
  if (khqrTimerInterval) clearInterval(khqrTimerInterval);

  const p = products.find(item => item.id === productId);
  if (!p) return;

  const khqrBody = document.getElementById("khqrBody");
  
  // Show spinner simulation first
  khqrBody.innerHTML = `
    <div style="text-align: center; padding: 40px 20px;">
      <i class="fa-solid fa-circle-notch fa-spin" style="font-size: 3rem; color: var(--accent-cyan); margin-bottom: 20px;"></i>
      <h3 style="color: var(--text-main);">កំពុងផ្ទៀងផ្ទាត់ការទូទាត់ KHQR (CHES SOY)...</h3>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 8px;">សូមរង់ចាំមួយភ្លែត ស្វ័យប្រវត្តទាញយកលីង</p>
    </div>
  `;

  setTimeout(() => {
    // Increment enrolled stat
    p.enrolled = (p.enrolled || 0) + 1;
    saveProducts();
    renderProducts();

    const licenseCode = p.licenseKey || "JS7KH-" + Math.random().toString(36).substring(2, 10).toUpperCase() + "-2026";
    
    // Direct link to Telegram @SOYCHES7 with pre-filled purchase details
    const tgMsgSuccess = encodeURIComponent(`ជំរាបសួរ! ខ្ញុំបានទូទាត់ប្រាក់ទិញកម្មវិធីរៀបរយហើយ៖
- ឈ្មោះកម្មវិធី៖ ${p.title}
- លេខវិក្កយបត្រ (Bill No)៖ #${billNo}
- លេខ License Key៖ ${licenseCode}
- តម្លៃ៖ $${p.price.toFixed(2)} USD

សូមផ្ញើឯកសារ/លីងទាញយកកម្មវិធីមកកាន់ខ្ញុំ! ជម្រាបអរគុណ!`);
    
    let telegramDownloadUrl = `https://t.me/SOYCHES7?text=${tgMsgSuccess}`;
    if (typeof TELEGRAM_BOT_USERNAME !== "undefined" && TELEGRAM_BOT_USERNAME !== "YOUR_BOT_USERNAME") {
      telegramDownloadUrl = `https://t.me/${TELEGRAM_BOT_USERNAME}?start=bill_${billNo}`;
    }

    khqrBody.innerHTML = `
      <div class="payment-success-card">
        <div class="success-icon">
          <i class="fa-solid fa-check"></i>
        </div>
        <h3 style="color: var(--accent-green); font-size: 1.4rem; margin-bottom: 6px;">ទូទាត់ប្រាក់ជោគជ័យ!</h3>
        <p style="color: var(--text-muted); font-size: 0.88rem;">សូមអរគុណសម្រាប់ការគាំទ្រ JS7KH STORE</p>

        <div class="license-box">
          <div style="font-size: 0.8rem; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.5px;">លេខវិក្កយបត្រ / Bill No:</div>
          <div style="color: var(--text-main); font-weight: 700; font-size: 0.95rem; margin-bottom: 12px;">#${billNo}</div>

          <div style="font-size: 0.8rem; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.5px;">License Key / VIP Pass Code:</div>
          <div class="license-key-value">${licenseCode}</div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 10px;">
          <a href="${telegramDownloadUrl}" target="_blank" class="btn-primary" style="justify-content: center; width: 100%; text-decoration: none; padding: 12px; background: #0088cc;">
            <i class="fa-brands fa-telegram"></i> ចូលទាញយកកម្មវិធីតាម Telegram (@SOYCHES7)
          </a>
          <button class="btn-outline" onclick="copyText('${licenseCode}')">
            <i class="fa-solid fa-copy"></i> ចម្លងកូដ License Key
          </button>
        </div>
      </div>
    `;

    showToast("ការទូទាត់ប្រាក់បានជោគជ័យ! សូមចុចប៊ូតុង Telegram ដើម្បីទទួលយកកម្មវិធី។");
  }, 1400);
}

// Handle Add Product (Admin Mode)
function handleAddProduct(e) {
  e.preventDefault();

  const title = document.getElementById("addTitle").value.trim();
  const category = document.getElementById("addCategory").value;
  const price = parseFloat(document.getElementById("addPrice").value) || 0;
  const originalPrice = parseFloat(document.getElementById("addOriginalPrice").value) || null;
  const stockStatus = document.getElementById("addStockStatus").value || "in-stock";
  const rawImage = document.getElementById("addImage").value.trim() || "./assets/images/telegram.png";
  const description = document.getElementById("addDesc").value.trim();
  const downloadLink = document.getElementById("addDownloadLink").value.trim() || USER_TELEGRAM_LINK;

  if (!title) {
    showToast("សូមបញ្ចូលឈ្មោះកម្មវិធី!");
    return;
  }

  let categoryLabel = "TOOL";
  let badgeClass = "badge-tool";
  if (category === "account") {
    categoryLabel = "ACCOUNT";
    badgeClass = "badge-account";
  } else if (category === "course") {
    categoryLabel = "COURSE";
    badgeClass = "badge-course";
  } else if (category === "sourcecode") {
    categoryLabel = "SOURCE CODE";
    badgeClass = "badge-tool";
  } else if (category === "fb-page") {
    categoryLabel = "FACEBOOK PAGE";
    badgeClass = "badge-fb-page";
  } else if (category === "fb-account") {
    categoryLabel = "FACEBOOK ACCOUNT";
    badgeClass = "badge-fb-account";
  }

  // Compress heavy computer images before saving to ensure LocalStorage never exceeds quota
  compressImage(rawImage, 600, 400, 0.75, (compressedImg) => {
    const newProduct = {
      id: "js7-" + Date.now().toString(36),
      title,
      category,
      categoryLabel,
      badgeClass,
      price,
      originalPrice,
      stockStatus,
      enrolled: 1,
      image: compressedImg,
      description,
      features: [
        "គាំទ្រការប្រើប្រាស់ 24/7",
        "អាប់ដេតមុខងារស្វ័យប្រវត្តិ",
        "ធានាសុវត្ថិភាព 100%"
      ],
      downloadLink,
      licenseKey: "JS7KH-" + Math.random().toString(36).substring(2, 9).toUpperCase() + "-NEW"
    };

    products.unshift(newProduct);
    saveProducts();
    renderProducts();

    closeModal("adminModal");
    document.getElementById("addProductForm").reset();
    const preview = document.getElementById("addImgPreview");
    if (preview) preview.style.display = "none";

    showToast("បានផ្សាយលក់កម្មវិធីថ្មីដោយជោគជ័យ!");
  });
}

// Open Edit Product Modal
function openEditModal(productId, e) {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
  const p = products.find(item => item.id === productId);
  if (!p) return;

  document.getElementById("editId").value = p.id;
  document.getElementById("editTitle").value = p.title;
  document.getElementById("editCategory").value = p.category;
  document.getElementById("editPrice").value = p.price;
  document.getElementById("editOriginalPrice").value = p.originalPrice || "";
  document.getElementById("editStockStatus").value = p.stockStatus || "in-stock";
  document.getElementById("editImage").value = p.image;
  document.getElementById("editDesc").value = p.description;
  document.getElementById("editDownloadLink").value = p.downloadLink || USER_TELEGRAM_LINK;

  const preview = document.getElementById("editImgPreview");
  if (preview && p.image) {
    preview.src = getVersionedImageUrl(p.image);
    preview.style.display = "block";
  }

  openModal("editModal");
}

// Handle Edit Product Form
function handleEditProduct(e) {
  e.preventDefault();

  const id = document.getElementById("editId").value;
  const p = products.find(item => item.id === id);
  if (!p) return;

  const rawImage = document.getElementById("editImage").value.trim() || p.image;

  compressImage(rawImage, 600, 400, 0.75, (compressedImg) => {
    p.title = document.getElementById("editTitle").value.trim();
    p.category = document.getElementById("editCategory").value;
    p.price = parseFloat(document.getElementById("editPrice").value) || 0;
    p.originalPrice = parseFloat(document.getElementById("editOriginalPrice").value) || null;
    p.stockStatus = document.getElementById("editStockStatus").value;
    p.image = compressedImg;
    p.description = document.getElementById("editDesc").value.trim();
    p.downloadLink = document.getElementById("editDownloadLink").value.trim();

    if (p.category === "account") {
      p.categoryLabel = "ACCOUNT";
      p.badgeClass = "badge-account";
    } else if (p.category === "course") {
      p.categoryLabel = "COURSE";
      p.badgeClass = "badge-course";
    } else if (p.category === "sourcecode") {
      p.categoryLabel = "SOURCE CODE";
      p.badgeClass = "badge-tool";
    } else if (p.category === "fb-page") {
      p.categoryLabel = "FACEBOOK PAGE";
      p.badgeClass = "badge-fb-page";
    } else if (p.category === "fb-account") {
      p.categoryLabel = "FACEBOOK ACCOUNT";
      p.badgeClass = "badge-fb-account";
    } else {
      p.categoryLabel = "TOOL";
      p.badgeClass = "badge-tool";
    }

    saveProducts();
    renderProducts();

    closeModal("editModal");
    showToast("បានកែប្រែព័ត៌មានកម្មវិធីដោយជោគជ័យ!");
  });
}

let pendingDeleteId = null;

// Delete Product with Custom Modal Confirmation
function deleteProduct(productId, e) {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
  const p = products.find(item => item.id === productId);
  if (!p) return;

  pendingDeleteId = productId;
  const titleElem = document.getElementById("deleteItemTitle");
  if (titleElem) titleElem.textContent = p.title;

  const confirmBtn = document.getElementById("confirmDeleteBtn");
  if (confirmBtn) {
    confirmBtn.onclick = () => {
      products = products.filter(item => item.id !== pendingDeleteId);
      saveProducts();
      renderProducts();
      closeModal("deleteModal");
      showToast("បានលុបកម្មវិធីចេញពីវេបសាយរួចរាល់!");
    };
  }

  openModal("deleteModal");
}

// Helper: Filter by Category from Footer or Code
function filterByCategory(cat) {
  currentCategory = cat;
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    if (tab.dataset.category === cat) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
  renderProducts();
  window.scrollTo({ top: 400, behavior: 'smooth' });
}

// Modal helper functions
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add("active");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove("active");
  if (id === "khqrModal" && khqrTimerInterval) {
    clearInterval(khqrTimerInterval);
  }
}

// Clipboard Copy
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("បានចម្លងកូដ License Key ទៅកាន់ Clipboard!");
  }).catch(() => {
    showToast("កូដ License Key: " + text);
  });
}

// Toast Notifications
function showToast(msg) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-bell" style="color: var(--accent-cyan);"></i> <span>${msg}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
