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
    display: inline-block;
    width: 1000px;
  .res {
    margin: auto;
    width: 50%;
    text-align: center;
    .return {
      background: none;
      border: 2px solid rgb(161, 161, 161);
      border-radius: 5px;
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
