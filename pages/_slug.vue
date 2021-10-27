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

  h1 {
    font-size: 2.5em;
  }

  h2 {
    font-size: 1.7em;
    margin-bottom: 20px;
    margin-top: 40px;
    font-weight: 600;
  }

  h3 {
    font-weight: 400;
    margin-bottom: 10px;
  }

  h3,
  p {
    font-size: 1.5;
    width: 90%;
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
    font-weight: 400;
  }
}
</style>
