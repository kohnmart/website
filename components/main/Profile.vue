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
        <a href="#skills"><h2>Skills</h2> </a>
        <a href="#inspirations"><h2>Literature</h2></a>
        <br />
        <p>
          Hello, everyone. My name is Martin Kohnle, 24 years old. I am
          currently studying interactive media with a focus on computer science
          in Augsburg. A course that bridges the gap between design and computer
          science. I feel at home in this in-between world. I started
          photography and filming when I was around 16. Since then I have worked
          through various fields and tried all sorts of things. It raised my
          awareness of project management, communication, and failure.
          Experience that I transfer to my activities today. With my skills and
          resources I try to solve valuable and urgent problems as possible.
        </p>
      </div>

      <div>
        <img
          class="profile"
          src="~/assets/img/profile/skills.jpg"
          alt="Martin Kohnle is not here"
        />
      </div>
      <div>
        <h1 id="skills">Skills</h1>
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
      <div>
        <img
          class="profile"
          src="~/assets/img/profile/control.jpg"
          alt="Martin Kohnle is not here"
        />
      </div>
      <!-- <div>
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
        <h1 id="inspirations">Literature</h1>
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
  margin: auto;
  margin-bottom: 100px;

  div {
    padding: 5%;
    width: 50%;
    float: left;
    margin-bottom: 100px;
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
    font-weight: 300;
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
</style>
