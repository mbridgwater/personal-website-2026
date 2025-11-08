// import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, ExternalLink, Mail, Briefcase, Code, MapPin, Calendar, Award } from 'lucide-react';
import Navbar from "@/components/Navbar";

import portfolioData from '@/lib/config';
import type { Education, Experience, Project } from '@/lib/types';

export default function Project() {
	return (
		<div className="font-geist-sans antialiased bg-gray-950 text-gray-200 min-h-screen">
			<div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">

                {/* Header/Nav */}
                <Navbar />

				<main className="space-y-20 mt-10">

					{/* Projects Section */}
					<section id="projects">
						<h2 className="text-4xl font-bold text-white text-center">
							Projects
						</h2>

                        <p className="mt-2 text-center text-gray-400 text-lg max-w-2xl mx-auto">
                            Turning ideas into reliable, scalable software.
                        </p>

						<div className="mt-16 grid md:grid-cols-2 gap-8">
							{portfolioData.projects.map((project) => (
								<ProjectCard key={project.title} project={project} />
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

// Sub-component for Project Cards
function ProjectCard({ project }: { project: Project }) {
	return (
		<div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 transition-all hover:shadow-blue-900/20 hover:border-gray-700">
			<div className="p-6">
				<h3 className="text-xl font-bold text-white">{project.title}</h3>
				<p className="mt-3 text-gray-300 text-base">{project.description}</p>
				<div className="mt-4 flex flex-wrap gap-2">
					{project.stack.map((tech) => (
						<span
							key={tech}
							className="bg-gray-800 text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
						>
							{tech}
						</span>
					))}
				</div>
				<div className="mt-6 flex items-center space-x-4">
					{project.githubLink && (
						<Link
							href={project.githubLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center text-gray-400 hover:text-white transition-colors"
						>
							<Github className="w-5 h-5 mr-1" />
							Code
						</Link>
					)}
					{project.liveLink && (
						<Link
							href={project.liveLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center text-gray-400 hover:text-white transition-colors"
						>
							<ExternalLink className="w-5 h-5 mr-1" />
							Live Demo
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
