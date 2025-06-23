---
title: color-interpolation
slug: Web/CSS/color-interpolation
page-type: css-property
browser-compat: css.properties.color-interpolation
---

{{CSSRef}}

The `color-interpolation` CSS property is used in SVG to specify which color space to use for {{SVGElement("linearGradient")}} and {{SVGElement("radialGradient")}} SVG elements.

## Syntax

```css
/* Keyword values */
color-interpolation: auto;
color-interpolation: sRGB;
color-interpolation: linearRGB;
```

### Values

- `auto`
  - : Indicates that the user agent can choose either the `sRGB` or `linearRGB` spaces for color interpolation. This option indicates that the author doesn't require that color interpolation occur in a particular color space.
- `sRGB`
  - : Indicates that color interpolation should occur in the sRGB color space.
    Defaults to this initial value if no `color-interpolation` property is set.
- `linearRGB`
  - : Indicates that color interpolation should occur in the linearized RGB color space as described in [the sRGB specification](https://webstore.iec.ch/en/publication/6169).

## Formal definition

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>auto</code> | <code>sRGB</code> | <code>linearRGB</code></td>
    </tr>
    <tr>
      <th scope="row">Applies to</th>
      <td>{{SVGElement("linearGradient")}} and {{SVGElement("radialGradient")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>discrete</td>
    </tr>
  </tbody>
</table>

## Formal syntax

{{csssyntax}}

## Example

In the first SVG, the `color-interpolation` property is not included on the `<linearGradient>` element and color interpolation defaults to `sRGB`.
The second example shows color interpolation using the `linearRGB` value.

```html
<svg width="450" height="70">
  <title>Example of using the color-interpolation CSS Property</title>
  <defs>
    <linearGradient id="sRGB">
      <stop offset="0%" stop-color="white" />
      <stop offset="25%" stop-color="blue" />
      <stop offset="50%" stop-color="white" />
      <stop offset="75%" stop-color="red" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="400" height="40" fill="url(#sRGB)" stroke="black" />
  <text x="0" y="60" font-family="courier" font-size="16">
    no color-interpolation (CSS property)
  </text>
</svg>
```

```html
<svg width="450" height="70">
  <title>Example of using the color-interpolation CSS Property</title>
  <defs>
    <linearGradient id="linearRGB">
      <stop offset="0%" stop-color="white" />
      <stop offset="25%" stop-color="blue" />
      <stop offset="50%" stop-color="white" />
      <stop offset="75%" stop-color="red" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>
  <rect
    x="0"
    y="0"
    width="400"
    height="40"
    fill="url(#linearRGB)"
    stroke="black" />
  <text x="0" y="60" font-family="courier" font-size="16">
    color-interpolation: linearRGB; (CSS property)
  </text>
</svg>
```

```css
svg {
  display: block;
}

#linearRGB {
  color-interpolation: linearRGB;
}
```

{{EmbedLiveSample("Example", "100%", "140")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("linearGradient")}}
- {{SVGElement("radialGradient")}}
- SVG {{SVGAttr("color-interpolation")}} attribute
