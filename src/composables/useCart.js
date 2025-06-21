import { ref, watch } from 'vue';

const CART_KEY = 'my-shop-cart';
const cart = ref([]);
const showToast = ref(false);
const toastMessage = ref('');

function loadCart() {
  const stored = localStorage.getItem(CART_KEY);
  if (stored) {
    try {
      cart.value = JSON.parse(stored);
    } catch {
      cart.value = [];
    }
  }
}
loadCart();

watch(
  cart,
  (newCart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(newCart));
  },
  { deep: true }
);

function addToCart(product) {
  if (!product) return;

  // Parse price safely to number
  const priceNumber = Number(
    typeof product.price === 'string' 
      ? product.price.replace(/[^\d.,]/g, '').replace(',', '.') 
      : product.price
  );

  const validPrice = isNaN(priceNumber) ? 0 : priceNumber;

  const existing = cart.value.find((item) => item.url === product.url);
  if (existing) {
    existing.quantity++;
  } else {
    cart.value.push({ ...product, price: validPrice, quantity: 1 });
  }

  showToast.value = true;
  toastMessage.value = `${product.name} wurde dem Warenkorb hinzugefügt.`;
  setTimeout(() => {
    showToast.value = false;
  }, 2000);
}

function removeFromCart(url) {
  cart.value = cart.value.filter((item) => item.url !== url);
}

function clearCart() {
  cart.value = [];
}

function triggerToast(message) {
  toastMessage.value = message;
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, 2500);
}

export function useCart() {
  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    showToast,
    toastMessage,
    triggerToast,
  };
}
