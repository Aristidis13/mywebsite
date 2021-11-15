idGiver.counter = 0;

function idGiver()  {
	return idGiver.counter++;
}

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
