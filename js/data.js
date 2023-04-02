/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
function idGiver() {
  return idGiver.counter++;
}

idGiver.counter = 0;

const welcome = [
  {
    text: "Hi, I'm Aris and welcome to my website!"
  },
  {
    text: "Currently, I work at \"Eurobank Ergasias\", one of the four systemic banks of Greece as a frontend developer."
  }
];



/* Cube Sides */
const cubeSides = [
  {
    title: "Projects",
    section: "projects",
    class: "front cubeSide"
  },
  {
    title: "Experience",
    section: "experience-elements",
    class: "right cubeSide"
  },
  {
    title: "My Skills",
    section: "skills-section",
    class: "left cubeSide"
  },
  {
    title: "Contact",
    section: "social-links-section",
    class: "back cubeSide"
  }
];

/* PROJECTS */
const projects = [
  {
    title: "Mifid II",
    coreTechnologies: new Set(['React', 'JavaScript', 'CSS3', 'Redux']),
    description: "A 6-month work that solves a real-world problem for \"Eurobank Ergasias\" Bank. I developed the front end as part of a broader AGILE team. The user selects Investment Categories, answers questions that test his knowledge / experience, and signs the on-the-fly created document with the answers.",
    link: null
  },
  {
    title: "Dog App",
    coreTechnologies: new Set(['React', 'TypeScript']),
    description:
      "This app provides abundant pictures of our best friends from dog API. The user can search Dog Races and find mesmerizing or strange photos of that race or its subcategories.",
    link: "https://github.com/Aristidis13/dogs"
  },
  {
    title: "Crowdsource Analysis Website",
    coreTechnologies: new Set(['HTML5', 'PHP7', 'JavaScript', 'Chart.js', 'MySQL7']),
    description:
      "My first Web Development project ever! The user (amongst other functionalities) can upload files with his google location history data and see charts and heatmaps with the results of the uploads.",
    link: "https://github.com/Aristidis13/Crowdsourcing-project"
  },
];

/* EXPERIENCE */
const experience = [
  {
    title: "Frontend Engineer at Agile Actors",
    subtitle: "Contractor at Eurobank Ergasias",
    dateStart: "April 2022",
    dateEnd: "Present",
    description: "I create new Views and aesthetic UIs for \"Eurobank Ergasias\" to transition this great Greek Bank to new heights as part of an AGILE team. The work is challenging but the working environment is pleasant, and the projects are interesting. I saw a new world of problems, challenges, and ways to think, and learned how a big company operates.",
    link: null
  },
  {
    title: "Frontend Developer in 3CP Digital Agency",
    subtitle: "Using Frontend Languages and Wordpress",
    dateStart: "Jan 2021",
    dateEnd: "Sep 2021",
    description:
      "3CP Digital Agency is a company based in Patras, Greece. I created, maintained, and expanded a plethora of sites. I used custom code to make sliders, carousels, and more in a very professional and fast-paced environment. The start of my corporate experience.",
    link: null
  },
  {
    title: "Student at Computer Engineering and Informatics Department",
    subtitle: "University of Patras",
    dateStart: "Sep 2013",
    dateEnd: "Sep 2020",
    description:
      "In my studies at the University oF Patras, I learned how to learn, found my interest in coding, evolved as a person and realized that continuous learning, will be an X-Factor for success in business and life. My studies helped me understand how to program and what it takes to be good at this field. I had fun, built a plethora of programs, and met amazing people. :)",
    link: new Map([["Integrated Master from C.E.I.D", '../files/Diploma.pdf']])
  }
];

/* SKILLS */
const skills = [
  {
    title: "React",
    image: "skills/react.svg",
    description:
      "I prefer to write plain React apps but I've also incorporated React Component libraries like Material UI and Ant Design.",
  },
  {
    title: "TypeScript",
    image: "/skills/typescript.svg",
    description:
      "A language I've used and like. I wish there was more TypeScript in the world. :)",
  },
  {
    title: "CSS3",
    image: "/skills/css3.svg",
    description:
      "I can play with plain CSS, Sass and CSS Frameworks, to improve the aesthetics of any UI.",
  },
  {
    title: "HTML5",
    image: "/skills/html5.svg",
    description:
      "Easy to learn, but hard to master, especially ARIA, and Canvas API.",
  },
  {
    title: "JavaScript",
    image: "/skills/javascript.svg",
    description:
      "I've used JS countless times professionally and for personal projects.",
  },
  {
    title: "jQuery",
    image: "/skills/jquery.svg",
    description: "A library I have used in my previous job and in college.",
  },
  {
    title: "Git",
    image: "/skills/git.svg",
    description:
      "A version control system I paired with Github / Bitbucket / Azure Repos. Saved my projects many times. :)",
  },
];

/* SOCIAL LINKS */
const socialLinks = [
  {
    title: "Github",
    url: "https://github.com/Aristidis13/",
    linkClass: "link link-container social-link",
    textClass: "social-link-title"
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/aris-barlos-69a3b8153/",
    linkClass: "link link-container social-link",
    textClass: "social-link-title"
  },
  {
    title: "Email Me",
    url: "mailto:contact@arisbarlos.com",
    linkClass: "link link-container social-link",
    textClass: "social-link-title"
  },
];
