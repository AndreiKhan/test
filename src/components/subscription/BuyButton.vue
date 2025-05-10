<template>
  <div class="button">
    <button class="buy-button">Buy now</button>
    <div class="secure-payment">
      <img class="secure-payment__icon" src="/images/shield.svg" alt="">
      <div class="secure-payment__text">Secure payment guaranteed.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuyButton'
}
</script>

<style lang="scss" scoped>
.buy-button {
  width: 100%;
  padding: 17px;
  background-color: #7b5bf2;
  color: #ffffff;
  border: none;
  border-radius: 50px;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  cursor: pointer;
  margin-bottom: 12px;
  
  &:hover {
    background-color: #8d73eb;
  }
}
.secure-payment {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &__icon {
    width: 20px;
    height: 20px;
  }
  
  &__text {
    color: #6F7388;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;

  }
}
</style>