<template>
  <ModalPopup :is-open="isOpen" :title="'Contact support'" @close="close">
    <div v-if="messageSend" class="contact-popup">
      <p class="contact-popup__text">
        Get in touch with our support team if you need help.
      </p>
      <input
        class="contact-popup__input"
        type="email"
        placeholder="Email"
      >
      <textarea
        class="contact-popup__textarea"
        placeholder="Your message"
      />
      <button class="contact-popup__button" @click="sendMessage">
        Send
      </button>
      <p class="contact-popup__agreement">
        By clicking 'Send' I agree with
        <a class="contact-popup__link" href="#">
          Privacy Policy
        </a>
      </p>
    </div>
    <div v-else class="contact-popup--close">
      <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="96" height="96" rx="48" fill="#775CFF"/>
        <path d="M66 37.9997L42 61.9997L31 50.9997L33.82 48.1797L42 56.3397L63.18 35.1797L66 37.9997Z" fill="white"/>
      </svg>
      <p class="contact-popup__text">
        Your message has been sent
      </p>
      <button class="contact-popup__button--close" @click="close">
        close
      </button>
    </div>
  </ModalPopup>
</template>

<script>
import ModalPopup from '@/components/popup/ModalPopup.vue'
export default {
  name: 'ContactPopup',
  components: {
    ModalPopup
  },
  data() {
    return {
      messageSend: true
    }
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    sendMessage() {
      this.messageSend = false
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-popup {
  display: flex;
  flex-direction: column;
  gap: 16px;
  &--close {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
  }
  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #7F8A9F;
  }
  &__input {
    border: none;
    outline: none;
    border-radius: 12px;
    color: #7F8A9F;
    padding: 17px 16px;
    background-color: #272E3C;
    &::placeholder {
      color: #7F8A9F;
    }
  }
  &__textarea {
    border: none;
    border-radius: 12px;
    outline: none;
    height: 144px;
    overflow: auto;
    padding: 17px 16px;
    background-color: #272E3C;
    color: #7F8A9F;
    resize: none;
    &::placeholder {
      color: #7F8A9F;
    }
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
  }
  &__button {
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    color: #FFFFFF;
    padding: 12px;
    border-radius: 50px;
    background-color: #775CFF;
    border: 1.25px solid #FFFFFF14;
    outline: none;
    cursor: pointer;
    &:hover {
      background-color: #8d73eb;
    }
    &--close {
      width: 100%;
      background-color: transparent;
      color: #F0F3F7;
      font-weight: 500;
      font-size: 16px;
      line-height: 140%;
      padding: 12px;
      border-radius: 50px;
      border: 1.25px solid #FFFFFF1F;
      outline: none;
      cursor: pointer;
      &:hover {
        background-color: #f0f3f71e;
      }
    }
  }
  &__agreement {
    width: 100%;
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: #7F8A9F;
  }
  &__link {
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: #7F8A9F !important;
    text-decoration: underline;
  }
}
</style>
