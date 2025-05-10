<template>
  <div class="secure-payment">
    <div class="secure-payment__icon">✓</div>
    <div class="secure-payment__text">Secure payment guaranteed.</div>
  </div>
</template>

<script>
export default {
  name: 'SecurePayment'
}
</script>

<style lang="scss" scoped>
.secure-payment {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  
  &__icon {
    color: #4caf50;
    font-weight: bold;
  }
  
  &__text {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
  }
}
</style>