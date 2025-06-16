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
          <span class="item-quantity">Quantity: {{ item.quantity }}</span>
          <span class="item-price">Price: {{ item.price }}</span>
        </div>
        <button class="btn remove-btn" @click="removeFromCart(item.url)">Remove</button>
      </li>
    </ul>
    <p v-else class="empty-message">Your cart is empty.</p>

    <div v-if="cart.length" class="actions">
      <button class="btn clear-btn" @click="clearCart">Clear Cart</button>
      <router-link to="/checkout">
        <button class="btn checkout-btn">Proceed to Checkout</button>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.cart-container {
  max-width: 520px;
  margin: 2rem auto;
  padding: 1.5rem 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.main-title {
  text-align: center;
  color: #34495e;
  margin-bottom: 1.5rem;
  font-weight: 700;
  font-size: 2rem;
}

.cart-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  transition: background-color 0.2s ease-in-out;
}

.cart-item:hover {
  background-color: #e1f5fe;
}

.item-info {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  font-size: 1rem;
  color: #2c3e50;
}

.item-name {
  font-weight: 600;
}

.item-quantity, .item-price {
  color: #7f8c8d;
}

.btn {
  padding: 0.4rem 0.9rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.remove-btn {
  background-color: #e74c3c;
  color: white;
}

.remove-btn:hover {
  background-color: #c0392b;
}

.clear-btn {
  background-color: #95a5a6;
  color: white;
  margin-right: 1rem;
}

.clear-btn:hover {
  background-color: #7f8c8d;
}

.checkout-btn {
  background-color: #27ae60;
  color: white;
}

.checkout-btn:hover {
  background-color: #219150;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.empty-message {
  text-align: center;
  font-style: italic;
  color: #95a5a6;
  font-size: 1.1rem;
}
</style>
