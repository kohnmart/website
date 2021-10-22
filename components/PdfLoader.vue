<template>
<a :href="doc">File</a>
</template>

<script>
export default {
      props: {
    doc: { type: String, required: true },
  },
}
</script>

<style>

</style>