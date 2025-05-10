<template>
  <div class="app">
    <esim-header />
    <main class="main">
      <breadcrumbs :items="breadcrumbItems" />
      <div class="main__content container">
        <img class="main__image" src="/images/phone-shield.png" alt="">
        <div class="main__info">
          <div class="main__header">
            <img src="/images/continent.svg" alt="">
            <h1 class="main__title">
              eSIM Europe + VPN
            </h1>
          </div>
          <features-tabs :features="features" :tabs="tabs" />
          <subscribe-option :options="options" />
          <buy-button />
        </div>
      </div>
    </main>
    <contact-button />
    <esim-footer />
  </div>
</template>

<script>
import EsimHeader from '@/components/EsimHeader.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import FeaturesTabs from '@/components/FeaturesTabs.vue'
import SubscribeOption from '@/components/SubscribeOptions.vue'
import BuyButton from '@/components/BuyButton.vue'
import EsimFooter from '@/components/EsimFooter.vue'
import ContactButton from '@/components/ContactButton.vue'

export default {
  name: 'App',
  components: {
    EsimHeader,
    Breadcrumbs,
    FeaturesTabs,
    SubscribeOption,
    BuyButton,
    EsimFooter,
    ContactButton
  },
  data() {
    return {
      breadcrumbItems: [
        'Home',
        'Region',
        'Europe'
      ],
      tabs: [
        { id: 'features', text: 'Features', active: true },
        { id: 'tech-specs', text: 'Tech specs', active: false }
      ],
      features: [
        '33 countries',
        'Reliable connection from best networks.',
        'You will only get mobile data and keep your original phone number.',
        'Works with all smartphones with eSIM technology.'
      ],
      options: [
        {
          id: 1,
          dataAmount: '500 MB',
          dataType: 'eSIM',
          dataDuration: '7 days',
          vpnAmount: '∞ GB',
          vpnDuration: '7 days VPN',
          price: '$ 10.00',
          originalPrice: null,
          discount: null,
          selected: true
        },
        {
          id: 2,
          dataAmount: '1 GB',
          dataType: 'eSIM',
          dataDuration: '30 days',
          vpnAmount: '∞ GB',
          vpnDuration: '30 days VPN',
          price: '$ 20.00',
          originalPrice: null,
          discount: null,
          selected: false
        },
        {
          id: 3,
          dataAmount: '3 GB',
          dataType: 'eSIM',
          dataDuration: '30 days',
          vpnAmount: '∞ GB',
          vpnDuration: '30 days VPN',
          price: '$ 30.00',
          originalPrice: null,
          discount: null,
          selected: false
        },
        {
          id: 4,
          dataAmount: '5 GB',
          dataType: 'eSIM',
          dataDuration: '7 days',
          vpnAmount: '∞ GB',
          vpnDuration: '6 months VPN',
          price: '$ 42.12',
          originalPrice: '$ 50.00',
          discount: 50,
          selected: false
        },
        {
          id: 5,
          dataAmount: '10 GB',
          dataType: 'eSIM',
          dataDuration: '60 days',
          vpnAmount: '∞ GB',
          vpnDuration: '6 months VPN',
          price: '$ 51.03',
          originalPrice: '$ 60.00',
          discount: 50,
          selected: false
        },
        {
          id: 6,
          dataAmount: '20 GB',
          dataType: 'eSIM',
          dataDuration: '60 days',
          vpnAmount: '∞ GB',
          vpnDuration: '1 year VPN',
          price: '$ 80.00',
          originalPrice: null,
          discount: null,
          selected: false
        }
      ]
    }
  }
}
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