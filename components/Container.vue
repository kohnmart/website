<template>
  <div>
    <div class="sorting-container">
      <ul>
        <li><Button @click="sortBy('')">ALL</Button></li>
        <li><Button @click="sortBy('photo')">PHOTO</Button></li>
        <li><Button @click="sortBy('software')">SOFTWARE</Button></li>
        <li><Button @click="sortBy('vfx')">3D/VFX</Button></li>
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
          <p>{{ item.title }}</p>
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
.sorting-container {
  ul {
    list-style-type: none;
    margin-left: 4em;
    padding: 0;
    overflow: hidden;

    li {
      float: left;
      margin-left: 2em;
    }
  }
}
.project-container {
  display: flex;
  flex-wrap: wrap;

  div {
    .thumbnail {
      background-color: gray;
      p {
        font-size: 2em;
        text-decoration: none;
      }
    }

    margin: 10px;
    padding: 20px;
    font-size: 10px;
    width: 300px;
    height: 350px;

    img {
      width: 300px;
      height: 300px;
      object-fit: cover;
    }
  }
}
</style>
