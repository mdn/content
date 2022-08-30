---
title: MathML
slug: Web/MathML
tags:
  - Landing
  - MathML
  - Reference
  - Web
  - XML
browser-compat: mathml.elements.math
---
{{MathMLRef}}

**Mathematical Markup Language (MathML)** is an [XML](/en-US/docs/Web/XML)-based language for describing mathematical notation.

[MathML](https://w3c.github.io/mathml/) was originally designed as a general-purpose specification for browsers, office suites, [computer algebra systems](https://en.wikipedia.org/wiki/Computer_algebra_system), [EPUB](https://www.w3.org/publishing/epub32/) readers, [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-based generators. However, this approach was not very adapted to the Web: the [subset focusing on semantics](https://w3c.github.io/mathml/#contm) has never been implemented in browsers while the [subset focusing on math layout](https://w3c.github.io/mathml/#presm) led to incomplete and inconsistent browser implementations.

[MathML Core](https://w3c.github.io/mathml-core/) is a subset with increased implementation details based on rules from [LaTeX](https://en.wikipedia.org/wiki/LaTeX) and the [Open Font Format](https://docs.microsoft.com/en-us/typography/opentype/spec/math). It is tailored for browsers and designed specifically to work well with other web standards including [HTML](/en-US/docs/Web/HTML), [CSS](/en-US/docs/Web/CSS), [DOM](/en-US/docs/Web/API/Document_Object_Model), [JavaScript](/en-US/docs/Web/JavaScript).

Below you will find links to documentation, examples, and tools to work with MathML. Although many of these still use the [MathML Full](https://w3c.github.io/mathml/) specification as a reference, transition towards [MathML Core](https://w3c.github.io/mathml-core/) is in progress. It is highly recommended that developers and authors switch to that specification, perhaps relying on other web technologies to cover missing use cases from the legacy specification.

## MathML reference

- [MathML element reference](/en-US/docs/Web/MathML/Element)
  - : Details about each MathML element and compatibility information for desktop and mobile browsers.
- [MathML attribute reference](/en-US/docs/Web/MathML/Attribute)
  - : Information about MathML attributes that modify the appearance or behavior of elements.
- [MathML examples](/en-US/docs/Web/MathML/Examples)
  - : MathML samples and examples to help you understand how it works.
- [Authoring MathML](/en-US/docs/Web/MathML/Authoring)
  - : Suggestions and tips for writing MathML, including suggested MathML editors and how to integrate their output into Web content.

## Getting help from the community

- [W3C Math Home](https://www.w3.org/Math/)
- [Raise issues on GitHub w3c/mathml repository](https://github.com/w3c/mathml/issues)
- [www-math w3.org mail archive](https://lists.w3.org/Archives/Public/www-math/)

## Tools

- [W3C Validator](https://validator.w3.org)
- [Mathzilla Firefox add-on collection](https://addons.mozilla.org/en-US/firefox/collections/5509895/mathzilla/)
- [TeXZilla](https://github.com/fred-wang/TeXZilla) — JavaScript LaTeX to MathML converter ([live demo](https://fred-wang.github.io/TeXZilla/), [Firefox add-on](https://addons.mozilla.org/en-US/firefox/addon/texzilla/), [using in a Web Page, JS program, etc.](https://github.com/fred-wang/TeXZilla/wiki/Using-TeXZilla))
- [LaTeXML](https://math.nist.gov/~BMiller/LaTeXML/) - Convert LaTeX documents into HTML+MathML Web pages
- [MathJax](https://www.mathjax.org/) - Cross-browser JavaScript display engine for mathematics. To force MathJax to use native MathML, try [this Mozilla add-on](https://addons.mozilla.org/en-US/firefox/addon/native-mathml/), this [Safari extension](https://fred-wang.github.io/mathjax-native-mathml-safari/mathjax-native-mathml.safariextz) or this [GreaseMonkey script](https://openuserjs.org/scripts/fred.wang/MathJax_Native_MathML/).

## Related topics

- [CSS](/en-US/docs/Web/CSS)
- [HTML](/en-US/docs/Web/HTML)
- [SVG](/en-US/docs/Web/SVG)

## Browser compatibility

{{Compat}}
