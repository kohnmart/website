<template>
  <div class="title">
    <img src="@/assets/img/land.jpg" alt="Ballon" />
    <div class="text">
      <p>Photoshoot Lago Di Garda</p>
    </div>
    <div class="sorting-container">
      <div v-for="item in store" :key="item.title">
        <ul>
          <li><Button></Button></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      store: []
    };
  },

  methods: {
    async getHighlights() {
      this.store = await this.$content("projects")
        .where({ highlight: "true" })
        .fetch();
    }
  },
  beforeMount() {
    this.getHighlights();
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/main.scss";
.title {
  img {
    object-fit: cover;
    width: 100%;
    height: 500px;
    border-radius: 5px;
  }
  .sorting-container {
    ul {
      list-style-type: none;
      margin: 0px;
      margin-left: 3.2%;
      padding: 0px;
      li {
        float: left;
        margin-left: 3%;
        button {
          border-radius: 5px;
          width: 2em;
          height: 2em;
        }
      }
    }
  }
  .text {
    position: absolute;
    top: 560px;
    left: 80px;
    padding: 10px;
    padding: 0px;
    p {
      background-color: white;
      border-radius: 2px;
      padding: 10px;
      font-size: $p;
    }
  }
}
</style>
