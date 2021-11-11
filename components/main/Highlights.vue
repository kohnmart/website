<template>
  <div class="bg_image"></div>
</template>

<style lang="scss" scoped>
.bg_image {
  background-image: url("~/assets/img/bg.webp");
  width: 100%;
  height: 1050px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: -300px;
}
@media (max-width: 768px) {
  .bg_image {
    height: 700px;
    background-size: cover;
    background-position-y: 0px;
  }
}
</style>
