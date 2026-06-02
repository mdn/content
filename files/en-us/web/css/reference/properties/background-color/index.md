---
title: "`background-color` CSS property"
short-title: background-color
slug: Web/CSS/Reference/Properties/background-color
page-type: css-property
browser-compat: css.properties.background-color
sidebar: cssref
---

The **`background-color`** [CSS](/en-US/docs/Web/CSS) property sets the background color of an element.

{{InteractiveExample("CSS Demo: background-color")}}

```css interactive-example-choice
background-color: brown;
```

```css interactive-example-choice
background-color: #74992e;
```

```css interactive-example-choice
background-color: rgb(255 255 128);
```

```css interactive-example-choice
background-color: rgb(255 255 128 / 0.5);
```

```css interactive-example-choice
background-color: hsl(50 33% 25%);
```

```css interactive-example-choice
background-color: hsl(50 33% 25% / 0.75);
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

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
background-color: rgb(117 190 218 / 50%); /* 50% transparent */

/* HSL value */
background-color: hsl(50 33% 25%); /* Fully opaque */
background-color: hsl(50 33% 25% / 75%); /* 75% opaque, i.e. 25% transparent */

/* Special keyword values */
background-color: currentColor;
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

## Description

The `background-color` property sets the background color of an element box. The color is drawn behind any background images. By default, the background color is painted within the border box, meaning is painted behind the border, ending at the outer edge of the border-box.

Clipping of the `background-color` paint area is controlled via the {{cssxref("background-clip")}} property. If multiple background images are set, the background color's clipping is determined by the value of the `background-clip` associated with the bottom-most background image.

## Accessibility

It is important to ensure that the contrast ratio between the background color and the color of the text placed over it is high enough that people experiencing low vision conditions will be able to read the content of the page. A high contrast ratio also improves content accessibility for glossy-screened mobile device users when in a bright environment, such as sunlight.

Color contrast ratio is determined by comparing the luminance of the text and background color values. In order to meet current [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/), a ratio of 4.5:1 is required for text content and 3:1 for larger text such as headings. Large text is defined as 18.66px and [bold](/en-US/docs/Web/CSS/Reference/Properties/font-weight) or larger, or 24px or larger.

- [Understanding WCAG: Perceivalble Guideline 1.4.3](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) understanding [color contrast](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

This example demonstrates applying `background-color` to HTML {{HTMLelement("p")}} elements using different CSS {{cssxref("color_value", "&lt;color&gt;")}} data-type values.

#### HTML

```html
<p class="example-one">Lorem ipsum dolor sit amet, consectetuer</p>

<p class="example-two">Lorem ipsum dolor sit amet, consectetuer</p>

<p class="example-three">Lorem ipsum dolor sit amet, consectetuer</p>
```

#### CSS

Each paragraph is set to a different background color, including explicity setting the default [`transparent`](/en-US/docs/Web/CSS/Reference/Values/named-color#transparent), an {{cssxref("rgb()")}} color function, and a {{cssxref("hex-color")}}. We also set the {{cssxref("color")}} proprty to ensure enough contrast between the text and its background.

```css
.example-one {
  background-color: transparent;
}

.example-two {
  background-color: rgb(153 102 153);
  color: rgb(255 255 204);
}

.example-three {
  background-color: #777799;
  color: white;
}
```

#### Result

{{EmbedLiveSample("Basic example", 200, 150)}}

### Colorized tables

This example demonstrates the use of `background-color` on HTML {{HTMLelement("table")}} elements, including {{HTMLelement("tr")}} rows and {{HTMLelement("td")}} cells. It also demonstrates how background colors are painted behind any borders.

#### HTML

```html
<table>
  <tbody>
    <tr id="r1">
      <td id="c11">11</td>
      <td id="c12">12</td>
      <td id="c13">13</td>
    </tr>
    <tr id="r2">
      <td id="c21">21</td>
      <td id="c22">22</td>
      <td id="c23">23</td>
    </tr>
    <tr id="r3">
      <td id="c31">31</td>
      <td id="c32">32</td>
      <td id="c33">33</td>
    </tr>
  </tbody>
</table>
```

#### CSS

We use CSS to set different {{cssxref("named-color")}} values. We also set a large dashed border on the table and every cell to demonstrate how the `background-color` is painted to the outer edge of the border-box.

```css
table {
  border-collapse: collapse;
  border: dashed black 5px;
  width: 250px;
  height: 150px;
}
td {
  border: dashed 5px black;
}
#r1 {
  background-color: lightblue;
}
#c12 {
  background-color: cyan;
}
#r2 {
  background-color: grey;
}
#r3 {
  background-color: olive;
}
```

#### Result

{{EmbedLiveSample('Colorize tables', "100%", "100%")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("background-clip")}}
- [Multiple backgrounds](/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- The {{cssxref("&lt;color&gt;")}} data type
- Other color-related properties: {{cssxref("color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, and {{cssxref("column-rule-color")}}
