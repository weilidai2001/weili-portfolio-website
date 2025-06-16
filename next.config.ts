import type { NextConfig } from "next";

const repoName = 'weili-portfolio-website';

const nextConfig: NextConfig = {
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  distDir: 'docs',
  output: 'export',
};

export default nextConfig;
