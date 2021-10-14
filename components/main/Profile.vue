<template>
  <div class="flex-container">
    <div>
      <h1>About Me_</h1>
    </div>
    <div>
      <img
        src="@/assets/img/profile/me_lowres_cl.png"
        alt="Martin Kohnle is not here"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/css/main.scss";
.flex-container {
  margin-top: 20%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  div {
    width: 50%;
    margin: 0;
   
    h1 {
      font-size: 150px;
      text-align: center;

    }

    img {
      object-fit: cover;
      width: 80%;
      border-radius: 20px;
    }
  }
}
</style>
