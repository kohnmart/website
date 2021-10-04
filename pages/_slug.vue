<template>
  <div class="container">
    <nuxt-content :document="post" />
  </div>
</template>

<script>
//![BrooklyBridge](/_nuxt/img/ny.0717d4d.jpg)
export default {
  data() {
    return {
      store: []
    };
  },
 async asyncData ({ $content, params }) {
    const post = await $content('projects', params.slug).fetch()
    
    return { post }

  },
};
</script>

<style>
.container {
  margin: auto;
  width: 70%;
}

img {
  border-radius: 4px;
  padding: 5px;
  width: 350px;
}
</style>
