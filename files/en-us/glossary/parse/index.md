---
title: Parse
slug: Glossary/Parse
tags:
  - Browser
  - CSS
  - CodingScripting
  - Glossary
  - HTML
  - JavaScript
  - Web Performance
---
Parsing means analyzing and converting a program into an internal format that a runtime environment can actually run, for example the {{glossary("JavaScript")}} engine inside browsers.

The [browser parses HTML](/en-US/docs/Learn/HTML) into a {{glossary('DOM')}} tree. HTML parsing involves [tokenization](/en-US/docs/Web/API/DOMTokenList) and tree construction. HTML tokens include start and end tags, as well as attribute names and values. If the document is well-formed, parsing it is straightforward and faster. The parser parses tokenized input into the document, building up the document tree.

When the HTML parser finds non-blocking resources, such as an image, the browser will request those resources and continue parsing. Parsing can continue when a CSS file is encountered, but `<script>` tags—particularly those without an [`async`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function) or `defer` attribute—blocks rendering, and pauses parsing of HTML.

When the browser encounters CSS styles, it parses the text into the CSS Object Model (or {{glossary('CSSOM')}}), a data structure it then uses for styling layouts and painting. The browser then creates a render tree from both these structures to be able to paint the content to the screen. JavaScript is also downloaded, parsed, and then executed.

JavaScript parsing is done during {{glossary("compile time")}} or whenever the {{glossary("parser")}} is invoked, such as during a call to a method.

## See also

- [Parse](https://en.wikipedia.org/wiki/Parsing) on Wikipedia
