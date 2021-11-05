<template>
  <div>
    <div class="overview">
      <div v-for="img in all_images" :key="img">
        <img :class="height" :src="img" />
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
      all_images: [],
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
.carousel {
  display: block;
  margin: auto;
  max-height: 100%;
}
.overview {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: center;
  align-content: center;
  gap: 2px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 80px;
}
.overview_image_portrait {
  height: 400px;
}
.small_portrait {
  width: 235px;
}
.large_wide {
  height: 500px;
}
.medium_wide {
  width: 665px;
}
.medium_portrait {
  width: 335px;
}
@media (max-width: 600px) {
.overview_image_portrait {
  height: 200px;
}
.small_portrait {
  width: 235px;
}
.large_wide {
   width: 400px;
   height: 100%;
}
.medium_wide {
  width: 300px;
}
.medium_portrait {
  width: 335px;
}
}
</style>