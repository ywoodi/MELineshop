<script setup>
import { ref, watch } from 'vue'

const cart = ref([])

const CART_KEY = 'my-shop-cart'

const loadCart = () => {
  const stored = localStorage.getItem(CART_KEY)
  if (stored) {
    try {
      cart.value = JSON.parse(stored)
    } catch {
      cart.value = []
    }
  }
}
loadCart()

watch(cart, (newCart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(newCart))
}, { deep: true })

function removeFromCart(url) {
  cart.value = cart.value.filter(item => item.url !== url)
}

function clearCart() {
  cart.value = []
}
</script>

<template>
  <section class="cart-container">
    <h1 class="main-title">Your Cart</h1>

    <ul v-if="cart.length" class="cart-list">
      <li v-for="item in cart" :key="item.url" class="cart-item">
        <div class="item-info">
          <span class="item-name">{{ item.name }}</span>
          <span class="item-quantity">× {{ item.quantity }}</span>
          <span class="item-price">{{ item.price }}</span>
        </div>
        <button
          class="btn-secondary remove-btn"
          type="button"
          :aria-label="`Remove ${item.name} from cart`"
          @click="removeFromCart(item.url)"
        >
          ✖
          <span class="sr-only">Remove {{ item.name }}</span>
        </button>
      </li>
    </ul>

    <p v-else class="empty-message">Your cart is empty.</p>

    <div v-if="cart.length" class="actions">
      <button class="btn-secondary" @click="clearCart">
        🗑 Clear Cart
      </button>
      <router-link to="/checkout" class="btn-primary">
        Proceed to Checkout
      </router-link>
    </div>
  </section>
</template>

<style scoped>
:root {
  --text: #070c0b;
  --background: #f6fafa;
  --primary: #66ab9f;
  --secondary: #cca4a3;
  --accent: #b2ba82;
}

/* Screen-reader-only text */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.cart-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem 2rem;
  background: var(--background);
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.main-title {
  text-align: center;
  color: var(--text);
  margin-bottom: 1.5rem;
  font-weight: 700;
  font-size: 2rem;
}

.cart-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  transition: background-color 0.2s ease;
}

.cart-item:hover {
  background: #eef7f5;
}

.item-info {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-size: 1rem;
  color: var(--text);
}

.item-name {
  font-weight: 600;
}

.item-quantity,
.item-price {
  color: #555;
}

/* Buttons */
.btn-primary, .btn-secondary {
  display: inline-block;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition: background 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.btn-primary {
  background: var(--primary);
  color: var(--background);
  border: none;
}

.btn-primary:hover,
.btn-primary:focus {
  background: var(--accent);
  outline: 3px solid var(--primary);
  outline-offset: 2px;
}

.btn-secondary {
  background: var(--background);
  border: 1px solid var(--primary);
  color: var(--text);
}

.btn-secondary:hover,
.btn-secondary:focus {
  background: color-mix(in srgb, var(--primary) 10%, transparent);
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

/* Remove button */
.remove-btn {
  font-size: 1.25rem;
  line-height: 1;
  padding: 0.4rem 0.75rem;
}

/* Actions row */
.actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
}

/* Empty cart message */
.empty-message {
  text-align: center;
  font-style: italic;
  color: #888;
  font-size: 1.1rem;
}
</style>
