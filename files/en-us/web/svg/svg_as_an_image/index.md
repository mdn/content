---
title: SVG as an Image
slug: Web/SVG/SVG_as_an_Image
tags:
  - Images
  - NeedsContent
  - SVG
spec-urls: https://drafts.csswg.org/css-backgrounds/#the-background-image
---
SVG images can be used as an image format, in a number of contexts. Many browsers support SVG images in:

- HTML {{HTMLElement("img")}} or {{SVGElement("svg")}} elements
- CSS {{cssxref("background-image")}}

## Gecko-specific contexts

Additionally, Gecko 2.0 {{geckoRelease("2.0")}} introduced support for using [SVG](/en-US/docs/Web/SVG) in these contexts:

- CSS {{cssxref("list-style-image")}}
- CSS {{cssxref("content")}}
- SVG {{SVGElement("image")}} element
- SVG {{SVGElement("feImage")}} element
- Canvas [`drawImage`](/en-US/docs/Web/HTML/Canvas/Tutorial/Using_images#drawimage) function

### Restrictions

For security purposes, Gecko places some restrictions on SVG content when it's being used as an image:

- [JavaScript](/en-US/docs/Web/JavaScript) is disabled.
- External resources (e.g. images, stylesheets) cannot be loaded, though they can be used if inlined through data: Ls.
- {{cssxref(":visited")}}-link styles aren't rendered.
- Platform-native widget styling (based on OS theme) is disabled.

Note that the above restrictions are specific to image contexts; they don't apply when SVG content is viewed directly, or when it's embedded as a document via the {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, or {{HTMLElement("embed")}} elements.

## Specifications

{{Specifications}}

## See also

- [SVG in HTML introduction](/en-US/docs/Web/SVG/Tutorial/SVG_In_HTML_Introduction)
