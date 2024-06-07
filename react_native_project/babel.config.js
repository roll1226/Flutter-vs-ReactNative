module.exports = function (api) {
  api.cache(true);
  plugins: ["transform-inline-environment-variables"];
  return {
    presets: ['babel-preset-expo']
  };
};
