function idGiver()  {
	return idGiver.counter++;
}

idGiver.counter = 0;

let welcome = [
	{
		"id": idGiver(),
		"text": "Welcome to my website. I come from Patras, Greece. I'm a software developer, with Bachelor in Computer Science."
	},
	{
		"id": idGiver(),
		"text": "I have relatively small corporate programming experience. So far, however, with every project I made, I brought it to fruition without sacrificing my vision or deadlines."
	},
	{
		"id": idGiver(),
		"text": "When I have spare time, I read books about programming and finance, lift heavy things, play basketball and do side projects to learn new technologies."
	},
	{
		"id": idGiver(),
		"text": "I hope you like my site. Have a nice day."
	}
];

/*Re-initialize counter */
idGiver.counter = 0;

/* Cube Sides */
let cubeSides = [
	{
		"id": idGiver(),
		"title": "Welcome",
		"section": "welcome-section",
		"class": "front cubeSide"
	},
	{
		"id": idGiver(),
		"title": "Projects",
		"section": "projects-section",
		"class": "back cubeSide"
	},
	{
		"id": idGiver(),
		"title": "Experience",
		"section": "technical-experience",
		"class": "right cubeSide"
	},
	{
		"id": idGiver(),
		"title": "My Skills",
		"section": "skills-section",
		"class": "left cubeSide"
	},
	{
		"id": idGiver(),
		"title": "News",
		"section": "news-section",
		"class": "top cubeSide"
	},
	{
		"id": idGiver(),
		"title": "Links",
		"section": "social-links-section",
		"class": "bottom cubeSide"
	}

];


/*PROJECTS */

idGiver.counter = 0;

let projects = [
	{
		"id": idGiver(),
		"title": "Crowdsource Analysis Website",
		"description": "A Web Development project I built with PHP, MySQL7, JS, HTML5, CSS3, and Chart.js. Contains Ajax handling, form validation, data submission, and sorting based on user preferences. The user (admin or user) can upload files with his google location history data and see charts and heatmaps with the results of the uploads. It was a lengthy project and my first website ever.",
		"link": "https://github.com/Aristidis13/Crowdsourcing-project"
	},
	{
		"id": idGiver(),
		"title": "EstateHub",
		"description": "This project focused on the development of an enterprise idea and the Software lifecycle. I and my colleagues used ICONIX Methodology with a custom-defined workflow. In addition to the project lifecycle, we explored various UML Diagrams such as use-cases and robustness, sequence diagrams. We implemented our idea with C# and WPF as a windows binary.",
		"link": "https://github.com/katagis/estatehub"
	},
	{
		"id": idGiver(),
		"title": "Social Media Network",
		"description": "I created this project for the Java course at my University. The user amongst other functionalities can post, like a post, comment, message, and add friends. This project was my first introduction to Object-Oriented Programming and Design.",
		"link" :"https://github.com/Aristidis13/Social-Network"
	},
	{
		"id": idGiver(),
		"title": "Linux Bash Scripting (&) awk)",
		"description": "A Bash Script that performs a multitude of calculations in a log file using awk and sed and presents the results. It was a part of a lengthier project that focused on teaching the basics of Operating Systems. It offered a great introduction to Linux Commands and Bash Scripting. You can find each file for this project in my Github.",
		"link": "https://github.com/Aristidis13/Bash_Scripting"
	},
/*	{
		"id": idGiver(),
		"title": "Flex-Bison Parser and Lexicological Analyser",
		"description": "A custom compiler that accepts as input a JSON file that contains multiple tweets, retweets, and extended tweets and finds what fields are missing or have different values from the expected. I built this with C and created the Lexicological Analyzer with Flex and the parser with Bison (former YACC).",
		"link": "https://github.com/Aristidis13/Flex-and-Bison-Parser"
	},*/
	{
		"id": idGiver(),
		"title": "Parallellization with C++ OpenMP Framework",
		"description": "The project examines four parallelization schedules and their speed for a non-distributed workload with the OpenMP Framework and C++ as the programming language. Additionally, I optimized the assigned codebase, for speed and performance.",
		"link" :"https://github.com/Aristidis13/Parallellization-with-OpenMP-Framework/"
	},
	{
		"id": idGiver(),
		"title": "MySQL Database Expansion",
		"description": "A project about relational MySQL Database handling and Databases in general. It's an expansion of a given e-recruitment system to fulfill the needs of recruiters and candidates. I used a plethora of CREATE statements, insertions, selects, triggers, and stored procedures.",
		"link": "https://github.com/Aristidis13/MySQL-database-expansion"
	}
];

/* EXPERIENCE */
idGiver.counter = 0;

let experience = [
	{
		"id": idGiver(),
		"title": "Certifications",
		"subtitle": "TMy Most Important",
		"dateStart": 'Sep 2020',
		"dateEnd": 'Present',
		"description": "I always take the opportunity to explore new technologies and therefore expand my collection of Certifications. My most precious is a Diploma in Computer Science (Integrated Master), which I obtained in September 2020. I also like the Certification in Responsive Web Design I got from freecodecamp after attending the lessons and doing all the projects there. Certifications are not the holy grail of mastering skills but are a great way to personally assess if you have a certain level of competence in a new skill. I'm not actively collecting more right now but expect more in the future.",
		"link": "https://www.freecodecamp.org/certification/aristidis13/responsive-web-design"
	},
	{
		"id": idGiver(),
		"title": "Freelancer in Fiverr",
		"subtitle": "(not actively started yet)",
		"dateStart": 'Oct 2021',
		"dateEnd": 'Present',
		"description": "When I have time and clients, you may find me building websites, university projects, and more in Fiverr.  If you want help with your projects, find me there and tell me your project. I may not be the best-fitted person for the task, but I will help you find what you need and a person with the right skills who will help you achieve your goal. And if I am, I communicate clearly what you may need and what I charge for it.",
		"link": "https://www.fiverr.com/arisbarlos?up_rollout=true"
	},
	{
		"id": idGiver(),
		"title": "Frontend Developer in 3CP Digital Agency",
		"subtitle": "Using Frontend Languages and Wordpress",
		"dateStart": 'Jan 2021',
		"dateEnd": 'Sep 2021',
		"description": "3CP Digital Agency is a company based in Patras, Greece. I created, maintained, and expanded a plethora of sites. I used custom code to make sliders, carousels, and more in a very professional and fast-paced environment. Alongside custom code, I learned how WordPress works under the hood. This company was also the start of my corporate experience.",
		"link": "https://3cp.gr/"
	},
	{
		"id": idGiver(),
		"title": "Student at Computer Engineering and Informatics Department",
		"subtitle": "University of Patras",
		"dateStart": 'Sep 2013',
		"dateEnd": 'Sep 2020',
		"description": "In my studies at the University oF Patras, I learned how to learn and found my interest in programming. I evolved as a human being and realized that continuous learning, will be an X-Factor for my success in business and life. My studies there had many different projects and theoretical knowledge. They helped me understand how to program and what it takes to be a great programmer. I had fun and built a plethora of programs. Did I mention I met amazing people there, too?",
		"link": "https://www.ceid.upatras.gr/en"
	}
];

/* SKILLS */
idGiver.counter = 0; // Restarts Counter

let skills = [
	{
		"id": idGiver(),
		"title": "React",
		"image":"skills/react.svg",
		"description": "Component-based and a powerful tool to make live DOM Updates for small projects or complex apps. Currently, knowing the basics, I strive to master it.",
		"url": "https://reactjs.org/"
	},
	{
		"id": idGiver(),
		"title": "CSS3",
		"image":"/skills/css3.svg",
		"description": "With Flexbox, Grid, and Animations, CSS nowadays is much more than just a style-adding mechanism. It's the central part of every UI and one, I deeply understand.",
		"url": "https://www.w3.org/Style/CSS/"
	},
	{
		"id": idGiver(),
		"title": "HTML5",
		"image": "/skills/html5.svg",
		"description": "HTML5 is a structuring and markup language. Easy to learn, but hard to master, especially ARIA, Canvas API, and SVG Attributes.",
		"url" :"https://www.w3.org/html/"
	},
	{
		"id": idGiver(),
		"title": "JavaScript ES6+",
		"image": "/skills/javascript.svg",
		"description": "A language I have used many times, I comprehend and aim to perfect in the future.",
		"url" :"https://www.w3.org/standards/webdesign/script"
	},
	{
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
	},*/
	{
		"id": idGiver(),
		"title": "WordPress",
		"image": "./skills/wordpress.svg",
		"description": "WordPress is the most used Open Source CMS, widely used in many websites globally with a passionate community.",
		"url": "https://wordpress.com/el/"
	},
	{
		"id": idGiver(),
		"title": "Bulma",
		"image": "/skills/bulma.svg",
		"description": "A lightweight CSS framework. Built with Flexbox, it gives you the ability to create impressive layouts with modular Components and no JS. I used it on my previous website.",
		"url": "https://bulma.io/"
	},
	{
		"id": idGiver(),
		"title": "Bootstrap",
		"image": "/skills/bootstrap.svg",
		"description": "Bootstrap was the first Framework I used. I rarely use it anymore since I use Grid and Flexbox themselves. Nonetheless, Bootstrap is still a viable option for quick layouts.",
		"url": "https://getbootstrap.com/"
	},
	{
		"id": idGiver(),
		"title": "SEO",
		"image": "/skills/seo.svg",
		"description": "I learned SEO for completing my Thesis. I'm no expert in any case, but I can comprehend SEO both as a programmer and content creator.",
		"url": "https://developers.google.com/search/docs/beginner/seo-starter-guide"
	},
	{
		"id": idGiver(),
		"title": "PHP",
		"image": "/skills/php.svg",
		"description": "PHP was the holy grail of backend web development and the first backend technology I learned to use. Rarely do I use it nowadays.",
		"url": "https://www.php.net/"
	},
	{
		"id": idGiver(),
		"title": "Java",
		"image":"/skills/java.svg",
		"description": "A widely used OOP Language that I learned during my college years. It helped me understand the concepts of OOP and is a fun language.",
		"url": "https://www.java.com/"
	},
	{
		"id": idGiver(),
		"title": "Git",
		"image":"/skills/git.svg",
		"description": "A version control system I pair with Github and has saved my projects. I use it within my VS Code, but I can handle terminal commands too.",
		"url": "https://git-scm.com/"
	}
];

/*NEWS*/
idGiver.counter = 0;
let news = [
	{
		"id":"cproject",
		"title": "What I do",
		"text": "Currently,  I refactor and extend the codebase for my dissertation, to make significant improvements to its functionality. Additionally, I refactor and extend the codebase in the Crowdsourcing Project. Finally, I devote time, mastering ReactJS by building apps.",
		"link": "https://github.com/Aristidis13/Crowdsourcing-project"
	},
	{
		"id":"books",
		"title": "Books I read now",
		"text": 'I find books helpful to learn the basics of pretty much anything. In programming specifically,  I find them useful to learn the basics and as a reference in times of need too. Having read many books since I was a kid, I greatly appreciate a good book. Currently, I study "Using SVGS with HTML5 and CSS3" and "Fullstack React - A Complete Guide to React JS and Friends.". If you have a book suggestion, I would love to know.'
	},
	{
		"id":"general",
		"title": "What I learn",
		"text": "The goal I currently set for me is mastering ReactJS and exploring various ways of making SVGs come to life. Moreover, I think about how to improve my Thesis Code and make it even better, and also learn to be a better programmer at the same time. I'm also open to the idea of collaborating for Frontend web development work in projects and being more active in Fiverr.",
		"link":""
	}

];

let books = [
	{
		"id":idGiver(),
		"title": "Using SVGs with HTML5 and CSS3",
		"url": "https://www.amazon.com/Using-SVG-CSS3-HTML5-Graphics-ebook/dp/B076HZ31YZ/ref=sr_1_1?keywords=using+svg+with+html5+and+css3&qid=1637525631&sr=8-1",
		"description":"A complete and extremely helpful book that gives valuable knowledge of SVG and its animations."
	},
	{
		"id":idGiver(),
		"title": "Fullstack React: The Complete Guide to ReactJS and Friends",
		"url": "https://www.amazon.com/Fullstack-React-Complete-ReactJS-Friends/dp/0991344626/ref=sr_1_1?keywords=fullstack+react&qid=1637524475&sr=8-1",
		"description": "A React Book for React Beginners that teaches the fundamentals of React, Redux and more."
	}
];

/*SOCIAL LINKS*/

idGiver.counter = 0; // Restarts Counter
const socialLinksLinkClass = "link link-container social-link";
const socialLinksTextClass = "social-link-title";

let socialLinks = [
	{
		"id": idGiver(),
		"title": "Github",
		"url": "https://github.com/Aristidis13/",
		"linkClass":socialLinksLinkClass,
		"textClass":socialLinksTextClass
	},
	{
		"id": idGiver(),
		"title": "LinkedIn",
		"url": "https://www.linkedin.com/in/aris-barlos-69a3b8153/",
		"linkClass":socialLinksLinkClass,
		"textClass":socialLinksTextClass
	},
	{
		"id": idGiver(),
		"title": "Email Me",
		"url":"mailto:aris13pat@hotmail.com",
		"linkClass":socialLinksLinkClass,
		"textClass":socialLinksTextClass
	},
	{
		"id": idGiver(),
		"title": "Facebook",
		"url": "https://www.facebook.com/people/Aris-Barlos/100009788894945/",
		"linkClass":socialLinksLinkClass,
		"textClass":socialLinksTextClass
	},
	{
		"id": idGiver(),
		"title": "Fiverr",
		"url": "https://www.fiverr.com/arisbarlos?up_rollout=true",
		"linkClass":socialLinksLinkClass,
		"textClass":socialLinksTextClass
	}
];
