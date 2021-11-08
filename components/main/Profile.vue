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
          from Augsburg. I am currently studying
          <a
            style="text-decoration:underline"
            href="https://www.hs-augsburg.de/Gestaltung/Interactive-Media/IA.html"
            >interactive media </a
          >with a focus on computer science in the 5th semester. IAM is an
          interdisciplinary course based at the Faculty of Design and Computer
          Science. This mixture allows me to cover a wide fundamental spectrum
          in design, interaction and computer science. I focus on full-stack web
          development and machine learning. These fields seem to me to solve the
          most valuable and urgent problems in the future.
          <br />
          <br />
          Design, interaction and technology play a role in all of my projects.
          Even if my focus is now on coding and databases, I can evaluate and
          understand all project's components. The aim is
          to create a product, that is convincing for a specific target group
          and can solve a real problem.
          <br />
          <br />
          In addition, I have spent a lot of time in photography over the past
          few years. It was mainly about working for the first time on long-term
          projects, leading a team and understanding, that success depends to a
          large extent on proper communication. All in all, the teamwork is
          exciting and varied. A high level of creativity, innovation and skills
          comes together. It expands the horizon and perspective on a wide range
          of challenges. The collective know-how makes it possible to find
          solutions not compromise, to recognize issues early and to adapt the
          design to technical possibilities.
        </p>
      </div>
      <div>
        <h2>Favorite literature</h2>
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
      border-radius: 50px;
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
