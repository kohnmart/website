<template>
  <div class="about">
    <h1>ABOUT ME.</h1>
    <img src="@/assets/img/ny.jpg" alt="Ballon" />
    <div>
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/css/main.scss";
.about {
  margin-bottom: 10em;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  h1 {
    font-weight: 300;
    font-size: $h1;
  }
  img {
    width: 30%;
    float: left;
  }
  div {
    float: right;
    display: block;
    width: 60%;
    p {
      font-weight: 300;
    }
  }
}
</style>
