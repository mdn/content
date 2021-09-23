---
title: cx
slug: Web/SVG/Attribute/cx
tags:
  - SVG
  - SVG Attribute
---
{{SVGRef}}

The **`cx`** attribute define the x-axis coordinate of a center point.

You can use this attribute with the following SVG elements:

*   {{SVGElement("circle")}}
*   {{SVGElement("ellipse")}}
*   {{SVGElement("radialGradient")}}

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <radialGradient cx="25%" id="myGradient">
    <stop offset="0"    stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>

  <circle cx="50" cy="50" r="45"/>
  <ellipse cx="150" cy="50" rx="45" ry="25" />
  <rect x="205" y="5" width="90" height="90" fill="url(#myGradient)" />
</svg>
```

{{EmbedLiveSample("Example", 100, 100)}}

## circle

For {{SVGElement('circle')}}, `cx` defines the x-axis coordinate of the center of the shape.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("length-percentage")}}</td>
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

> **Note:** Starting with SVG2 `cx`, is a *Geometry Property*, meaning this attribute can also be used as CSS property for circles.

## ellipse

For {{SVGElement('ellipse')}}, `cx` defines the x-axis coordinate of the center of the shape.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("length-percentage")}}</td>
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

> **Note:** Starting with SVG2 `cx`, is a *Geometry Property*, meaning this attribute can also be used as CSS property for ellipses.

## radialGradient

For {{SVGElement('radialGradient')}}, `cx` defines the x-axis coordinate of the end circle for the radial gradient.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("length")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>50%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

#### Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 34 10" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient cx="0" id="myGradient000">
      <stop offset="0%"   stop-color="gold" />
      <stop offset="50%"  stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>

    <radialGradient cx="50%" id="myGradient050">
      <stop offset="0%"   stop-color="gold" />
      <stop offset="50%"  stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>

    <radialGradient cx="100%" id="myGradient100">
      <stop offset="0%"   stop-color="gold" />
      <stop offset="50%"  stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>
  </defs>

  <rect x="1"  y="1" width="8" height="8" fill="url(#myGradient000)" stroke="black" />
  <rect x="13" y="1" width="8" height="8" fill="url(#myGradient050)" stroke="black" />
  <rect x="25" y="1" width="8" height="8" fill="url(#myGradient100)" stroke="black" />
</svg>
```

{{EmbedLiveSample('radialGradient', 150, '100%')}}

## Specifications

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName("SVG2", "geometry.html#CX", "cx")}}</td>
      <td>{{Spec2("SVG2")}}</td>
      <td>Definition as a geometry property</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG2", "pservers.html#RadialGradientElementCXAttribute", "cx")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>Definition for SVG2 paint servers.</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "pservers.html#RadialGradientElementCXAttribute", "cx")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;radialGradient></code></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "shapes.html#EllipseElementCXAttribute", "cx")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;ellipse></code></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "shapes.html#CircleElementCXAttribute", "cx")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;circle></code></td>
    </tr>
  </tbody>
</table>

## See also

*   [cy](/en-US/docs/Web/SVG/Attribute/cy)
*   [r](/en-US/docs/Web/SVG/Attribute/r)
