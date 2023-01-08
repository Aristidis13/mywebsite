/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
function idGiver() {
  return idGiver.counter++;
}

idGiver.counter = 0;

const welcome = [
  {
    id: idGiver(),
    text: "Hi! I'm Aris Barlos and welcome to my website."
  },
  {
    id: idGiver(),
    text: "Currently, I work at \"Eurobank Ergasias\", one of the four systemic banks of Greece as a frontend developer."
  },
  {
    id: idGiver(),
    text: "When I have spare time, I read books about programming or finance, play basketball and do personal projects for commercial use or fun."
  }
];

/* Re-initialize counter */
idGiver.counter = 0;

/* Cube Sides */
const cubeSides = [
  {
    id: idGiver(),
    title: "Projects",
    section: "projects",
    class: "front cubeSide"
  },
  {
    id: idGiver(),
    title: "Experience",
    section: "experience-elements",
    class: "right cubeSide"
  },
  {
    id: idGiver(),
    title: "My Skills",
    section: "skills-section",
    class: "left cubeSide"
  },
  {
    id: idGiver(),
    title: "Links",
    section: "social-links-section",
    class: "back cubeSide"
  }
];

/* PROJECTS */

idGiver.counter = 0;

const projects = [
  {
    id: idGiver(),
    title: "Mifid II",
    coreTechnologies: new Set(['React', 'JavaScript', 'CSS3', 'Redux']),
    description: "A 6-month work that solves a real-world problem for \"Eurobank Ergasias\" Bank. I developed the front end as part of a broader AGILE team. The user selects Investment Categories, answers questions that test his knowledge / experience, and signs the on-the-fly created document with the answers.",
    link: null
  },
  {
    id: idGiver(),
    title: "Dog App",
    coreTechnologies: new Set(['React', 'TypeScript']),
    description:
      "This app provides an abundant pictures of our best friends from dog API. The user can search Dog Races and find mesmerizing or strange photos of that race or its subcategories.",
    link: "https://github.com/Aristidis13/dogs"
  },
  {
    id: idGiver(),
    title: "Crowdsource Analysis Website",
    coreTechnologies: new Set(['HTML5', 'PHP7', 'JavaScript', 'Chart.js', 'MySQL7']),
    description:
      "My first Web Development project ever! The user (amongst other functionalities) can upload files with his google location history data and see charts and heatmaps with the results of the uploads.",
    link: "https://github.com/Aristidis13/Crowdsourcing-project"
  },
  {
    id: idGiver(),
    title: "React Calculator",
    coreTechnologies: new Set(['React', 'JavaScript', 'Redux']),
    description:
      "The user can perform a plethora of calculations and see the results.",
    link: "https://github.com/Aristidis13/react-calculator"
  },
  {
    id: idGiver(),
    title: "Social Media Network",
    coreTechnologies: new Set(['Java7']),
    description:
      "My introduction to Object-Oriented Programming. The user can use this CLI to post, like, comment, message other users, add friends, and more.",
    link: "https://github.com/Aristidis13/Social-Network"
  },
];

/* EXPERIENCE */
idGiver.counter = 0;

const experience = [
  {
    id: idGiver(),
    title: "Certifications",
    subtitle: "My Most Important",
    dateStart: "Sep 2020",
    dateEnd: "Present",
    description: "",
    link: new Map([
      ["Integrated Master from C.E.I.D", '../files/Diploma.pdf'],
      ["Responsive Web Design", "https://www.freecodecamp.org/certification/aristidis13/responsive-web-design"],
      ["JavaScript Algorithms An Data Structures", "https://www.freecodecamp.org/certification/aristidis13/javascript-algorithms-and-data-structures"]
    ])
  },
  {
    id: idGiver(),
    title: "Frontend Developer at Agile Actors",
    subtitle: "Contractor at Eurobank Ergasias",
    dateStart: "April 2022",
    dateEnd: "Present",
    description: "I create new Views and aesthetic UIs for \"Eurobank Ergasias\" to transition this great Greek Bank to new heights as part of an AGILE team. The work is challenging but the working environment is pleasant, and the projects are interesting. I saw a new world of problems, challenges, and ways to think, and learned how a big company operates.",
    link: null
  },
  {
    id: idGiver(),
    title: "Frontend Developer in 3CP Digital Agency",
    subtitle: "Using Frontend Languages and Wordpress",
    dateStart: "Jan 2021",
    dateEnd: "Sep 2021",
    description:
      "3CP Digital Agency is a company based in Patras, Greece. I created, maintained, and expanded a plethora of sites. I used custom code to make sliders, carousels, and more in a very professional and fast-paced environment. The start of my corporate experience.",
    link: null
  },
  {
    id: idGiver(),
    title: "Student at Computer Engineering and Informatics Department",
    subtitle: "University of Patras",
    dateStart: "Sep 2013",
    dateEnd: "Sep 2020",
    description:
      "In my studies at the University oF Patras, I learned how to learn, found my interest in coding, evolved as a person and realized that continuous learning, will be an X-Factor for success in business and life. My studies helped me understand how to program and what it takes to be good at this field. I had fun, built a plethora of programs, and met amazing people. :)",
    link: new Map([["Computer Engineering and Informatics Department (C.E.I.D)", "https://www.ceid.upatras.gr/en"]])
  }
];

/* SKILLS */
idGiver.counter = 0; // Restarts Counter

const skills = [
  {
    id: idGiver(),
    title: "React",
    image: "skills/react.svg",
    description:
      "Component-based and a powerful library that I use every day at work and for personal projects.",
  },
  {
    id: idGiver(),
    title: "TypeScript",
    image: "/skills/typescript.svg",
    description:
      "A language I've used and like. I wish there was more TypeScript in the world. :)",
  },
  {
    id: idGiver(),
    title: "CSS3",
    image: "/skills/css3.svg",
    description:
      "Having written thousands of lines, I firmly believe that CSS is one of the most important parts of every UI.",
  },
  {
    id: idGiver(),
    title: "HTML5",
    image: "/skills/html5.svg",
    description:
      "Easy to learn, but hard to master, especially ARIA, Canvas API, and SVG Attributes.",
  },
  {
    id: idGiver(),
    title: "JavaScript ES6+",
    image: "/skills/javascript.svg",
    description:
      "I've used JS countless times professionally and for personal projects.",
  },
  {
    id: idGiver(),
    title: "jQuery",
    image: "/skills/jquery.svg",
    description: "A library I have used in my previous job and in college.",
  },
  {
    "id": idGiver(),
    "title": "Node.js",
    "image": "/skills/node.svg",
    "description": "I prefer to use Node.js for the back-end of websites and apps alongside React and MongoDB.",
  },
  {
    "id": idGiver(),
    "title": "MongoDB",
    "image": "/skills/mongodb.svg",
    "description": "A modern solution in Database Design that rapidly expands due to its flexibility and scalability.",
  },
  {
    "id": idGiver(),
    "title": "MySQL",
    "image": "/skills/mysql.svg",
    "description": "The first Query-DataBase language I learned and used for the Database Design lab in the University.",
  },
  {
    id: idGiver(),
    title: "Bulma",
    image: "/skills/bulma.svg",
    description:
      "A lightweight CSS framework I used on my previous website. Currently, I just use Grid or Flexbox. :)",
  },
  {
    id: idGiver(),
    title: "Material UI",
    image: "/skills/material-ui.svg",
    description:
      "I use Material UI profesionally alongside Ant Design because it offers a variety of modern prebuilt components.",
  },
  {
    id: idGiver(),
    title: "Ant Design",
    image: "/skills/ant-design.svg",
    description:
      "Ant Design is my favorite React UI library. It has an impressive set of high-quality and performant React components.",
  },
  {
    id: idGiver(),
    title: "SEO",
    image: "/skills/seo.svg",
    description:
      "I learned SEO for completing my Thesis at University. I can comprehend the basics as a programmer or content creator.",
  },
  {
    id: idGiver(),
    title: "PHP",
    image: "/skills/php.svg",
    description:
      "PHP was the first server language I understood. Nowadays, I have switched to NodeJS.",
  },
  {
    id: idGiver(),
    title: "Java",
    image: "/skills/java.svg",
    description:
      "I learned Java during my college years, built a 3-person project alone, and understood OOP concepts.",
  },
  {
    id: idGiver(),
    title: "Git",
    image: "/skills/git.svg",
    description:
      "A version control system I pair with Github. They have saved my projects many times. :)",
  },
  {
    id: idGiver(),
    title: "Webpack 5",
    image: "/skills/webpack.svg",
    description:
      "I got interested to learn how Webpack works and found many utilities that made my life easier in a difficult personal project.",
  },
  {
    id: idGiver(),
    title: "Express",
    image: "/skills/express-js.svg",
    description:
      "Express is a flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
  }
];

/* SOCIAL LINKS */

idGiver.counter = 0; // Restarts Counter
const socialLinksLinkClass = "link link-container social-link";
const socialLinksTextClass = "social-link-title";

const socialLinks = [
  {
    id: idGiver(),
    title: "Github",
    url: "https://github.com/Aristidis13/",
    linkClass: socialLinksLinkClass,
    textClass: socialLinksTextClass
  },
  {
    id: idGiver(),
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/aris-barlos-69a3b8153/",
    linkClass: socialLinksLinkClass,
    textClass: socialLinksTextClass
  },
  {
    id: idGiver(),
    title: "Email Me",
    url: "mailto:contact@arisbarlos.com",
    linkClass: socialLinksLinkClass,
    textClass: socialLinksTextClass
  },
  {
    id: idGiver(),
    title: "Facebook",
    url: "https://www.facebook.com/people/Aris-Barlos/100009788894945/",
    linkClass: socialLinksLinkClass,
    textClass: socialLinksTextClass
  },
  {
    id: idGiver(),
    title: "Fiverr",
    url: "https://www.fiverr.com/arisbarlos?up_rollout=true",
    linkClass: socialLinksLinkClass,
    textClass: socialLinksTextClass
  }
];
