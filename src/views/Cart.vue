<script setup>
import { useCart } from '../composables/useCart';

const { cart, removeFromCart, clearCart } = useCart();

</script>

<template>
  <section class="cart-container" aria-labelledby="cart-heading">
    <h1 id="cart-heading">Dein Einkaufswagen</h1>

    <!-- Show cart items -->
    <ul v-if="cart.length" class="cart-list" role="list">
      <li v-for="item in cart" :key="item.url" class="cart-item" role="listitem">
        <div class="item-info">
          <img
            class="img-small"
            :src="item.image"
            :alt="item.imgAlt"
            loading="lazy"
            width="80"
            height="80"
          />
          <div class="item-text">
            <div class="name-qty">
              <span class="item-name">{{ item.name }}</span>
              <span class="item-quantity" aria-label="Menge">× {{ item.quantity }}</span>
            </div>
            <span class="item-price">
              Einzelpreis: €
              {{ Number(item.price).toFixed(2).replace('.', ',') }} (inkl.
              MwSt., zzgl. Versand)
            </span>
          </div>
        </div>
        <button
          class="btn btn-outline"
          type="button"
          :aria-label="`Produkt ${item.name} aus Warenkorb entfernen`"
          @click="removeFromCart(item.url)"
        >
          ✖
          <span class="sr-only">Löschen {{ item.name }}</span>
        </button>
      </li>
    </ul>

    <!-- Empty cart message -->
    <div v-else>
      <p class="empty-message" role="alert" aria-live="polite">...ist leer :(</p>
      <router-link
        to="/products"
        class="btn btn-primary"
        role="link"
        aria-label="Zu unseren Produkten"
      >
        Zu unseren Produkten
      </router-link>
    </div>

    <!-- Actions if cart has items -->
    <div v-if="cart.length" class="actions">
      <button
        class="btn btn-secondary"
        type="button"
        @click="clearCart"
        aria-label="Alle Produkte aus dem Warenkorb löschen"
      >
        🗑 Warenkorb leeren
      </button>
      <router-link
        to="/checkout"
        class="btn btn-primary"
        role="link"
        aria-label="Zur Kasse gehen und den Zahlungsvorgang starten"
      >
        Zur Kasse gehen
      </router-link>
    </div>
  </section>
</template>



<style scoped>
.img-small {
  width: 130px;
  height: 130px;
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

/* Actions row */
.actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
}
</style>
