/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
function idGiver() {
  return idGiver.counter++;
}

idGiver.counter = 0;

const welcome = [
  {
    id: idGiver(),
    text: "Welcome to my website."
  },
  {
    id: idGiver(),
    text: "I'm Aris Barlos a frontend developer, with Bachelor in Computer Science."
  },
  {
    id: idGiver(),
    text: "When I have spare time, I read books about programming, history and finance, play basketball and do side projects to learn new technologies."
  },
  {
    id: idGiver(),
    text: "Currently I work at Eurobank one of the four systemic banks of Greece, as an Agile Actor."
  },
  {
    id: idGiver(),
    text: "If I caught your interest, hop in"
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
    title: "Crowdsource Analysis Website",
    description:
      "A Web Development project I built with PHP, MySQL7, JS, HTML5, CSS3, and Chart.js. Contains Ajax handling, form validation, data submission, and sorting based on user preferences. The user (admin or user) can upload files with his google location history data and see charts and heatmaps with the results of the uploads. It was a lengthy project and my first website ever.",
    link: "https://github.com/Aristidis13/Crowdsourcing-project"
  },
  {
    id: idGiver(),
    title: "React Calculator",
    description:
      "A SPA I built with React and Redux with an exclusive focus on practicing. I used the create-react-app as a setup since it is a SPA. The app can compute a plethora of operations and return the result on the screen. The app is modular because I wanted to experiment with modular JS programming. Also, the redux seemed unnecessary because it's a small app, but it was a more intriguing way to code. In conclusion, a responsive web app focused on Frontend Components with the sole purpose of experimenting.",
    link: "https://github.com/Aristidis13/react-calculator"
  },
  {
    id: idGiver(),
    title: "Dog App",
    description:
      "A responsive app I built with React,TypeScript a few React Libraries (for API Calls,Pagination and more), TypeScript, CSS3, and the Dog API. It contains Ajax API Calls with axios, a search bar for easier navigation and search, and dog fetching with button pressing.",
    link: "https://github.com/Aristidis13/dogs"
  },
  {
    id: idGiver(),
    title: "EstateHub",
    description:
      "This project focused on the development of an enterprise idea and the Software lifecycle. I and my colleagues used ICONIX Methodology with a custom-defined workflow. In addition to the project lifecycle, we explored various UML Diagrams such as use-cases and robustness, sequence diagrams. We implemented our idea with C# and WPF as a windows binary.",
    link: "https://github.com/katagis/estatehub"
  },
  {
    id: idGiver(),
    title: "Social Media Network",
    description:
      "I created this project for the Java course at my University. The user amongst other functionalities can post, like a post, comment, message, and add friends. This project was my first introduction to Object-Oriented Programming and Design.",
    link: "https://github.com/Aristidis13/Social-Network"
  },
  {
    id: idGiver(),
    title: "Linux Bash Scripting (&) awk)",
    description:
      "A Bash Script that performs a multitude of calculations in a log file using awk and sed and presents the results. It was a part of a lengthier project that focused on teaching the basics of Operating Systems. It offered a great introduction to Linux Commands and Bash Scripting. You can find each file for this project in my Github.",
    link: "https://github.com/Aristidis13/Bash_Scripting"
  },
  /*	{
    "id": idGiver(),
    "title": "Flex-Bison Parser and Lexicological Analyser",
    "description": "A custom compiler that accepts as input a JSON file that contains multiple tweets, retweets, and extended tweets and finds what fields are missing or have different values from the expected. I built this with C and created the Lexicological Analyzer with Flex and the parser with Bison (former YACC).",
    "link": "https://github.com/Aristidis13/Flex-and-Bison-Parser"
  },
  {
    "id": idGiver(),
    "title": "Parallellization with C++ OpenMP Framework",
    "description": "The project examines four parallelization schedules and their speed for a non-distributed workload with the OpenMP Framework and C++ as the programming language. Additionally, I optimized the assigned codebase, for speed and performance.",
    "link" :"https://github.com/Aristidis13/Parallellization-with-OpenMP-Framework/"
  }, */
  {
    id: idGiver(),
    title: "MySQL Database Expansion",
    description:
      "A project about relational MySQL Database handling and Databases in general. It's an expansion of a given e-recruitment system to fulfill the needs of recruiters and candidates. I used a plethora of CREATE statements, insertions, selects, triggers, and stored procedures.",
    link: "https://github.com/Aristidis13/MySQL-database-expansion"
  }
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
    description:
      "I always take the opportunity to explore new technologies and therefore expand my collection of Certifications. My most precious is the Diploma in Computer Science (Integrated Master), which I obtained in September 2020. I also like the Certification in Responsive Web Design from freecodecamp, after attending the lessons and doing all the projects. Certifications are not the holy grail of mastering skills but are a great way to personally assess if you have a certain level of competence in a new skill. I'm not actively collecting more right now but expect more in the future.",
    link: "https://www.freecodecamp.org/certification/aristidis13/responsive-web-design"
  },
  {
    id: idGiver(),
    title: "Frontend Developer at Agile Actors",
    subtitle: "Contractor at Eurobank Ergasias",
    dateStart: "April 2022",
    dateEnd: "Present",
    description: "Using React, Material UI, Ant Design, Redux, Redux-Saga, and a plethora of JS libraries, I create new Views and aesthetic UIs to transition this great Greek Bank to new heights. Although the work is challenging, the working environment is pleasant, and the projects are interesting. I saw a new world of problems, challenges, and ways to think with a complex banking system that requires adequate knowledge in Programming and Banking Business Knowledge. Also, I learn how a big company works, and have collaborated with smart and knowledgeable people. Did I mentioned that working in Agile Actors is an honor and a previledge and that they also hire entry-level programmers?",
    link: "https://www.agileactors.com/"
  },
  {
    id: idGiver(),
    title: "Frontend Developer in 3CP Digital Agency",
    subtitle: "Using Frontend Languages and Wordpress",
    dateStart: "Jan 2021",
    dateEnd: "Sep 2021",
    description:
      "3CP Digital Agency is a company based in Patras, Greece. I created, maintained, and expanded a plethora of sites. I used custom code to make sliders, carousels, and more in a very professional and fast-paced environment. Alongside custom code, I learned how WordPress works under the hood. This company was also the start of my corporate experience.",
    link: "https://3cp.gr/"
  },
  {
    id: idGiver(),
    title: "Student at Computer Engineering and Informatics Department",
    subtitle: "University of Patras",
    dateStart: "Sep 2013",
    dateEnd: "Sep 2020",
    description:
      "In my studies at the University oF Patras, I learned how to learn and found my interest in programming. I evolved as a human being and realized that continuous learning, will be an X-Factor for my success in business and life. My studies there had many different projects and theoretical knowledge. They helped me understand how to program and what it takes to be a great programmer. I had fun and built a plethora of programs. Did I mention I met amazing people there, too?",
    link: "https://www.ceid.upatras.gr/en"
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
      "Component-based and a powerful tool to make live DOM Updates for small projects or complex apps. Currently, knowing the basics, I strive to master it.",
    url: "https://reactjs.org/"
  },
  {
    id: idGiver(),
    title: "TypeScript",
    image: "/skills/typescript.svg",
    description:
      "A language I have used and I really like. They benefits of TypeScript are suited for the build of simple or complex apps.",
    url: "https://www.typescriptlang.org/"
  },
  {
    id: idGiver(),
    title: "CSS3",
    image: "/skills/css3.svg",
    description:
      "With Flexbox, Grid, and Animations, CSS nowadays is much more than just a style-adding mechanism. It's the central part of every UI and one, I deeply understand.",
    url: "https://www.w3.org/Style/CSS/"
  },
  {
    id: idGiver(),
    title: "HTML5",
    image: "/skills/html5.svg",
    description:
      "HTML5 is a structuring and markup language. Easy to learn, but hard to master, especially ARIA, Canvas API, and SVG Attributes.",
    url: "https://www.w3.org/html/"
  },
  {
    id: idGiver(),
    title: "JavaScript ES6+",
    image: "/skills/javascript.svg",
    description:
      "A language I have used many times, I comprehend and aim to perfect in the future.",
    url: "https://www.javascript.com/"
  },
  {
    id: idGiver(),
    title: "jQuery",
    image: "/skills/jquery.svg",
    description:
      "A library I have used in my previous job and in college. jQuery is easy to understand and program with it although React and other JS Frameworks are more hot.",
    url: "https://jquery.com/"
  },
  /* {
    "id": idGiver(),
    "title": "Node.js",
    "image": "/skills/node.svg",
    "description": "As part of either MERN or MEAN stack, I prefer to use Node.js for the back-end of websites and apps alongside React and MongoDB.",
    "url" :"https://nodejs.org/en/"
  },/*
  {
    "id": idGiver(),
    "title": "MongoDB",
    "image": "/skills/mongodb.svg",
    "description": "A modern solution in Database Design that rapidly expands due to its flexibility and scalability. I use it, alongside the other parts of the MERN stack.",
    "link": "https://www.mongodb.com/"
  }, */
  {
    id: idGiver(),
    title: "WordPress",
    image: "./skills/wordpress.svg",
    description:
      "WordPress is the most used Open Source CMS, widely used in many websites globally with a passionate community.",
    url: "https://wordpress.com/el/"
  },
  {
    id: idGiver(),
    title: "Bulma",
    image: "/skills/bulma.svg",
    description:
      "A lightweight CSS framework. Built with Flexbox, it gives you the ability to create impressive layouts with modular Components and no JS. I used it on my previous website.",
    url: "https://bulma.io/"
  },
  {
    id: idGiver(),
    title: "Bootstrap",
    image: "/skills/bootstrap.svg",
    description:
      "Bootstrap was the first Framework I used. I rarely use it anymore since I use Grid and Flexbox themselves. Nonetheless, Bootstrap is still a viable option for quick layouts.",
    url: "https://getbootstrap.com/"
  },
  {
    id: idGiver(),
    title: "SEO",
    image: "/skills/seo.svg",
    description:
      "I learned SEO for completing my Thesis. I'm no expert in any case, but I can comprehend SEO both as a programmer and content creator.",
    url: "https://developers.google.com/search/docs"
  },
  {
    id: idGiver(),
    title: "PHP",
    image: "/skills/php.svg",
    description:
      "PHP was the holy grail of backend web development and the first backend technology I learned to use. Rarely do I use it nowadays.",
    url: "https://www.php.net/"
  },
  {
    id: idGiver(),
    title: "Java",
    image: "/skills/java.svg",
    description:
      "A widely used OOP Language that I learned during my college years. It helped me understand the concepts of OOP and is a fun language.",
    url: "https://www.java.com/"
  },
  {
    id: idGiver(),
    title: "Git",
    image: "/skills/git.svg",
    description:
      "A version control system I pair with Github and has saved my projects. I use it within my VS Code, but I can handle terminal commands too.",
    url: "https://git-scm.com/"
  }
];

// const books = [
//   {
//     id: idGiver(),
//     title: "Using SVGs with HTML5 and CSS3",
//     url: "https://www.amazon.com/Using-SVG-CSS3-HTML5-Graphics-ebook/dp/B076HZ31YZ/ref=sr_1_1?keywords=using+svg+with+html5+and+css3&qid=1637525631&sr=8-1",
//     description:
//       "A complete and extremely helpful book that gives valuable knowledge of SVG and its animations.",
//   },
//   {
//     id: idGiver(),
//     title: "Fullstack React: The Complete Guide to ReactJS and Friends",
//     url: "https://www.amazon.com/Fullstack-React-Complete-ReactJS-Friends/dp/0991344626/ref=sr_1_1?keywords=fullstack+react&qid=1637524475&sr=8-1",
//     description:
//       "A React Book for React Beginners that teaches the fundamentals of React, Redux and more.",
//   }
// ];

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
