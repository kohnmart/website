<template>
  <div class="title">
    <img src="@/assets/img/ballon.jpg" alt="Ballon" />
    <div class="text">
      <p>Photoshoot Lago Di Garda</p>
    </div>
    <div class="sorting-container">
      <ul>
        <li><Button></Button></li>
        <li><Button></Button></li>
        <li><Button></Button></li>
        <li><Button></Button></li>
      </ul>
    </div>
  </div>


</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@import "@/assets/css/main.scss";
.title {
  margin-bottom: 10em;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  img {
    object-fit: cover;
    width: 100%;
    height: 500px;
    border-radius: 5px;
  }

  .sorting-container {
    ul {
      list-style-type: none;
      overflow: hidden;
      margin: 0px;
      padding: 0px;
      li {
        float: left;
        margin-left: 2.7%;
        button {
          width: 2em;
          height: 2em;
        }
      }
    }
  }
  .text {
    position: absolute;
    top: 540px;
    left: 80px;
    padding: 10px;
    p {
      background-color: white;
      border-radius: 2px;
      padding: 10px;
      font-size: $p;
    }
  }
}
</style>
