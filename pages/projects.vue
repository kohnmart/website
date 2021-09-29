<template>
  <div class="project-container">
    <div v-for="project in projects" :key="project.title">
      <div>
        <Button class="button"
          ><img
            :src="require(`@/assets/img/${project.image}`)"
            :alt="project.imagetitle"
          />
          <p class="hidden">{{ project.title }}</p>
        </Button>
        <p>{{ project.image }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content("projects").fetch();
    console.log(projects[1].image);
    return {
      projects
    };
  }
};
</script>
<style lang="scss" scoped>
.project-container {
  display: flex;
  flex-wrap: wrap;

  div {
    margin: 10px;
    padding: 20px;
    font-size: 10px;
    width: 200px;
    height: 200px;

    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
  }

  .button {
    border: none;
    color: rgb(75, 75, 75);
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    background-color: rgb(185, 185, 185);
  }
}
</style>
