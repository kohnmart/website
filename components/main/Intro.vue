<template>
  <div>
    <div class="flex-container">
      <div>
        <h2>Experience</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
      <div>
        <img src="@/assets/img/test.png" alt="Ballon" />
      </div>
      <div>
        <h2>Discover</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
      <div>
        <img src="@/assets/img/moon.jpg" alt="Ballon" />
      </div>
      <div>
        <h2>Design</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
      <div>
        <img src="@/assets/img/moon.jpg" alt="Ballon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/css/main.scss";

div {
  margin-top: 10%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-weight: $h1;
    margin-bottom: 10%;
    text-align: center;
  }
  .flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    div {
      padding: 2%;
      width: 50%;
      border-radius: 4px;
      p {
        font-weight: $p;
        font-size: 1.5em;
      }
      img {
        object-fit: cover;
        width: 100%;
        border-radius: 5px;
      }
    }
  }
}
</style>
