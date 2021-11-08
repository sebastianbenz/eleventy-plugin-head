const Head = require('./Head.js');
const INJECTION_POINT = '</head>';

module.exports = function (eleventyConfig) {
  eleventyConfig.addTransform('apply-head', function (content) {
    const head = Head.serialize(this.inputPath);
    return content.replace(INJECTION_POINT, head);
  });

  eleventyConfig.addShortcode('head', function (key, value) {
    Head.add(this.page.inputPath, key, value);
    return '';
  });

  eleventyConfig.on('afterBuild', () => {
    Head.reset();
  });
};
