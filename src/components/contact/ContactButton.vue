<template>
  <div class="contact-us">
    <div class="contact-us__container" @click="openContactPopup">
      <img class="contact-us__image" src="/images/message.svg" alt="">
      <div class="contact-us__push" />
    </div>
    <contact-popup :is-open="widgetPopupIsOpen" @close="closeContactPopup" />
  </div>
</template>

<script>
import ContactPopup from '@/components/popup/ContactPopup.vue';

export default {
  name: 'ContactButton',
  components: {
    ContactPopup
  },
  data() {
    return {
      widgetPopupIsOpen: false
    }
  },
  methods: {
    openContactPopup() {
      this.widgetPopupIsOpen = true
    },
    closeContactPopup() {
      this.widgetPopupIsOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-us {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1px solid #00000014;
  background-color: #F0F3F7;
  cursor: pointer;
  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
  }
  &__image {
    width: 32px;
    height: 32px;
  }
  &__push {
    position: absolute;
    top: 2px;
    right: 2px;
    border: 2px solid #181E29;
    border-radius: 50%;
    background-color: #F83F6C;
    width: 12px;
    height: 12px;
  }
}
</style>