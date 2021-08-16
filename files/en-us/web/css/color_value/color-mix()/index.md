---
title: color-mix()
slug: Web/CSS/color_value/color-mix()
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Reference
  - Web
  - color-mix
browser-compat: css.types.color.color-mix
---
{{CSSRef}}

The **`color-mix()`** functional notation takes two {{cssxref("color_value","color")}} values and returns the result of mixing them in a given colorspace by a given amount.

## Syntax

```css
color-mix(in lch, peru 40%, lightgoldenrod);
color-mix(in srgb, #34c9eb 20%, white);
```

### Values

- Functional notation: `color-mix( in <colorspace> , [ <color> && <percentage>? ]#{2})`

  - : `<colorspace>` is one of `srgb`, `hsl`, `hwb`, `xyz`, `lab`, `lch`. If no colorspace is specified the default is `lch`.

    `[ <color>` is any valid {{cssxref("color_value","color")}}.

    `<percentage>` is the percentage of that color to mix.

## Examples

### HTML

```html
<ul>
  <li>10% #34c9eb</li>
  <li>40% #34c9eb</li>
  <li>70% #34c9eb</li>
</ul>
```

### CSS

```css hidden
ul {
    display: flex;
    list-style-type: none;
    font-size: 150%;
    gap: 10px;
    border: 2px solid #34c9eb;
    padding: 10px;
  }

  li {
    padding: 10px;
  }

```

```css
li:nth-child(1) {
  background-color: color-mix(in srgb, #34c9eb 10%, white);
}

li:nth-child(2) {
  background-color: color-mix(in srgb, #34c9eb 40%, white);
}

li:nth-child(3) {
  background-color: color-mix(in srgb, #34c9eb 70%, white);
}
```

#### Result

In a supporting browser the three items become more blue as a higher percentage of `#34c9eb` is mixed in.

{{EmbedLiveSample('Examples','100%', 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
