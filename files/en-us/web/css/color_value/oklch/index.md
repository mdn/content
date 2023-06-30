---
title: oklch()
slug: Web/CSS/color_value/oklch
page-type: css-function
browser-compat: css.types.color.oklch
---

{{CSSRef}}

The **`oklch()`** functional notation expresses a given color in the Oklch color space. It has the same L axis as {{cssxref("color_value/oklab","oklab()")}}, but uses polar coordinates C (Chroma) and H (Hue).

## Syntax

```css
oklch(40.1% 0.123 21.57)
oklch(59.69% 0.156 49.77)
oklch(59.69% 0.156 49.77 / .5)
```

### Values

Functional notation: `oklch(L C H[ / A])`

- `L`
  - : A {{CSSXref("&lt;number&gt;")}} between `0` and `1` or a {{CSSXref("&lt;percentage&gt;")}} between `0%` and `100%`, where the number `0` corresponds to `0%` (black) and the number `1` corresponds to `100%` (white). `L` specifies the perceived lightness.
- `C`
  - : A {{CSSXref("&lt;number&gt;")}} or a {{CSSXref("&lt;percentage&gt;")}}, where `0%` is `0` and `100%` is the number `0.4`. It is a measure of the chroma (roughly representing the "amount of color"). Its minimum useful value is `0`, while the maximum is theoretically unbounded (but in practice does not exceed `0.5`).
- `H`
  - : A {{CSSXref("&lt;number&gt;")}} or an {{CSSXref("&lt;angle&gt;")}} representing the hue angle. More details on this type can be found on the {{CSSXref("&lt;hue&gt;")}} reference.
- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

### Formal syntax

{{csssyntax}}

## Examples

### Adjusting the lightness, chroma, and hue of a color

The following example shows the effect of varying the `L` (lightness), `C` (chroma), and `H` (hue) values of the `oklch()` color function.

#### HTML

```html
<div data-color="blue"></div>
<div data-color="blue-light"></div>

<div data-color="red"></div>
<div data-color="red-chroma"></div>

<div data-color="green"></div>
<div data-color="green-hue"></div>
```

#### CSS

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
  background-color: oklch(60% 0.4 240);
}
[data-color="blue-light"] {
  background-color: oklch(90% 0.4 240);
}

[data-color="red"] {
  background-color: oklch(100% 0.4 30);
}
[data-color="red-chroma"] {
  background-color: oklch(100% 0.3 40);
}

[data-color="green"] {
  background-color: oklch(60% 0.57 161);
}
[data-color="green-hue"] {
  background-color: oklch(60% 0.57 181);
}
```

#### Result

{{EmbedLiveSample("adjusting_the_lightness_chroma_and_hue_of_a_color")}}

### Adjusting the alpha value of a color

The following example shows the effect of varying the `A` (alpha) value of the `oklch()` color function.
The `red` and `red-alpha` elements overlap the `#background-div` element to demonstrate the effect of opacity.
Giving `A` a value of `0.4` makes the color 40% opaque.

#### HTML

```html
<div id="background-div">
  <div data-color="red"></div>
  <div data-color="red-alpha"></div>
</div>
```

#### CSS

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
  background-color: oklch(100% 0.57 217);
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: oklch(50% 130 20);
}
[data-color="red-alpha"] {
  background-color: oklch(50% 130 20 / 0.4);
}
```

#### Result

{{EmbedLiveSample("adjusting_the_alpha_value_of_a_color")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXref("&lt;color&gt;")}}: For a list of all color notations
- [A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/)
- [OKLCH in CSS](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl)
- [Safari Technology Preview 137 release notes](https://webkit.org/blog/12156/release-notes-for-safari-technology-preview-137/): includes `oklch()` and {{cssxref("color_value/oklab",'oklab()')}} colors
