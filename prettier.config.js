module.exports = {
  bracketSpacing: false,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'es5',
  quoteProps: 'consistent',
  jsxSingleQuote: true,
  parser: 'typescript',
  overrides: [
    {
      files: ['.eslintrc', '.prettierrc', '.renovaterc.json', '*.json'],
      options: {parser: 'json'},
    },
    {
      files: ['*.html'],
      options: {parser: 'html'},
    },
    {
      files: ['*.md'],
      options: {parser: 'markdown'},
    },
  ],
};
