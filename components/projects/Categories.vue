<template>
  <li>
    <Button :class="select" @click="setFilter(filter)">{{ _cat }}</Button>
  </li>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    filter: { type: String, required: true },
    _cat: { type: String, required: true }
  },

  computed: {
    ...mapState(["category"]),

    select: function() {
      return this.filter == this.category ? "active" : "inactive";
    }
  },
  methods: {
    setFilter(filter) {
      {
        this.$store.commit("setCategory", filter);
        console.log(filter);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/main.scss";
li {
  margin: 10px 5px;
  .active,
  .inactive {
    @include button-main;
  }
  .active {
    border: 2px solid rgb(202, 202, 202);
  }

  .inactive {
    border: 2px solid rgb(92, 92, 92);
  }
}
</style>
