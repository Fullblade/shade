/** @type {import('next').NextConfig} */
const nextConfig = {
  // لا نحتاج إلى output: 'export' لأن Vercel يدعم Next.js بشكل كامل
  images: {
    domains: ['your-image-domain.com'], // أضف نطاقات الصور إذا كنت تستخدم صورًا خارجية
  },
};

module.exports = nextConfig;
