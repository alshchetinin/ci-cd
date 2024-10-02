module.exports = {
  apps: [
    {
      name: "nuxt-app",
      exec_mode: "cluster",
      instances: "max",
      script: ".output/server/index.mjs",
    },
  ],
  deploy: {
    production: {
      user: "root",
      host: "195.133.27.24",
      ref: "origin/main",
      repo: "git@github.com:alshchetinin/ci-cd.git",
      path: "/var/www/nuxt-app",
      "pre-deploy-local": "",
      "post-deploy":
        "yarn install && yarn build && pm2 delete nuxt-app || true && pm2 start ecosystem.config.cjs --env production",
      "pre-setup": "",
    },
  },
};
