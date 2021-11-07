<template>
  <div>
    <div class="info">
      <div class="list">
        <div v-for="(key, item) in members">
          <ul>
            <li>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <div class="list">
        <div v-for="(key, item) in members">
          <ul>
            <li>{{ key }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="media">
      <div>
        <ul>
          <li>
            <Button v-if="doc != null">
              <a :href="doc">Documentation</a>
            </Button>
          </li>
          <li>
            <Button v-if="link != null">
              <a :href="link" target="_blank">{{ type }}</a>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    members: { type: Object, default: () => ({}) },
    link: { type: String },
    title: { type: String, default: "Code" },
    type: { type: String, default: "GitHub" },
    doc: { type: String, default: null }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/main.scss";
.info {
  width: 80%;
  display: inline-block;
  .list {
    display: inline-block;
    margin-right: 20px;
  }
  ul > li {
    list-style-type: none;
    margin-bottom: 0.5em;
  }
}
.media {
  width: 20%;
  float: right;
  ul > li {
    font-size: 1em;
    list-style-type: none;
    margin-bottom: 0.5em;
    margin: 0;

    button {
      @include button-main;
      a {
        text-decoration: none;
      }
      margin-bottom: 10px;
    }
  }
}
@media (max-width: 600px) {
  .info {
    width: 140%;
    ul > li {
      padding: 0;
      font-size: 0.8em;
      list-style-type: none;
      margin-bottom: 0.5em;
    }
  }
  .media {
    float: left;
    width: 100%;
    margin: 2em auto;
    ul > li {
      display: inline-block;
      font-size: 1em;
    }
  }
}
</style>
