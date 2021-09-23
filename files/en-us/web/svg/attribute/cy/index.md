---
title: cy
slug: Web/SVG/Attribute/cy
tags:
  - SVG
  - SVG Attribute
---
{{SVGRef}}

The **`cy`** attribute define the y-axis coordinate of a center point.

You can use this attribute with the following SVG elements:

*   {{SVGElement("circle")}}
*   {{SVGElement("ellipse")}}
*   {{SVGElement("radialGradient")}}

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 300" xmlns="http://www.w3.org/2000/svg">
  <radialGradient cy="25%" id="myGradient">
    <stop offset="0"    stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>

  <circle  cy="50"  cx="50" r="45"/>
  <ellipse cy="150" cx="50" rx="45" ry="25" />
  <rect x="5" y="205" width="90" height="90" fill="url(#myGradient)" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 300)}}

## circle

For {{SVGElement('circle')}}, `cy` defines the y-axis coordinate of the center of the shape.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/docs/Web/SVG/Content_type#Percentage"
            >&#x3C;percentage></a
          ></strong
        >
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

> **Note:** Starting with SVG2, `cy` is a *Geometry Property* meaning this attribute can also be used as a CSS property for circles.

## ellipse

For {{SVGElement('ellipse')}}, `cy` defines the y-axis coordinate of the center of the shape.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/docs/Web/SVG/Content_type#Percentage"
            >&#x3C;percentage></a
          ></strong
        >
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

> **Note:** Starting with SVG2, `cy` is a *Geometry Property* meaning this attribute can also be used as a CSS property for ellipses.

## radialGradient

For {{SVGElement('radialGradient')}}, `cy` defines the y-axis coordinate of the end circle for the radial gradient.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Length">&#x3C;length></a></strong
        >
      </td>
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
    <radialGradient cy="0" id="myGradient000">
      <stop offset="0%"   stop-color="gold" />
      <stop offset="50%"  stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>

    <radialGradient cy="50%" id="myGradient050">
      <stop offset="0%"   stop-color="gold" />
      <stop offset="50%"  stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>

    <radialGradient cy="100%" id="myGradient100">
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
      <td>{{SpecName("SVG2", "geometry.html#CY", "cy")}}</td>
      <td>{{Spec2("SVG2")}}</td>
      <td>Definition as a geometry property</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG2", "pservers.html#RadialGradientElementCYAttribute", "cy")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>Definition for SVG2 paint servers.</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "pservers.html#RadialGradientElementCYAttribute", "cy")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;radialGradient></code></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "shapes.html#EllipseElementCYAttribute", "cy")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;ellipse></code></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "shapes.html#CircleElementCYAttribute", "cy")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;circle></code></td>
    </tr>
  </tbody>
</table>
