// define extractor class
// tailwin uses ":" in media queries, so we need a custom extractor.
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}


module.exports = {
  content: ['index.html'],
  css: ['build/tmp/output.css'],
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: ['html']
    }
  ]
}
