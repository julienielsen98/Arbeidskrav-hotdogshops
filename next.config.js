/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/PokeAPI/**",
      },
    ],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoianVsaWVwOTgiLCJhIjoiY2xkdnM4aTBpMDBqYjNzbXlxems1NTNsZSJ9.DeGrRK8Xo6MqPnKMkznFeQ",
  },
};

module.exports = nextConfig;
