---
title: "`alpha()` CSS function"
short-title: alpha()
slug: Web/CSS/Reference/Values/color_value/alpha
page-type: css-function
browser-compat: css.types.color.alpha
sidebar: cssref
---

The **`alpha()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) takes an origin {{cssxref("color_value","color")}} and returns that same color with a modified alpha (transparency) channel. The color components of the origin color are preserved unchanged. The result is in the same color space as the origin color.

## Syntax

```css
/* Replace alpha with a fixed value */
alpha(from red / 50%)
alpha(from var(--mycolor) / 80%)

/* Derive alpha relative to the origin color's alpha */
alpha(from var(--mycolor) / calc(alpha * 0.5))
```

### Parameters

- `from <color>`
  - : The [relative color](/en-US/docs/Web/CSS/CSS_colors/Relative_colors) syntax keyword `from` followed by any valid {{cssxref("&lt;color&gt;")}} value, defining the **origin color**. The color components of the origin color are carried through to the result unchanged; only the alpha channel is affected.

- `/ <alpha-value>` {{optional_inline}}
  - : An {{cssxref("&lt;alpha-value&gt;")}} specifying the alpha of the output color. This can be a `<number>` between `0` and `1`, a `<percentage>` between `0%` and `100%`, or a {{cssxref("calc()")}} expression. Within this value, the keyword **`alpha`** may be used to refer to the alpha channel of the origin color as a `<number>` (where `1.0` is equivalent to `100%`). If this argument is omitted, the alpha of the origin color is used unchanged.

### Return value

A color value in the same color space as the origin color, with identical color components and a modified alpha channel value as specified.

## Description

The `alpha()` function is a [relative color](/en-US/docs/Web/CSS/CSS_colors/Relative_colors) function that lets you adjust the transparency of any color without rewriting its other components. This is particularly useful when you need a semi-transparent variant of a design token or custom property color, and you want to derive it automatically from the original rather than maintaining a separate value.

Within the alpha value argument, the component keyword `alpha` resolves to the alpha channel of the origin color as a {{cssxref("&lt;number&gt;")}} in the range `[0, 1]`. This allows you to express the output alpha relative to the input, for example halving it with `calc(alpha * 0.5)`, or clamping it with `clamp(0.2, alpha, 0.8)`.

Unlike general [relative color syntax](/en-US/docs/Web/CSS/CSS_colors/Relative_colors) (e.g., `oklch(from ...)`), the `alpha()` function does not expose the individual color channel keywords of the origin color space. It is solely concerned with the alpha channel, keeping the rest of the color intact.

The return value is always in the same color space as the origin color. For example, if the origin color is an [`oklch()`](/en-US/docs/Web/CSS/Reference/Values/color_value/oklch) color, the result will also be resolved in OKLCh, with the same lightness, chroma, and hue.

## Examples

### Replacing the alpha of a color

In this example, we specify two colors. The second color is defined by passing the first color into the `alpha()` function, setting its alpha channel to a fixed value of `80%` in the process. The two colors are set as the {{cssxref("background-color")}} of two {{htmlelement("div")}} elements to demonstrate the difference.

```html live-sample___replace-alpha
<div class="box1">Original</div>
<div class="box2">Fixed 80% alpha</div>
```

```css live-sample___replace-alpha
:root {
  --mycolor: oklch(60% 0.25 315 / 0.3);

  /* Same color, but with alpha set to 80% */
  --mycolor-80: alpha(from var(--mycolor) / 80%);
}

.box1 {
  background-color: var(--mycolor);
}

.box2 {
  background-color: var(--mycolor-80);
}
```

```css hidden live-sample___replace-alpha live-sample___derive-alpha
body {
  font-family: sans-serif;
  display: flex;
  gap: 10%;
  justify-content: center;
}

div {
  width: 40%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

{{EmbedLiveSample("replace-alpha", "100%", 100)}}

### Deriving a semi-transparent variant

This example is very similar to the previous one, except that this time the alpha of the second color is computed as half of the first color's alpha, using the `alpha` component keyword inside a `calc()` expression.

```html live-sample___derive-alpha
<div class="box1">Original</div>
<div class="box2">Derived 50% alpha</div>
```

```css live-sample___derive-alpha
:root {
  --mycolor: oklch(60% 0.25 315 / 0.8);

  /* Half the opacity of --mycolor */
  --mycolor-half-opacity: alpha(from var(--mycolor) / calc(alpha * 0.5));
}

.box1 {
  background-color: var(--mycolor);
}

.box2 {
  background-color: var(--mycolor-half-opacity);
}
```

{{EmbedLiveSample("derive-alpha", "100%", 100)}}

### Fading a color on hover

In this example, an element's background fades to `40%` opacity on {{cssxref(":hover")}}, while the color itself stays the same.

```html live-sample___fade-on-hover
<button class="card">Hover over me</button>
```

```css live-sample___fade-on-hover
:root {
  --brand: oklch(55% 0.22 270);
}

.card {
  background-color: var(--brand);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.card:hover {
  background-color: alpha(from var(--brand) / 40%);
}
```

```css hidden live-sample___fade-on-hover
body {
  padding: 2rem;
}
```

```css hidden live-sample___replace-alpha live-sample___derive-alpha live-sample___fade-on-hover
@supports not (color: alpha(from red / 50%)) {
  body::before {
    font-family: sans-serif;
    content: "Your browser does not support the CSS alpha() function.";
    background-color: wheat;
    padding: 1rem 0;
    text-align: center;
    padding: 1rem 0;

    z-index: 1;
    position: fixed;
    inset: 30% 0 auto;
  }
}
```

{{EmbedLiveSample("fade-on-hover", "100%", 120)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("&lt;color&gt;")}} data type
- {{cssxref("&lt;alpha-value&gt;")}} data type
- [Relative color syntax](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS colors](/en-US/docs/Web/CSS/Guides/Colors) module
- [CSS custom properties](/en-US/docs/Web/CSS/Reference/Properties/--*) and {{cssxref("var")}}
