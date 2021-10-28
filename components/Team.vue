<template>
  <div class="info">
    <div class="float">
      <div v-for="(key, item) in members">
        <ul>
          <li class="left">{{ item }}</li>
        </ul>
      </div>
      <ul>
        <li>Code</li>
      </ul>
    </div>
    <div class="float">
      <div v-for="(key, item) in members">
        <ul>
          <li>{{ key }}</li>
        </ul>
      </div>
      <ul>
        <li><a :href="git">GitHub</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    members: { type: Object, default: () => ({}) },
    git: { type: String }
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
