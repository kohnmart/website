<template>
  <div>
    <div :class="diashow">
      <Button class="back" @click="back">back</Button>
      <img class="carousel " :src="all_images[carousel]" />
      <Button class="forward" @click="forward">forward</Button>
      <Button class="exit" @click="exit">close</Button>
    </div>
    <div class="static_images" v-for="img in all_images" :key="img">
      <Button class="btn_image" @click="exit">
        <img class="overview_image" :src="img"
      /></Button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: { type: String, required: true }
  },
  data() {
    return {
      all_images: [],
      carousel: 0,
      v_state: false
    };
  },

  computed: {
    diashow() {
      return this.v_state == false ? "hidden" : "viewer";
    }
  },

  methods: {
    forward() {
      return this.carousel < this.all_images.length - 1
        ? this.carousel++
        : (this.carousel = 0);
    },
    back() {
      return this.carousel > 0
        ? this.carousel--
        : (this.carousel = this.all_images.length);
    },

    exit() {
      return (this.v_state = !this.v_state);
    },

    importImages(r) {
      r.keys().forEach(key =>
        key.includes(this.image) ? this.all_images.push(r(key)) : null
      );
    }
  },

  mounted() {
    this.importImages(require.context("~/assets/img/", true, /\.(png|jpe?g)$/));
  }
};
</script>

<style lang="scss">
.carousel {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 700px;
}

.static_images {
  float:left;
}

.overview_image {
  height: 400px;
  margin-left: 10px;
}

.btn_image {
  border: none;
}

.exit {
  position: absolute;
  width: 100px;
  height: 20px;
   left: 1160px;
  top: 0px;
}

.forward {
  position: absolute;
  width: 100px;
  height: 250px;
  left: 1160px;
  top: 250px;
}
.back {
  position: absolute;
  width: 100px;
  height: 250px;
  top: 250px;

}

.hidden {
  display: none;
}

.viewer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
