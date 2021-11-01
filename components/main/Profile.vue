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
      <!-- <div>
      <div>
        <img
          class="profile"
          src="~/assets/img/profile/control.jpg"
          alt="Martin Kohnle is not here"
        />
      </div>

        <h1 id="lessons">Life Lessons</h1>
        <br />
        <p>
          In the past few years I have been able to work in various areas of the
          media. I took positive and negative experiences with me from every
          discipline. In the meantime, I can bundle my knowledge of the branch
          and my experience very well in order to get a solid project off the
          ground.
        </p>
        <br />
        <p>
          Each project takes 3 times longer when you do it the first time. This
          is because there are many unknown problems and difficulties along the
          way. Solid preparation and an agile way of working is essential for a
          successful project. Always question the project's instructions and
          limitations. No matter how smart someone is, everyone can be wrong to
          some degree.
        </p>
        <br />
        <p>
          Having decisive opportunities is more important than good grades. One
          can always acquire knowledge, but not possibilities. Thanks Dad!
        </p>
        <br />
        <p>
          If something is really important, do it even if the odds are not in
          your favor.
        </p>
      </div> -->
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
  margin-right: auto;
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
    font-size: $h1;
    font-weight: 400;
    text-align: left;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.2em;
    font-weight: 300;
  }

  p {
    font-size: $p;
    text-align: left;
    font-weight: 300;
    line-height: 150%;
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
    div {
      padding: 5%;
      width: 100%;
      .profile {
        object-fit: cover;
        height: 300px;
        width: 100%;
        border-radius: 10px;
        margin: 20px 0px;
      }
    }

    h1 {
      margin-bottom: 10px;
    }
    p {
      font-size: $p;
      text-align: left;
      font-weight: 300;
    }
  }
}
</style>
