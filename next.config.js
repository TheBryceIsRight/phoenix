// @type {import('next').NextConfig}

export const nextConfig = {
    compiler: {
      removeConsole: process.env.NODE_ENV === "production"
    },
  }