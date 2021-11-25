<template>
  <div>
    <MainHeader />
    <Nuxt class="nuxt" />
    <MainFooter />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/main.scss";

div {
  margin: 0 auto;
  width: 1200px;
}
@media (max-width: 768px) {
  div {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
