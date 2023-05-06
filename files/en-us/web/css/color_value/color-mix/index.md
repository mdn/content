---
title: color-mix()
slug: Web/CSS/color_value/color-mix
page-type: css-function
browser-compat: css.types.color.color-mix
---

{{CSSRef}}

The **`color-mix()`** functional notation takes two {{cssxref("color_value","&lt;color>")}} values and returns the result of mixing them in a given colorspace by a given amount.

## Syntax

```css
color-mix(in lch, plum, pink);
color-mix(in lch, plum 40%, pink);
color-mix(in srgb, #34c9eb 20%, white);
color-mix(in hsl longer hue, hsl(120 100% 50%) 20%, white);
```

### Values

- Functional notation: <code>color-mix( &lt;color-interpolation-method> , [ [`<color>`](/en-US/docs/Web/CSS/color_value) && [`<percentage [0,100]>`](/en-US/docs/Web/CSS/percentage)? ]#{2} )</code>

  - `<color-interpolation-method>` is the keyword `in` (for interpolation) followed by either:

    - `<rectangular-color-space>` or
    - `<polar-color-space>` and an optional `<hue-interpolation-method>`.

  - `<rectangular-color-space>` is one of `srgb`, `srgb-linear`, `lab`, `oklab`, `xyz`, `xyz-d50`, `xyz-d65`.

  - `<polar-color-space>` is one of `hsl`, `hwb`, `lch`, `oklch`.

  - `<hue-interpolation-method>` is one of `shorter`, `longer`, `increasing`, `decreasing` followed by the keyword `hue`.

  - `<color>` is any valid {{cssxref("color_value","color")}}

  - `<percentage>` is a number between 0 and 100 with an optional `%` sign.
    If no percentage is specified, the default is 50%.

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

{{EmbedLiveSample('Mixing two colors','100%', 150)}}

### Using hue interpolation methods

Hue interpolation methods can be used to control how the {{cssxref("&lt;hue&gt;")}} is interpolated between two colors.
For `shorter` the result will be the shortest distance between the two angles (the default) and conversely, `longer` uses the larger value between the two angles in a circle.

For `increasing`, the result will be the angle between 0 and 360 degrees and for `decreasing` the result will be the angle between -360 and 0 degrees.

#### HTML

```html
<div id="shorter">shorter</div>
<div id="longer">longer</div>
<div id="increasing">increasing</div>
<div id="decreasing">decreasing</div>
```

#### CSS

```css hidden
div {
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 1px solid;
  display: inline-block;
}
```

```css
/* 20 degrees */
#shorter {
  background-color: color-mix(
    in hsl shorter hue,
    hsl(10 100% 50%),
    hsl(350 100% 50%)
  );
}

/* 340 degrees */
#longer {
  background-color: color-mix(
    in hsl longer hue,
    hsl(10 100% 50%),
    hsl(350 100% 50%)
  );
}

/* The resulting angle is between 0 and 360 degrees */
#increasing {
  background-color: color-mix(
    in hsl increasing hue,
    hsl(10 100% 50%),
    hsl(350 100% 50%)
  );
}

/* The resulting angle is between -360 and 0 degrees */
#decreasing {
  background-color: color-mix(
    in hsl decreasing hue,
    hsl(10 100% 50%),
    hsl(350 100% 50%)
  );
}
```

#### Result

{{EmbedLiveSample('Using hue interpolation methods','100%', 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("color_value")}}
- {{cssxref("&lt;hue&gt;")}}
