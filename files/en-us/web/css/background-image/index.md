---
title: background-image
slug: Web/CSS/background-image
page-type: css-property
browser-compat: css.properties.background-image
---

{{CSSRef}}

The **`background-image`** [CSS](/en-US/docs/Web/CSS) property sets one or more background images on an element.

{{EmbedInteractiveExample("pages/css/background-image.html")}}

The background images are drawn on stacking context layers on top of each other. The first layer specified is drawn as if it is closest to the user.

The [borders](/en-US/docs/Web/CSS/border) of the element are then drawn on top of them, and the {{cssxref("background-color")}} is drawn beneath them. How the images are drawn relative to the box and its borders is defined by the {{cssxref("background-clip")}} and {{cssxref("background-origin")}} CSS properties.

If a specified image cannot be drawn (for example, when the file denoted by the specified URI cannot be loaded), browsers handle it as they would a `none` value.

> [!NOTE]
> Even if the images are opaque and the color won't be displayed in normal circumstances, web developers should always specify a {{cssxref("background-color")}}. If the images cannot be loaded—for instance, when the network is down—the background color will be used as a fallback.

## Syntax

```css
/* single image */
background-image: linear-gradient(black, white);
background-image: url("cat-front.png");

/* multiple images */
background-image:
  radial-gradient(circle, #0000 45%, #000f 48%),
  radial-gradient(ellipse farthest-corner, #fc1c14 20%, #cf15cf 80%);

/* Global values */
background-image: inherit;
background-image: initial;
background-image: revert;
background-image: revert-layer;
background-image: unset;
```

Each background image is specified either as the keyword `none` or as an {{cssxref("&lt;image&gt;")}} value.

To specify multiple background images, supply multiple values, separated by a comma.

### Values

- `none`
  - : Is a keyword denoting the absence of images.
- `<image>`
  - : Is an {{cssxref("&lt;image&gt;")}} denoting the image to display. There can be several of them, separated by commas, as [multiple backgrounds](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) are supported.

## Accessibility

Browsers do not provide any special information on background images to assistive technology. This is important primarily for screen readers, as a screen reader will not announce its presence and therefore convey nothing to its users. If the image contains information critical to understanding the page's overall purpose, it is better to describe it semantically in the document.

- [MDN Understanding WCAG, Guideline 1.1 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Additionally, it is important to ensure that the contrast ratio between the background image and the foreground text is high enough that people with low vision can read the page content.

Color contrast ratio is determined by comparing the luminance of the text and background color values. To meet [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/), a ratio of 4.5:1 is required for body text content and 3:1 for larger text such as headings. Large text is defined as 24px or larger, or [bolded](/en-US/docs/Web/CSS/font-weight) 18.66px or larger.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Understanding WCAG, Guideline 1.4 explanation](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html), W3C (2023)

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
  <p class="cats-and-stars">This paragraph is full of cats<br />and stars.</p>
  <p>This paragraph is not.</p>
  <p class="cats-and-stars">Here are more cats for you.<br />Look at them!</p>
  <p>And no more.</p>
</div>
```

#### CSS

```css
p {
  font-weight: bold;
  font-size: 1.5em;
  color: white;
  text-shadow: 0.07em 0.07em 0.05em black;
  background-image: none;
  background-color: transparent;
}

div {
  background-image: url("mdn_logo_only_color.png");
}

.cats-and-stars {
  background-image: url("star-transparent.gif"), url("cat-front.png");
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

- {{HTMLElement("img")}}
- Image-related functions:
  - {{cssxref("gradient/linear-gradient", "linear-gradient()")}}
  - {{cssxref("gradient/radial-gradient", "radial-gradient()")}}
  - {{cssxref("gradient/conic-gradient", "conic-gradient()")}}
  - {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}
  - {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
  - {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
  - {{cssxref("url_value", "&lt;url&gt;")}}
- [Using CSS gradients](/en-US/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- [Implementing image sprites in CSS](/en-US/docs/Web/CSS/CSS_images/Implementing_image_sprites_in_CSS)
- [CSS images](/en-US/docs/Web/CSS/CSS_images) module

- Background-related properties
  - {{cssxref("background-attachment")}}
  - {{cssxref("background-clip")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-origin")}}
  - {{cssxref("background-position")}}
  - {{cssxref("background-repeat")}}
  - {{cssxref("background-size")}}
  - {{cssxref("background")}} shorthand
- [Learn: Backgrounds and borders](/en-US/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Using multiple backgrounds](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- [Resizing background images](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
- [CSS backgrounds and borders](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders) module
