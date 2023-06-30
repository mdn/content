---
title: hsl()
slug: Web/CSS/color_value/hsl
page-type: css-function
browser-compat: css.types.color.hsl
---

{{CSSRef}}

The **`hsl()`** functional notation expresses an {{glossary("RGB", "sRGB")}} color according to its _hue_, _saturation_, and _lightness_ components. An optional _alpha_ component represents the color's transparency.

> **Note:** The legacy `hsla()` syntax is an alias for `hsl()`, accepting the same parameters and behaving in the same way.

{{EmbedInteractiveExample("pages/css/function-hsl.html")}}

Defining _complementary colors_ with `hsl()` can be done with a single formula, as they are positioned on the same diameter of the {{glossary("color wheel")}}. If `θ` is the hue angle of a color, its complementary one will have `180deg - θ` as its hue angle.

## Syntax

```css
hsl(120deg 75% 25%)
hsl(120deg 75% 25% / 0.6)
```

The function also accepts a legacy syntax in which all values are separated with commas.

### Values

Functional notation: `hsl(H S L[ / A])`

- `H`
  - : A {{CSSXref("&lt;number&gt;")}} or an {{CSSXref("&lt;angle&gt;")}} representing the hue angle. More details on this type can be found on the {{CSSXref("&lt;hue&gt;")}} reference.
- `S`
  - : A {{CSSXref("&lt;percentage&gt;")}} representing saturation, where `100%` is completely saturated, while `0%` is completely unsaturated (gray).
- `L`
  - : A {{CSSXref("&lt;percentage&gt;")}} representing lightness, where `100%` is white, `0%` is black, and `50%` is "normal".
- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

### Formal syntax

{{csssyntax}}

## Examples

### Using hsl() with conic-gradient()

The `hsl()` function works well with [`conic-gradient()`](/en-US/docs/Web/CSS/gradient/conic-gradient) as both deal with angles.

```html hidden
<div></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 100px;
  background: conic-gradient(
    hsl(360 100% 50%),
    hsl(315 100% 50%),
    hsl(270 100% 50%),
    hsl(225 100% 50%),
    hsl(180 100% 50%),
    hsl(135 100% 50%),
    hsl(90 100% 50%),
    hsl(45 100% 50%),
    hsl(0 100% 50%)
  );
  clip-path: circle(closest-side);
}
```

#### Result

{{EmbedLiveSample("using_hsl_with_conic-gradient", "100%", 140)}}

### Legacy syntax: comma-separated values

For legacy reasons, the `hsl()` function accepts a form in which all values are separated using commas.

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
  background-color: hsl(0 100% 50% / 50%);
}

div.comma-separated {
  background-color: hsl(0, 100%, 50%, 50%);
}
```

#### Result

{{EmbedLiveSample("legacy_syntax_comma-separated_values", "100%", 150)}}

### Legacy syntax: hsla()

The legacy `hsla()` syntax is an alias for `hsl()`.

#### HTML

```html
<div class="hsl"></div>
<div class="hsla"></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 50px;
  margin: 1rem;
}

div.hsl {
  background-color: hsl(0 100% 50% / 50%);
}

div.hsla {
  background-color: hsla(0, 100%, 50%, 50%);
}
```

#### Result

{{EmbedLiveSample("legacy_syntax_hsla", "100%", 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXref("&lt;color&gt;")}}: the data type that represents any color
- [HSL Color Picker](https://hslpicker.com/)
