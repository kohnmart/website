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
  margin-top: 2%;
  margin-bottom: 2%;
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
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-weight: 100;
      }
    }
  }
}
</style>
