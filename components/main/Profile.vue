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
          Hello, everyone. My name is Martin Kohnle, I am a 24-year-old student
          from Augsburg. I am currently studying interactive media with a focus
          on computer science in the 5th semester. This interdisciplinary course
          is based at the Faculty of Design and Computer Science. The spectrum
          ranges from media design, interaction, 2D / 3D animation to web and
          app development, mathematics and AI. The merging of these two
          faculties develops experts in a wide variety of areas, who are
          nevertheless able to understand the fundamentals of all. These
          individual capabilities enable more complex projects to be scaled up.
          <br />
          <br />

          I feel at home in this intermediate world of logic and design. My
          focus is on web development, machine learning and 3D animation. It's
          exciting and varied. A high level of communication, innovation and
          skills come together. It expands my horizon and perspective on a wide
          range of challenges. The know-how in these fields makes it possible to
          find solutions not compromise, to recognize possible issues
          early and to adapt the design to technical possibilities. <br />
          <br />
        </p>
      </div>
      <div>
        <h2 id="inspirations">Favorite literature</h2>
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
