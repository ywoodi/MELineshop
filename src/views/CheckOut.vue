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
  if (promoCode.value.trim().toLowerCase() === 'save10') {
    promoMessage.value = 'Rabattcode eingelöst: 10% Rabatt!'
  } else {
    promoMessage.value = 'Ungültiger Rabattcode.'
  }
}
</script>

<template>
  <section class="cart-container">
    <h1 class="title">Bestellübersicht</h1>
    <div v-if="cart.length" class="cart-content">
      <ul class="cart-list">
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
      <p class="total">Gesamtsumme: <strong>€{{ totalPrice.toFixed(2).replace('.', ',') }}</strong></p>
    </div>
    <div v-else class="empty-message">
      <p>Dein Warenkorb ist leer.</p>
    </div>
  </section>

  <!-- Kundendaten -->
  <section class="cart-container">
    <h2>Kundendaten</h2>
    <label>
      Vollständiger Name:
      <input v-model="customer.name" type="text" required />
    </label> <br>
    <label>
      E-Mail:
      <input v-model="customer.email" type="email" required />
    </label> <br>
    <label>
      Telefon:
      <input v-model="customer.phone" type="tel" />
    </label>
  </section>

  <!-- Versanddaten -->
  <section class="cart-container">
    <h2>Lieferadresse</h2>
    <label>
      Adresse (Zeile 1):
      <input v-model="shipping.address1" type="text" required />
    </label> <br>
    <label>
      Adresse (Zeile 2):
      <input v-model="shipping.address2" type="text" />
    </label><br>
    <label>
      Stadt:
      <input v-model="shipping.city" type="text" required />
    </label> <br>
    <label>
      Bundesland / Kanton:
      <input v-model="shipping.state" type="text" required />
    </label><br>
    <label>
      Postleitzahl:
      <input v-model="shipping.postalCode" type="text" required />
    </label> <br>
    <label>
      Land:
      <input v-model="shipping.country" type="text" required />
    </label>
  </section>

  <!-- AGB Zustimmung -->
  <section class="cart-container">
    <label>
      <input type="checkbox" v-model="agreedToTerms" required />
      Ich akzeptiere die <a href="/MELineshop/#/terms-of-service" target="_blank">Allgemeinen Geschäftsbedingungen</a>.
    </label>
  </section>

  <!-- Bestellen -->
  <button type="submit" class="btn btn-primary">Bestellung abschließen</button>
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
label, input {
  margin: 0.5rem 0;
}


input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
}

input.invalid,
textarea.invalid {
  border-color: #e74c3c;
  background-color: #fdecea;
}
</style>


