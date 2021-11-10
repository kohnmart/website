<template>
  <div class="container">
    <a name="top"></a>
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
.nuxt-content {
  width: 80%;
  margin: 0 auto;
  p {
    @include p-main;
    width: 800px;
    margin: 0 auto;
    a {
      font-weight: 400;
    }
  }

  h1 {
    @include h1-main;
    margin-top: 70px;
        width: 800px;
  }

  h2 {
    @include h2-main;
    margin: 0.5em auto;
    margin-top: 2em;
    width: 800px;
  }

  h3 {
    @include h3-main;
    width: 800px;
  }

  h4 {
    @include h4-main;
    margin: 0 auto;
    width: 800px;
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
      line-height: 170%;
    }
  }
}
</style>
