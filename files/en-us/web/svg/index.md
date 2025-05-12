---
title: "SVG: Scalable Vector Graphics"
short-title: SVG
slug: Web/SVG
page-type: landing-page
sidebar: svgref
---

**Scalable Vector Graphics (SVG)** is an [XML](/en-US/docs/Web/XML)-based markup language for describing two-dimensional based [vector graphics](https://en.wikipedia.org/wiki/Vector_graphics).

As such, it's a text-based, open Web standard for describing images that can be rendered cleanly at any size and are designed specifically to work well with other web standards including [CSS](/en-US/docs/Web/CSS), [DOM](/en-US/docs/Web/API/Document_Object_Model), [JavaScript](/en-US/docs/Web/JavaScript), and [SMIL](/en-US/docs/Web/SVG/Guides/SVG_animation_with_SMIL). SVG is, essentially, to graphics what [HTML](/en-US/docs/Web/HTML) is to text.

SVG images and their related behaviors are defined in [XML](/en-US/docs/Web/XML) text files, which means they can be searched, indexed, scripted, and compressed. Additionally, this means they can be created and edited with any text editor or with drawing software.

Compared to classic bitmapped image formats such as {{Glossary("JPEG")}} or {{Glossary("PNG")}}, SVG-format vector images can be rendered at any size without loss of quality and can be easily localized by updating the text within them, without the need of a graphical editor to do so. With proper libraries, SVG files can even be localized on-the-fly.

SVG has been developed by the [World Wide Web Consortium (W3C)](https://www.w3.org/) since 1999.

## Tutorials

The [SVG tutorials](/en-US/docs/Web/SVG/Tutorials) are designed to walk you through subjects assuming that you have no prior experience, starting from the basics and progressing to more advanced techniques.

- [Introducing SVG from scratch](/en-US/docs/Web/SVG/Tutorials/SVG_from_scratch)
  - : This tutorial aims to explain the internals of SVG and is packed with technical details. If you just want to draw beautiful images, you might find more useful resources at [Inkscape's documentation page](https://inkscape.org/learn/). Another good introduction to SVG is provided by the W3C's [SVG Primer](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html). Also check out this advent calendar-themed [SVG Tutorial](https://svg-tutorial.com/) that walks you through coding 25 festive SVGs.

## Guides

The [SVG guides](/en-US/docs/Web/SVG/Guides) help you work with SVG on the web, covering topics such as embedding, MIME (media) types, handling scripts, animations, filters, and more.

- [Applying SVG effects to HTML content](/en-US/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
  - : Modern browsers support using SVG within CSS styles to apply graphical effects to HTML content.
- [Content type](/en-US/docs/Web/SVG/Guides/Content_type)
  - : SVG makes use of a number of data types. This article lists these types along with their syntax and descriptions of what they're used for.
- [Namespaces crash course](/en-US/docs/Web/SVG/Guides/Namespaces_crash_course)
  - : Namespaces are essential to user agents that support multiple XML dialects.
    Browsers must be very strict; taking the time to understand namespaces now will save you from future headaches.
- [Scripting](/en-US/docs/Web/SVG/Guides/Scripting)
  - : There are several ways to create an manipulate SVG using JavaScript.
    This document describes event handling, interactivity and working with embedded SVG content.
- [SVG animation with SMIL](/en-US/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
  - : SMIL is an XML-based language for writing interactive multimedia presentations.
    Authors can use SMIL syntax in SVG to define the timing and layout of elements for animation.
- [SVG as an image](/en-US/docs/Web/SVG/Guides/SVG_as_an_image)
  - : SVG can be used as an image format in HTML, CSS, certain SVG elements, and via the Canvas API.
    This page lists the features where you can provide SVG as an image source.
- [SVG filters](/en-US/docs/Web/SVG/Guides/SVG_filters)
  - : SVG supports filters so authors can apply effects such as a shadow or blur, or even merge the results of different filters.
- [SVG in HTML introduction](/en-US/docs/Web/SVG/Guides/SVG_in_HTML)
  - : This article shows how to use inline SVG and includes examples for illustration.

## Reference

The [SVG reference](/en-US/docs/Web/SVG/Reference) documentation contains comprehensive information about elements, attributes, and DOM interfaces, and lists relevant specifications and standards documents.

- [SVG elements](/en-US/docs/Web/SVG/Reference/Element)
  - : The SVG elements used to construct, draw, and layout vector graphics.
- [SVG attributes](/en-US/docs/Web/SVG/Reference/Attribute)
  - : The SVG attributes available that can be used to specify how an element should be handled or rendered.
- [SVG DOM interface](/en-US/docs/Web/API/Document_Object_Model#svg_dom)
  - : The SVG DOM API for interacting with SVG using JavaScript.

## Resources

- [SVG test suite](https://github.com/w3c/svgwg/wiki/Testing)
- [Markup validator](https://validator.w3.org/#validate_by_input)
- [SVG authoring guidelines](https://jwatt.org/svg/authoring/)
- [SVG tutorial](https://svg-tutorial.com/)
- [D3 data visualization library](https://d3js.org/)
