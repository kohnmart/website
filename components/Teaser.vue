<template>
  <div class="title">
    <img src="@/assets/img/ballon.jpg" alt="Ballon" />
    <h1>Great, you`re here</h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.title {
  width: 100%;
  img {
    object-fit: contain;
    width: 100%;
    opacity: 0.5;
  }

  h1 {
    position: absolute;
    top: 4em;
    left: 1em;
    font-size: 4em;
  }
}
</style>
