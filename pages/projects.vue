<template>
  <div class="main-container">
    <div class="sorting-container">
      <h1>Discover Projects</h1>
      <ul>
        <ProjectsCategories filter="web" _cat="Apps" />
        <ProjectsCategories filter="science" _cat="Science" />
        <ProjectsCategories filter="photo" _cat="Photography" />
        <ProjectsCategories filter="vfx" _cat="Rendering" />
      </ul>
    </div>
    <div class="highlights">
      <h3 v-if="category == null">{{ subline }}</h3>
      <div class="project-container">
        <div v-for="item in articles" :key="item">
          <nuxt-link :to="{ name: 'slug', params: { slug: item.slug } }">
            <div
              v-if="
                item.tag == category ||
                  (item.highlight == 'true' && category == null)
              "
            >
              <div class="thumbnail">
                <img
                  :src="require(`~/assets/img/thumbs/${item.thumbnail}.webp`)"
                />
                <div class="project_info">
                  <p>{{ item.title }}</p>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      subline: "Highlights 2021"
    };
  },

  computed: {
    ...mapState(["category"])
  },
  async asyncData({ $content, params }) {
    const articles = await $content("projects", params.slug).fetch();
    return {
      articles
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/main.scss";

h1 {
  @include h1-main;
}

.main-container {
  width: 80%;
  margin: auto;
  margin-top: 80px;
  .sorting-container {
    margin-bottom: 40px;
    text-align: left;
    ul {
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      li {
        margin: 10px 5px;
        button {
          @include button-main;
        }
      }
    }
  }
  .highlights {
    h3 {
      @include h3-main;
      font-weight: 500;
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
        background: black;
        img {
          width: 300px;
          height: 200px;
          object-fit: cover;
        }
        .project_info {
          margin-left: 5%;
          text-align: left;
          margin-top: 5%;
          p {
            @include p-main;
            color: white;
            font-weight: 400;
            line-height: 100%;
          }
        }
      }
    }
  }
}
</style>
