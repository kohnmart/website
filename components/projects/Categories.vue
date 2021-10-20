<template>
  <div class="main-container">
    <div class="sorting-container">
      <h1>Discover Projects</h1>
      <ul>
        <li>
          <Button @click="sortBy('web')">Web-Development</Button>
        </li>
        <li>
          <Button @click="sortBy('science')">Science</Button>
        </li>
        <li>
          <Button @click="sortBy('photo')">Photography</Button>
        </li>
        <li>
          <Button @click="sortBy('vfx')">3D-Visual-Fx</Button>
        </li>
      </ul>
    </div>
    <div class="project-container">
      <div v-for="item in store" :key="item.title">
        <div class="thumbnail">
          <nuxt-link :to="item.slug" class="button">
            <img :src="require(`~/assets/img/${item.thumbnail}`)" />
            <div class="project_info">
              <h2>{{ item.title }}</h2>
            </div>
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

h1 {
  font-size: $h1;
}

.main-container {
  width: 80%;
  margin: auto;
  margin-top: 5%;
  .sorting-container {
    margin-bottom: 10%;
    text-align: left;
    ul {
      margin-top: 2%;
      list-style-type: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      justify-content: left;

      li {
        margin-right: 20px;
        button {
          border-radius: 5px;
          background-color: white;
          padding: 0px 10px 0px 10px;
          font-size: $p;
        }
      }
    }
  }

  .project-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;

    .thumbnail {
      margin-right: 25px;
      margin-bottom: 25px;
      .button {
        text-decoration: none;
      }
      p {
        margin: 0;
        display: block;
      }
      img {
        border-radius: 10px;
        width: 300px;
        height: 300px;
        object-fit: cover;
        margin: 0;
        padding: 0;
        background-color: gray;
      }
      .project_info {
        display: none;
        opacity: 0;
        width: 300px;
        height: 300px;
        border-radius: 10px;
        border: 2px solid black;
        margin: auto;
        text-align: left;
        h2 {
          color: rgb(0, 0, 0);
          font-size: 5em;
          font-weight: 400;
        }
      }
    }
    .thumbnail:hover {
      img {
        display: none;
      }
      .project_info {
        display: block;
        opacity: 1;
      }
    }
  }
}
</style>
