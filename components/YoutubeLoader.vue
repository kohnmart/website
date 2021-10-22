<template>
  <iframe
    width="720"
    height="400"
    :src="link"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; 
    encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  props: {
    link: { type: String, required: true }
  }
};
</script>

<style style="scss">
iframe {
    margin-top: 10%;
    margin-bottom: 20%;
}
</style>
