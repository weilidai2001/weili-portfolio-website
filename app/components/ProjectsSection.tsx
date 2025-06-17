'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  bullets: string[];
  keyOutcome: string;
}

const projects: Project[] = [
  {
    title: 'Rebuild Legacy Service with React + TypeScript',
    bullets: [
      'Rebuilt monolithic Java/FreeMarker templates into modular, testable components using React, TypeScript, and Emotion.',
      'Pages served over 1M requests per day; I owned the entire rebuild across architecture, testing (Jest), and rollout.',
      'Created frontend patterns now adopted across the org, enabling consistent design and faster onboarding.',
      'Optimised SSR performance and browser load with backend profiling and selective lazy loading — improving core metrics by 30%.',
      'Engineered a new CI/CD process that automated production deploys, removing prior dependencies on Platform and enabling 10x deployment frequency.',
    ],
    keyOutcome:
      'Full re-architecture of critical web pages — both frontend and DevOps — driving lasting team-wide impact.',
  },
  {
    title: 'Partnerships API Server',
    bullets: [
      'Full ownership of high-throughput Node.js backend powering in-house ads across web and mobile.',
      'Designed and implemented an API server from scratch using Node.js',
      'Served both website and native apps, handling 200+ RPM',
      'Delivered business-critical ad placements across pages',
      'Owned DevOps: Jenkins CI/CD, deployed via Google Cloud Kubernetes',
      'Handled data flow design, endpoint structure, and monitoring',
    ],
    keyOutcome:
      'End-to-end system delivery — from architecture to deployment — at production scale.',
  },
  {
    title: 'Scala to TypeScript Migration',
    bullets: [
      'Backend logic refactor to unlock team-wide maintainability and cross-functional collaboration.',
      'Migrated core AdTech config system from Scala (backend) to TypeScript',
      'Reverse-engineered complex business logic and functional patterns',
      'Enabled frontend developers to contribute to what was once Scala-only code',
      'Reduced bottlenecks and dependency on backend specialists',
    ],
    keyOutcome:
      'Turned isolated backend logic into maintainable shared code — boosting team velocity.',
  },
  {
    title: 'Pricing DB Workflow Automation',
    bullets: [
      'Transformed a manual SQL-driven process into a safe, automated backend system.',
      'Original workflow involved handcrafted SQL + live production DB changes',
      'Only expert backend engineers could manage updates safely',
      'Built a tool allowing pricing managers to upload a CSV to apply updates',
      'System handles validation, parsing, transformation, and safe execution',
      'Built supporting infra and CI pipelines to deploy securely',
    ],
    keyOutcome: 'Converted a risky, engineer-only flow into a robust tool for non-technical users.',
  },
];

export default function ProjectsSection() {
  const showThumbnails = false;
  return (
    <section className="py-10 px-4">
      <div className="w-full">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center text-gray-900"
        >
          Entreprise Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(560px,1fr))] gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg h-full flex flex-col"
            >
              {showThumbnails && (
                <div className="w-full aspect-[16/9] relative bg-gray-50">
                  <Image
                    src="/laptop.jpg"
                    alt="Project thumbnail"
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              )}

              {/* Project Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
                <ul className="space-y-2 text-sm text-gray-700 mb-4">
                  {project.bullets.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <h4 className="text-sm font-semibold text-teal-600 mb-1">Key Outcome:</h4>
                  <p className="text-gray-800 text-sm">{project.keyOutcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
