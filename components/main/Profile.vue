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
          development and machine learning.
          <br />
          <br />
          Design, interaction and technology play a role in all of my projects.
          Even if my focus is now on coding and databases, I can evaluate and
          understand all project's components. The aim is to create a product,
          that is convincing for a specific target group and can solve a real
          problem.
          <br />
          <br />
          In addition, I have spent a lot of time in photography over the past
          few years. It was mainly about working for the first time on long-term
          projects, leading a team and understanding, that success depends to a
          large extent on proper communication. All in all, the teamwork is
          exciting and varied. <br>
          A high level of creativity, innovation and skills
          comes together. It expands the horizon and perspective on a wide range
          of challenges. The collective know-how makes it possible to find
          solutions not compromise, to recognize issues early and to adapt the
          design to technical possibilities.
        </p>
      </div>
      <div>
        <h2>
          Skills
        </h2>
        <p>The level of my skills is appropriate to what should be achieved after the 5th Bachelor semester.</p>
        <br />
        <p>Neuronal Networks</p>
        <br />
        <ul class="skills">
          <li>Python</li>
          <li>Jupyter Notebook</li>
          <li>Tensorflow</li>
          <li>Keras</li>
          <li>scikit-learn</li>
          <li>Theory</li>
        </ul>
        <br />
        <br />
        <p>Webdevelopment</p>
        <br />
        <ul class="skills">
          <li>Javascript</li>
          <li>Python</li>
          <li>Docker</li>
          <li>Git</li>
          <li>Django</li>
          <li>Vue.js</li>
          <li>Express</li>
          <li>PostgreSQL</li>
          <li>API</li>
        </ul>
        <br />
        <br />
        <p>Other</p>
        <br />
        <ul class="skills">
          <li>Unity</li>
        </ul>
        <br />
        <br />
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
  width: 80%;
  margin: 0 auto;
  margin-bottom: 100px;
  div {
    padding: 5%;
    margin: 0 auto;
    width: 70%;
    .profile {
      object-fit: cover;
      width: 100%;
      border-radius: 50px;
      margin: 100px 0px;
    }

    .skills {
      columns: 3;
    }
  }
  h1 {
    @include h1-main;
    margin-top: 0px;
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
@media (max-width: 768px) {
  .intro {
    width: 100%;
    margin-top: 50px;
    div {
      padding: 2%;
      margin-bottom: 20px;
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
