<template>
  <div class="info">
    <div class="list">
      <div v-for="(key, item) in members">
        <ul>
          <li>{{ item }}</li>
        </ul>
      </div>
      <ul>
        <li>{{ title }}</li>
        <li v-if="doc != null">Documentation</li>
      </ul>
    </div>
    <div class="list">
      <div v-for="(key, item) in members">
        <ul>
          <li>{{ key }}</li>
        </ul>
      </div>
      <ul>
        <li>
          <a :href="link" target="_blank">{{ type }}</a>
        </li>
        <li v-if="doc != null">
          <a :href="doc">{{ doc.slice(5) }}</a>
        </li>
      </ul>
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
.info {
  .list {
    display: inline-block;
    margin-right: 20px;
  }
  ul > li {
    list-style-type: none;
    margin-bottom: 0.5em;
  }
}
@media (max-width: 600px) {
.info {
  .list {
    margin-right: 5px;
  }
  ul > li {
    font-size: 0.6em;
    list-style-type: none;
    margin-bottom: 0.5em;
  }
}
}
</style>
