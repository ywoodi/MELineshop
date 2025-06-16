<script setup>
import { ref, computed, watch } from 'vue'

const CART_KEY = 'my-shop-cart'
const cart = ref([])

function loadCart() {
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

const totalPrice = computed(() => {
  return cart.value.reduce((sum, item) => {
    const cleanedPrice = item.price.replace(/[^0-9.]/g, '')
    const price = parseFloat(cleanedPrice) || 0
    const quantity = Number(item.quantity) || 0
    return sum + price * quantity
  }, 0)
})
</script>

<template>
  <section class="cart-container">
    <h1 class="title">Your Shopping Cart</h1>
    <div v-if="cart.length" class="cart-content">
      <ul class="cart-list">
        <li v-for="item in cart" :key="item.url" class="cart-item">
          <span class="item-name">{{ item.name }}</span>
          <span class="item-qty">x {{ item.quantity }}</span>
          <span class="item-price">{{ item.price }}</span>
        </li>
      </ul>
      <p class="total">Total: <strong>€{{ totalPrice.toFixed(2) }}</strong></p>
    </div>
    <div v-else class="empty-message">
      <p>Your cart is empty.</p>
    </div>
  </section>
</template>

<style scoped>
.cart-container {
  max-width: 480px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.title {
  text-align: center;
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.cart-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.2rem 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e0e0e0;
  font-size: 1.1rem;
  color: #34495e;
}

.cart-item:last-child {
  border-bottom: none;
}

.item-name {
  flex-grow: 1;
  font-weight: 600;
}

.item-qty {
  margin: 0 1rem;
  color: #7f8c8d;
}

.item-price {
  font-weight: 700;
  color: #27ae60;
}

.total {
  text-align: right;
  font-size: 1.3rem;
  color: #2c3e50;
  border-top: 2px solid #27ae60;
  padding-top: 0.75rem;
}

.empty-message {
  text-align: center;
  font-size: 1.2rem;
  color: #95a5a6;
  font-style: italic;
}
</style>
