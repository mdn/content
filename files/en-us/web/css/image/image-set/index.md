---
title: image-set()
slug: Web/CSS/image/image-set
tags:
  - CSS
  - CSS Function
  - CSS-4 Images
  - Function
  - Reference
  - Web
browser-compat: css.types.image.image-set
---
{{CSSRef}}

The **`image-set()`** [CSS](/en-US/docs/Web/CSS) [functional](/en-US/docs/Web/CSS/CSS_Functions) notation is a method of letting the browser pick the most appropriate CSS image from a given set, primarily for high pixel density screens.

Resolution and bandwidth differ by device and network access. The `image-set()` function delivers the most appropriate image resolution for a user's device, providing a set of image options — each with an associated resolution declaration — from which the browser picks the most appropriate for the device and settings. Resolution can be used as a proxy for filesize — a user agent on a slow mobile connection with a high-resolution screen may prefer to receive lower-resolution images rather than waiting for a higher resolution image to load.

`image-set()` allows the author to provide options rather than determining what each individual user needs.

## Syntax

```css
image-set() = image-set( <image-set-option># )
where <image-set-option> = [ <image> | <string> ] <resolution> and
      <string> is an <url>
```

### Values

- `<image>`
  - : The [`<image>`](/en-US/docs/Web/CSS/image) can be any image type except for an image set. The `image-set()` function may not be nested inside another `image-set()` function.
- `<string>`
  - : A URL to an image.
- `<resolution>` {{optional_inline}}
  - : [`<resolution>`](/en-US/docs/Web/CSS/resolution) units include `x` or `dppx`, for dots per pixel unit, `dpi`, for dots per inch, and `dpcm` for dots per centimeter. Every image within an `image-set()` must have a unique resolution.
- `type(<string>)` {{optional_inline}}
  - : A valid MIME type string, for example "image/jpeg".

## Examples

### Using image-set() to provide alternative background-image options

This example shows how to use [`image-set()`](https://drafts.csswg.org/css-images-4/#funcdef-image-set) to provide two alternative {{cssxref("background-image")}} options, chosen depending on the resolution needed: a normal version and a high-resolution version.

{{EmbedGHLiveSample("css-examples/images/image-set.html", '100%', 600)}}

> **Note:** In the above example, the `-webkit` prefixed version is also used to support Chrome and Safari. In Firefox 90, support was added for `-webkit-image-set()` as an alias to `image-set()` (in order to provide compat where developers had not added the standard property).

### Using image-set() to provide alternative image formats

In the next example the `type()` function is used to serve the image in AVIF and JPEG formats. If the browser supports avif, it will choose that version. Otherwise it will use the jpeg version.

{{EmbedGHLiveSample("css-examples/images/image-set-type.html", '100%', 600)}}

#### Providing a fallback

There is no inbuilt fallback for `image-set()`; therefore to include a {{cssxref("background-image")}} for those browsers that do not support the function, a separate declaration is required before the line using `image-set()`.

```css
.box {
  background-image: url("large-balloons.jpg");
  background-image: image-set(
    "large-balloons.avif" type("image/avif"),
    "large-balloons.jpg" type("image/jpeg"));
}
```

## Accessibility concerns

Browsers do not provide any special information on background images to assistive technology. This is important primarily for screen readers, as a screen reader will not announce its presence and therefore convey nothing to its users. If the image contains information critical to understanding the page's overall purpose, it is better to describe it semantically in the document.

- [MDN Understanding WCAG, Guideline 1.1 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_%e2%80%94_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("image")}}
- {{cssxref("image/image", "image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("url", "url()")}}
- {{cssxref("&lt;gradient&gt;")}}
- {{cssxref("cross-fade", "cross-fade()")}}
