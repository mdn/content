---
title: oklab()
slug: Web/CSS/color_value/oklab
page-type: css-function
status:
  - experimental
browser-compat: css.types.color.oklab
---

{{CSSRef}}{{SeeCompatTable}}

The **`oklab()`** functional notation expresses a given color in the Oklab color space, which attempts to mimic how color is perceived by the human eye. The `oklab()` works with a Cartesian coordinate system on the OKlab color space, the a- and b-axes. If you want a polar color system, chroma and hue, use {{cssxref("color_value/oklch", "oklch()")}}.

Oklab is a perceptual color space and is useful to:

- Transform an image to grayscale, without changing its lightness.
- Modify the saturation of colors, while keeping user perception of hue and lightness
- Create smooth and uniform gradients of colors (when interpolated manually, for example, in a {{HTMLElement("canvas")}} element).

The function `oklab()` can represent any color from the Oklab color space that is wider than RGB and include wide gamut and P3 colors.

## Syntax

```css
/* oklab(lightness a-axis b-axis) */
oklab(40.1% 0.1143 0.045);
oklab(59.69% 0.1007 0.1191);

/* oklab(lightness a-axis b-axis / Alpha) */
oklab(59.69% 0.1007 0.1191 / 0.5);
```

> **Note:** The oklab() function does **not** support commas to separate its values as some other color functions do, and the optional alpha value needs to be preceded with a forward slash (`/`) when specified.

### Values

- Functional notation: `oklab(L a b [/ A])`
  - `L` is a {{cssxref("&lt;number&gt;")}} between `0` and `100` or a {{cssxref("&lt;percentage&gt;")}} between `0%` and `100%` that specifies perceived lightness where the number `0` corresponds to `0%` (black) and the number `100` corresponds to `100%` (white).
  - `a` is a {{cssxref("&lt;number&gt;")}} between `-0.4` and `0.4` or a {{cssxref("&lt;percentage&gt;")}} between `-100%` and `100%`, specifying the distance along the `a` axis in the Oklab colorspace, that is how green/red the color is.
  - `b` is a {{cssxref("&lt;number&gt;")}} between `-0.4` and `0.4` or a {{cssxref("&lt;percentage&gt;")}} between `-100%` and `100%`, specifying the distance along the `b` axis in the Oklab colorspace, that is how blue/yellow the color is.
  - `A` is a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity), representing the transparency (or alpha channel) of the color.

> **Note:** Usually when percentage values have a numeric equivalent in CSS, `100%` is equal to the number `1`.
> This case is notable in that `100%` is equal to the number `100` for the `L` value and `0.4` for the `a` and `b` values.

### Formal syntax

{{csssyntax}}

## Examples

### Adjusting the lightness and axes with oklab()

The following example shows the effect of varying the lightness, a-axis, and b-axis values of the `oklab()` function.

```html
<div data-color="blue"></div>
<div data-color="blue-light"></div>

<div data-color="red"></div>
<div data-color="red-a"></div>

<div data-color="green"></div>
<div data-color="green-b"></div>
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
  background-color: oklab(0.5 -0.3 -0.4);
}
[data-color="blue-light"] {
  background-color: oklab(0.7 -0.3 -0.4);
}

[data-color="red"] {
  background-color: oklab(100% 0.4 0.4);
}
[data-color="red-a"] {
  background-color: oklab(100% 0.2 0.4);
}

[data-color="green"] {
  background-color: oklab(100% -100% 0.4);
}
[data-color="green-b"] {
  background-color: oklab(100% -100% 0.6);
}
```

{{EmbedLiveSample("Adjusting_the_lightness_and_axes", "100%", 155)}}

### Adjusting opacity with oklab()

The following example shows the effect of varying the `A` (alpha) value of the `oklab()` function.
The `red` and `red-alpha` elements overlap the `#background-div` element to demonstrate the effect of opacity.
Giving the `red-alpha` element an opacity of `0.4` makes it appear more transparent than the `red` element.

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
  background-color: lightblue;
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: oklab(50% 130 20);
}
[data-color="red-alpha"] {
  background-color: oklab(50% 130 20 / 0.4);
}
```

{{EmbedLiveSample("Adjusting_opacity_with_oklab", "100%", 155)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [`<color>` data type](/en-US/docs/Web/CSS/color_value) for a list of all color notations
- {{cssxref("color_value/oklch",'oklch()')}} use the same color space as `oklab()` but a polar coordinate system.
- [A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/)
