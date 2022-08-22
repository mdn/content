---
title: Introduction
slug: Web/SVG/Tutorial/Introduction
tags:
  - Beginner
  - Guide
  - NeedsBeginnerUpdate
  - NeedsUpdate
  - SVG
  - SVG:Tutorial
  - Tutorial
---
{{ PreviousNext("Web/SVG/Tutorial", "Web/SVG/Tutorial/Getting_Started") }}

[SVG](/en-US/docs/Web/SVG) is an [XML](/en-US/docs/Web/XML) language, similar to [XHTML](/en-US/docs/Glossary/XHTML), which can be used to draw vector graphics, such as the one shown below. It can be used to create an image either by specifying all the lines and shapes necessary, by modifying already existing raster images, or by a combination of both. The image and its components can also be transformed, composited together, or filtered to change their appearance completely.

![Mozilla dino logo](dino.svg)

SVG came about in 1999 after several competing formats had been submitted to the [W3C](https://www.w3.org) and failed to be fully ratified. SVG is supported by all major [browsers](https://caniuse.com/#search=svg). A downside is loading SVG can be slow. SVG does offer benefits, some of which include having a [DOM interface](/en-US/docs/Web/API) available for it, and not requiring third-party extensions. Whether or not to use it often depends on your specific use case.

### Basic ingredients

[HTML](/en-US/docs/Web/HTML) provides elements for defining headers, paragraphs, tables, and so on. In much the same way SVG provides elements for circles, rectangles, and simple and complex curves. A simple SVG document consists of nothing more than the {{ SVGElement('svg') }} root element and several basic shapes that build a graphic together. In addition there is the {{ SVGElement('g') }} element, which is used to group several basic shapes together.

Starting from there, the SVG image can become arbitrarily complex. SVG supports gradients, rotations, filter effects, animations, interactivity with JavaScript, and so on. But all these extra features of the language rely on this relatively small set of elements to define the graphics area.

### Before you start

There are a number of drawing applications available such as [Inkscape](https://inkscape.org/) which are free and use SVG as their native file format. However, this tutorial will rely on the trusty XML or text editor (your choice). The idea is to teach the internals of SVG to those who want to understand it, and that is best done by dirtying your hands with a bit of markup. You should note your final goal though. Not all SVG viewers are equal and so there is a good chance that something written for one app will not display exactly the same in another, because they support different levels of the SVG specification or another specification that you are using along with SVG (that is, [JavaScript](/en-US/docs/Web/JavaScript) or [CSS](/en-US/docs/Web/CSS)).

SVG is supported in all modern browsers and even a couple versions back in some cases. A fairly complete browser support table can be found on [Can I use](https://caniuse.com/svg). Firefox has supported some SVG content since version 1.5, and that support level has been growing with each release since. Hopefully, along with the tutorial here, MDN can help developers keep up with the differences between Gecko and some of the other major implementations.

Before starting you should have a basic understanding of XML or another markup language such as HTML. If you are not too familiar with XML, here are some guidelines to keep in mind:

- SVG elements and attributes should all be entered in the case shown here since XML is case-sensitive (unlike HTML).
- Attribute values in SVG must be placed inside quotes, even if they are numbers.

SVG is a huge specification. This tutorial attempts to cover the basics. Once you are familiar you should be able to use the [Element Reference](/en-US/docs/Web/SVG/Element) and the [Interface Reference](/en-US/docs/Web/API/Document_Object_Model#svg_interfaces) to find out anything else you need to know.

### Flavors of SVG

Since becoming a recommendation in 2003, the most recent "full" SVG version is 1.1. It builds on top of SVG 1.0, but adds more modularization to ease implementation. [The second edition of SVG 1.1](https://www.w3.org/TR/SVG/) became a Recommendation in 2011. "Full" SVG 1.2 was meant to be the next major release of SVG. It was dropped for the upcoming [SVG 2.0](https://www.w3.org/TR/SVG2/), which is under heavy development right now and follows a similar approach to CSS 3 in that it splits components into several loosely coupled specifications.

Apart from the full SVG recommendations, the working group at the W3C introduced SVG Tiny and SVG Basic in 2003. These two profiles are aimed mainly at mobile devices. The first, SVG Tiny, should yield graphics primitives for small devices with low capabilities. SVG Basic offers many features of full SVG, but doesn't include the ones which are hard to implement or heavy to render (like animations). In 2008, SVG Tiny 1.2 became a W3C Recommendation.

There were plans for an SVG Print specification, which would add support for multiple pages and enhanced color management. This work was discontinued.

{{ PreviousNext("Web/SVG/Tutorial", "Web/SVG/Tutorial/Getting_Started") }}
