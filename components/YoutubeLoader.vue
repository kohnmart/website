<template>
  <div>
    <iframe
      width="800"
      height="500"
      :src="link"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; 
    encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    link: { type: String, required: true }
  }
};
</script>

<style lang="scss">
div {
  iframe {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 100px;
  }
}
</style>
