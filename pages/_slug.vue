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
.nuxt-content {
  width: 80%;
  margin: 0 auto;
  p {
    @include p-main;
    margin: 0 auto;
    a {
      font-weight: 400;
    }
  }

  p,
  h1,
  h2,
  h3,
  h4 {
    width: 800px;
  }

  h1 {
    @include h1-main;
    margin-top: 70px;
  }

  h2 {
    @include h2-main;
    margin: 0.5em auto;
    margin-top: 2em;
  }

  h3 {
    @include h3-main;
  }

  h4 {
    @include h4-main;
    margin: 0 auto;
  }
}
@media (max-width: 768px) {
  .nuxt-content {
    padding: 10px;
    margin: 40px auto;
    width: 80%;
    h1 {
      font-size: $h1 * 0.5;
      width: 600px;
    }

    p,
    h1,
    h2,
    h3,
    h4 {
      width: 95%;
    }

    p {
      line-height: 170%;
    }
  }
}
</style>
