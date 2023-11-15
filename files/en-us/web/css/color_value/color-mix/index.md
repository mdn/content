---
title: color-mix()
slug: Web/CSS/color_value/color-mix
page-type: css-function
browser-compat: css.types.color.color-mix
---

{{CSSRef}}

The **`color-mix()`** functional notation takes two {{cssxref("&lt;color&gt;")}} values and returns the result of mixing them in a given colorspace by a given amount.

## Syntax

```css
color-mix(in lch, plum, pink);
color-mix(in lch, plum 40%, pink);
color-mix(in srgb, #34c9eb 20%, white);
color-mix(in hsl longer hue, hsl(120 100% 50%) 20%, white);
```

### Values

Functional notation: `color-mix(method, color1[ p1], color2[ p2])`

- `method`

  - : A {{CSSXref("&lt;color-interpolation-method&gt;")}} specifying the interpolation color space.

- `color1`, `color2`

  - : {{CSSXref("&lt;color&gt;")}} values to mix.

- `p1`, `p2` {{optional_inline}}

  - : {{CSSXref("&lt;percentage&gt;")}} values between `0%` and `100%`, specifying the amount of each color to mix. They are normalized as follows:

    - If both `p1` and `p2` are omitted, then `p1 = p2 = 50%`.
    - If `p1` is omitted, then `p1 = 100% - p2`.
    - If `p2` is omitted, then `p2 = 100% - p1`.
    - If `p1 = p2 = 0%`, the function is invalid.
    - If `p1 + p2 ≠ 100%`, then `p1' = p1 / (p1 + p2)` and `p2' = p2 / (p1 + p2)`, where `p1'` and `p2'` are the normalization results.

### Formal syntax

{{csssyntax}}

## Examples

### Mixing two colors

In a supporting browser, the items have more blue, and therefore less white, as a higher percentage of `#34c9eb` is mixed in. When no value is given, the percentage defaults to 50%.

#### HTML

```html
<ul>
  <li>0%</li>
  <li>25%</li>
  <li>50%</li>
  <li>75%</li>
  <li>100%</li>
  <li></li>
</ul>
```

#### CSS

```css hidden
ul {
  display: flex;
  list-style-type: none;
  font-size: 150%;
  gap: 10px;
  border: 2px solid;
  padding: 10px;
}

li {
  padding: 10px;
  flex: 1;
  box-sizing: border-box;
  font-family: monospace;
  outline: 1px solid #34c9eb;
  text-align: center;
}
```

```css
li:nth-child(1) {
  background-color: color-mix(in srgb, #34c9eb 0%, white);
}

li:nth-child(2) {
  background-color: color-mix(in srgb, #34c9eb 25%, white);
}

li:nth-child(3) {
  background-color: color-mix(in srgb, #34c9eb 50%, white);
}

li:nth-child(4) {
  background-color: color-mix(in srgb, #34c9eb 75%, white);
}

li:nth-child(5) {
  background-color: color-mix(in srgb, #34c9eb 100%, white);
}

li:nth-child(6) {
  background-color: color-mix(in srgb, #34c9eb, white);
}
```

#### Result

{{EmbedLiveSample("mixing_two_colors", "100%", 150)}}

### Using hue interpolation in color-mix()

When using shorter hue interpolation, the resulting hue angle is halfway between the input angles when taking the shortest route around the color wheel.
The longer hue interpolation method results in a hue angle which is the midpoint when taking the longer route around the color wheel.
For more information, see {{cssxref("&lt;hue-interpolation-method&gt;")}}.

```html
<div class="color-one">color one</div>
<div class="color-two">color two</div>
<div class="shorter">mixed shorter</div>
<div class="longer">mixed longer</div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  border: 1px solid;
  font: bold 150% monospace;
  height: 100px;
  margin: 10px 5%;
  width: 30%;
}
```

```css
.color-one {
  background-color: hsl(10 100% 50%);
}
.color-two {
  background-color: hsl(60 100% 50%);
}
.shorter {
  background-color: color-mix(
    in hsl shorter hue,
    hsl(10 100% 50%),
    hsl(60 100% 50%)
  );
}
.longer {
  background-color: color-mix(
    in hsl longer hue,
    hsl(10 100% 50%),
    hsl(60 100% 50%)
  );
}
```

#### Result

{{EmbedLiveSample("using_hue_interpolation_in_color_mix", "100%", 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
