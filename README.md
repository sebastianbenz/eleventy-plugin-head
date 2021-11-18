# eleventy-plugin-head 🐶

> [next/head](https://nextjs.org/docs/api-reference/next/head) for Eleventy

Append elements to the `head` of your page from your templates. Automatically de-duplicates entries. Works with all templating languages supported by Eleventy. Great for using web components in your Eleventy sites.

## Usage

Install the plugin:

```sh
npm i eleventy-plugin-head --save-development
```

...and add it to your `.eleventy.js` configuration file:

```js
const pluginHead = require('eleventy-plugin-head ');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginHead);
};
```

Use it in your templates to add elements to the `head` from everywhere in your templates:

```
{% head 'key', '<hello/>' %}
```

You can also programmatically add elements to the `head` (e.g. from within a shortcode):

```
eleventyConfig.addShortcode("title", function(title) {
  pluginHead.head.add(this.page.inputPath, 'title', `<title>${title}</title>`);
  return '';
}
```

## Example

Use it do define different components sharing the same script:

```html
hello-alice.njk:

{% head 'greeter', '<script src="greeter.js"></script>' %}
<my-greeter>Alice</my-greeter>
```

```html
hello-bob.njk:

{% head 'greeter', '<script src="greeter.js"></script>' %}
<my-greeter>Bob</my-greeter>
```

You can now use both components without having to worry about importing the same script multiple times.

```html
<body>
  {% include 'hello-alice.njk' %}
  {% include 'hello-bob.njk' %}
</body>
```

Which will result in:

```html
<head>
  <script src="greeter.js"></script>
</head>
<body>
  <my-greeter>Alice</my-greeter>
  <my-greeter>Bob</my-greeter>
</body>
```
