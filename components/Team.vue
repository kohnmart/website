<template>
  <div class="team">
    <div class="info">
      <div class="list">
        <div v-for="(key, item) in members">
          <ul class="item">
            <li style="font-weight:600;">
              {{ item }}
            </li>
          </ul>
          <ul class="key">
            <li>{{ key }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="media">
      <div>
        <h4 class="title" v-if="doc != null || link != null">Media</h4>
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
.team {
  height: 100px;
  .info {
    float: left;
    margin-bottom: 50px;
    .list {
      .item {
        float: left;
        width: 80px;
      }
      .key {
        width: 550px;
      }
      li {
        @include list-item($p, 0.5em);
      }
    }
  }
}
.media {
  float: right;
  margin-bottom: 50px;
  .title {
    float: left;
    width: 100px;
  }
  ul li {
    @include list-item($p, 0.5em);
    margin: 0;
    button {
      @include button-main;
      margin-bottom: 10px;
    }
  }
}
@media (max-width: 768px) {
  .team {
    .info {
      margin-bottom: 20px;
      .list {
        .key {
          margin-bottom: 20px;
          width: 250px;
          float: left;
        }
      }
    }
  }
  .media {
    float: left;
    width: 100px;
    margin-bottom: 30px;
  }
}
</style>
