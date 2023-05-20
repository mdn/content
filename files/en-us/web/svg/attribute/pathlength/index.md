---
title: pathLength
slug: Web/SVG/Attribute/pathLength
page-type: svg-attribute
spec-urls: https://svgwg.org/svg2-draft/paths.html#PathLengthAttribute
---

{{SVGRef}}

The **`pathLength`** attribute lets authors specify a total length for the path, in user units. This value is then used to calibrate the browser's distance calculations with those of the author, by scaling all distance computations using the ratio `pathLength` / (_computed value of path length_).

This can affect the actual rendered lengths of paths; including text paths, animation paths, and various stroke operations. Basically, all computations that require the length of the path. {{SVGAttr('stroke-dasharray')}}, for example, will assume the start of the path being 0 and the end point the value defined in the `pathLength` attribute.

You can use this attribute with the following SVG elements:

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('line')}}
- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
  <style>
    path {
      fill: none;
      stroke: black;
      stroke-width: 2;
      stroke-dasharray: 10;
    }
  </style>

  <!-- No pathLength, the real length of the path is used. In that case, 100 user units -->
  <path d="M 0,10 h100" />

  <!-- compute everything like if the path length was 90 user units long -->
  <path d="M 0,20 h100" pathLength="90" />

  <!-- compute everything like if the path length was 50 user units long -->
  <path d="M 0,30 h100" pathLength="50" />

  <!-- compute everything like if the path length was 30 user units long -->
  <path d="M 0,40 h100" pathLength="30" />

  <!-- compute everything like if the path length was 10 user units long -->
  <path d="M 0,50 h100" pathLength="10" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## circle

For {{SVGElement('circle')}}, `pathLength` lets authors specify a total length for the circle, in user units.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## ellipse

For {{SVGElement('ellipse')}}, `pathLength` lets authors specify a total length for the ellipse, in user units.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## line

For {{SVGElement('line')}}, `pathLength` lets authors specify a total length for the line, in user units.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## path

For {{SVGElement('path')}}, `pathLength` lets authors specify a total length for the path, in user units.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## polygon

For {{SVGElement('polygon')}}, `pathLength` lets authors specify a total length for the shape, in user units.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## polyline

For {{SVGElement('polyline')}}, `pathLength` lets authors specify a total length for the shape, in user units.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## rect

For {{SVGElement('rect')}}, `pathLength` lets authors specify a total length for the rectangle, in user units.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}
