<template>
  <div>
    <div class="info">
      <div class="list">
        <div v-for="(key, item) in members">
          <ul>
            <div class="left">
              <li>
                {{ item }}
              </li>
            </div>
            <div class="right">
              <li>{{ key }}</li>
            </div>
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
  float: left;
  margin-bottom: 50px;
  .list {
    ul {
      display: inline-flex;
      .left {
        width: 80px;
      }
      .right {
        width: 550px;
      }
      li {
        list-style-type: none;
        margin-bottom: 0.5em;
      }
    }
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
@media (max-width: 768px) {
  .info {
    width: 80%;
    float: left;
    margin-bottom: 20px;
    .list {
      ul {
        display: inline-flex;
        .left {
          width: 80px;
        }
        .right {
          width: 220px;
        }
        li {
          list-style-type: none;
          margin-bottom: 0.5em;
        }
      }
    }
  }
  .media {
    float: left;
    width: 100%;
    margin-bottom: 30px;
    ul > li {
      display: inline-block;
      font-size: 1em;
    }
  }
}
</style>
