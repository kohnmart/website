<template>
  <div class="projects">
    <div class="projects_sorting">
      <h1>Discover Projects</h1>
      <ul>
        <ProjectsCategories filter="web" _cat="Apps" />
        <ProjectsCategories filter="science" _cat="Science" />
        <ProjectsCategories filter="vfx" _cat="Rendering" />
        <ProjectsCategories filter="photo" _cat="Photography" />
      </ul>
    </div>
    <div class="projects_display">
      <h3 v-if="category == null">{{ subline }}</h3>
      <div class="container">
        <div v-for="item in articles" :key="item.id">
          <nuxt-link :to="{ name: 'slug', params: { slug: item.slug } }">
            <div
              v-if="
                item.tag == category ||
                  (item.highlight == 'true' && category == null)
              "
            >
              <div class="thumb">
                <img
                  :src="require(`~/assets/img/thumbs/${item.thumbnail}.webp`)"
                  :alt="'Missing ' + item.thumbnail"
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
</style>
