/* ===================================================
   AutoParts Egypt — script.js
   ================================================= */

// ===== PRODUCT DATA =====
const products = [
  {
    id: 1,
    nameAr: "فلتر هواء المحرك",
    nameEn: "Engine Air Filter",
    category: "engine",
    price: 550,
    priceRange: "400 - 800",
    badge: "الأكثر مبيعاً",
    image: "https://m.media-amazon.com/images/I/71MU4YvtQAL._AC_SL1500_.jpg",
    desc: "فلتر هواء عالي الجودة يحمي محرك سيارتك من الغبار والشوائب. مناسب لمعظم موديلات السيارات. يُحسّن أداء المحرك ويزيد من كفاءة استهلاك الوقود.",
    specs: [
      { label: "النوع", value: "فلتر هواء جاف" },
      { label: "المادة", value: "ورق مضغوط + إطار بلاستيك" },
      { label: "مدة الصيانة", value: "كل 15,000 كم" },
      { label: "الضمان", value: "6 أشهر" }
    ]
  },
  {
    id: 2,
    nameAr: "تيل فرامل أمامي",
    nameEn: "Front Brake Pads",
    category: "brakes",
    price: 950,
    priceRange: "600 - 1500",
    badge: "مميز",
    image: "https://m.media-amazon.com/images/I/61w1pFWwjzS._AC_SL1500_.jpg",
    desc: "تيل فرامل أمامي عالي الأداء لسيارتك — يوفر قوة توقف قصوى وصوت هادئ. مقاوم للحرارة العالية ومناسب لجميع الأحوال الجوية المصرية.",
    specs: [
      { label: "النوع", value: "تيل فرامل قرصية" },
      { label: "المادة", value: "سيراميك + ألياف" },
      { label: "مدة الصيانة", value: "كل 30,000 كم" },
      { label: "الضمان", value: "6 أشهر" }
    ]
  },
  {
    id: 3,
    nameAr: "بطارية سيارة",
    nameEn: "Car Battery 70Ah",
    category: "electrical",
    price: 2800,
    priceRange: "2000 - 4000",
    badge: "جودة عالية",
    image: "https://ielectrony.com/wp-content/uploads/2018/10/long.jpg",
    desc: "بطارية سيارة 70 أمبير ساعة عالية الجودة، تدوم طويلاً وتعمل بكفاءة في أشد الأحوال الجوية — مثالية لمناخ مصر الحار. تعمر يصل إلى 4 سنوات.",
    specs: [
      { label: "السعة", value: "70 أمبير ساعة" },
      { label: "الجهد", value: "12 فولت" },
      { label: "العمر الافتراضي", value: "3-4 سنوات" },
      { label: "الضمان", value: "سنة كاملة" }
    ]
  },
  {
    id: 4,
    nameAr: "فلتر زيت المحرك",
    nameEn: "Oil Filter",
    category: "filters",
    price: 280,
    priceRange: "150 - 500",
    badge: "",
    image: "https://www.chinesecars.me/wp-content/uploads/2025/04/Oil_Filter.webp",
    desc: "فلتر زيت محرك يزيل الشوائب والجزيئات الضارة من زيت المحرك، مما يطيل عمر المحرك ويحافظ على أدائه. يُنصح بتغييره مع كل تغيير زيت.",
    specs: [
      { label: "النوع", value: "فلتر زيت برغي" },
      { label: "الضغط", value: "عالي المقاومة" },
      { label: "مدة الصيانة", value: "كل 5,000 كم" },
      { label: "الضمان", value: "3 أشهر" }
    ]
  },
  {
    id: 5,
    nameAr: "شمعات إشعال",
    nameEn: "Spark Plugs (4 pcs)",
    category: "engine",
    price: 450,
    priceRange: "300 - 700",
    badge: "طقم 4 حبة",
    image: "https://youjia.cdn.bcebos.com/wenda_pics/16645051102747090f00.png@!default_youjia",
    desc: "طقم شمعات إشعال عالي الجودة لمحركات البنزين. تحسن استهلاك الوقود وتقلل الانبعاثات. مناسبة لمعظم السيارات اليابانية والأوروبية.",
    specs: [
      { label: "العدد", value: "4 شمعات" },
      { label: "النوع", value: "بلاتينيوم" },
      { label: "مدة الصيانة", value: "كل 30,000 كم" },
      { label: "الضمان", value: "6 أشهر" }
    ]
  },
  {
    id: 6,
    nameAr: "دسك فرامل خلفي",
    nameEn: "Rear Brake Disc",
    category: "brakes",
    price: 1200,
    priceRange: "800 - 2000",
    badge: "",
    image: "https://images.dubizzle.com.eg/thumbnails/37916934-800x600.jpeg",
    desc: "دسك فرامل خلفي مصنوع من فولاذ عالي الكربون. يوفر ثباتاً ممتازاً ومقاومة عالية للحرارة. مناسب للسيارات الألمانية واليابانية.",
    specs: [
      { label: "المادة", value: "فولاذ كربوني" },
      { label: "القطر", value: "280-320 مم" },
      { label: "مدة الصيانة", value: "كل 60,000 كم" },
      { label: "الضمان", value: "سنة كاملة" }
    ]
  },
  {
    id: 7,
    nameAr: "فلتر تكيف",
    nameEn: " Air Filter Condation",
    category: "filters",
    price: 200,
    priceRange: "150 - 400",
    badge: "",
    image: "https://tse4.mm.bing.net/th/id/OIP.3qmyNZym1uT8sAv1Mu6t7AAAAA?pid=Api&h=220&P=0",
    desc: "فلتر هواء الكابينة يُنقّي الهواء الداخل لمقصورة السيارة من الغبار والحشرات والجراثيم. ضروري خاصةً في أجواء القاهرة المحملة بالأتربة.",
    specs: [
      { label: "النوع", value: "فلتر مركّب" },
      { label: "المادة", value: "ألياف مضغوطة" },
      { label: "مدة الصيانة", value: "كل 15,000 كم" },
      { label: "الضمان", value: "3 أشهر" }
    ]
  },
  {
    id: 8,
    nameAr: "سير كاتينه ",
    nameEn: "Timing Belt Kit",
    category: "engine",
    price: 1800,
    priceRange: "1200 - 3000",
    badge: "طقم كامل",
    image: "https://sa.triple-a-trading.com/wp-content/uploads/2023/10/Citroen-Peugeot-1608747480-2.jpg",
    desc: "طقم حزام التوقيت الكامل يشمل الحزام والبكرات والمضخة. استبداله في الوقت المناسب يحمي المحرك من أضرار جسيمة. ضمان الجودة.",
    specs: [
      { label: "المحتويات", value: "حزام + بكرات + مضخة" },
      { label: "المادة", value: "مطاط مسلّح" },
      { label: "مدة الصيانة", value: "كل 60,000 كم" },
      { label: "الضمان", value: "سنة كاملة" }
    ]
  }
];

// ===== STATE =====
let cart = [];
let previousPage = "home";
let currentFilter = "all";

// ===== DOM REFS =====
const cartSidebar   = document.getElementById("cartSidebar");
const cartOverlay   = document.getElementById("cartOverlay");
const cartItemsEl   = document.getElementById("cartItems");
const cartCountEl   = document.getElementById("cartCount");
const totalPriceEl  = document.getElementById("totalPrice");
const toast         = document.getElementById("toast");

// ===== NAVIGATION =====
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));

  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const link = document.querySelector(`[data-page="${pageId}"]`);
  if (link) link.classList.add("active");

  // Close mobile nav
  document.querySelector(".nav-links").classList.remove("open");
}

function goBack() {
  showPage(previousPage);
}

// Nav links
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = link.dataset.page;
    showPage(page);
  });
});

// Hamburger
document.getElementById("hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});

// ===== RENDER PRODUCTS =====
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <div class="product-img-wrap">
      <img class="product-img" src="${product.image}" alt="${product.nameAr}" loading="lazy"/>
      ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
    </div>
    <div class="product-info">
      <div class="product-name-ar">${product.nameAr}</div>
      <div class="product-name-en">${product.nameEn}</div>
      <div class="product-price">${product.price.toLocaleString()} <span>EGP</span></div>
      <button class="add-to-cart" data-id="${product.id}">🛒 أضف للسلة</button>
    </div>
  `;

  // Click card → detail (except button)
  card.addEventListener("click", (e) => {
    if (!e.target.classList.contains("add-to-cart")) {
      showDetail(product.id);
    }
  });

  // Add to cart button
  card.querySelector(".add-to-cart").addEventListener("click", (e) => {
    e.stopPropagation();
    addToCart(product.id);
  });

  return card;
}

function renderFeatured() {
  const grid = document.getElementById("featuredGrid");
  if (!grid) return;
  // Show first 4 products
  products.slice(0, 4).forEach(p => grid.appendChild(createProductCard(p)));
}

function renderAllProducts(filter = "all") {
  const grid = document.getElementById("allProductsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);
  filtered.forEach(p => grid.appendChild(createProductCard(p)));
}

// ===== FILTER =====
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.cat;
    renderAllProducts(currentFilter);
  });
});

// ===== PRODUCT DETAIL =====
function showDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  previousPage = document.querySelector(".page.active")?.id || "home";

  const wrapper = document.getElementById("detailWrapper");
  wrapper.innerHTML = `
    <div class="detail-img-wrap">
      <img class="detail-img" src="${product.image}" alt="${product.nameAr}"/>
    </div>
    <div class="detail-info">
      <div class="detail-cat">${getCategoryLabel(product.category)}</div>
      <h1 class="detail-name">${product.nameAr}</h1>
      <div class="detail-name-en">${product.nameEn}</div>
      <div class="detail-price">${product.price.toLocaleString()} <small>EGP</small></div>
      <p class="detail-desc">${product.desc}</p>
      <div class="detail-specs">
        <h4>📋 المواصفات</h4>
        ${product.specs.map(s => `
          <div class="spec-row">
            <span>${s.label}</span>
            <span>${s.value}</span>
          </div>
        `).join("")}
      </div>
      <button class="detail-add-btn" data-id="${product.id}">🛒 أضف للسلة — ${product.price.toLocaleString()} EGP</button>
    </div>
  `;

  wrapper.querySelector(".detail-add-btn").addEventListener("click", () => {
    addToCart(product.id);
  });

  showPage("product-detail");
}

function getCategoryLabel(cat) {
  const labels = {
    engine: "🔧 المحرك · Engine",
    brakes: "🛑 الفرامل · Brakes",
    electrical: "⚡ كهرباء · Electrical",
    filters: "🔩 فلاتر · Filters"
  };
  return labels[cat] || cat;
}

// ===== CART =====
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCart();
  showToast(`✅ تمت الإضافة: ${product.nameAr}`);

  // Bounce cart button
  const cartBtn = document.getElementById("cartToggle");
  cartBtn.style.transform = "scale(1.3)";
  setTimeout(() => { cartBtn.style.transform = ""; }, 200);
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  updateCart();
}

function updateCart() {
  // Count
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  cartCountEl.textContent = totalItems;

  // Total
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  totalPriceEl.textContent = `${total.toLocaleString()} EGP`;

  // Render items
  if (cart.length === 0) {
    cartItemsEl.innerHTML = `
      <div class="cart-empty">
        <span>🔧</span>
        <p>السلة فارغة</p>
      </div>
    `;
    return;
  }

  cartItemsEl.innerHTML = "";
  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img class="cart-item-img" src="${item.image}" alt="${item.nameAr}"/>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.nameAr}</div>
        <div class="cart-item-price">${(item.price * item.qty).toLocaleString()} EGP ${item.qty > 1 ? `<small>(×${item.qty})</small>` : ""}</div>
      </div>
      <button class="cart-item-remove" data-id="${item.id}" title="إزالة">🗑</button>
    `;
    div.querySelector(".cart-item-remove").addEventListener("click", () => removeFromCart(item.id));
    cartItemsEl.appendChild(div);
  });
}

// ===== CART TOGGLE =====
document.getElementById("cartToggle").addEventListener("click", () => {
  cartSidebar.classList.add("open");
  cartOverlay.classList.add("active");
});

document.getElementById("closeCart").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

function closeCart() {
  cartSidebar.classList.remove("open");
  cartOverlay.classList.remove("active");
}

// Checkout
document.querySelector(".checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("⚠️ السلة فارغة!");
    return;
  }
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  showToast(`🎉 تم تأكيد طلبك! الإجمالي: ${total.toLocaleString()} EGP`);
  cart = [];
  updateCart();
  closeCart();
});

// ===== CONTACT FORM =====
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  showToast("📨 تم إرسال رسالتك! سنتواصل معك قريباً");
  e.target.reset();
});

// ===== TOAST =====
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

// ===== INIT =====
renderFeatured();
renderAllProducts();
showPage("home");
