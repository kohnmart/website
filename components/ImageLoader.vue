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
.overview {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: center;
  align-content: center;
  gap: 10px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 80px;
}
.overview_image_portrait {
  height: #{$l-portrait}px;
}

.medium_portrait {
  width: #{$m-portrait}px;
}

.small_portrait {
  width: #{$s-portrait}px;
}
.large_wide {
  width: #{$l-wide}px;
}
.medium_wide {
  width: #{$m-wide}px;
}
.small_wide {
  width: #{$s-wide}px;
}

@media (max-width: 768px) {
  .overview_image_portrait,
  .medium_portrait,
  .small_portrait {
    width: #{$l-portrait * 0.7}px;
  }

  .large_wide,
  .medium_wide,
  .small_wide {
    width: #{$s-wide}px;
  }
}
</style>
