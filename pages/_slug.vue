<template>
  <div class="container">
    <nuxt-content :document="post" />
    <return-button></return-button>
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
  margin: 60px auto;
  width: 60%;
  display: block;

  h2 {
    font-size: 3em;
    margin-bottom: 1%;
  }

  h3{
    color: grey;
    font-weight: 300;
  }

  h3,
  p {
    font-size: 1.5;
    width: 90%;
  }
}
</style>
