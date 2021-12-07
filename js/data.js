function idGiver()  {
	return idGiver.counter++;
}

idGiver.counter = 0;

let welcome = [
	{
		"id": idGiver(),
		"text": "Welcome to my website. I come from Patras, Greece and I'm a software developer, with Bachelor in Computer Science."
	},
	{
		"id": idGiver(),
		"text": "I have small corporate programming experience BUT in every project I worked on so far, I brought it to fruition without compromising my vision or personal deadlines."
	},
	{
		"id": idGiver(),
		"text": "When I have spare time, I read books about programming and finance, lift heavy things, play basketball and make side projects in order to learn new technologies."
	},
	{
		"id": idGiver(),
		"text": "Either a simple visitor, a recruiter or somebody that came by chance, I hope you like my site. Have a nice day."
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
		"title": "A Crowdsourcing Project",
		"description": "This is a Web Development project that was written with PHP, MySQL7, JS, HTML5, CSS3 and Chart.js. It contains Ajax handling, form validation,data submission and sorting based on user preferences. The user (admin or user) can upload files with his google location history data and see charts and heatmaps with the results of the uploads. It was a lengthy project and my first website ever.",
		"link": "https://github.com/Aristidis13/Crowdsourcing-project"
	},
	{
		"id": idGiver(),
		"title": "EstateHub",
		"description": "This project focused in the development of a business idea and the Software lifecycle. I and the team used ICONIX with custom defined workflow. Except the lifecycle of the project we explored various UML Diagrams such as use cases, and robustness-sequence diagrams. It has been implemented in C# and wpf as a windows binary.",
		"link": "https://github.com/katagis/estatehub"
	},
	{
		"id": idGiver(),
		"title": "Social Media Network",
		"description": "A Social Network that was created for the Java course in my University. The user among others can post, like a post, comment, message, add friends and more.It doesn't contain UI.",
		"link" :"https://github.com/Aristidis13/Social-Network"
	},
	{
		"id": idGiver(),
		"title": "Bash Scripting (& awk) in a logfile",
		"description": "A Bash Script that performs a multitude of calculations in a log file using awk and sed and presents the results. It offered a great introduction to Linux Commands and Bash Scripting.",
		"link": "https://github.com/Aristidis13/Bash_Scripting"
	},
/*	{
		"id": idGiver(),
		"title": "Parser and Lexicological Analyser with Flex & Bison",
		"description": "A custom compiler that accepts as input a JSON file that contains multiple tweets,retweets and extended tweets and finds what fields are missing or have different values from what is expected. The parser was written with C.",
		"link": "https://github.com/Aristidis13/Flex-and-Bison-Parser"
	},*/
	{
		"id": idGiver(),
		"title": "Parallel Programming with OpenMP Framework",
		"description": "The project examines 4 schedules of parallelization and their speed perforfance for a non-distributed workload with the OpenMP Framework and C++ as the programming language. I also optimized the code for speed and performance.",
		"link" :"https://github.com/Aristidis13/Parallellization-with-OpenMP-Framework/"
	},
	{
		"id": idGiver(),
		"title": "MySQL Database Project",
		"description": "This is a project that is about relational MySQL Database handling. It's about the expansion of a given erecruitment system to fulfil the needs of recruiters and a candidates. It contains CREATE statements, insertions, selects, triggers and stored proecedures",
		"link": "https://github.com/Aristidis13/MySQL-database-expansion"
	}
];

/* EXPERIENCE */
idGiver.counter = 0;

let experience = [
	{
		"id": idGiver(),
		"title": "Certifications",
		"subtitle": "The most Important",
		"dateStart": 'Sep 2020',
		"dateEnd": 'Present',
		"description": "I never miss an opportunity to explore a new technology and therefore expand my collection of Certifications. My most important, is an Integrated Master in Computer Science which I obtained at September 2020. I also hold in high respect the Certification in Responsive Web Design which I got from freecodecamp after attending the lessons and doing all the projects there. Expect more in the future.",
		"link": "https://www.freecodecamp.org/certification/aristidis13/responsive-web-design"
	},
	{
		"id": idGiver(),
		"title": "Freelancer in Fiverr",
		"subtitle": "Building Apps or Sites using Frontend and Backend Languages",
		"dateStart": 'Jan 2021',
		"dateEnd": 'Present',
		"description": "Occasionally when I have spare time from my other projects I use Fiverr to make websites, university projects and more. If you want help with your projects find me and say 'Hello!'",
		"link": "https://www.fiverr.com/arisbarlos?up_rollout=true"
	},
	{
		"id": idGiver(),
		"title": "Frontend Developer in 3CP Digital Agency",
		"subtitle": "Using Frontend Languages and Wordpress",
		"dateStart": 'Jan 2021',
		"dateEnd": 'Sep 2021',
		"description": "3CP Digital Agency is an amazing company based in Patras, Greece. During my work there I had the opportunity to help in the creation and maintanance of a plethora of sites by building sliders, carousels and more in a very professional and fast-paced enviroment. In my time there I had the opportunity to explore the world of Wordpress.",
		"link": "https://3cp.gr/"
	},
	{
		"id": idGiver(),
		"title": "Student at Computer Engineering and Informatics Department",
		"subtitle": "University of Patras",
		"dateStart": 'Sep 2013',
		"dateEnd": 'Sep 2020',
		"description": "My studies there although mostly theoretical were very helpful to understand how to program and what it takes to be a great programmer. I had fun, built a plethora of programs and met amazing people.",
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
		"description": "React is a Component based JS Library created from Facebook and a powerfull tool to make live DOM Updates.It has been used in this site.",
		"url": "https://reactjs.org/"
	},
	{
		"id": idGiver(),
		"title": "CSS3",
		"image":"/skills/css3.svg",
		"description": "With Flexbox,Grid and Animations, CSS nowadays is a lot more than just a style-adding mechanism. It's central part of every UI and one of my favorites.",
		"url": "https://www.w3.org/Style/CSS/"
	},
	{
		"id": idGiver(),
		"title": "HTML",
		"image": "/skills/html5.svg",
		"description": "HTML5 is a structuring and markup language that although not difficult to learn is difficult to master, especially ARIA, Canvas API and SVG Handling",
		"url" :"https://www.w3.org/html/"
	},
	{
		"id": idGiver(),
		"title": "JavaScript ES6+",
		"image": "/skills/javascript.svg",
		"description": "A fullstack Programming Language. In ES+ Standard alongside Babel or some other JS compiler can be found everywhere!",
		"url" :"https://www.w3.org/standards/webdesign/script"
	},
	{
		"id": idGiver(),
		"title": "Node.js",
		"image": "/skills/node.svg",
		"description": "Node.js is primarily used for traditional web sites and back-end API services and I've used it alongside React and MongoDB.",
		"url" :"https://nodejs.org/en/"
	},/*
	{
		"id": idGiver(),
		"title": "MongoDB",
		"image": "/skills/mongodb.svg",
		"description": "MongoDB is a modern solution in Database Design and is rapidly expanding due to its flexibility and scalability.",
		"link": "https://www.mongodb.com/"
	},*/
	{
		"id": idGiver(),
		"title": "Wordpress",
		"image": "./skills/wordpress.svg",
		"description": "Wordpress is the most used Open Source CMS widelly used in many websites globally with a passionate community.",
		"url": "https://wordpress.com/el/"
	},
	{
		"id": idGiver(),
		"title": "Bulma",
		"image": "/skills/bulma.svg",
		"description": "A lighweight CSS Framework, based mostly in Flexbox, has modular Components and no JavaScript.It can be used to create impressive layouts.",
		"url": "https://bulma.io/"
	},
	{
		"id": idGiver(),
		"title": "PHP",
		"image": "/skills/php.svg",
		"description": "PHP was the holy grail of backend web developement and the first backend technology I learned to use.",
		"url": "https://www.php.net/"
	},
	{
		"id": idGiver(),
		"title": "Java",
		"image":"/skills/java.svg",
		"description": "A widelly used, completely OOP Language that I had the oppertunity to use a lot during my college years.",
		"url": "https://www.java.com/"
	},
	{
		"id": idGiver(),
		"title": "Git",
		"image":"/skills/git.svg",
		"description": "Git is a version control system widelly adopted in the developement of every project I've done.Alongside Github are pillars in the programming world",
		"url": "https://git-scm.com/"
	}
];

/*NEWS*/
idGiver.counter = 0;
let news = [
	{
		"id":"books",
		"title": "Books I read now",
		"text": "Books alongside online tutorials, are a great tool to learn the basics of pretty much everything. Also I find them usefull and as reference. I have a special place in my heart for good books. If you have a book recommendation, I would love to know."
	},
	{
		"id":"cproject",
		"title": "What I do",
		"text": "Currently I refactor and expand my codebase in my Thesis. Additionally, I refactor and expand the codebase in the Crowdsourcing Project. Finally I study ReactJS and make some small side projects.",
		"link": "https://github.com/Aristidis13/Crowdsourcing-project"
	},
	{
		"id":"general",
		"title": "What I learn",
		"text": "Currently I learn ReactJS and find ways to make SVGs come to life. Additionally, I think about ways to improve my Thesis Code and make it even better.I'm open for collaborations or Frontend web development work.",
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