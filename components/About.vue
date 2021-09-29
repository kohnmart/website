<template>
      <div class="about">
      <h2>ABOUT ME.</h2>
      <img src="@/assets/img/ny.jpg" alt="Ballon" />
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.about {
    margin-left: 2em;
    margin-right: 1em;
    h2 {
      font-size: 4em;
    }
    img {
      width: 30%;
      float: left;
    }
    p {
      width: 60%;
      float: right;
      display: block;
    }
  }
</style>