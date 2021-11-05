<template>
  <div>
    <div class="intro">
      <div>
        <img
          class="profile"
          src="~/assets/img/profile/profile.webp"
          alt="Martin Kohnle is not here"
        />
      </div>
      <div>
        <h1>Intro</h1>
        <p>
          Hello, everyone. My name is Martin Kohnle, I am a 24 year old student
          from Augsburg. I am currently studying interactive media with a focus
          on computer science. A course, that bridges the gap between design and
          computer science.<br />
          <br />

          I feel at home in this intermediate world of logic and design. The
          know-how in both fields makes it possible to structure a project
          better, to recognize possible problems early and to adapt the design
          to technical possibilities. <br />
          <br />
        </p>
      </div>
      <div>
        <h2 id="inspirations">Literature</h2>
        <br />
        <ul>
          <li>
            <a
              href="https://www.google.de/books/edition/The_Innovator_s_Dilemma/6bMOk7QdnesC?hl=de&gbpv=1&dq=innovator%27s+dilemma&printsec=frontcover"
              >The Innovator´s Dilemma - Clayton Christensen</a
            >
          </li>
          <li>
            <a
              href="https://www.google.de/books/edition/Thinking_Fast_and_Slow/ZuKTvERuPG8C?hl=de&gbpv=1&dq=thinking+fast+and+slow&printsec=frontcover"
              >Thinking, Fast and Slow - Daniel Kahnemann</a
            >
          </li>
          <li>
            <a
              href="https://www.google.de/books/edition/Elon_Musk/PSljBgAAQBAJ?hl=de&gbpv=1&printsec=frontcover"
              >Elon Musk Biography - Ashley Vance</a
            >
          </li>
          <li>
            <a
              href="https://www.google.de/books/edition/Eine_kurze_Geschichte_der_Zeit/Nk_PpwAACAAJ?hl=de"
              >Eine kurze Geschichte der Zeit - Stephen Hawking</a
            >
          </li>
          <li>
            <a
              href="https://www.google.de/books/edition/Denke_nach_und_werde_reich/Q8iSAAAACAAJ?hl=de"
              >Think and grow rich - Napoleon Hill</a
            >
          </li>
          <li>
            <a
              href="https://www.google.de/books/edition/Silicon_Germany/RALFjwEACAAJ?hl=de"
              >Silicon Germany - Christoph Keese</a
            >
          </li>
        </ul>
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
  width: 50%;
  margin: 0 auto;
  margin-bottom: 100px;
  div {
    padding: 5%;
    width: 100%;
    .profile {
      object-fit: cover;
      height: 500px;
      width: 100%;
      border-radius: 150px;
      margin: 100px 0px;
    }
  }
  h1 {
    @include h1-main;
  }
  h2 {
    @include h2-main;
  }

  p {
    @include p-main;
  }
  ul {
    li {
      margin-left: 30px;
      margin-bottom: 10px;
    }
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
}
@media (max-width: 600px) {
  .intro {
    width: 80%;
    margin-top: 50px;
    div {
      padding: 5%;
      .profile {
        object-fit: cover;
        height: 300px;
        width: 100%;
        border-radius: 10px;
        margin: 20px 0px;
      }
    }
    p {
      font-size: $p * 1.005;
      line-height: 170%;
    }

    h1 {
      margin-bottom: 10px;
    }
  }
}
</style>