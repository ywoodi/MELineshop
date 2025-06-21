<script setup>
const props = defineProps({
  show: Boolean,
  message: {
    type: String,
    default: 'Benachrichtigung',
  },
});
</script>

<template>
  <transition name="fade-slide">
    <div v-if="show" class="toast" role="status" aria-live="polite">
      {{ message }}
    </div>
  </transition>
</template>


<style scoped>
.toast {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  background: #333;
  color: #fff;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  font-size: 0.95rem;
  z-index: 1000;
}

/* Animations */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
