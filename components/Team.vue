<template>
  <div class="info">
    <div class="float">
      <div v-for="(key, item) in members">
        <ul>
          <li class="left">{{ item }}</li>
        </ul>
      </div>
      <ul>
        <li>{{title}}</li>
        <li>Documentation</li>
      </ul>
    </div>
    <div class="float">
      <div v-for="(key, item) in members">
        <ul>
          <li>{{ key }}</li>
        </ul>
      </div>
      <ul>
        <li><a :href="git">{{type}}</a></li>
             <li>filename</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    members: { type: Object, default: () => ({}) },
    git: { type: String },
    title: { type: String, default: "Code"},
    type: { type: String, default: "GitHub" },
  }
};
</script>

<style lang="scss">
.info {
  .float {
    display: inline-block;
    margin-right: 20px;
  }
  ul {
    list-style-type: none;
    margin-bottom: 7px;
  }
}
</style>
