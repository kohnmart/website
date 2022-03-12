<template>
  <div class="team">
    <div class="team_info">
      <div class="list">
        <div class="list_object" v-for="(key, item) in info" :key="key">
          <ul>
            <li class="topic">
              {{ item }}
            </li>
          </ul>
          <div class="key">
            <ul>
              <li v-for="array in key" :key="array">
                {{ array }}
              </li>
            </ul>
          </div>
            <hr />
        </div>
           
      </div>
      <div class="media">
        <p class="media_title">Media</p>
        <ul v-for="(key, item) in links" :key="key">
          <li>
            <Button>
              <a :href="key" target="_blank">{{ item }}</a>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    info: { type: Object, default: () => ({}) },
    links: { type: Object, default: () => ({}) },
    link: { type: String },
    title: { type: String, default: "Code" },
    type: { type: String, default: "GitHub" },
    doc: { type: String, default: null }
  },

  methods: {
    key_class: function(key) {
      if (key.length > 3) {
        return "key";
      } else {
        return "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/main.scss";
</style>
