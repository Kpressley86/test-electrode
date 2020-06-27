module.exports = {
  cache: {
    cacheId: "GamerTag",
    runtimeCaching: [
      {
        handler: "fastest",
        urlPattern: "/$"
      }
    ],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "GamerTag",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
