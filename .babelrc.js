module.exports = {
  presets: [
    [
      "@babel/env",
      {
        debug: true, 
        spec: true, 
        modules: false, 
        useBuiltIns: "usage",
        corejs: 3,
        targets: {
          chrome: "67",
        }
      },
    ],
    "@babel/react",
  ],

  "env": {
    "test": {
      "plugins": ["@babel/plugin-transform-modules-commonjs"]
    }
  }
};