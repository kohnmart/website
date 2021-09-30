<template>
  <div>
      <nuxt-content :document="store"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      store: [],
    };
  },

  methods: {
    async loadProject(myid) {
        this.store = await this.$content('projects/pro-1').fetch();
    }
  },
  beforeMount() {
    this.loadProject("1");
  }
};
</script>

<style></style>
