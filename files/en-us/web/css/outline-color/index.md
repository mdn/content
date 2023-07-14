---
title: outline-color
slug: Web/CSS/outline-color
page-type: css-property
browser-compat: css.properties.outline-color
---

{{CSSRef}}

The **`outline-color`** CSS property sets the color of an element's outline.

{{EmbedInteractiveExample("pages/css/outline-color.html")}}

## Syntax

```css
/* <color> values */
outline-color: #f92525;
outline-color: rgb(30, 222, 121);
outline-color: blue;

/* Keyword value */
outline-color: invert;

/* Global values */
outline-color: inherit;
outline-color: initial;
outline-color: revert;
outline-color: revert-layer;
outline-color: unset;
```

The `outline-color` property is specified as any one of the values listed below.

### Values

- {{cssxref("&lt;color&gt;")}}
  - : The color of the outline, specified as a `<color>`.
- `invert`
  - : To ensure the outline is visible, performs a color inversion of the background. Note that browsers are not required to support this value; if they don't, this keyword is considered invalid.

## Description

An outline is a line that is drawn around an element, outside the {{cssxref("border")}}. Unlike the element's border, the outline is drawn outside the element's frame, and may overlap other content. The border, on the other hand, will actually alter the page's layout to ensure that it fits without overlapping anything else (unless you explicitly set it to overlap).

It is often more convenient to use the shorthand property {{cssxref("outline")}} when defining the appearance of an outline.

## Accessibility concerns

Custom [focus styles](/en-US/docs/Web/CSS/:focus) commonly involve making adjustments to the {{cssxref("outline")}} property. If the color of the outline is adjusted, it is important to ensure that the contrast ratio between it and the background the outline is placed over is high enough that people experiencing low vision conditions will be able to perceive it.

Color contrast ratio is determined by comparing the luminosity of the text and background color values. In order to meet current [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/), a ratio of 4.5:1 is required for text content and 3:1 for larger text such as headings. Large text is defined as 18.66px and [bold](/en-US/docs/Web/CSS/font-weight) or larger, or 24px or larger.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting a solid blue outline

#### HTML

```html
<p>My outline is blue, as you can see.</p>
```

#### CSS

```css
p {
  outline: 2px solid; /* Set the outline width and style */
  outline-color: #0000ff; /* Make the outline blue */
  margin: 5px;
}
```

#### Result

{{ EmbedLiveSample('Setting_a_solid_blue_outline') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("outline")}}
- {{cssxref("outline-color")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-width")}}
- The {{cssxref("&lt;color&gt;")}} data type
- Other color-related properties: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, and {{cssxref("column-rule-color")}}
- [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/CSS_Colors/Applying_color)
