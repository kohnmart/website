<template>
  <div>
    <div class="sorting-container">
      <ul>
        <li><Button @click="sortBy('photo')">ALL</Button></li>
        <li><Button>PHOTO</Button></li>
        <li><Button>SOFTWARE</Button></li>
        <li><Button>3D/VFX</Button></li>
      </ul>
    </div>
    <div class="project-container">
      <div v-for="item in store" :key="item.title">
        <div>
          <Button class="button"
            ><img
              :src="require(`@/assets/img/${item.image}`)"
              :alt="item.imagetitle"
            />
            <p class="hidden">{{ item.title }}</p>
          </Button>
          <p>{{ item.image }}</p>
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

  async asyncData({ $content }) {
    const projects = await $content("projects").fetch();
    return { projects };
  },

  methods: {
    async sortBy(filter) {
      this.store = await this.$content("projects")
        .where({ tag: filter })
        .fetch();
    }
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
    margin: 10px;
    padding: 20px;
    font-size: 10px;
    width: 300px;
    height: 300px;

    img {
      width: 300px;
      height: 300px;
      object-fit: cover;
    }
  }

  .button {
    border: none;
    color: rgb(75, 75, 75);
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    background-color: rgb(185, 185, 185);
  }
}
</style>
