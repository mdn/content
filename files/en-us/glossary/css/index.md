---
title: CSS
slug: Glossary/CSS
tags:
  - CSS
  - CodingScripting
  - Glossary
  - Web
  - l10n:priority
---
**CSS** (Cascading Style Sheets) is a declarative language that controls how webpages look in the {{glossary("browser")}}.

The browser applies CSS style declarations to selected elements to display them properly. A style declaration contains the properties and their values, which determine how a webpage looks.

CSS is one of the three core Web technologies, along with {{Glossary("HTML")}} and {{Glossary("JavaScript")}}. CSS usually styles {{Glossary("Element","HTML elements")}}, but can be also used with other markup languages like {{Glossary("SVG")}} or {{Glossary("XML")}}.

A CSS rule is a set of {{Glossary("property/CSS","properties")}} associated with a {{Glossary("CSS selector", "selector")}}. Here is an example that makes every HTML paragraph yellow against a black background:

```css
/* The selector "p" indicates that all paragraphs in the document will be affected by that rule */
p {
  /* The "color" property defines the text color, in this case yellow. */
  color: yellow;

  /* The "background-color" property defines the background color, in this case black. */
  background-color: black;
}
```

"Cascading" refers to the rules that govern how selectors are prioritized to change a page's appearance. This is a very important feature, since a complex website can have thousands of CSS rules.

## See also

- [Learn CSS](/en-US/docs/Learn/CSS)
- [CSS](https://en.wikipedia.org/wiki/CSS) on Wikipedia
- [The CSS documentation on MDN](/en-US/docs/Web/CSS)
- [The CSS Working Group current work](https://www.w3.org/Style/CSS/current-work)
