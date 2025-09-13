/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
function idGiver() {
  return idGiver.counter++;
}

idGiver.counter = 0;

const disableMsgForDarkReader = [
  { text: "It seems you’re using a Dark Mode plugin." },
  { text: "This site is already optimized for visual comfort." },
  { text: "Colors are carefully balanced for contrast and readability." },
  { text: "For the intended experience, please disable Dark Mode." }
]

const welcome = [
  { text: "Welcome!" },
  { text: "Currently, I work as Frontend Engineer." },
  { text: "Feel free to say hello!☺️" }
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
    title: "Skills",
    section: "skills-section",
    class: "left cubeSide"
  },
  {
    title: "Let's Connect",
    section: "social-links-section",
    class: "back cubeSide"
  }
];

/* PROJECTS */
const projects = [
  {
    id: "dogs-app",
    title: "Dog App",
    coreSkills: new Set(['React', 'TypeScript']),
    description:
      "This app provides abundant pictures of our best friends from dog API. The user can search Dog Races and find mesmerizing or strange photos of that race or its subcategories.",
    link: "https://aristidis13.github.io/dogs/"
  },
  {
    id: "calculator",
    title: "A React Calculator",
    coreSkills: new Set(['React', 'JavaScript', 'CSS3', 'CSS Modules']),
    description: "This is a fully functional calculator built with React and styled using CSS modules. It supports consecutive calculations, making it behave like a real calculator rather than just solving one equation at a time. What makes this project special is that it was my first React project!",
    link: "https://aristidis13.github.io/react-calculator/"
  },
];

/* EXPERIENCE */
const experience = [
  {
    title: "Frontend Engineer at Agile Actors",
    subtitle: "Contractor at Eurobank Ergasias",
    dateStart: "Mar 2022",
    dateEnd: "Present",
    description: "Delivered complex, high-stakes digital banking solutions as a Frontend Engineer at Agile Actors, rescuing delayed projects, improving system performance by 40–50%, and accelerating development speed by creating reusable frameworks while mentoring junior developers.",
    link: null
  },
  {
    title: "Frontend Developer in 3CP Digital Agency",
    subtitle: "Using Frontend Languages and Wordpress",
    dateStart: "Jan 2021",
    dateEnd: "Sep 2021",
    description: "Delivered and optimized commercial websites for small businesses, quickly mastering unfamiliar tech stacks to ship production-ready solutions under tight client deadlines.",
    link: null
  },
  {
    title: "Student at Computer Engineering and Informatics Department",
    subtitle: "University of Patras",
    dateStart: "Sep 2013",
    dateEnd: "Sep 2020",
    description: "Completed a 5-year Integrated Master’s in Computer Engineering, achieving a Very Good distinction through leading high-performing atomic and team-based college projects.",
    link: new Map([["Integrated Master from C.E.I.D", '/files/Diploma.pdf']])
  }
];

/* SKILLS */
const skills = [
  {
    title: "React",
    image: "skills/react.svg",
    description: "I think I know a couple of things...",
  },
  {
    title: "TypeScript",
    image: "/skills/typescript.svg",
    description: "A language I've used for personal projects and work",
  },
  {
    title: "CSS",
    image: "/skills/css3.svg",
    description: "I can play with plain CSS3, Sass and CSS Frameworks, to improve the aesthetics of any UI.",
  },
  {
    title: "HTML5",
    image: "/skills/html5.svg",
    description: "Easy to learn, but hard to master, especially ARIA, and Canvas API.",
  },
  {
    title: "JavaScript",
    image: "/skills/javascript.svg",
    description: "I've used this old lady, countless times professionally and for personal projects.",
  },
  {
    title: "Node.js",
    image: "/skills/node.svg",
    description: "I find Node.js and its philosophy handy for creating APIs and services.",
  },
  {
    title: "Wordpress",
    image: "/skills/wordpress.svg",
    description: "I've used wordpress in my first job and to build sites for friends.",
  },
    {
    title: "Java",
    image: "/skills/java.svg",
    description: "I've used Java to build services for a variety of tasks.",
  },
  {
    title: "jQuery",
    image: "/skills/jquery.svg",
    description: "A library I've used in my first job and in college.",
  },
  {
    title: "Agile / Scrum",
    image: "/skills/scrum.svg",
    description: "I have experience working in Agile Teams as Lead Developer.",
  },
  {
    title: "Git",
    image: "/skills/git.svg",
    description: "Saved my projects many times.",
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
    title: "Email Me",
    url: "mailto:contact@arisbarlos.com",
    linkClass: "link link-container social-link",
    textClass: "social-link-title"
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/aris-barlos-69a3b8153/",
    linkClass: "link link-container social-link",
    textClass: "social-link-title"
  },
];
