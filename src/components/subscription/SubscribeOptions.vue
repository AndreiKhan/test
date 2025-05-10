<template>
  <div class="options">
    <label 
      v-for="option in options" 
      :key="option.id" 
      class="options__item" 
      :class="{ 'options__item--selected': selectedOption === option.id}"
    >
      <input 
        type="radio" 
        v-model="selectedOption" 
        :value="option.id"
        hidden
      >
      <div class="options__content">
        <div class="options__data">
          <div class="options__data-left">
            <div class="options__data-amount">{{ option.dataAmount }}</div>
            <div class="options__data-duration">{{ option.dataDuration }} {{ option.dataType }}</div>
          </div>
          <div class="options__data-right">
            <div class="options__data-amount">{{ option.vpnAmount }}</div>
            <div class="options__data-duration">{{ option.vpnDuration }}</div>
          </div>
        </div>
        <div v-if="option.discount" class="options__discount">
          <div class="options__discount--circle circle-left" />
          -{{ option.discount }}%
          <div class="options__discount--circle circle-right" />
        </div>
        <div class="options__price-container">
          <div class="options__price">
            <div class="options__price-current" :class="{ 'price-discount': option.discount}">{{ option.price }}</div>
            <div v-if="option.originalPrice" class="options__price-original">{{ option.originalPrice }}</div>
          </div>
          <div class="options__radio">
            <div class="options__radio-inner" v-if="selectedOption === option.id"></div>
          </div>
        </div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'SubscribeOptions',
  data() {
    return {
      selectedOption: 1, 
    }
  },
  props: {
    options: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.options {
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  &__item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 8px 20px;
    cursor: pointer;
    
    &--selected {
      border: 2px solid #775CFF;
      padding: 7px 19px;
    }
  }
  
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }
  
  &__data {
    display: flex;
    gap: 16px;
  }

  
  &__data-left, &__data-right {
    display: flex;
    flex-direction: column;
  }

  &__data-left {
    width: 183px;
  }

  &__data-right {
    width: 91px;
  }
  
  &__data-amount {
    font-weight: bold;
    font-weight: 700;
    font-size: 20px;
    line-height: 140%;
    color: #F0F3F7;
  }
  
  &__data-duration {
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #7F8A9F;
  }
  
  &__price-container {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  
  &__discount {
    position: relative;
    background: linear-gradient(270deg, #B947FF 0%, #8A73FF 100%);
    color: #ffffff;
    padding: 3px 6px;
    font-weight: 700;
    font-size: 12px;
    line-height: 120%;
    padding: 4px 8px;
    &--circle {
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #181E29;
    }
    .circle-left {
      left: -4px;
      top: 8px;
    }
    .circle-right {
      right: -4px;
      top: 8px;
    }
  }
  
  &__price {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .price-discount {
      color: #FF86A4;
    }
  }
  
  &__price-current {
    font-weight: 700;
    font-size: 20px;
    line-height: 140%;
  }
  
  &__price-original {
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: line-through;
  }
  
  &__radio {
    width: 20px;
    height: 20px;
    border: 1px solid #FFFFFF3D;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .options__item--selected & {
      border-color: #7b5bf2;
      background-color: #7b5bf2;
    }
  }
  
  &__radio-inner {
    width: 10px;
    height: 10px;
    background-color: #FFFFFF;
    border-radius: 50%;
  }
}
</style>