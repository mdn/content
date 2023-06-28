---
title: <image>
slug: Web/CSS/image
page-type: css-type
browser-compat: css.types.image
---

{{CSSRef}}

The **`<image>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents a two-dimensional image.

## Syntax

The `<image>` data type can be represented with any of the following:

- An image denoted by the {{CSSxRef("url", "url()")}} data type
- A {{CSSxRef("&lt;gradient&gt;")}} data type
- A part of the webpage, defined by the {{CSSxRef("element","element()")}} function
- An image, image fragment or solid patch of color, defined by the {{CSSxRef("image/image","image()")}} function
- A blending of two or more images defined by the {{CSSxRef("cross-fade","cross-fade()")}} function.
- A selection of images chosen based on resolution defined by the {{CSSxRef("image/image-set","image-set()")}} function.

## Description

CSS can handle the following kinds of images:

- Images with _intrinsic dimensions_ (a natural size), like a JPEG, PNG, or other [raster format](https://en.wikipedia.org/wiki/Raster_graphics).
- Images with _multiple intrinsic dimensions_, existing in multiple versions inside a single file, like some .ico formats. (In this case, the intrinsic dimensions will be those of the image largest in area and the aspect ratio most similar to the containing box.)
- Images with no intrinsic dimensions but with _an intrinsic aspect ratio_ between its width and height, like an SVG or other [vector format](https://en.wikipedia.org/wiki/Vector_graphics).
- Images with _neither intrinsic dimensions, nor an intrinsic aspect ratio_, like a CSS gradient.

CSS determines an object's _concrete size_ using (1) its _intrinsic dimensions_; (2) its _specified size_, defined by CSS properties like {{CSSxRef("width")}}, {{CSSxRef("height")}}, or {{CSSxRef("background-size")}}; and (3) its _default size_, determined by the kind of property the image is used with:

| Kind of Object (CSS Property)                                                                | Default object size                                                                                           |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| {{CSSxRef("background-image")}}                                                              | The size of the element's background positioning area                                                         |
| {{CSSxRef("list-style-image")}}                                                              | The size of a `1em` character                                                                                 |
| {{CSSxRef("border-image-source")}}                                                           | The size of the element's border image area                                                                   |
| {{CSSxRef("cursor")}}                                                                        | The browser-defined size matching the usual cursor size on the client's system                                |
| {{CSSxRef("mask-image")}}                                                                    | ?                                                                                                             |
| {{CSSxRef("shape-outside")}}                                                                 | ?                                                                                                             |
| {{CSSxRef("mask-border-source")}}                                                            | ?                                                                                                             |
| {{CSSxRef("symbols", "symbols()")}} for @counter-style                                       | At risk feature. If supported, the browser-defined size matching the usual cursor size on the client's system |
| {{CSSxRef("content")}} for a pseudo-element ({{CSSxRef("::after")}}/{{CSSxRef("::before")}}) | A 300px × 150px rectangle                                                                                     |

The concrete object size is calculated using the following algorithm:

- If the specified size defines _both the width and the height_, these values are used as the concrete object size.
- If the specified size defines _only the width or only the height_, the missing value is determined using the intrinsic ratio, if there is any, the intrinsic dimensions if the specified value matches, or the default object size for that missing value.
- If the specified size defines _neither the width nor the height_, the concrete object size is calculated so that it matches the intrinsic aspect ratio of the image but without exceeding the default object size in any dimension. If the image has no intrinsic aspect ratio, the intrinsic aspect ratio of the object it applies to is used; if this object has none, the missing width or height are taken from the default object size.

> **Note:** Not all browsers support every type of image on every property. See the [browser compatibility section](#browser_compatibility) for details.

## Accessibility concerns

Browsers do not provide any special information on background images to assistive technology. This is important primarily for screen readers, as a screen reader will not announce its presence and therefore convey nothing to its users. If the image contains information critical to understanding the page's overall purpose, it is better to describe it semantically in the document.

- [MDN Understanding WCAG, Guideline 1.1 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Formal syntax

{{csssyntax}}

## Examples

### Valid images

```css example-good
url(test.jpg)               /* A <url>, as long as test.jpg is an actual image */
linear-gradient(blue, red)  /* A <gradient> */
element(#realid)            /* A part of the webpage, referenced with the element() function,
                               if "realid" is an existing ID on the page */
image(ltr 'arrow.png#xywh=0,0,16,16', red)
                            /* A section 16x16 section of <url>, starting from the top, left of the original
                               image as long as arrow.png is a supported image, otherwise a solid
                               red swatch. If language is rtl, the image will be horizontally flipped. */
cross-fade(20% url(twenty.png), url(eighty.png))
                            /* cross faded images, with twenty being 20% opaque
                               and eighty being 80% opaque. */
image-set('test.jpg' 1x, 'test-2x.jpg' 2x)
                            /* a selection of images with varying resolutions */
```

### Invalid images

```css example-bad
nourl.jpg            /* An image file must be defined using the url() function. */
url(report.pdf)      /* A file pointed to by the url() function must be an image. */
element(#fakeid)     /* An element ID must be an existing ID on the page. */
image(z.jpg#xy=0,0)  /* The spatial fragment must be written in the format of xywh=#,#,#,# */
image-set('cat.jpg' 1x, 'dog.jpg' 1x) /* every image in an image set must have a different resolutions */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("element","element()")}} {{Experimental_Inline}}
- {{CSSxRef("image/image", "image()")}}
- {{CSSxRef("image/image-set","image-set()")}}
- {{CSSxRef("cross-fade","cross-fade()")}}
