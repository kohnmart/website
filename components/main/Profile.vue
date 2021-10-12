<template>
  <div>
    <h1>About Me_</h1>
    <img src="@/assets/img/ny.jpg" alt="Ballon" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/css/main.scss";
div {
  margin-top: 10%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  h1 {
    font-weight: $h1;
    margin-bottom: 10%;
    text-align: center;
  }

  img {
    object-fit: cover;
    width: 50%;
    border-radius: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
