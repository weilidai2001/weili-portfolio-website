'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

// Data extracted from JSX
const heroData = {
  name: "Weili Dai",
  title: "Tech Lead - Full Stack Developer",
  description: "I craft end-to-end solutions with 10+ years of experience building scalable applications and leading development teams.",
  previous: {
    main: "Tech Lead at ",
    company: "Gumtree",
    others: "CNN, Sky, BBC"
  },
  badges: [
    { label: "TypeScript", color: "blue", bg: "bg-blue-100", text: "text-blue-600" },
    { label: "React CSR + SSR", color: "purple", bg: "bg-purple-100", text: "text-purple-600" },
    { label: "Node.js", color: "teal", bg: "bg-teal-100", text: "text-teal-600" },
    { label: "Java", color: "blue", bg: "bg-blue-100", text: "text-blue-600" },
    { label: "Docker", color: "purple", bg: "bg-purple-100", text: "text-purple-600" }
  ],
  stacks: [
    {
      key: "frontend",
      title: "Frontend Development",
      color: "blue",
      points: [
        "Modern React Architectures",
        "Performance Optimisation",
        "Responsive & Interactive UIs",
		"Third-party Integrations"
      ]
    },
    {
      key: "backend",
      title: "Backend Development",
      color: "purple",
      points: [
		"React Server-Side Rendering",
        "API Design & Development",
		"Legacy Code Migration",
        "Monitoring and Alerting",
      ]
    },
    {
      key: "devops",
      title: "DevOps & Cloud",
      color: "teal",
      points: [
        "Scalable Architecture",
		"CI/CD Pipelines",
		"GCP Infrastructure",
      ]
    }
  ]
};

export default function HeroSection() {
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | null>(null);

	return (
		<section className="min-h-screen relative overflow-hidden py-24 md:py-0">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
			</div>
			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
					<div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
						<h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
							{heroData.name}
						</h1>
						<h2 className="text-2xl md:text-4xl font-bold text-gray-900">{heroData.title}</h2>
						<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
							{heroData.description}
						</p>
						<p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
							Previously {heroData.previous.main}
							<span className="text-blue-600">{heroData.previous.company}</span> and worked at{' '}
							<span className="text-purple-600">{heroData.previous.others}</span>
						</p>
					</div>
					<div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
						{heroData.badges.map(badge => (
							<span
								key={badge.label}
								className={`px-3 md:px-4 py-1.5 md:py-2 ${badge.bg} rounded-full ${badge.text} text-xs md:text-sm`}
							>
								{badge.label}
							</span>
						))}
					</div>
				</motion.div>

				{/* Interactive System Architecture */}
				<div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 p-4 md:p-8 shadow-lg"
					>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
							{heroData.stacks.map(stack => (
								<div
									key={stack.key}
									className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
										selectedStack === stack.key ? `bg-${stack.color}-50 border-${stack.color}-200` : `bg-gray-50 hover:bg-gray-100 border-transparent`
									}`}
									onMouseEnter={() => setSelectedStack(stack.key as typeof selectedStack)}
									onMouseLeave={() => setSelectedStack(null)}
								>
									<h3 className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 text-${stack.color}-600`}>{stack.title}</h3>
									<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
										{stack.points.map(point => (
											<li className="flex items-center gap-2" key={point}>
												<div className={`w-1.5 h-1.5 bg-${stack.color}-500 rounded-full`} />
												{point}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
