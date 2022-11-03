const Head = require('./head.js');
const INJECTION_POINT = '</head>';

function headPlugin(eleventyConfig) {
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
}

headPlugin.head = Head;

module.exports = headPlugin;
