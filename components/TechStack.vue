<template>
  <div>
    <div class="stack" v-for="item in stack" :key="item">
      <li>{{ item }}</li>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stack: Array
  },
};
</script>

<style lang="scss" scoped>
    .stack {
        display: inline-block;
        margin-bottom: 2em;
        li {
            list-style: none;
            margin-right: 0.5em;
            font-size: 1em;
            border: 2px solid black;
            color: white;
            padding: 5px 15px;
            border-radius: 5px;
        }   
    }
</style>>
