import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export as a fully static site to `out/`
  output: "export",
  // Make asset URLs relative so site works under a subpath
  assetPrefix: '.',
  reactCompiler: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
