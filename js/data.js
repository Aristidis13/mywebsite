idGiver.counter = 0;

function idGiver()  {
	return idGiver.counter++;
}

/*PROJECTS */

let projects = [
	{
		"id": idGiver(),
		"title": "Parser and Lexicological Analyser with Flex & Bison",
		"description": "A custom compiler that accepts as input a JSON file that contains multiple tweets,retweets and extended tweets and finds what fields are missing or have different values from what is expected. The parser was written with C.",
		"link": "https://github.com/Aristidis13/Flex-and-Bison-Parser"
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
		"description": "A Social Network that was created for the Java course in my college. This project is created in purely OOP fashion. The user among others can post, like a post, comment, message, add friends and more.",
		"link" :"https://github.com/Aristidis13/Social-Network"
	},
	{
		"id": idGiver(),
		"title": "Parallel Programming with OpenMP Framework",
		"description": "The project examines 4 schedules of parallelization and their speed perforfance for a non-distributed workload with the OpenMP Framework and C++ as the programming language. I also optimized the code for speed and performance.",
		"link" :"https://github.com/Aristidis13/Parallellization-with-OpenMP-Framework/"
	},
	{
		"id": idGiver(),
		"title": "Bash Scripting (& awk) in a logfile",
		"description": "A Bash Script that performs a multitude of calculations in a log file using awk and sed and presents the results. It offered a great introduction to Linux Commands and Bash Scripting.",
		"link": "https://github.com/Aristidis13/Bash_Scripting"
	},
	{
		"id": idGiver(),
		"title": "A Crowdsourcing Project",
		"description": "This Web Development project contains was written with PHP, Vanilla JavaScript, HTML5, CSS3 and Chart.js. It contains Ajax handling, form validation,data submission, sorting based on user preferences and more. The user (admin or user) can upload files with his google location history data and see charts and heatmaps with the results of the uploads.",
		"link": "https://github.com/Aristidis13/Crowdsourcing-project"
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
	},
	{
		"id": idGiver(),
		"title": "Freelancer in Fiverr",
		"subtitle": "Building Apps or Sites using Frontend and Backend Languages",
		"dateStart": 'Jan 2021',
		"dateEnd": 'Present',
		"description": "Occasionally when I have spare time from my other projects I use Fiverr to make websites, projects and more. If you want help with your projects find me and say 'Hello!'",
		"link": "https://www.fiverr.com/arisbarlos?up_rollout=true"
	},
	{
		"id": idGiver(),
		"title": "Certifications",
		"dateStart": 'September 2020',
		"dateEnd": 'Present',
		"description": "My Certifications as far include an Integrated Masters in Computer Science which I obtained at September 2020. I ",
		"link": ""
	}
]

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


