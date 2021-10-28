<template>
  <div class="bullets">
    <div v-for="point in points" :key="point">
      <a :href="'#' + point.toLowerCase()">{{ point }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    points: { type: Array }
  }
};
</script>

<style lang="scss">
.bullets {
  div {
    a {
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    margin-bottom: 0.5em;
  }
}
</style>
