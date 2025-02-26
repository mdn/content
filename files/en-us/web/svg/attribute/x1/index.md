---
title: x1
slug: Web/SVG/Attribute/x1
page-type: svg-attribute
browser-compat:
  - svg.elements.line.x1
  - svg.elements.linearGradient.x1
---

{{SVGRef}}

The **`x1`** attribute is used to specify the first x-coordinate for drawing an SVG element that requires more than one coordinate. Elements that only need one coordinate use the {{SVGAttr("x")}} attribute instead.

## Elements

You can use this attribute with the SVG elements described in the sections below.

### `<line>`

For {{SVGElement('line')}}, `x1` defines the x coordinate of the starting point of the line.

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
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <line x1="1" x2="5" y1="1" y2="9" stroke="red" />
  <line x1="5" x2="5" y1="1" y2="9" stroke="green" />
  <line x1="9" x2="5" y1="1" y2="9" stroke="blue" />
</svg>
```

{{EmbedLiveSample('line', '100%', 200)}}

### `<linearGradient>`

For {{SVGElement('linearGradient')}}, `x1` defines the x coordinate of the starting point of the _gradient vector_ used to map the gradient stop values. The exact behavior of this attribute is influenced by the {{SVGAttr('gradientUnits')}} attributes

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
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <!--
  By default the gradient vector start at the left
  bounding limit of the shape it is applied to
  -->
  <linearGradient x1="0%" id="g0">
    <stop offset="0" stop-color="black" />
    <stop offset="100%" stop-color="red" />
  </linearGradient>

  <rect x="1" y="1" width="8" height="8" fill="url(#g0)" />

  <!--
  Here the gradient vector start at 80% of the left
  bounding limit of the shape it is applied to
  -->
  <linearGradient x1="80%" id="g1">
    <stop offset="0" stop-color="black" />
    <stop offset="100%" stop-color="red" />
  </linearGradient>

  <rect x="11" y="1" width="8" height="8" fill="url(#g1)" />
</svg>
```

{{EmbedLiveSample('linearGradient', '100%', 200)}}

## Examples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
  <line x1="2" x2="22" y1="5" y2="20" stroke="red" />
  <line x1="12" x2="22" y1="5" y2="20" stroke="green" />
  <line x1="22" x2="22" y1="5" y2="20" stroke="blue" />
</svg>
```

{{EmbedLiveSample("Examples", '100%', 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
