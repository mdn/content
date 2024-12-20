---
title: spreadMethod
slug: Web/SVG/Attribute/spreadMethod
page-type: svg-attribute
browser-compat:
  - svg.elements.linearGradient.spreadMethod
  - svg.elements.radialGradient.spreadMethod
---

{{SVGRef}}

The **`spreadMethod`** attribute determines how a shape is filled beyond the defined edges of a gradient.

You can use this attribute with the following SVG elements:

- {{SVGElement("linearGradient")}}
- {{SVGElement("radialGradient")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>pad</code> | <code>reflect</code> | <code>repeat</code></td>
    </tr>
    <tr>
      <th scope="row">Initial value</th>
      <td><code>pad</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `pad`
  - : This value indicates that the final color of the gradient fills the shape beyond the gradient's edges.
- `reflect`
  - : This value indicates that the gradient repeats in reverse beyond its edges.
- `repeat`
  - : This value specifies that the gradient repeats in the original order beyond its edges.

### Defining a gradient's edges

By default, a gradient reaches to the edges of the shape being filled. To see the effects of this attribute, you will need to set the size of the gradient smaller than the shape.

In the case of a linear gradient, the edges may be defined as a rectangle by the `x1`, `x2`, `y1` and `y2` attributes. In the case of a radial gradient, the edges may be defined as outer and inner circles by the `cx`, `cy` and `r` (outer) and `fx`, `fy` and `fr` (inner) attributes.

## Examples of spreadMethod with linear gradients

### SVG

```html
<svg width="220" height="150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="PadGradient" x1="33%" x2="67%">
      <stop offset="0%" stop-color="fuchsia" />
      <stop offset="100%" stop-color="orange" />
    </linearGradient>
    <linearGradient
      id="ReflectGradient"
      spreadMethod="reflect"
      x1="33%"
      x2="67%">
      <stop offset="0%" stop-color="fuchsia" />
      <stop offset="100%" stop-color="orange" />
    </linearGradient>
    <linearGradient id="RepeatGradient" spreadMethod="repeat" x1="33%" x2="67%">
      <stop offset="0%" stop-color="fuchsia" />
      <stop offset="100%" stop-color="orange" />
    </linearGradient>
  </defs>

  <rect fill="url(#PadGradient)" x="10" y="0" width="200" height="40" />
  <rect fill="url(#ReflectGradient)" x="10" y="50" width="200" height="40" />
  <rect fill="url(#RepeatGradient)" x="10" y="100" width="200" height="40" />
</svg>
```

### Result

{{EmbedLiveSample('Examples_of_spreadMethod_with_linear_gradients')}}

Notice that the middle third of each gradient is the same. The outer thirds show the difference between the three spread methods.

## Examples of spreadMethod with radial gradients

### SVG

```html
<svg width="340" height="120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient
      id="RadialPadGradient"
      cx="75%"
      cy="25%"
      r="33%"
      fx="64%"
      fy="18%"
      fr="17%">
      <stop offset="0%" stop-color="fuchsia" />
      <stop offset="100%" stop-color="orange" />
    </radialGradient>
    <radialGradient
      id="RadialReflectGradient"
      spreadMethod="reflect"
      cx="75%"
      cy="25%"
      r="33%"
      fx="64%"
      fy="18%"
      fr="17%">
      <stop offset="0%" stop-color="fuchsia" />
      <stop offset="100%" stop-color="orange" />
    </radialGradient>
    <radialGradient
      id="RadialRepeatGradient"
      spreadMethod="repeat"
      cx="75%"
      cy="25%"
      r="33%"
      fx="64%"
      fy="18%"
      fr="17%">
      <stop offset="0%" stop-color="fuchsia" />
      <stop offset="100%" stop-color="orange" />
    </radialGradient>
  </defs>

  <rect fill="url(#RadialPadGradient)" x="10" y="10" width="100" height="100" />
  <rect
    fill="url(#RadialReflectGradient)"
    x="120"
    y="10"
    width="100"
    height="100" />
  <rect
    fill="url(#RadialRepeatGradient)"
    x="230"
    y="10"
    width="100"
    height="100" />
</svg>
```

### Result

{{EmbedLiveSample('Examples_of_spreadMethod_with_radial_gradients')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
