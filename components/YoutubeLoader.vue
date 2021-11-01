<template>
  <div class="video-container">
    <iframe
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
.video-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%;
  margin: 20px 0px 100px 0px;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
}

@media (max-width: 600px) {
  .video-container {
    margin: 20px 0px 50px 0px;
  }
}
</style>
