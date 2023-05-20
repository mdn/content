---
title: oklab()
slug: Web/CSS/color_value/oklab
page-type: css-function
browser-compat: css.types.color.oklab
---

{{CSSRef}}

The **`oklab()`** functional notation expresses a given color in the Oklab color space, which attempts to mimic how color is perceived by the human eye. The `oklab()` works with a Cartesian coordinate system on the Oklab color space, the a- and b-axes. If you want a polar color system, chroma and hue, use {{cssxref("color_value/oklch", "oklch()")}}.

Oklab is a perceptual color space and is useful to:

- Transform an image to grayscale, without changing its lightness.
- Modify the saturation of colors, while keeping user perception of hue and lightness
- Create smooth and uniform gradients of colors (when interpolated manually, for example, in a {{HTMLElement("canvas")}} element).

The function `oklab()` can represent any color from the Oklab color space that is wider than RGB and include wide gamut and P3 colors.

## Syntax

```css
oklab(40.1% 0.1143 0.045);
oklab(59.69% 0.1007 0.1191);
oklab(59.69% 0.1007 0.1191 / 0.5);
```

### Values

Functional notation: `oklab(L a b[ / A])`

- `L`

  - : A {{CSSXref("&lt;number&gt;")}} between `0` and `1` or a {{CSSXref("&lt;percentage&gt;")}} between `0%` and `100%`, where the number `0` corresponds to `0%` (black) and the number `1` corresponds to `100%` (white). `L` specifies the perceived lightness.

- `a`

  - : A {{CSSXref("&lt;number&gt;")}} between `-0.4` and `0.4` or a {{CSSXref("&lt;percentage&gt;")}} between `-100%` and `100%`. It specifies the distance along the `a` axis in the Oklab colorspace, that is, how green or red the color is.

- `b`

  - : A {{CSSXref("&lt;number&gt;")}} between `-0.4` and `0.4` or a {{CSSXref("&lt;percentage&gt;")}} between `-100%` and `100%`. It specifies the distance along the `b` axis in the Oklab colorspace, that is, how blue or yellow the color is.

- `A` {{optional_inline}}

  - : An {{CSSXref("&lt;alpha-value&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

### Formal syntax

{{csssyntax}}

## Examples

### Adjusting the lightness and axes with oklab()

The following example shows the effect of varying the lightness, a-axis, and b-axis values of the `oklab()` function.

#### HTML

```html
<div data-color="blue"></div>
<div data-color="blue-light"></div>

<div data-color="red"></div>
<div data-color="red-a"></div>

<div data-color="green"></div>
<div data-color="green-b"></div>
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

#### Result

{{EmbedLiveSample("Adjusting_the_lightness_and_axes", "100%", 155)}}

### Adjusting opacity with oklab()

The following example shows the effect of varying the `A` (alpha) value of the `oklab()` function.
The `red` and `red-alpha` elements overlap the `#background-div` element to demonstrate the effect of opacity.
Giving the `red-alpha` element an opacity of `0.4` makes it appear more transparent than the `red` element.

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

#### Result

{{EmbedLiveSample("Adjusting_opacity_with_oklab", "100%", 155)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [`<color>` data type](/en-US/docs/Web/CSS/color_value) for a list of all color notations
- {{cssxref("color_value/oklch",'oklch()')}}: Another functional notation using the same color space as `oklab()` but in a polar coordinate system
- [A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/)
