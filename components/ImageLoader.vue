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
        ><i class="far fa-times-circle fa-2x"></i
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
    margin: 20px 0px;
  }

.btn_image {
  border: none;
  cursor: grab;
  margin: 0px 2px;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  background-color: white;
  .overview_image_portrait {
    width: 200px;
  }

  .overview_image_wide {
    width: 100%;
  }

  .overview_image_small {
    width: 80%;
  }

  .overview_image_ws {
    width: 435px;
  }
}

.exit {
  position: absolute;
  width: 100px;
  height: 20px;
  left: 1180px;
  top: 0px;
  background: none;
  border: none;
  .far {
    opacity: 0.5;
    color: black;
  }
}

.forward {
  position: absolute;
  color: black;
  width: 100px;
  height: 250px;
  left: 1180px;
  top: 250px;
  background: none;
  border: none;
  font-size: 4em;
  .fas {
    opacity: 0.5;
    color: black;
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
    opacity: 0.5;
    color: black;
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

@media (max-width: 600px) {

.carousel {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 300px;
}


.exit {
  width: 100px;
  height: 100px;
  left: 340px;
}

.forward {
  width: 100px;
  height: 250px;
  left: 340px;
  top: 200px;
  font-size: 4em;
}
.back {
  width: 100px;
  height: 250px;
  top: 200px;
  left: -25px;
  font-size: 4em;
}

  .btn_image {
    .overview_image_portrait {
      width: 100px;
    }

    .overview_image_wide {
      width: 300px;
    }

    .overview_image_small {
      width: 300px;
    }

    .overview_image_ws {
      width: 150px;
    }
  }
}
</style>
