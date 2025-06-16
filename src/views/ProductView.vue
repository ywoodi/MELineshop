<script setup>
import { useRoute } from 'vue-router'
import { computed, ref, watch } from 'vue'
import products from '../assets/productData.json'

const route = useRoute()
const productUrl = route.params.url

const product = computed(() =>
  products.find(p => p.url === productUrl)
)

// Cart logic
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

function addToCart(product) {
  if (!product) return
  const existing = cart.value.find(item => item.url === product.url)
  if (existing) {
    existing.quantity++
  } else {
    cart.value.push({ ...product, quantity: 1 })
  }
  alert(`${product.name} added to cart!`)
}
</script>

<template>
  <div v-if="product">
    <h1>{{ product.name }}</h1>
    <img :src="product.image" :alt="product.name" style="max-width: 400px;" />
    <p>{{ product.description }}</p>
    <p><strong>{{ product.price }}</strong></p>
    <button @click="addToCart(product)">Add to Cart</button>
  </div>
  <div v-else>
    <h1>Product not found.</h1>
  </div>
</template>

<style scoped>
img {
  display: block;
  margin: 1rem 0;
}
</style>
