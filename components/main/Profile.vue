<template>
  <div class="flex-container">
    <div>
      <img
        src="~/assets/img/profile/me_lowres_cl.png"
        alt="Martin Kohnle is not here"
      />
    </div>
    <div>
      <h1>about me</h1>
      <br />
      <p>
        Hello my name is Martin and this that. Good to be here. I like beeing in
        the work getting things done. Failing and winning. I like sports.
        Failing and winning. I like sports.
      </p>
      <br />
      <h2>Skills</h2>
    </div>
    <div>
      <h1>Connecting</h1>
      <p>Design and Coding</p>
      <br />
      <p>
        Hello my name is Martin and this that. Good to be here. I like beeing in
        the work getting things done. Failing and winning. I like sports.
      </p>
    </div>
    <div>
      <img src="~/assets/img/test.png" alt="Martin Kohnle is not here" />
    </div>
    <div>
      <h1>Experience</h1>
      <p>Innovation and Failing</p>
      <br />
      <p>
        Hello my name is Martin and this that. Good to be here. I like beeing in
        the work getting things done. Failing and winning. I like sports.
      </p>
    </div>
    <div>
      <img src="~/assets/img/moon.jpg" alt="Martin Kohnle is not here" />
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
  row-gap: 200px;
  column-gap: 40px;

  div {
    width: 40%;
    margin: auto;
    margin: 0;
    border-radius: 5px;

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
      font-weight: 300;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 500px;
      border-radius: 20px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
