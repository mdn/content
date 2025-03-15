---
title: font-stretch
slug: Web/CSS/font-stretch
page-type: css-property
status:
  - deprecated
browser-compat: css.properties.font-stretch
---

{{CSSRef}}{{deprecated_header}}

> [!NOTE]
> The `font-stretch` property [has now been renamed to `font-width`](https://drafts.csswg.org/css-fonts/#font-stretch-desc) in the specifications. The name `font-stretch` has been kept as an alias for the `font-width` property.
> The new name `font-width` is not yet supported by any browsers.

The **`font-stretch`** [CSS](/en-US/docs/Web/CSS) property selects a normal, condensed, or expanded face from a font.

{{InteractiveExample("CSS Demo: font-stretch")}}

```css interactive-example-choice
font-stretch: condensed;
```

```css interactive-example-choice
font-stretch: expanded;
```

```css interactive-example-choice
font-stretch: ultra-expanded;
```

```css interactive-example-choice
font-stretch: 50%;
```

```css interactive-example-choice
font-stretch: 100%;
```

```css interactive-example-choice
font-stretch: 150%;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p class="transition-all" id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
@font-face {
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-family: League;
  font-style: normal;
  font-weight: 400;
  font-stretch: 50% 200%; /* Required by Chrome - allow 50% to 200% */
}

section {
  font-size: 1.2em;
  font-family: League, sans-serif;
}
```

## Syntax

```css
/* <font-stretch-css3> keyword values */
font-stretch: normal;
font-stretch: ultra-condensed;
font-stretch: extra-condensed;
font-stretch: condensed;
font-stretch: semi-condensed;
font-stretch: semi-expanded;
font-stretch: expanded;
font-stretch: extra-expanded;
font-stretch: ultra-expanded;

/* Percentage values */
font-stretch: 50%;
font-stretch: 100%;
font-stretch: 200%;

/* Global values */
font-stretch: inherit;
font-stretch: initial;
font-stretch: revert;
font-stretch: revert-layer;
font-stretch: unset;
```

This property may be specified as a single `<font-stretch-css3>` keyword value or a single {{cssxref("&lt;percentage&gt;")}} value.

### Values

- `normal`
  - : Specifies a normal font face.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Specifies a more condensed font face than normal, with `ultra-condensed` as the most condensed.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Specifies a more expanded font face than normal, with `ultra-expanded` as the most expanded.
- `<percentage>`

  - : A {{cssxref("&lt;percentage&gt;")}} value between 50% and 200% (inclusive). Negative values are not allowed for this property.

### Keyword to numeric mapping

The table below shows the mapping between the `<font-stretch-css3>` keyword values and numeric percentages:

| Keyword           | Percentage |
| ----------------- | ---------- |
| `ultra-condensed` | 50%        |
| `extra-condensed` | 62.5%      |
| `condensed`       | 75%        |
| `semi-condensed`  | 87.5%      |
| `normal`          | 100%       |
| `semi-expanded`   | 112.5%     |
| `expanded`        | 125%       |
| `extra-expanded`  | 150%       |
| `ultra-expanded`  | 200%       |

## Description

Some font families offer additional faces in which the characters are narrower than the normal face (_condensed_ faces) or wider than the normal face (_expanded_ faces).

You can use `font-stretch` to select a condensed or expanded face from such fonts. If the font you are using does not offer condensed or expanded faces, this property has no effect.

### Font face selection

The face selected for a given value of `font-stretch` depends on the faces supported by the font in question. If the font does not provide a face that exactly matches the given value, then values less than 100% map to a narrower face, and values greater than or equal to 100% map to a wider face.

The table below demonstrates the effect of supplying various different percentage values of `font-stretch` on two different fonts:

```css hidden
@font-face {
  font-family: "Inconsolata";
  src: url("https://fonts.gstatic.com/s/inconsolata/v31/QlddNThLqRwH-OJ1UHjlKENVzlm-WkL3GZQmAwPyya15.woff2")
    format("woff2");
  font-stretch: 50% 200%;
}

@font-face {
  font-family: "Anek Malayalam";
  src: url("https://fonts.gstatic.com/s/anekmalayalam/v4/6qLUKZActRTs_mZAJUZWWkhke0nYa-f6__Azq3-gP1W7db9_.woff2")
    format("woff2");
  font-stretch: 75% 125%;
}

td {
  border: solid;
  border-width: 1px;
}

#inconsolata td {
  font:
    90px Inconsolata,
    sans-serif;
}
#anek-malayalam td {
  font: 90px "Anek Malayalam";
}
#inconsolata td:nth-child(2),
#anek-malayalam td:nth-child(2) {
  font-stretch: 50%;
}
#inconsolata td:nth-child(3),
#anek-malayalam td:nth-child(3) {
  font-stretch: 62.5%;
}
#inconsolata td:nth-child(4),
#anek-malayalam td:nth-child(4) {
  font-stretch: 75%;
}
#inconsolata td:nth-child(5),
#anek-malayalam td:nth-child(5) {
  font-stretch: 87.5%;
}
#inconsolata td:nth-child(6),
#anek-malayalam td:nth-child(6) {
  font-stretch: 100%;
}
#inconsolata td:nth-child(7),
#anek-malayalam td:nth-child(7) {
  font-stretch: 112.5%;
}
#inconsolata td:nth-child(8),
#anek-malayalam td:nth-child(8) {
  font-stretch: 125%;
}
#inconsolata td:nth-child(9),
#anek-malayalam td:nth-child(9) {
  font-stretch: 150%;
}
#inconsolata td:nth-child(10),
#anek-malayalam td:nth-child(10) {
  font-stretch: 200%;
}
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">50%</th>
      <th scope="col">62.5%</th>
      <th scope="col">75%</th>
      <th scope="col">87.5%</th>
      <th scope="col">100%</th>
      <th scope="col">112.5%</th>
      <th scope="col">125%</th>
      <th scope="col">150%</th>
      <th scope="col">200%</th>
    </tr>
  </thead>
  <tbody>
    <tr id="inconsolata">
      <th scope="row">Inconsolata</th>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
    </tr>
    <tr id="anek-malayalam">
      <th scope="row">Anek Malayalam</th>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample('Font_face_selection', "100%", "300px")}}

- [Anek Malayalam](https://fonts.google.com/specimen/Anek+Malayalam) is a variable google font that supports widths from 75% to 125%. Values below and above this range select the closest matching font.
- [Inconsolata](https://fonts.google.com/specimen/Inconsolata) is a variable font that offers a continuous range of widths from 50% to 200%. <!-- Note, dynamically obtained woff2 from Google fonts using query: https://fonts.googleapis.com/css2?family=Inconsolata:wdth@50..200 -->

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax("font-width")}}

## Examples

### Setting font stretch percentages

```html
<p class="condensed">an elephantine lizard</p>
<p class="normal">an elephantine lizard</p>
<p class="expanded">an elephantine lizard</p>
```

```css
@font-face {
  src: url("https://mdn.github.io/shared-assets/fonts/LeagueMono-VF.ttf");
  font-family: "LeagueMonoVariable";
  font-style: normal;
  font-stretch: 1% 500%; /* Required by Chrome */
}

p {
  font:
    1.5rem "LeagueMonoVariable",
    sans-serif;
}

.condensed {
  font-stretch: 50%;
}

.normal {
  font-stretch: 100%;
}

.expanded {
  font-stretch: 200%;
}
```

{{EmbedLiveSample("Setting font stretch percentages", "100%", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- SVG {{SVGAttr("font-stretch")}} attribute
- [Learn: Fundamental text and font styling](/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS fonts](/en-US/docs/Web/CSS/CSS_fonts) module
