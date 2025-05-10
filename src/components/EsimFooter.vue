<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__container">
        <div class="footer__copyright">© 2024 Esimvpn. All Rights Reserved.</div>
        <div class="footer__links">
          <a href="#" class="footer__link">Terms of Use</a>
          <a href="#" class="footer__link">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'EsimFooter'
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 20px;
  margin-top: 64px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  background-color: #010006;
  
  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
  }
  
  &__copyright {
    color: #7F8A9F;
    opacity: .8;
  }
  
  &__links {
    display: flex;
    gap: 24px;
  }
  
  &__link {
    color: #7F8A9F;
    opacity: .8;
    
    &:hover {
      color: #ffffff;
    }
  }
}
</style>