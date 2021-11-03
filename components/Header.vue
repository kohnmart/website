<template>
  <div class="header">
    <ul>
      <li style="float:left"><nuxt-link to="/">Martin Kohnle</nuxt-link></li>
      <li><nuxt-link to="/projects">Projects</nuxt-link></li>
      <li>
        <a href="mailto: martin.kohnle@outlook.de">
          <i class="far fa-envelope"></i
        ></a>
      </li>
      <li>
        <a href="https://github.com/kohnmart/">
          <i class="fab fa-github"></i
        ></a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/martin-kohnle-504b2b1ba/">
          <i class="fab fa-linkedin"></i>
        </a>
      </li>
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
    margin: 20px;
    padding: 0;
    overflow: hidden;

    li {
      float: right;
      a {
        display: block;
        text-align: center;
        padding: 10px 10px;
        text-decoration: none;
        font-weight: 300;
        font-size: 1em;
      }
      .far,
      .fab {
        font-size: 1em;
      }
    }
  }
}
@media (max-width: 600px) {
  .header {
    margin-top: 2%;
    margin-bottom: 2%;
    ul {
      list-style-type: none;
      padding: 0;
      overflow: hidden;
      li {
   
        a {
          padding: 5px 8px;
          text-decoration: none;
          font-weight: 300;
          font-size: 1.5em;
        }
        .far,
        .fab {
          font-size: 0.6em;
          display: none;
        }
      }
    }
  }
}
</style>
