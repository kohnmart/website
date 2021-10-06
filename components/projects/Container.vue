<template>
  <div class="main-container">
    <div class="sorting-container">
      <h1>Discover Projects</h1>
      <ul>
        <li>
          <Button @click="sortBy('')"><p>ALL</p></Button>
        </li>
        <li>
          <Button @click="sortBy('photo')"><p>Photo</p></Button>
        </li>
        <li>
          <Button @click="sortBy('software')"><p>Software</p></Button>
        </li>
        <li>
          <Button @click="sortBy('vfx')"><p>VFX</p></Button>
        </li>
      </ul>
    </div>
    <div class="project-container">
      <div v-for="item in store" :key="item.title">
        <div class="thumbnail">
          <nuxt-link :to="item.slug" class="button"
            ><img
              :src="require(`@/assets/img/${item.image}`)"
              :alt="item.imagetitle"
            />
          </nuxt-link>
        </div>
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
    async sortBy(filter) {
      if (filter === "") {
        this.store = await this.$content("projects").fetch();
      } else {
        this.store = await this.$content("projects")
          .where({ tag: filter })
          .fetch();
      }
    }
  },
  beforeMount() {
    this.sortBy("");
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/main.scss";
.main-container {
  width: 80%;
  margin: auto;

  .sorting-container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    ul {
      list-style-type: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      justify-content: center;
      li {

        button {
          border: none;
          padding: 0px 10px 0px 10px;
          font-size: $p;
        }
      }
    }
  }
}

.project-container {
  display: flex;
  flex-wrap: wrap;
  .thumbnail {
    margin-right: 1em;

    p {
      margin: 0;
      display: block;
    }

    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      margin: 0;
      padding: 0;
    }
  }
}
</style>
