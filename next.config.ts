import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  productionBrowserSourceMaps: true, 
  experimental: {
    outputFileTracingIncludes: {
      /* 示例：包含 src 目录下所有文件（根据实际需求调整）*/
      '/app/**/*': ['./app/**/*'],
    },
  },
};

export default nextConfig;
