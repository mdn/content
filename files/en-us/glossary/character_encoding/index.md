---
title: Character encoding
slug: Glossary/Character_encoding
page-type: glossary-definition
---

<section id="Quick_links">
  <ol>
    <li><strong><a href="/en-US/docs/Glossary">MDN Web Docs Glossary</a></strong>{{ListSubpagesForSidebar("/en-us/docs/Glossary", 1)}}</li>
  </ol>
</section>

An encoding defines a mapping between bytes and text. A sequence of bytes allows for different textual interpretations. By specifying a particular encoding (such as UTF-8), we specify how the sequence of bytes is to be interpreted.

For example, in HTML we normally declare a character encoding of UTF-8, using the following line:

```html
<meta charset="utf-8" />
```

This ensures that you can use characters from just about any human language in your HTML document, and they will display reliably.

## See also

- [Character encoding on W3C](https://www.w3.org/International/articles/definitions-characters/)
- [Character encoding](https://en.wikipedia.org/wiki/Character_encoding) on Wikipedia
