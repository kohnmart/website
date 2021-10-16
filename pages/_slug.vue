<template>
    <div class="container">
      <nuxt-content :document="post" />
    </div>
</template>
<script>
export default {
  data() {
    return {
      store: []
    };
  },
  async asyncData({ $content, params }) {
    const post = await $content("projects", params.slug).fetch();
    return { post };
  }
};
</script>

<style lang="scss">
@import "@/assets/css/main.scss";
.container {
  margin: auto;
  width: 90%;
  display: block;
}

</style>
