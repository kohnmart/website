<template>
  <div class="container">
    <nuxt-content :document="post" />
    <return-button></return-button>
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
.container {
  margin: 60px auto;
  width: 70%;
  display: block;

  p {
    @include p-main;
    width: 60%;
    margin: 0 auto;
  }

  h1 {
    @include h1-main;
  }

  h2 {
    @include h2-main;
    margin: 0.5em auto;
    margin-top: 2em;
    width: 60%;
  }

  h3 {
    @include h3-main;
  }

  h4 {
    @include h4-main;
    margin: 0 auto;
    width: 60%;
  }
}
@media (max-width: 600px) {
  .container {
    padding: 10px;
    margin: 40px auto;
    width: 90%;
    h1 {
      font-size: $h1 * 0.7;
    }
    h2,
    p,
    h4 {
      width: 80%;
    }

    p {
      font-size: $p * 0.7;
      line-height: 170%;
    }
    h4 {
      color: grey;
      font-size: $h4 * 0.7;
      font-weight: 400;
    }
  }
}
</style>
