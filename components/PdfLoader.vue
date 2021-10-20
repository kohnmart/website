<template>
    <Button @click="openPdf"></Button>
</template>

<script>
export default {


      methods: {
          openPdf()
          {
              window.open(require("~/assets/docs/spotifyparty.pdf"));
          }
      }
}
</script>

<style>

</style>