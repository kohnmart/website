<template>
  <div class="bg_image"></div>
</template>

<style lang="scss" scoped>
.bg_image {
  background-image: url("~/assets/img/land.webp");
  width: 100%;
  height: 800px;
  background-attachment: fixed;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: -100px;
}
@media (max-width: 768px) {
  .bg_image {
    height: 600px;
    background-size: cover;
    background-position-y: 0px;
  }
}
</style>
