module.exports = {
  apps: [
    {
      name: "pm2 setup project",
      script: "./index.js",
      watch: true,
      ignore_watch: ["node_modules", "logs"],
    },
  ],
};
