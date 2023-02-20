---
title: background-color
slug: Web/CSS/background-color
page-type: css-property
browser-compat: css.properties.background-color
---

{{CSSRef}}

The **`background-color`** [CSS](/en-US/docs/Web/CSS) property sets the background color of an element.

{{EmbedInteractiveExample("pages/css/background-color.html")}}

## Syntax

```css
/* Keyword values */
background-color: red;
background-color: indigo;

/* Hexadecimal value */
background-color: #bbff00; /* Fully opaque */
background-color: #bf0; /* Fully opaque shorthand */
background-color: #11ffee00; /* Fully transparent */
background-color: #1fe0; /* Fully transparent shorthand */
background-color: #11ffeeff; /* Fully opaque */
background-color: #1fef; /* Fully opaque shorthand */

/* RGB value */
background-color: rgb(255 255 128); /* Fully opaque */
background-color: rgb(117 190 218 / 0.5); /* 50% transparent */

/* HSL value */
background-color: hsl(50 33% 25%); /* Fully opaque */
background-color: hsl(50 33% 25% / 0.75); /* 75% opaque, i.e. 25% transparent */

/* Special keyword values */
background-color: currentcolor;
background-color: transparent;

/* Global values */
background-color: inherit;
background-color: initial;
background-color: revert;
background-color: revert-layer;
background-color: unset;
```

The `background-color` property is specified as a single `<color>` value.

### Values

- {{cssxref("&lt;color&gt;")}}
  - : The uniform color of the background. It is rendered behind any {{cssxref("background-image")}} that is specified, although the color will still be visible through any transparency in the image.

## Accessibility concerns

It is important to ensure that the contrast ratio between the background color and the color of the text placed over it is high enough that people experiencing low vision conditions will be able to read the content of the page.

Color contrast ratio is determined by comparing the luminance of the text and background color values. In order to meet current [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/), a ratio of 4.5:1 is required for text content and 3:1 for larger text such as headings. Large text is defined as 18.66px and [bold](/en-US/docs/Web/CSS/font-weight) or larger, or 24px or larger.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### HTML

```html
<div class="exampleone">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="exampletwo">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="examplethree">Lorem ipsum dolor sit amet, consectetuer</div>
```

### CSS

```css
.exampleone {
  background-color: transparent;
}

.exampletwo {
  background-color: rgb(153, 102, 153);
  color: rgb(255, 255, 204);
}

.examplethree {
  background-color: #777799;
  color: #ffffff;
}
```

### Result

{{EmbedLiveSample("Examples", 200, 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Multiple backgrounds](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
- The {{cssxref("&lt;color&gt;")}} data type
- Other color-related properties: {{cssxref("color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, and {{cssxref("column-rule-color")}}
- [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/CSS_Colors/Applying_color)
