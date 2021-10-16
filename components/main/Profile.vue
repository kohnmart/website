<template>
  <div>
    <h1 class="header">ABOUT ME</h1>
    <div class="content">
      <img
        class="profile"
        src="~/assets/img/profile/me_lowres_cl.png"
        alt="Martin Kohnle is not here"
      />
      <br />
      <h2>Background</h2>
      <p>
        Hello my name is Martin and this that. Good to be here. I like beeing in
        the work getting things done. Failing and winning. I like sports.
        Failing and winning. I like sports. Hello my name is Martin and this
        that. Good to be here. I like beeing in the work getting things done.
      </p>
      <br />
      <h2>Skills</h2>
      <p>
        Hello my name is Martin and this that. Good to be here. I like beeing in
        the work getting things done. Failing and winning. I like sports.
        Failing and winning. I like sports. Hello my name is Martin and this
        that. Good to be here. I like beeing in the work getting things done.
      </p>
    </div>
    <div class="design"></div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/css/main.scss";

div {
  .header {
    font-size: $h1;
    font-weight: 700;
    color: white;
    width: 100%;
    height: 150px;
    line-height: 150px;
    text-align: center;
    background-color: rgb(204, 204, 204);
  }
  .design {
    background-image: url("~/assets/img/test.png");
    width: 60%;
    height: 1400px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;

    h1 {
      text-align: center;
      font-size: 6em;
      color: white;
      font-weight: 700;
    }
  }
  .content {
    width: 80%;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 300px;

    h1 {
      font-size: $h1;
      font-weight: 400;
      text-align: left;
    }

    h2 {
      font-size: $h2;
      font-weight: 400;
    }

    p {
      font-size: $p;
      text-align: left;
      font-weight: 400;
    }

    .profile {
      float: left;
      object-fit: cover;
      width: 40%;
      height: 500px;
      border-radius: 50px;
      margin-right: 60px;
    }

    img {
      float: left;
      object-fit: cover;
      width: 100%;
      height: 1000px;
      border-radius: 50px;
      margin-right: 60px;
    }
  }
}

.flex-container {
  margin-top: 20%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 200px;
  column-gap: 40px;
}
</style>
