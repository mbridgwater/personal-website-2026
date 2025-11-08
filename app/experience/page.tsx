// import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, ExternalLink, Mail, Briefcase, Code, MapPin, Calendar, Award } from 'lucide-react';
import Navbar from "@/components/Navbar";

import portfolioData from '@/lib/config';
import type { Education, Experience, Project } from '@/lib/types';

export default function Experience() {
	return (
		<div className="font-geist-sans antialiased bg-gray-950 text-gray-200 min-h-screen">
			<div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">

                {/* Header/Nav */}
                <Navbar />

				<main className="space-y-20 mt-10">

					{/* Experience Section */}
					<section id="experience">
						<h2 className="text-4xl font-bold text-white text-center">
							Experience
						</h2>

                        <p className="mt-2 text-center text-gray-400 text-lg max-w-2xl mx-auto">
                            My journey through software engineering, data science, and research.
                        </p>

						<div className="mt-16 space-y-14">
							{portfolioData.experience.map((exp) => (
								// <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-700 hover:shadow-lg hover:shadow-blue-900/10 transition-all duration-300">
                                    <ExperienceItem key={exp.company + exp.role} exp={exp} />
                                // </div>
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


// Sub-component for Experience Items
function ExperienceItem({ exp }: { exp: Experience }) {
	return (
		<div className="flex">
			<div className="shrink-0 mr-4">
				<span className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 border border-gray-700">
					<Briefcase className="w-5 h-5 text-blue-400" />
				</span>
			</div>
			<div className="grow">
				<h3 className="text-lg font-bold text-white">{exp.role}</h3>
				<p className="text-blue-300 font-medium">{exp.company}</p>
				<div className="flex flex-wrap text-sm text-gray-400 mt-1 space-x-4">
					<span className="flex items-center">
						<Calendar className="w-4 h-4 mr-1.5" />
						{exp.date}
					</span>
					<span className="flex items-center">
						<MapPin className="w-4 h-4 mr-1.5" />
						{exp.location}
					</span>
				</div>
				<p className="mt-3 text-gray-300">
					{exp.description}
				</p>
			</div>
		</div>
	);
}
