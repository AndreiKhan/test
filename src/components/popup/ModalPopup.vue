<template>
  <transition name="modal-popup">
    <div v-if="isOpen" class="modal-popup">
      <div class="modal-popup__overlay" @click="close" />
      <div ref="modalContainer" class="modal-popup__container">
        <div class="modal-popup__header">
          <h2 class="modal-popup__title">
            {{ title }}
          </h2>
          <button class="modal-popup__close" @click="close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.46 12L19 17.54V19H17.54L12 13.46L6.46 19H5V17.54L10.54 12L5 6.46V5H6.46L12 10.54L17.54 5H19V6.46L13.46 12Z" fill="#7F8A9F"/>
            </svg>
          </button>
        </div>
        <div class="modal-popup__content">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalPopup',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Модальное окно'
    }
  },
  watch: {
    isOpen (newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden'
        this.$nextTick(() => {
          document.addEventListener('keydown', this.handleEscKey)
        })
      } else {
        document.body.style.overflow = 'auto'
        document.removeEventListener('keydown', this.handleEscKey)
      }
    }
  },
  mounted () {
    if (this.isOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', this.handleEscKey)
    }
  },
  beforeUnmount () {
    document.body.style.overflow = 'auto'
    document.removeEventListener('keydown', this.handleEscKey)
  },
  methods: {
    close () {
      this.$emit('close')
    },
    handleEscKey (e) {
      if (e.key === 'Escape') {
        this.close()
      }
    }
  }
}
</script>

<style scoped>
.modal-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-popup__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

.modal-popup__container {
  background-color: #151324;
  border-radius: 24px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0px 4px 48px 0px #01000680;
  border: 1px solid #FFFFFF14;
}

.modal-popup__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 32px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  font-weight: 600;
  font-size: 22px;
  line-height: 110%;
}

.modal-popup__title {
  margin: 0;
  font-weight: 700;
  font-size: 36px;
  line-height: 120%;
  color: #F0F3F7;
}

.modal-popup__close {
  background: none;
  border: none;
  cursor: pointer;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-popup__content {
  padding: 24px 32px;
}

.modal-popup-enter-active,
.modal-popup-leave-active {
  transition: opacity 0.3s ease;
}

.modal-popup-enter-active .modal-popup__container {
  animation: modal-popup-appear 0.3s ease;
}

.modal-popup-leave-active .modal-popup__container {
  animation: modal-popup-appear 0.3s ease reverse;
}

.modal-popup-enter,
.modal-popup-leave-to {
  opacity: 0;
}

@keyframes modal-popup-appear {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
