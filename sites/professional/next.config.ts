import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Local architectural placeholder art in /public/images is authored as
    // SVG. Swap these for real photographs (jpg/webp) before launch and this
    // block can be removed.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
