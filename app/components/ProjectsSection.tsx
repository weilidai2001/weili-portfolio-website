'use client';

import { motion } from 'framer-motion';

interface ProjectDetail {
  label: string;
  items: string[];
}

interface ProjectArchitecture {
  clientLayer: { text: string; };
  apiLayer: { product: string; order: string; };
  cacheLayer: { text: string; };
  databaseLayer: { product: string; order: string; };
  searchLayer: { text: string; };
}

interface Project {
  title: string;
  description: string;
  frontend: ProjectDetail;
  backend: ProjectDetail;
  achievements: ProjectDetail;
  architecture?: ProjectArchitecture;
  dataFlow?: ProjectArchitecture; // Reusing for data flow, might need a more specific interface later
}

const projects: Project[] = [
  {
    title: "Enterprise E-commerce Platform",
    description: "A high-performance e-commerce solution handling 100K+ daily transactions with real-time inventory and ML-powered recommendations.",
    frontend: {
      label: "Frontend Architecture",
      items: [
        "Next.js Server Components",
        "Real-time Cart & Inventory",
        "Stripe Payment Integration",
        "PWA with Offline Support",
      ],
    },
    backend: {
      label: "Backend Systems",
      items: [
        "Node.js Microservices",
        "Redis Caching Layer",
        "Kafka Event Streaming",
        "Elasticsearch Product Search",
      ],
    },
    achievements: {
      label: "Key Achievements",
      items: [
        "99.99% Uptime with Blue-Green Deployment",
        "300ms Average API Response Time",
        "45% Reduction in Infrastructure Costs",
      ],
    },
    architecture: {
      clientLayer: { text: "Next.js Frontend (SSR + Client Components)" },
      apiLayer: { product: "Product Service", order: "Order Service" },
      cacheLayer: { text: "Redis Cache Layer" },
      databaseLayer: { product: "Product DB (PostgreSQL)", order: "Order DB (MongoDB)" },
      searchLayer: { text: "Elasticsearch Product Search" },
    },
  },
  {
    title: "Real-time Analytics Platform",
    description: "A scalable analytics platform processing 1M+ events per minute with real-time dashboards and ML-powered insights.",
    frontend: {
      label: "Frontend Features",
      items: [
        "Real-time Data Visualization",
        "Interactive Dashboards",
        "Custom Chart Components",
        "Data Export Tools",
      ],
    },
    backend: {
      label: "Backend Pipeline",
      items: [
        "Apache Kafka Streams",
        "ClickHouse Analytics DB",
        "Python Data Processing",
        "Redis Time Series",
      ],
    },
    achievements: {
      label: "Performance Metrics",
      items: [
        "1M+ Events/Minute Processing",
        "Sub-second Query Response",
        "99.99% Data Accuracy",
      ],
    },
    dataFlow: {
      clientLayer: { text: "Web Events" }, // Reusing clientLayer for data sources
      apiLayer: { product: "Mobile Events", order: "API Events" }, // Reusing apiLayer for other data sources
      cacheLayer: { text: "Kafka Event Streaming" }, // Reusing cacheLayer for event processing
      databaseLayer: { product: "Stream Processing", order: "Batch Processing" }, // Reusing databaseLayer for processing layer
      searchLayer: { text: "ClickHouse" }, // Reusing searchLayer for storage layer
    },
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center text-gray-900"
        >
          Full Stack Projects
        </motion.h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg"
            >
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-blue-600 mb-3">{project.frontend.label}</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {project.frontend.items.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-purple-600 mb-3">{project.backend.label}</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {project.backend.items.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-teal-600">{project.achievements.label}</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {project.achievements.items.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-sm font-semibold text-gray-600 mb-4">
                      {project.architecture ? "System Architecture" : "Data Flow Architecture"}
                    </h4>
                    <div className="aspect-[4/3] bg-white rounded-lg p-4 shadow-inner">
                      {/* SVG diagram */}
                      {project.architecture && (
                        <svg className="w-full h-full" viewBox="0 0 400 300">
                          {/* Client Layer */}
                          <g>
                            <rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
                            <text x="200" y="45" textAnchor="middle" className="fill-gray-600 text-[12px]">
                              {project.architecture.clientLayer.text}
                            </text>
                          </g>

                          {/* API Layer */}
                          <g>
                            <rect x="20" y="80" width="170" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
                            <rect x="210" y="80" width="170" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
                            <text x="105" y="105" textAnchor="middle" className="fill-gray-600 text-[12px]">
                              {project.architecture.apiLayer.product}
                            </text>
                            <text x="295" y="105" textAnchor="middle" className="fill-gray-600 text-[12px]">
                              {project.architecture.apiLayer.order}
                            </text>
                          </g>

                          {/* Cache Layer */}
                          <g>
                            <rect x="20" y="140" width="360" height="30" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
                            <text x="200" y="160" textAnchor="middle" className="fill-gray-600 text-[12px]">
                              {project.architecture.cacheLayer.text}
                            </text>
                          </g>

                          {/* Database Layer */}
                          <g>
                            <rect x="20" y="190" width="170" height="40" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
                            <rect x="210" y="190" width="170" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
                            <text x="105" y="215" textAnchor="middle" className="fill-gray-600 text-[12px]">
                              {project.architecture.databaseLayer.product}
                            </text>
                            <text x="295" y="215" textAnchor="middle" className="fill-gray-600 text-[12px]">
                              {project.architecture.databaseLayer.order}
                            </text>
                          </g>

                          {/* Search Layer */}
                          <g>
                            <rect x="20" y="250" width="360" height="30" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
                            <text x="200" y="270" textAnchor="middle" className="fill-gray-600 text-[12px]">
                              {project.architecture.searchLayer.text}
                            </text>
                          </g>

                          {/* Connection Lines */}
                          <g className="stroke-gray-400" strokeWidth="1">
                            <line x1="200" y1="60" x2="200" y2="80" />
                            <line x1="105" y1="120" x2="105" y2="140" />
                            <line x1="295" y1="120" x2="295" y2="140" />
                            <line x1="105" y1="170" x2="105" y2="190" />
                            <line x1="295" y1="170" x2="295" y2="190" />
                            <line x1="200" y1="230" x2="200" y2="250" />
                          </g>
                        </svg>
                      )}

                      {project.dataFlow && (
                        <svg className="w-full h-full" viewBox="0 0 400 300">
                          {/* Data Sources */}
                          <g>
                            <rect x="20" y="20" width="110" height="30" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
                            <rect x="145" y="20" width="110" height="30" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
                            <rect x="270" y="20" width="110" height="30" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
                            <text x="75" y="40" textAnchor="middle" className="fill-gray-600 text-[12px]">
                              {project.dataFlow.clientLayer.text}
                            </text>
                            <text x="200" y="40" textAnchor="middle" className="fill-gray-600 text-[12px]">
                              {project.dataFlow.apiLayer.product}
                            </text>
                            <text x="325" y="40" textAnchor="middle" className="fill-gray-600 text-[12px]">
                              {project.dataFlow.apiLayer.order}
                            </text>
                          </g>

                          {/* Event Processing */}
                          <g>
                            <rect x="20" y="80" width="360" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
                            <text x="200" y="105" textAnchor="middle" className="fill-gray-600 text-[12px]">
                              {project.dataFlow.cacheLayer.text}
                            </text>
                          </g>

                          {/* Processing Layer */}
                          <g>
                            <rect x="20" y="150" width="170" height="40" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
                            <rect x="210" y="150" width="170" height="40" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
                            <text x="105" y="175" textAnchor="middle" className="fill-gray-600 text-[12px]">
                              {project.dataFlow.databaseLayer.product}
                            </text>
                            <text x="295" y="175" textAnchor="middle" className="fill-gray-600 text-[12px]">
                              {project.dataFlow.databaseLayer.order}
                            </text>
                          </g>

                          {/* Storage Layer */}
                          <g>
                            <rect x="20" y="220" width="170" height="30" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
                            <rect x="210" y="220" width="170" height="30" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
                            <text x="105" y="240" textAnchor="middle" className="fill-gray-600 text-[12px]">
                              {project.dataFlow.searchLayer.text}
                            </text>
                            <text x="295" y="240" textAnchor="middle" className="fill-gray-600 text-[12px]">
                              Redis Time Series
                            </text>
                          </g>

                          {/* API Layer */}
                          <g>
                            <rect x="20" y="270" width="360" height="30" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
                            <text x="200" y="290" textAnchor="middle" className="fill-gray-600 text-[12px]">
                              GraphQL API Layer
                            </text>
                          </g>

                          {/* Connection Lines */}
                          <g className="stroke-gray-400" strokeWidth="1">
                            <line x1="75" y1="50" x2="75" y2="80" />
                            <line x1="200" y1="50" x2="200" y2="80" />
                            <line x1="325" y1="50" x2="325" y2="80" />
                            <line x1="200" y1="120" x2="200" y2="150" />
                            <line x1="105" y1="190" x2="105" y2="220" />
                            <line x1="295" y1="190" x2="295" y2="220" />
                            <line x1="200" y1="250" x2="200" y2="270" />
                          </g>
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}