<template>
  <div class="app">
    <esim-header />
    <main class="main">
      <breadcrumbs :items="BREADCRUMB_ITEMS" />
      <div class="main__content container">
        <img class="main__image" src="/images/phone-shield.png" alt="">
        <div class="main__info">
          <div class="main__header">
            <img src="/images/continent.svg" alt="">
            <h1 class="main__title">
              eSIM Europe + VPN
            </h1>
          </div>
          <features-tabs :features="FEATURES" :tabs="TABS" />
          <subscribe-option :options="options" />
          <buy-button />
        </div>
      </div>
    </main>
    <contact-button />
    <esim-footer />
  </div>
</template>

<script setup>
import { BREADCRUMB_ITEMS } from '@/constants/breadcrumbs'
import { TABS } from '@/constants/tabs'
import { FEATURES } from '@/constants/features'
import { useSubscription } from '@/composables/useSubscription'
import EsimHeader from '@/components/layout/EsimHeader.vue'
import Breadcrumbs from '@/components/common/Breadcrumbs.vue'
import FeaturesTabs from '@/components/features/FeaturesTabs.vue'
import SubscribeOption from '@/components/subscription/SubscribeOptions.vue'
import BuyButton from '@/components/subscription/BuyButton.vue'
import EsimFooter from '@/components/layout/EsimFooter.vue'
import ContactButton from '@/components/contact/ContactButton.vue'

const { options } = useSubscription()
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: radial-gradient(circle at top right, #4632A3 0%, #010006 47%);
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  
  &__content {
    display: flex;
    justify-content: space-between;
    gap: 96px;
    
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 120%;
    color: #F0F3F7;
  }
  
  &__image {
    width: 406px;
    height: 585px;
  }
  
  &__info {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 16px;
  }
}
</style>