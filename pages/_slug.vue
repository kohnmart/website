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
  h2,
  h3,
  h4,
  p {
    width: 75%;
  }

  h1 {
    font-size: $h1;
  }

  h2 {
    font-size: 3em;
    font-weight: 600;
    margin: 0.5em auto;
    margin-top: 1em;
  }

  h3 {
    font-weight: 400;
    font-size: $h3;
    margin-bottom: 1.4em;
  }

  h4 {
    @include h4-main;
  }

  p {
    @include p-main;

    a {
      text-decoration: none;
      color: black;
      font-size: 1.2em;
    }
    a:hover {
      text-decoration-line: underline;
    }
  }
}
@media (max-width: 600px) {
  .container {
    padding: 10px;
    margin: 40px auto;
    width: 90%;
    h1 {
      font-size: 2em;
      margin-bottom: 0.5em;
    }
    h2 {
      font-size: 1.5em;
      margin: 0.4em auto;
    }
    h3 {
      font-size: $h3;
      margin-bottom: 0.5em;
    }
    p {
      @include p-responsive;
      a {
        text-decoration: none;
        color: black;
        font-size: 1.2em;
      }

      a:hover {
        text-decoration-line: underline;
      }
    }
    h4 {
      @include h4-main;
      font-size: $h4 * 1.008;
    }
  }
}
</style>
