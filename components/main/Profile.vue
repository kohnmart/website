<template>
  <div>
    <div class="intro">
      <div>
        <img
          class="profile"
          src="~/assets/img/profile/me_lowres_cl.png"
          alt="Martin Kohnle is not here"
        />
      </div>
      <div>
        <h1>Intro</h1>
        <br />
        <p>
          Hello my name is Martin and this that. Good to be here. I like beeing
          in the work getting things done. Failing and winning. I like sports.
          Failing and winning. I like sports. Hello my name is Martin and this
          that. Good to be here. I like beeing in the work getting things done.
        </p>
        <br />
        <p>
          Hello my name is Martin and this that. Good to be here. I like beeing
          in the work getting things done. Failing and winning. I like sports.
          Failing and winning. I like sports. Hello my name is Martin and this
          that. Good to be here. I like beeing in the work getting things done.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/css/main.scss";

.intro {
  width: 80%;
  margin: auto;
  margin-bottom: 150px;

  div {
    padding: 5%;
    width: 50%;
    float: left;
    .profile {
      object-fit: cover;
      width: 100%;
      border-radius: 50px;
    }
  }

  h1 {
    font-size: $h1;
    font-weight: 400;
    text-align: left;
  }

  h2 {
    font-size: 1.5em;
    font-weight: 300;
  }

  p {
    font-size: $p;
    text-align: left;
    font-weight: 200;
  }
}
</style>
