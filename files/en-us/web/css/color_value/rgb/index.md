---
title: rgb()
slug: Web/CSS/color_value/rgb
page-type: css-function
browser-compat: css.types.color.rgb
---

{{CSSRef}}

The **`rgb()`** functional notation expresses a color according to its red, green, and blue components. An optional alpha component represents the color's transparency.

> **Note:** The legacy `rgba()` syntax is an alias for `rgb()`, accepting the same parameters and behaving in the same way.

{{EmbedInteractiveExample("pages/css/function-rgb.html")}}

## Syntax

```css
/* Syntax with space-separated values */
rgb(255 255 255)
rgb(255 255 255 / .5)

/* Syntax with comma-separated values */
rgb(255, 255, 255)
rgb(255, 255, 255, .5)

/* Legacy rgba() syntax */
rgba(255 255 255)
rgba(255 255 255 / .5)

rgba(255, 255, 255)
rgba(255, 255, 255, .5)
```

The `rgb()` function accepts three space-separated values, representing respectively values for `red`, `green`, and `blue`. Optionally it may also be given a slash `/` followed by a fourth value, representing `alpha`.

The function also accepts a legacy syntax in which all values are separated with commas.

### Values

- `red`, `green`, `blue`

  - : These values represent color channels and may each be a {{cssxref("&lt;number&gt;")}}
    clamped between 0 and 255, or a {{cssxref("&lt;percentage&gt;")}}, or the keyword `none`. You can't mix percentages and numbers, so:

    - if any of these values is a number, then they must all be numbers or `none`
    - if any of these values is a percentage, then they must all percentages or `none`.

- `alpha`
  - : A {{cssxref("&lt;number&gt;")}} clamped between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}. This value represents opacity, where the number `1` corresponds to `100%` (full opacity). It defaults to 100%.

### Formal syntax

{{csssyntax}}

## Examples

### Legacy syntax: comma-separated values

For legacy reasons, the `rgb()` function accepts a form in which all values are separated using commas.

#### HTML

```html
<div class="space-separated"></div>
<div class="comma-separated"></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 50px;
  margin: 1rem;
}

div.space-separated {
  background-color: rgb(255 0 0 / 0.5);
}

div.comma-separated {
  background-color: rgb(255, 0, 0, 0.5);
}
```

#### Result

{{EmbedLiveSample('Legacy syntax: comma-separated values', '100%', '150px')}}

### Legacy syntax: rgba()

The legacy `rgba()` syntax is an alias for `rgb()`.

#### HTML

```html
<div class="rgb"></div>
<div class="rgba"></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 50px;
  margin: 1rem;
}

div.rgb {
  background-color: rgb(255 0 0 / 0.5);
}

div.rgba {
  background-color: rgba(255 0 0 / 0.5);
}
```

#### Result

{{EmbedLiveSample('Legacy syntax: rgba()', '100%', '150px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
