<template>
  <div class="main-container">
    <div class="sorting-container">
      <h1>Discover Projects</h1>
      <ul>
        <li>
          <Button @click="sortBy('web')">Apps</Button>
        </li>
        <li>
          <Button @click="sortBy('science')">Science</Button>
        </li>
        <li>
          <Button @click="sortBy('photo')">Photography</Button>
        </li>
        <li>
          <Button @click="sortBy('vfx')">Rendering</Button>
        </li>
      </ul>
    </div>
    <div class="highlights">
      <h2>{{ subline }}</h2>
      <div class="project-container">
        <div v-for="item in articles" :key="item">
          <div class="thumbnail">
            <nuxt-link :to="{ name: 'slug', params: { slug: item.slug } }">
              <img :src="require(`~/assets/img/${item.thumbnail}`)" />
              <div class="project_info">
                <h2>{{ item.title }}</h2>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      store: [],
      subline: "Highlights"
    };
  },

  async asyncData({ $content, params }) {
		const articles = await $content('projects', params.slug)
			.fetch();
		return {
			articles
		}
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/main.scss";

h1 {
  font-size: $h1;
  margin-bottom: 0.5em;
}

.main-container {
  width: 80%;
  margin: auto;
  margin-top: 5%;
  .sorting-container {
    margin-bottom: 5%;
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
        margin: 10px 5px;
        button {
          border-radius: 5px;
          border: 2px solid grey;
          background-color: white;
          padding: 0px 10px 0px 10px;
          font-size: 1em;
          height: 30px;
        }
      }
    }
  }

  .highlights {
    h2 {
      margin-bottom: 25px;
    }
    .project-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: left;

      .thumbnail {
        margin-right: 25px;
        margin-bottom: 25px;
        width: 300px;
        height: 250px;
        border-radius: 10px;
        background-color: black;
        .button {
          text-decoration: none;
        }
        p {
          margin: 0;
          display: block;
        }
        img {
          width: 300px;
          height: 200px;
          object-fit: cover;
          margin: auto;
          padding: 0;
          background-color: gray;
        }
        .project_info {
          margin-left: 5%;
          text-align: left;
          margin-top: 5%;
          h2 {
            color: white;
            font-size: 1em;
            font-weight: 400;
          }
        }
      }
    }
  }
}

@media (max-width: 600px) {

}
</style>
