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
  background-image: url("~/assets/img/land.jpg");
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
    background-image: url("~/assets/img/land.jpg");
    width: 100%;
    height: 600px;
    background-size: cover;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: 0px;
  }
}
</style>
