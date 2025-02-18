---
title: MathML
slug: Web/MathML
page-type: landing-page
browser-compat: mathml.elements.math
---

{{MathMLRef}}

**Mathematical Markup Language (MathML)** is an [XML](/en-US/docs/Web/XML)-based language for describing mathematical notation.

[MathML](https://w3c.github.io/mathml/) was originally designed as a general-purpose specification for browsers, office suites, [computer algebra systems](https://en.wikipedia.org/wiki/Computer_algebra_system), [EPUB](https://www.w3.org/publishing/epub33/) readers, [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-based generators. However, this approach was not very adapted to the Web: the [subset focusing on semantics](https://w3c.github.io/mathml/#contm) has never been implemented in browsers while the [subset focusing on math layout](https://w3c.github.io/mathml/#presm) led to incomplete and inconsistent browser implementations.

[MathML Core](https://w3c.github.io/mathml-core/) is a subset with increased implementation details based on rules from [LaTeX](https://en.wikipedia.org/wiki/LaTeX) and the [Open Font Format](https://learn.microsoft.com/en-us/typography/opentype/spec/math). It is tailored for browsers and designed specifically to work well with other web standards including [HTML](/en-US/docs/Web/HTML), [CSS](/en-US/docs/Web/CSS), [DOM](/en-US/docs/Web/API/Document_Object_Model), [JavaScript](/en-US/docs/Web/JavaScript).

Below you will find links to documentation, examples, and tools to work with MathML. MDN uses [MathML Core](https://w3c.github.io/mathml-core/) as a reference specification but, due to an erratic standardization history, legacy MathML features may still show up in existing implementations and web content.

> [!NOTE]
> It is highly recommended that developers and authors switch to MathML Core, perhaps relying on other web technologies to cover missing use cases. The Math WG is maintaining a set of [MathML polyfills](https://github.com/w3c/mathml-polyfills) to facilitate that transition.

## Beginner's tutorials

- [Getting started with MathML](/en-US/docs/Web/MathML/Guides/Getting_started)
  - : In this article, we will take a simple HTML document and see how to add MathML formulas into it, introducing a few elements along the way.
- [Text containers](/en-US/docs/Web/MathML/Guides/Text_containers)
  - : Now that you get a better idea of MathML, we move on to text containers (variables, numbers, operators, ...) which are used as building blocks of MathML formulas.
- [Fractions and roots](/en-US/docs/Web/MathML/Guides/Fractions_and_roots)
  - : Relying on text containers, this article describes how to build more complex MathML expressions by nesting fractions and roots.
- [Scripts](/en-US/docs/Web/MathML/Guides/Scripts)
  - : We continue the review of basic math notations and focuses on building MathML elements with scripts.
- [Tables](/en-US/docs/Web/MathML/Guides/Tables)
  - : Once all basic math notations are known, it remains to consider tabular layout which can be used for matrix-like expressions and other advanced math layout.
- [Three famous mathematical formulas](/en-US/docs/Web/MathML/Guides/Three_famous_mathematical_formulas) <sup>Challenge</sup>
  - : With the things you have learned in the last few articles, you should already be able to write relatively sophisticated MathML formulas. This challenge gives you a chance to do that.

## Guides

- [Authoring MathML](/en-US/docs/Web/MathML/Authoring)
  - : Suggestions and tips for writing MathML, including suggested MathML editors and how to integrate their output into Web content.
- [Fonts for MathML](/en-US/docs/Web/MathML/Fonts)
  - : How users can install such math fonts to properly display MathML in browsers.

## MathML reference

- [MathML element reference](/en-US/docs/Web/MathML/Element)
  - : Details about each MathML element and compatibility information for desktop and mobile browsers.
- [MathML attribute reference](/en-US/docs/Web/MathML/Attribute)
  - : Information about MathML attributes that modify the appearance or behavior of elements.
- [MathML attribute values](/en-US/docs/Web/MathML/Attribute)
  - : Further information about MathML attribute values.
- [MathML examples](/en-US/docs/Web/MathML/Examples)
  - : MathML samples and examples to help you understand how it works.

## Getting help from the community

- [W3C Math Home](https://www.w3.org/Math/)
- [Raise issues on GitHub w3c/mathml repository](https://github.com/w3c/mathml/issues)
- [www-math w3.org mail archive](https://lists.w3.org/Archives/Public/www-math/)

## Tools

- [W3C Validator](https://validator.w3.org/)
- [W3C's wiki page](https://www.w3.org/wiki/Math_Tools)

## Related topics

- [CSS](/en-US/docs/Web/CSS)
- [HTML](/en-US/docs/Web/HTML)
- [SVG](/en-US/docs/Web/SVG)

## Browser compatibility

{{Compat}}
