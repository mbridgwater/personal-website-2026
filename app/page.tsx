// import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, ExternalLink, Mail, Briefcase, Code, MapPin, Calendar, Award } from 'lucide-react';
import Navbar from "@/components/Navbar";

import portfolioData from '@/lib/config';
import type { Education, Experience, Project } from '@/lib/types';

const IconMap: {
	[key: string]: typeof Github | typeof Linkedin | typeof Twitter | typeof Code;
} = {
	GitHub: Github,
	LinkedIn: Linkedin,
	Twitter: Twitter,
	Blog: Code,
};

export default function Home() {
	return (
		<div className="font-geist-sans antialiased bg-gray-950 text-gray-200 min-h-screen">
			<div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">

				{/* Header/Nav */}
				<Navbar />

				<main className="space-y-20 mt-10">

					{/* Hero Section */}
					<section id="home" className="text-center space-y-10">
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
							{portfolioData.name}
						</h1>
						<p className="mt-4 text-2xl sm:text-3xl text-blue-400 font-medium">
							{portfolioData.headline}
						</p>
						<p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
							{portfolioData.bio}
						</p>
						<div className="mt-8 flex justify-center space-x-5">
							{portfolioData.links.map((link) => {
								const Icon = IconMap[link.name];
								return (
									<Link
										key={link.name}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={link.name}
										className="text-gray-400 hover:text-white transition-colors"
									>
										<Icon className="w-6 h-6" />
									</Link>
								);
							})}
							<Link
								href={`mailto:${portfolioData.email}`}
								aria-label="Email"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Mail className="w-6 h-6" />
							</Link>
						</div>
					</section>

					{/* Skills Section */}
					<section id="skills">
						<h2 className="text-3xl font-bold text-white text-center">
							Core Competencies
						</h2>
						<div className="mt-8 flex flex-wrap justify-center gap-3">
							{portfolioData.skills.map((skill) => (
								<span
									key={skill}
									className="bg-gray-800 text-blue-300 px-4 py-2 rounded-full text-sm font-medium"
								>
									{skill}
								</span>
							))}
						</div>
					</section>

					{/* Education Section */}
					<section id="education">
						<h2 className="text-3xl font-bold text-white text-center">
							Education & Awards
						</h2>
						<div className="mt-8 space-y-8">
							{portfolioData.education.map((edu) => (
								<EducationItem key={edu.degree} edu={edu} />
							))}
						</div>
					</section>

				</main>

				{/* Footer */}
				<footer className="text-center text-gray-500 py-12 mt-12">
					© {new Date().getFullYear()} {portfolioData.name}.
					Built with React & Tailwind.
				</footer>
			</div>
		</div>
	);
}

// Sub-component for Education Items
function EducationItem({ edu }: { edu: Education }) {
	return (
		<div className="flex">
			<div className="shrink-0 mr-4">
				<span className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 border border-gray-700">
					<Award className="w-5 h-5 text-blue-400" />
				</span>
			</div>
			<div className="grow">
				<h3 className="text-lg font-bold text-white">{edu.degree}</h3>
				<p className="text-blue-300 font-medium">{edu.institution}</p>
				<p className="text-sm text-gray-400 mt-1">{edu.date}</p>
				{edu.note && <p className="mt-2 text-gray-300">{edu.note}</p>}
			</div>
		</div>
	);
}
