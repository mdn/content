---
title: background-image
slug: Web/CSS/background-image
tags:
  - CSS
  - CSS Background
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.background-image
---
{{CSSRef}}

The **`background-image`** [CSS](/en-US/docs/Web/CSS) property sets one or more background images on an element.

{{EmbedInteractiveExample("pages/css/background-image.html")}}

The background images are drawn on stacking context layers on top of each other. The first layer specified is drawn as if it is closest to the user.

The [borders](/en-US/docs/Web/CSS/border) of the element are then drawn on top of them, and the {{cssxref("background-color")}} is drawn beneath them. How the images are drawn relative to the box and its borders is defined by the {{cssxref("background-clip")}} and {{cssxref("background-origin")}} CSS properties.

If a specified image cannot be drawn (for example, when the file denoted by the specified URI cannot be loaded), browsers handle it as they would a `none` value.

> **Note:** Even if the images are opaque and the color won't be displayed in normal circumstances, web developers should always specify a {{cssxref("background-color")}}. If the images cannot be loaded—for instance, when the network is down—the background color will be used as a fallback.

## Syntax

Each background image is specified either as the keyword `none` or as an {{cssxref("&lt;image&gt;")}} value.

To specify multiple background images, supply multiple values, separated by a comma:

```css
background-image:
  linear-gradient(to bottom, rgba(255,255,0,0.5), rgba(0,0,255,0.5)),
  url('catfront.png');

/* Global values */
background-image: inherit;
background-image: initial;
background-image: revert;
background-image: unset;
```

### Values

- `none`
  - : Is a keyword denoting the absence of images.
- `<image>`
  - : Is an {{cssxref("&lt;image&gt;")}} denoting the image to display. There can be several of them, separated by commas, as [multiple backgrounds](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds) are supported.

## Accessibility concerns

Browsers do not provide any special information on background images to assistive technology. This is important primarily for screen readers, as a screen reader will not announce its presence and therefore convey nothing to its users. If the image contains information critical to understanding the page's overall purpose, it is better to describe it semantically in the document.

- [MDN Understanding WCAG, Guideline 1.1 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_%e2%80%94_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Layering background images

Note that the star image is partially transparent and is layered over the cat image.

#### HTML

```html
<div>
  <p class="catsandstars">
    This paragraph is full of cats<br />and stars.
  </p>
  <p>This paragraph is not.</p>
  <p class="catsandstars">
    Here are more cats for you.<br />Look at them!
  </p>
  <p>And no more.</p>
</div>
```

#### CSS

```css
p {
  font-size: 1.5em;
  color: #FE7F88;
  background-image: none;
  background-color: transparent;
}

div {
  background-image:
      url("mdn_logo_only_color.png");
}

.catsandstars {
  background-image:
      url("startransparent.gif"),
      url("catfront.png");
  background-color: transparent;
}
```

#### Result

{{EmbedLiveSample('Layering_background_images')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Implementing image sprites in CSS](/en-US/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS)
- {{HTMLElement("img")}}
- Image-related data types: {{cssxref("&lt;image&gt;")}}, {{cssxref("&lt;gradient&gt;")}}
- Image-related functions:

  - {{cssxref("cross-fade()")}}
  - {{cssxref("element()")}}
  - {{cssxref("image()", "image()")}}
  - {{cssxref("image-set()")}}
  - {{cssxref("linear-gradient()")}}
  - {{cssxref("radial-gradient()")}}
  - {{cssxref("repeating-linear-gradient()")}}
  - {{cssxref("repeating-radial-gradient()")}}
  - {{cssxref("paint()")}}
  - {{cssxref("url()", "url()")}}
