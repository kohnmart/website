<template>
  <div></div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/main.scss";

div {
  background-image: url("~/assets/img/land.webp");
  width: 100%;
  height: 800px;
  background-attachment: fixed;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: -100px;
}
@media (max-width: 600px) {
  div {
    height: 600px;
    background-size: cover;
    background-position-y: 0px;
  }
}
</style>
