---
title: offset
slug: Web/SVG/Reference/Attribute/offset
page-type: svg-attribute
browser-compat: svg.elements.stop.offset
sidebar: svgref
---

The **`offset`** attribute defines where a gradient stop is placed along a gradient vector, or the offset value used in a component transfer function.

- On a {{SVGElement("stop")}} element, it indicates the position of a gradient color along a linear gradient vector, or a fractional vector of the distance between the edge of a smaller/innermost circular shape and the edge of a larger/outermost circular shape.
- On component transfer function elements ({{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}}, and {{SVGElement("feFuncA")}}), it defines a constant added to the result of the `gamma` transfer function, while having no effect for other `type` values.

## Example

### Gradient stop offset

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="linear-gradient">
      <stop offset="6%" stop-color="black" />
      <stop offset="70%" stop-color="grey" />
    </linearGradient>
    <radialGradient id="radial-gradient">
      <stop offset="0%" stop-color="gold" />
      <stop offset="95%" stop-color="grey" />
    </radialGradient>
  </defs>
  <circle cx="5" cy="5" r="4" fill="url('#linear-gradient')" />
  <circle cx="15" cy="5" r="4" fill="url('#radial-gradient')" />
</svg>
```

{{EmbedLiveSample("gradient_stop_offset", 150, '100%')}}

### Component transfer offset

```html
<svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="gamma-filter">
      <feComponentTransfer>
        <feFuncR type="gamma" amplitude="2" exponent="3" offset="0.2" />
        <feFuncG type="gamma" amplitude="2" exponent="3" offset="0.3" />
        <feFuncB type="gamma" amplitude="2" exponent="3" offset="0.5" />
      </feComponentTransfer>
    </filter>
  </defs>
  <text x="60" y="25" filter="url(#gamma-filter)">GammaFunc</text>
</svg>
```

{{EmbedLiveSample("component_transfer_offset", 150, '100%')}}

## Usage notes

### Stop

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>number</code> | <code>percentage</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

### Component transfer functions

> [!NOTE]
> Only applies when `type` is set to `gamma`, ignored for `identity`, `table`, `discrete`, and `linear`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>number</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("stop")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feFuncR")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncA")}}
