<template>
  <div class="container">
    <a name="top"></a>
    <nuxt-content :document="post" />
    <home-button></home-button>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content("projects", params.slug).fetch();
    return { post };
  }
};
</script>

<style lang="scss">
@import "@/assets/css/main.scss";
</style>
