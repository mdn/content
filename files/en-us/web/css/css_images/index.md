---
title: CSS Images
slug: Web/CSS/CSS_Images
tags:
  - CSS
  - CSS Images
  - Guide
  - Overview
  - Reference
---
{{CSSRef}}

**CSS Images** is a module of CSS that defines what types of images can be used (the {{CSSxRef("&lt;image&gt;")}} type, containing URLs, gradients and other types of images), how to resize them and how they, and other replaced content, interact with the different layout models.

## Reference

### Properties

- {{CSSxRef("image-orientation")}}
- {{CSSxRef("image-rendering")}}
- {{CSSxRef("image-resolution")}}
- {{CSSxRef("object-fit")}}
- {{CSSxRef("object-position")}}

### Functions

- {{CSSxRef("linear-gradient", "linear-gradient()")}}
- {{CSSxRef("radial-gradient", "radial-gradient()")}}
- {{CSSxRef("repeating-linear-gradient", "repeating-linear-gradient()")}}
- {{CSSxRef("repeating-radial-gradient", "repeating-radial-gradient()")}}
- {{CSSxRef("conic-gradient")}}
- {{CSSxRef("repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{CSSxRef("url", "url()")}}
- {{CSSxRef("element", "element()")}}
- {{CSSxRef("_image", "image()")}}
- {{CSSxRef("cross-fade", "cross-fade()")}}

### Data types

- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("&lt;image&gt;")}}

## Guides

- [Using CSS gradients](/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
  - : Presents a specific type of CSS images, _gradients_, and how to create and use these.
- [Implementing image sprites in CSS](/en-US/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS)
  - : Describes the common technique grouping several images in one single document to save download requests and speed up the availability of a page.

## Specifications

| Specification                                                                        | Status                           | Comment                                                                                                                                                                     |
| ------------------------------------------------------------------------------------ | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("CSS4 Images")}}                                                 | {{Spec2("CSS4 Images")}} | Added {{CSSxRef("image-resolution")}}, {{CSSxRef("conic-gradient")}}, and {{CSSxRef("_image", "image()")}}                                  |
| {{SpecName("CSS3 Images")}}                                                 | {{Spec2("CSS3 Images")}} | Added {{CSSxRef("image-orientation")}}, {{CSSxRef("image-rendering")}}, {{CSSxRef("object-fit")}} and {{CSSxRef("object-position")}} |
| {{SpecName("Compat", "#css-%3Cimage%3E-type", "CSS Gradients")}} | {{Spec2("Compat")}}         | Standardizes the `-webkit` prefixed gradient value functions                                                                                                                |
| {{SpecName("CSS3 Values", "#urls", "&lt;url&gt;")}}                 | {{Spec2("CSS3 Values")}} |                                                                                                                                                                             |
| {{Specname("CSS2.1", "syndata.html#uri", "&lt;uri&gt;")}}         | {{Spec2("CSS2.1")}}         |                                                                                                                                                                             |
| {{SpecName("CSS1", "#url", "&lt;url&gt;")}}                             | {{Spec2("CSS1")}}         | Initial definition                                                                                                                                                          |
