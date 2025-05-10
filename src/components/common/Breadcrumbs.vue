<template>
  <nav class="breadcrumbs container">
    <ul class="breadcrumbs__list">
      <li v-for="(item, index) in items" :key="index" class="breadcrumbs__item">
        <a href="#" class="breadcrumbs__link">
          {{ item }}
        </a>
        <span class="breadcrumbs__separator">/</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  padding-top: 16px;
  padding-bottom: 16px;
  &__list {
    display: flex;
    list-style: none;
    gap: 16px;
  }
  
  &__item {
    display: flex;
    align-items: center;
    gap: 16px;
    &:last-child {
      .breadcrumbs__link {
        cursor: default;
        pointer-events: none;
        color: #7F8A9F;
      }
      .breadcrumbs__separator {
        display: none;
      }
    }
  }
  
  &__link {
    font-weight: 400;
    font-size: 14px;
    line-height: 145%;
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
  }
  
  &__separator {
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    line-height: 145%;
    color: #7F8A9F;
  }
}
</style>