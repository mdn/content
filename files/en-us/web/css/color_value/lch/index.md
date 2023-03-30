---
title: lch()
slug: Web/CSS/color_value/lch
page-type: css-function
browser-compat: css.types.color.lch
---

{{CSSRef}}

The **`lch()`** functional notation expresses a given color in the LCH color space. It has the same L axis as {{cssxref("color_value/lab","lab()")}}, but uses polar coordinates C (Chroma) and H (Hue).

## Syntax

```css
lch(29.2345% 44.2 27);
lch(52.2345% 72.2 56.2);
lch(52.2345% 72.2 56.2 / .5);
```

### Values

- Functional notation: `lch(L C H [/ A])`

  - `L` is a {{cssxref("&lt;number&gt;")}} between `0` and `100` or a {{cssxref("&lt;percentage&gt;")}} between `0%` and `100%` that specifies the CIE Lightness where the number `0` corresponds to `0%` (black) and the number `100` corresponds to `100%` (white).

  - `C` is a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} where `0%` is `0` and `100%` is the number `150`. It is a measure of the chroma (roughly representing the "amount of color"). Its minimum useful value is 0, while its maximum is theoretically unbounded (but in practice does not exceed `230`).

  - `H` is a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;angle&gt;")}} that specifies the hue angle along the positive "a" axis (toward purplish red), `90deg` points along the positive "b" axis (toward mustard yellow), `180deg` points along the negative "a" axis (toward greenish cyan), and `270deg` points along the negative "b" axis (toward sky blue).

  - `A` (alpha) can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

> **Note:** Usually when percentage values have a numeric equivalent in CSS, `100%` is equal to the number `1`.
> This case is notable where `100%` is equal to the number `100` for the `L` value and `150` for the `C` value.

### Formal syntax

{{csssyntax}}

## Examples

### Adjusting lightness, chroma, and hue with lch()

The following example shows the effect of varying the `L` (lightness), `C` (chroma), and `H` (hue) values of the `lch()` functional notation.

```html
<div data-color="blue"></div>
<div data-color="blue-light"></div>

<div data-color="red"></div>
<div data-color="red-chroma"></div>

<div data-color="green"></div>
<div data-color="green-hue"></div>
```

```css hidden
div {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 5px;
  display: inline-block;
  border: 1px solid black;
}
```

```css
[data-color="blue"] {
  background-color: lch(0% 100 240);
}
[data-color="blue-light"] {
  background-color: lch(100% 100 240);
}

[data-color="red"] {
  background-color: lch(50% 130 20);
}
[data-color="red-chroma"] {
  background-color: lch(100% 30 20);
}

[data-color="green"] {
  background-color: lch(50% 132 130);
}
[data-color="green-hue"] {
  background-color: lch(50% 132 180);
}
```

{{EmbedLiveSample('Adjusting_lightness,_chroma,_and_hue_with_lch')}}

### Adjusting opacity with lch()

The following example shows the effect of varying the `A` (alpha) value of the `lch()` functional notation.
The `red` and `red-alpha` elements overlap the `#background-div` element to demonstrate the effect of opacity.
Giving `A` a value of `0.4` makes the color 40% opaque.

```html
<div id="background-div">
  <div data-color="red"></div>
  <div data-color="red-alpha"></div>
</div>
```

```css hidden
div {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 5px;
  display: inline-block;
  border: 1px solid black;
}
#background-div {
  background-color: lch(100% 100 240);
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: lch(50% 130 20);
}
[data-color="red-alpha"] {
  background-color: lch(50% 130 20 / 0.4);
}
```

{{EmbedLiveSample('Adjusting_opacity_with_lch')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [`<color>` data type](/en-US/docs/Web/CSS/color_value) for a list of all color notations
- [LCH colors in CSS: what, why, and how?](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/)
- [Safari Technology Preview 122 release notes](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/): includes `lch()` and {{cssxref("color_value/lab",'lab()')}} colors.
