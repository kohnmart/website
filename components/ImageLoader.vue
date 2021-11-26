<template>
  <div>
    <div class="overview">
      <div v-for="img in all_images" :key="img">
        <img :class="height" :src="img" alt="project-image" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: { type: String, required: true },
    height: { type: String, required: true }
  },
  data() {
    return {
      all_images: []
    };
  },
  methods: {
    importImages(r) {
      r.keys().forEach(key =>
        key.includes(this.image) ? this.all_images.push(r(key)) : null
      );
    }
  },
  mounted() {
    this.importImages(require.context("~/assets/img/", true, /\.(webp)$/));
  }
};
</script>

<style lang="scss">
@import "@/assets/css/main.scss";
</style>
