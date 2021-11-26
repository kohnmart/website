<template>
  <div class="team">
    <div class="team_info">
      <div class="list">
        <div v-for="(key, item) in members">
          <ul class="item">
            <li style="font-weight:600;">
              {{ item }}
            </li>
          </ul>
          <ul class="key">
            <li>{{ key }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="media">
      <div>
        <h4 class="title" v-if="doc != null || link != null">Media</h4>
        <ul>
          <li>
            <Button v-if="doc != null">
              <a :href="doc">Documentation</a>
            </Button>
          </li>
          <li>
            <Button v-if="link != null">
              <a :href="link" target="_blank">{{ type }}</a>
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
    members: { type: Object, default: () => ({}) },
    link: { type: String },
    title: { type: String, default: "Code" },
    type: { type: String, default: "GitHub" },
    doc: { type: String, default: null }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/main.scss";
</style>
