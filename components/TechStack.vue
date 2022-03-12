<template>
  <div class="stack">
    <div class="stack_items" v-for="item in stack" :key="item">
      <li>{{ item }}</li>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stack: Array
  }
};
</script>

<style lang="scss" scoped>
.stack {
    margin-bottom: 4em;
  &_items {
    display: inline-block;
    margin-bottom: 0.5em;
    li {
      list-style: none;
      padding: 5px 15px;
      margin-right: 0.5em;
      font-size: 1em;
      border: 2px solid black;
      border-radius: 5px;
      color: white;
    }
  }
}</style>
