<template>
  <div>
    <div :class="diashow">
      <Button class="back" @click="back"
        ><i class="fas fa-chevron-left"></i
      ></Button>
      <img class="carousel" :src="all_images[carousel]" />
      <Button class="forward" @click="forward">
        <i class="fas fa-chevron-right"></i>
      </Button>
      <Button class="exit" @click="switchState"
        ><i class="far fa-times-circle"></i
      ></Button>
    </div>
    <div class="overview">
      <div class="static_images" v-for="img in all_images" :key="img">
        <Button class="btn_image" @click="switchState(img)">
          <img :class="height" :src="img"
        /></Button>
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

    switchState(img) {
      this.carousel = this.all_images.indexOf(img);
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

.overview {
  display: inline-block;
  .static_images {
    float: left;
    margin-bottom: 1%;
  }
}

.overview_image_400 {
  height: 400px;
}

.overview_image_460 {
  height: 460px;
}

.overview_image_200 {
  max-width: 350px;
  
}


.btn_image {
  border: none;
  margin-right: 5px;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

.exit {
  position: absolute;
  width: 100px;
  height: 20px;
  left: 1180px;
  top: 0px;
  background: none;
  border: none;
  font-size: 2em;
  .far {
    opacity: 0.1;
  }
}

.forward {
  position: absolute;
  width: 100px;
  height: 250px;
  left: 1180px;
  top: 250px;
  background: none;
  border: none;
  font-size: 4em;
  .fas {
    opacity: 0.2;
  }
}
.back {
  position: absolute;
  width: 100px;
  height: 250px;
  top: 250px;
  background: none;
  border: none;
  font-size: 4em;
  .fas {
    opacity: 0.2;
  }
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
  background-color: white;
}
</style>
