import type { NextConfig } from "next";

const repoName = 'weili-portfolio-website';

const nextConfig: NextConfig = {
  distDir: 'docs',
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
