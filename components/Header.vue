<template>
  <div class="header">
    <ul>
      <li style="float:left"><nuxt-link to="/">Martin Kohnle</nuxt-link></li>
      <li><nuxt-link to="/projects">about</nuxt-link></li>
      <li><nuxt-link to="/projects">projects</nuxt-link></li>
      <li><nuxt-link to="/">work</nuxt-link></li>
    </ul>
  </div>
</template>

<script></script>
<style lang="scss" scoped>
@import "@/assets/css/main.scss";
.header {
  background-color: white;
  margin-top: 2em;
  margin-bottom: 2em;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;

    li {
      float: right;

      h2,
      a {
        display: block;
        color: black;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-weight: 100;
      }
    }
  }
}
</style>
