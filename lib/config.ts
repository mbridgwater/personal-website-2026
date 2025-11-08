import type { Portfolio } from "@/lib/types";

const PORTFOLIO_DATA: Portfolio = {
	name: "Missy Bridgwater",
	headline: "Software Developer | AI & Data Researcher",
	bio: "A results-driven M.S. computer science student at UCLA with a passion for building disruptive, scalable, and user-centric applications. Eager to leverage modern technologies to solve real-world problems and drive impactful change. Currently seeking full time job opportunities for 2026.",

	// Your contact email
	email: "missy.bridgwater@ucla.edu",

	// Add your links here
	// Supported icons: 'GitHub', 'LinkedIn', 'Twitter', 'Blog'
	links: [
		{ name: "GitHub", url: "https://github.com/mbridgwater" },
		{ name: "LinkedIn", url: "https://www.linkedin.com/in/missybridgwater/" },
		// { name: "Twitter", url: "https" },
		// { name: "Blog", url: "https://yourblog.com" },
	],

	// Add your skills here
	skills: [
		// Python, C++, C, TypeScript, JavaScript, Bash, SQL, Java, LaTeX, Haskell, Prolog, Verilog
		// Git, HTML, React, CSS, Linux, MongoDB, PowerApps, Power BI
		"Python", "C++", "C", "TypeScript", "JavaScript", "Bash", "SQL", "Java", "Node.js",
		"React", "CSS", "AWS", "LaTeX", "Haskell", "Prolog", "Verilog", "Linux", "Docker"
	],

	// Add your projects here
	projects: [
		{
			title: "webserver",
			description: "Collaborated with three UCLA students in a Software Engineering Capstone to design and implement a web server. Team roles rotated weekly, with one member serving as team lead. Completed nine assignments over ten weeks, culminating in a self-directed final feature supported by a Design Document and Product Requirements Document.",
			stack: ["C++", "CMake", "CSS", "Shell", "Dockerfile", "JavaScript", "HTML"],
			githubLink: "https://github.com/mbridgwater/webserver",
			liveLink: "",
		},
		{
			title: "neural-signaling",
			description: "Group project for neural signaling class (will be completed soon)",
			stack: ["TBD"],
			githubLink: "",
			liveLink: "",
		},
		{
			title: "riscv-processor",
			description: "Developed a 32-bit RISC-V processor simulator in C++ capable of executing a subset of RISC-V instructions through a custom datapath and control unit design. Implemented instruction decoding, ALU operations, and memory access handling to accurately mimic hardware behavior. Enabled program testing through text-based instruction input, supporting both arithmetic and control-flow operations.",
			stack: ["C++"],
			githubLink: "https://github.com/mbridgwater/riscv-processor",
			liveLink: "",
		},
		{
			title: "brewin-interpreter-v4",
			description: "Developed a fully functional interpreter for the Brewin programming language over four project stages, expanding functionality from basic variable handling and printing to a statically typed system with advanced features. Implemented support for functions, control flow (if/else, loops), structs, lazy evaluation, and exception handling, as well as type checking and default return semantics.",
			stack: ["Python"],
			githubLink: "https://github.com/mbridgwater/brewin-interpreter-v4",
			liveLink: "",
		},
		{
			title: "cache-coherency",
			description: "Design an LRU-based MOESIF cache coherency protocol for a four-core machine and report various statistics, including number of cache misses, hits, writebacks, broadcasts, and cache-to-cache transfers.",
			stack: ["C++", "C"],
			githubLink: "https://github.com/mbridgwater/cache-coherency",
			liveLink: "",
		},
		{
			title: "task_tracker",
			description: "Developed a task-tracking web application with draggable task cards across “To-Do,” “In Progress,” and “Done” columns. Implemented features for card creation, editing, deletion, and drag-and-drop file uploads that auto-update descriptions. Added persistent local storage and a user-toggleable light/dark mode for enhanced usability.",
			stack: ["JavaScript", "CSS", "HTML"],
			githubLink: "https://github.com/mbridgwater/task_tracker",
			liveLink: "",
		},
	],

	// Add your experience here
	experience: [
		{
			role: "Software Development Engineer Intern",
			company: "Amazon Web Services",
			date: "Summer 2025",
			location: "New York, NY",
			description: "Designed and launched an operations tool enabling compliant configuration updates for GuardDuty’s anomaly detection systems, featuring built-in validation and version tracking. Developed supporting automation tools—including a wrapper script and cross-region analytics—that streamline safe workflows, accelerate audits across hundreds of regions, and reduce engineer and customer-impacting errors."
		},
		{
			role: "Student Researcher",
			company: "UCLA Medical Imaging and Informatics Lab",
			date: "June 2022 - July 2025",
			location: "Los Angeles, CA",
			description: "Trained and evaluated a Gaussian Hidden Markov Model using 20+ behavioral features from 200K users to model behavior change stages and enable early prediction of behavioral decline. Coauthored a paper (under review) on predictive modeling for identifying users most likely to benefit from eHealth apps, and presented findings to primary care physicians on using simulation modeling to guide chronic kidney disease care."
		},
		{
			role: "Software Engineer Intern",
			company: "Walmart",
			date: "June 2024 - August 2024",
			location: "Los Angeles, CA",
			description: "Built an internal web tool with dynamic query links and interactive error API tables to streamline database access, reducing engineer overhead by 10–15 minutes daily. Integrated Swagger/OpenAPI across multiple backend services to standardize API design, improve documentation, and ensure forward compatibility."
		},
		{
			role: "Teaching Assistant",
			company: "UCLA Computer Science Department",
			date: "September 2025 - Present",
			location: "Los Angeles, CA",
			description: "Teach programming fundamentals in weekly sections for 60 students and provide office hour support for a 260-student upper-division CS course, emphasizing guided problem-solving and project-based learning. Manage course logistics—including assignment lifecycles, Campuswire support, and exam administration—to maintain smooth operations and timely issue resolution."
		},
		{
			role: "Information Technology Intern",
			company: "Takeda Pharmaceutical Company",
			date: "June 2023 - August 2023",
			location: "[Your University]",
			description: "Built a notifications and analytics app to help an external department with error correction (Microsoft Power Platform)."
		}
	],

	// Add any education or awards
	education: [
		{
			degree: "M.S. in Computer Science",
			institution: "University of California, Los Angeles",
			date: "Expected June 2026",
			note: "GPA: TBD"
		},
		{
			degree: "B.S. in Computer Science",
			institution: "University of California, Los Angeles",
			date: "June 2025",
			note: "GPA: 3.761  |  UCLA Dean’s Honors List (Fall 2021, Spring 2022, Winter 2023, Spring 2023)"
		},
		{
			degree: "QWER Hacks",
			institution: "Third Place in Read All About It Category",
			date: "Fall 202X",
			note: "Won the “Read All About It” third place prize within the category of food security. Implemented a web app within 24 hours designed to connect food-insecure people to stable food resources."
		}
	]
};

export default PORTFOLIO_DATA;