<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__logo">
        <img class="header__logo-image" src="/images/logo.svg" alt="">
      </div>
      <div class="header__actions">
        <a href="#" class="header__help-button">
          <svg class="header__help-button__image" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.16666 15.0003H10.8333V13.3337H9.16666V15.0003ZM9.99999 1.66699C8.90564 1.66699 7.82201 1.88254 6.81096 2.30133C5.79991 2.72012 4.88125 3.33395 4.10743 4.10777C2.54463 5.67057 1.66666 7.79019 1.66666 10.0003C1.66666 12.2105 2.54463 14.3301 4.10743 15.8929C4.88125 16.6667 5.79991 17.2805 6.81096 17.6993C7.82201 18.1181 8.90564 18.3337 9.99999 18.3337C12.2101 18.3337 14.3297 17.4557 15.8925 15.8929C17.4553 14.3301 18.3333 12.2105 18.3333 10.0003C18.3333 8.90598 18.1178 7.82234 17.699 6.8113C17.2802 5.80025 16.6664 4.88159 15.8925 4.10777C15.1187 3.33395 14.2001 2.72012 13.189 2.30133C12.178 1.88254 11.0943 1.66699 9.99999 1.66699ZM9.99999 16.667C6.32499 16.667 3.33332 13.6753 3.33332 10.0003C3.33332 6.32533 6.32499 3.33366 9.99999 3.33366C13.675 3.33366 16.6667 6.32533 16.6667 10.0003C16.6667 13.6753 13.675 16.667 9.99999 16.667ZM9.99999 5.00033C9.11593 5.00033 8.26809 5.35151 7.64297 5.97664C7.01785 6.60176 6.66666 7.4496 6.66666 8.33366H8.33332C8.33332 7.89163 8.50892 7.46771 8.82148 7.15515C9.13404 6.84259 9.55796 6.66699 9.99999 6.66699C10.442 6.66699 10.8659 6.84259 11.1785 7.15515C11.4911 7.46771 11.6667 7.89163 11.6667 8.33366C11.6667 10.0003 9.16666 9.79199 9.16666 12.5003H10.8333C10.8333 10.6253 13.3333 10.417 13.3333 8.33366C13.3333 7.4496 12.9821 6.60176 12.357 5.97664C11.7319 5.35151 10.884 5.00033 9.99999 5.00033Z" fill="#F0F3F7"/>
          </svg>
          Help
        </a>
        <button class="header__start-button">Get started</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'EsimHeader'
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  border-bottom: 1px solid #FFFFFF14;
  padding-top: 16px;
  padding-bottom: 16px;
  
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  &__logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  &__actions {
    display: flex;
    gap: 24px;
    align-items: center;
  }
  
  &__help-button {
    display: flex;
    align-items: center;
    gap: 4px;
    background: none;
    border: none;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
  }
  
  &__help-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 1px solid #ffffff;
    border-radius: 50%;
    font-size: 12px;
  }
  
  &__start-button {
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    background-color: #7b5bf2;
    color: #ffffff;
    border-radius: 50px;
    border: 1.25px solid #FFFFFF14;
    padding: 9px 24px;
    width: 100%;
    cursor: pointer;
  }
}
</style>