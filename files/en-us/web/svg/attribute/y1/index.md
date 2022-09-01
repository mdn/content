---
title: y1
slug: Web/SVG/Attribute/y1
tags:
  - SVG
  - SVG Attribute
spec-urls:
  - https://svgwg.org/svg2-draft/shapes.html#LineElementY1Attribute
  - https://svgwg.org/svg2-draft/pservers.html#LinearGradientElementY1Attribute
---
{{SVGRef}}

The **`y1`** attribute is used to specify the first y-coordinate for drawing an SVG element that requires more than one coordinate. Elements that only need one coordinate use the {{SVGAttr("y")}} attribute instead.

You can use this attribute with the following SVG elements:

- {{ SVGElement("line") }}
- {{ SVGElement("linearGradient") }}

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <line x1="1" x2="9" y1="1" y2="5" stroke="red" />
  <line x1="1" x2="9" y1="5" y2="5" stroke="green" />
  <line x1="1" x2="9" y1="9" y2="5" stroke="blue" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## line

For {{SVGElement('line')}}, `y1` defines the y coordinate of the starting point of the line.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
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

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <line x1="1" x2="9" y1="1" y2="5" stroke="red"   />
  <line x1="1" x2="9" y1="5" y2="5" stroke="green" />
  <line x1="1" x2="9" y1="9" y2="5" stroke="blue"  />
</svg>
```

{{EmbedLiveSample('line', '100%', 200)}}

## linearGradient

For {{SVGElement('linearGradient')}}, `y1` defines the y coordinate of the starting point of the _gradient vector_ used to map the gradient stop values. The exact behavior of this attribute is influenced by the {{SVGAttr('gradientUnits')}} attributes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <!--
  By default the gradient vector start at the top left
  corner of the bounding box of the shape it is applied to.
  -->
  <linearGradient y1="0%" id="g0">
    <stop offset="5%"  stop-color="black" />
    <stop offset="50%" stop-color="red"   />
    <stop offset="95%" stop-color="black" />
  </linearGradient>

  <rect x="1"  y="1" width="8" height="8" fill="url(#g0)" />

  <!--
  Here the gradient vector start at the bottom left
  corner of the bounding box of the shape it is applied to.
  -->
  <linearGradient y1="100%" id="g1">
    <stop offset="5%"  stop-color="black" />
    <stop offset="50%" stop-color="red"   />
    <stop offset="95%" stop-color="black" />
  </linearGradient>

  <rect x="11" y="1" width="8" height="8" fill="url(#g1)" />
</svg>
```

{{EmbedLiveSample('linearGradient', '100%', 200)}}

## Specifications

{{Specifications}}
