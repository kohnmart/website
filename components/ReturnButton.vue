<template>
  <div class="bar">
    <div class="res">
      <Button class="return">
        <nuxt-link to="/projects"><i class="fas fa-home"></i></nuxt-link>
      </Button>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.bar {
  margin: 50px auto;
  .res {
    text-align: center;
    .return {
      background: none;
      border:none;
      .fas {
        font-size: 1.5em;
        opacity: 0.5;
        padding: 5px;
        width: 100px;
      }
    }
  }
}
</style>
