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

  h1 {
    font-size: 4em;
  }

  h2 {
    font-size: 3em;
    font-weight: 600;
    margin: 0.5em auto;
    margin-top: 1em;
    width: 60%;
  }

  h3 {
    font-weight: 400;
    margin-bottom: 2em;
  }

  p {
    font-size: 1.1em;
    width: 60%;
    margin: 0 auto;
    font-weight: 300;
    line-height: 170%;
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
    color: grey;
    font-size: 1.2em;
    font-weight: 400;
    margin-bottom: 0.5em;
    margin: 0 auto;
    width: 60%;
    line-height: 200%;
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
      font-size: 0.9em;
      margin-bottom: 0.5em;
    }

    p {
      font-size: 0.6em;
      font-weight: 300;
      line-height: 170%;
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
      color: grey;
      font-size: 0.8em;
      font-weight: 400;
      margin-bottom: 0.5em;
      margin: 0 auto;
      line-height: 200%;
    }
  }
}
</style>
