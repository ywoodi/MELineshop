<script setup>
import { ref, computed } from 'vue'

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
    const price = parseFloat(item.price) || 0
    const quantity = Number(item.quantity) || 0
    return sum + price * quantity
  }, 0)
})

const customer = ref({
  name: '',
  email: '',
  phone: '',
})

const shipping = ref({
  address1: '',
  address2: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
  method: 'standard',
})

const payment = ref({
  cardNumber: '',
  expiration: '',
  cvv: '',
  nameOnCard: '',
})

const promoCode = ref('')
const promoMessage = ref('')
const agreedToTerms = ref(false)

function applyPromo() {
  // placeholder promo code logic
  if (promoCode.value.trim().toLowerCase() === 'save10') {
    promoMessage.value = 'Promo code applied: 10% discount!'
  } else {
    promoMessage.value = 'Invalid promo code.'
  }
}
</script>

<template>
  <section class="cart-container">
    <h1 class="title">Your Order Summary</h1>
    <div v-if="cart.length" class="cart-content">
      <!-- <ul class="cart-list">
        <li v-for="item in cart" :key="item.url" class="cart-item">
          <img class="img-small" :src="item.image" :alt="item.imgAlt" />
          <span class="item-name">{{ item.name }}</span>
          <span class="item-qty">x {{ item.quantity }}</span>
          <span class="item-price">€{{ Number(item.price).toFixed(2) }}</span>
        </li>
      </ul> -->
          <ul v-if="cart.length" class="cart-list">
      <li v-for="item in cart" :key="item.url" class="cart-item">
        <div class="item-info">
          <img class="img-small" :src="item.image" :alt="item.imgAlt" />
          <div class="item-text">
            <div class="name-qty">
              <span class="item-name">{{ item.name }}</span>
              <span class="item-quantity">× {{ item.quantity }}</span>
            </div>
            <span class="item-price">
              Einzelpreis: €
              {{ Number(item.price).toFixed(2).replace('.', ',') }} (inkl.
              MwSt., zzgl. Versand)
            </span>
          </div>
        </div>

      </li>
    </ul>
      <p class="total">Total: <strong>€{{ totalPrice.toFixed(2) }}</strong></p>
    </div>
    <div v-else class="empty-message">
      <p>Your cart is empty.</p>
    </div>
  </section>

  <!-- Customer Information -->
  <section>
    <h2>Customer Information</h2>
    <label>
      Full Name:
      <input v-model="customer.name" type="text" required />
    </label>
    <label>
      Email:
      <input v-model="customer.email" type="email" required />
    </label>
    <label>
      Phone:
      <input v-model="customer.phone" type="tel" />
    </label>
  </section>

  <!-- Shipping Information -->
  <section>
    <h2>Shipping Address</h2>
    <label>
      Address Line 1:
      <input v-model="shipping.address1" type="text" required />
    </label>
    <label>
      Address Line 2:
      <input v-model="shipping.address2" type="text" />
    </label>
    <label>
      City:
      <input v-model="shipping.city" type="text" required />
    </label>
    <label>
      State/Province:
      <input v-model="shipping.state" type="text" required />
    </label>
    <label>
      Postal Code:
      <input v-model="shipping.postalCode" type="text" required />
    </label>
    <label>
      Country:
      <input v-model="shipping.country" type="text" required />
    </label>
    <label>
      Shipping Method:
      <select v-model="shipping.method" required>
        <option value="standard">Standard (5-7 days) - $5.00</option>
        <option value="express">Express (2-3 days) - $15.00</option>
        <option value="overnight">Overnight - $25.00</option>
      </select>
    </label>
  </section>

  <!-- Payment Information -->
  <section>
    <h2>Payment Information</h2>
    <label>
      Card Number:
      <input
        v-model="payment.cardNumber"
        type="text"
        maxlength="19"
        placeholder="1234 5678 9012 3456"
        required
      />
    </label>
    <label>
      Expiration Date (MM/YY):
      <input
        v-model="payment.expiration"
        type="text"
        maxlength="5"
        placeholder="MM/YY"
        required
      />
    </label>
    <label>
      CVV:
      <input v-model="payment.cvv" type="text" maxlength="4" required />
    </label>
    <label>
      Name on Card:
      <input v-model="payment.nameOnCard" type="text" required />
    </label>
  </section>

  <!-- Promo Code -->
  <section>
    <h2>Promo Code</h2>
    <input v-model="promoCode" type="text" placeholder="Enter promo code" />
    <button type="button" class="btn btn-primary" @click="applyPromo">Apply</button>
    <p v-if="promoMessage">{{ promoMessage }}</p>
  </section>

  <!-- Terms and Conditions -->
  <section>
    <label>
      <input type="checkbox" v-model="agreedToTerms" required />
      I agree to the <a href="#" target="_blank">terms and conditions</a>.
    </label>
  </section>

  <!-- Submit -->
  <button type="submit" class="btn btn-primary">Place Order</button>
</template>

<style scoped>
.img-small {
  width: 130px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 7px 0 0 7px;
  flex-shrink: 0;
}

h1 {
  margin-bottom: 2rem;
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
  width: 800px;
  margin: 2rem auto;
  padding: 1.5rem 2rem;
  border-radius: 7px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
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
  border-radius: 7px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  padding: 0 0.75rem 0 0;
  transition: background-color 0.2s ease;
}

.cart-item:hover {
  background: var(--secondary);
}

.item-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-grow: 1;
}

.item-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;
  flex-grow: 1;
}

.name-qty {
  display: flex;
  gap: 0.75rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--accent);
  align-items: baseline;
}

.item-name {
  margin: 0;
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--accent);
}

.item-quantity {
  font-weight: 500;
  color: var(--text);
  font-size: 1rem;
}

.item-price {
  margin-top: 5px;
  font-weight: 500;
  color: var(--text);
  font-size: 1.1rem;
}
.total {
  text-align: right;
  font-weight: 700;
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #000;
}
</style>


