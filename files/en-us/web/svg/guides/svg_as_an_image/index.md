---
title: SVG as an image
slug: Web/SVG/Guides/SVG_as_an_image
page-type: guide
spec-urls: https://drafts.csswg.org/css-backgrounds/#the-background-image
sidebar: svgref
---

SVG can be used as an image format in HTML, CSS, certain SVG elements, and via the Canvas API.
This page lists the features where you can provide SVG as an image source.

## Features supporting SVG

Browsers support SVG images in:

- HTML {{HTMLElement("img")}} or {{SVGElement("svg")}} elements
- CSS {{cssxref("background-image")}}
- CSS {{cssxref("list-style-image")}}
- CSS {{cssxref("content")}}
- SVG {{SVGElement("image")}} element
- SVG {{SVGElement("feImage")}} element
- Canvas [`drawImage`](/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#drawing_images) function

## Restrictions

For security purposes, some browsers place restrictions on SVG content when it's being used as an image.
Specifically, the following limitations may apply:

- [JavaScript](/en-US/docs/Web/JavaScript) is disabled.
- External resources (e.g., images, stylesheets) cannot be loaded, though they can be used if inlined through [`data:` URLs](/en-US/docs/Web/URI/Reference/Schemes/data).
- {{cssxref(":visited")}}-link styles aren't rendered.
- Platform-native widget styling (based on OS theme) is disabled.

Note that the above restrictions are specific to image contexts; they don't apply when SVG content is viewed directly, or when it's embedded as a document via the {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, or {{HTMLElement("embed")}} elements.

## Specifications

{{Specifications}}
