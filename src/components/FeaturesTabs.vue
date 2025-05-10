<template>
  <div class="features">
    <div class="features__tabs">
      <label 
        v-for="tab in tabs" 
        :key="tab.id"
        class="features__button"
        :class="{ 'features__button--active': selectedTab === tab.id }"
      >
        <input 
          type="radio" 
          v-model="selectedTab" 
          :value="tab.id"
          hidden
        >
        {{ tab.text }}
      </label>
    </div>
    <ul class="features__list">
      <li v-for="(feature, index) in features" :key="index" class="features__item">
        {{ feature }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FeaturesTabs',
  data() {
    return {
      selectedTab: 'features', 
    }
  },
  props: {
    features: {
      type: Array,
      required: true
    },
    tabs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.features {
  &__tabs {
    display: flex;
    gap: 8px;
    margin-bottom: 24px;
  }
  &__button {
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #F0F3F7;
    padding: 9px 16px;
    border: 1px solid #FFFFFF1F;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.2s linear;
    &:hover {
      background-color: #f0f3f71e;
    }
    &--active {
      color: #272E3C;
      background-color: #F0F3F7 !important;
      border: 1px solid #FFFFFF14;
    }
  }
  &__list {
    list-style-position: inside;
  }
  &__item {
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #7F8A9F;
    margin-left: 9px;
  }
}
</style>