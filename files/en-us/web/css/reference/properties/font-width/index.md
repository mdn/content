---
title: font-width
slug: Web/CSS/Reference/Properties/font-width
page-type: css-property
status:
  - experimental
browser-compat: css.properties.font-width
sidebar: cssref
---

{{SeeCompatTable}}

> [!NOTE]
> The `font-width` property is the modern replacement for {{cssxref("font-stretch")}}, which is a legacy alias. While `font-width` is the specification's preferred name, `font-stretch` currently has broader browser support. Check the [fallback example](#providing_a_font-stretch_fallback) and [browser compatibility](#browser_compatibility) table for details.

The **`font-width`** [CSS](/en-US/docs/Web/CSS) property selects a normal, condensed, or expanded face from a font.

{{InteractiveExample("CSS Demo: font-width")}}

```css interactive-example-choice
font-width: condensed;
```

```css interactive-example-choice
font-width: expanded;
```

```css interactive-example-choice
font-width: ultra-expanded;
```

```css interactive-example-choice
font-width: 50%;
```

```css interactive-example-choice
font-width: 100%;
```

```css interactive-example-choice
font-width: 150%;
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
  font-family: "League";
  font-style: normal;
  font-weight: normal;
}

section {
  font-size: 1.2em;
  font-family: "League", sans-serif;
}
```

## Syntax

```css
/* Keyword values */
font-width: normal;
font-width: ultra-condensed;
font-width: extra-condensed;
font-width: condensed;
font-width: semi-condensed;
font-width: semi-expanded;
font-width: expanded;
font-width: extra-expanded;
font-width: ultra-expanded;

/* Percentage values */
font-width: 50%;
font-width: 100%;
font-width: 200%;

/* Global values */
font-width: inherit;
font-width: initial;
font-width: revert;
font-width: revert-layer;
font-width: unset;
```

This property may be specified as a single keyword or {{cssxref("&lt;percentage&gt;")}} value.

### Values

- `normal`
  - : Specifies a normally condensed font face.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Specifies a more condensed font face than normal, with `ultra-condensed` being the most condensed.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Specifies a more expanded font face than normal, with `ultra-expanded` being the most expanded.
- `<percentage>`
  - : A {{cssxref("&lt;percentage&gt;")}} value between 50% and 200% (inclusive). Negative values are not allowed for this property.

### Keyword to numeric mapping

The table below shows the mapping between the keyword values and numeric percentages:

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

You can use `font-width` to select a condensed or expanded face from such fonts. If the font you are using does not offer condensed or expanded faces, this property has no effect.

### Font face selection

The face selected for a given value of `font-width` depends on the faces supported by the font in question. If the font does not provide a face that exactly matches the given value, then values less than 100% map to a condensed face, and values greater than or equal to 100% map to an expanded face.

The table below demonstrates the effect of setting different percentage values of `font-width` on two different fonts:

```css hidden
@font-face {
  font-family: "Inconsolata";
  src: url("https://fonts.gstatic.com/s/inconsolata/v31/QlddNThLqRwH-OJ1UHjlKENVzlm-WkL3GZQmAwPyya15.woff2")
    format("woff2");
}

@font-face {
  font-family: "Anek Malayalam";
  src: url("https://fonts.gstatic.com/s/anekmalayalam/v4/6qLUKZActRTs_mZAJUZWWkhke0nYa-f6__Azq3-gP1W7db9_.woff2")
    format("woff2");
}

body {
  font-family: system-ui;
}

table {
  border-collapse: collapse;
  width: 100%;
}

tbody th {
  text-align: right;
}

th,
td {
  padding: 0.25rem;
  font-weight: normal;
  text-align: center;
}

td {
  border: solid;
  border-width: 1px;
  font-size: 5rem;
}

.inconsolata {
  font-family: "Inconsolata", sans-serif;
}

.anek-malayalam {
  font-family: "Anek Malayalam", sans-serif;
}

td:nth-child(2) {
  font-width: 50%;
}
td:nth-child(3) {
  font-width: 62.5%;
}
td:nth-child(4) {
  font-width: 75%;
}
td:nth-child(5) {
  font-width: 87.5%;
}
td:nth-child(6) {
  font-width: 100%;
}
td:nth-child(7) {
  font-width: 112.5%;
}
td:nth-child(8) {
  font-width: 125%;
}
td:nth-child(9) {
  font-width: 150%;
}
td:nth-child(10) {
  font-width: 200%;
}
```

```html hidden
<table>
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
    <tr class="inconsolata">
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
    <tr class="anek-malayalam">
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

{{EmbedLiveSample('Font face selection', "100%", "250px")}}

The following screenshot shows how the above table is rendered, in case your browser doesn't support the `font-width` property:

![A two-row comparison table showing the lowercase letter e rendered at different widths (50%, 62.5%, 75%, 87.5%, 100%, 112.5%, 125%, 150%, 200%). The top row is labeled Inconsolata and the bottom row Anek Malayalam. Both fonts are sans-serif and Inconsolata's letters are slightly wider compared to Anek Malayalam's.](font-face-selection.png)

- [Inconsolata](https://fonts.google.com/specimen/Inconsolata) is a variable font that offers a continuous range of widths from 50% to 200%. <!-- Note, dynamically obtained woff2 from Google fonts using query: https://fonts.googleapis.com/css2?family=Inconsolata:wdth@50..200 -->
- [Anek Malayalam](https://fonts.google.com/specimen/Anek+Malayalam) is a variable google font that supports widths from 75% to 125%. Values below and above this range select the closest matching font.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax("font-width")}}

## Examples

### Setting font width percentages

```html
<p class="condensed">an elephantine lizard</p>
<p class="normal">an elephantine lizard</p>
<p class="expanded">an elephantine lizard</p>
```

```css
@font-face {
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-family: "LeagueMonoVariable";
  font-style: normal;
}

p {
  font:
    1.5rem "LeagueMonoVariable",
    sans-serif;
}

.condensed {
  font-width: 50%;
}

.normal {
  font-width: 100%;
}

.expanded {
  font-width: 200%;
}
```

{{EmbedLiveSample("Setting font width percentages", "100%", 200)}}

### Providing a font-stretch fallback

Because `font-width` does not yet have broad browser support, you may want to include the legacy {{cssxref("font-stretch")}} property as a fallback. Place `font-stretch` before `font-width` so that supporting browsers use the modern property:

```css
p {
  font-stretch: condensed; /* for browsers that don't support font-width */
  font-width: condensed;
}
```

> [!NOTE]
> You can automate this fallback pattern using the [postcss-preset-env](https://preset-env.cssdb.org/) plugin for PostCSS, which includes the [postcss-font-width-property](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-font-width-property) transform to convert `font-width` properties to `font-stretch` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-face/font-width")}} descriptor for {{cssxref("@font-face")}}
- Legacy {{cssxref("font-stretch")}} alias property with better browser support
- {{cssxref("font-style")}} property
- {{cssxref("font-weight")}} property
- SVG {{SVGAttr("font-stretch")}} attribute
- [Learn: Fundamental text and font styling](/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS fonts](/en-US/docs/Web/CSS/Guides/Fonts) module
