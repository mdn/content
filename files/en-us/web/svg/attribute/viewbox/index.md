---
title: viewBox
slug: Web/SVG/Attribute/viewBox
page-type: svg-attribute
spec-urls: https://svgwg.org/svg2-draft/coords.html#ViewBoxAttribute
---

{{SVGRef}}

The **`viewBox`** attribute defines the position and dimension, in user space, of an SVG viewport.

The value of the `viewBox` attribute is a list of four numbers separated by whitespace and/or a comma: `min-x`, `min-y`, `width`, and `height`. `min-x` and `min-y` represent the smallest X and Y coordinates that the `viewBox` may have (the origin coordinates of the `viewBox`) and the `width` and `height` specify the `viewBox` size. The resulting `viewBox` is a rectangle in user space mapped to the bounds of the viewport of an SVG element (not the [browser viewport](/en-US/docs/Glossary/Viewport)).
When an SVG contains a `viewBox` attribute (often in combination with a [`preserveAspectRatio`](/en-US/docs/Web/SVG/Attribute/preserveAspectRatio) attribute), a transform stretches or resizes the SVG viewport to fit a particular container element.

## Elements

You can use this attribute with the SVG elements described in the sections below.

### `<marker>`

For {{SVGElement('marker')}}, `viewBox` defines the position and dimension for the content of the `<marker>` element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
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

### `<pattern>`

For {{SVGElement('pattern')}}, `viewBox` defines the position and dimension for the content of the pattern tile.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
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

### `<svg>`

For {{SVGElement('svg')}}, `viewBox` defines the position and dimension for the content of the `<svg>` element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
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

### `<symbol>`

For {{SVGElement('symbol')}}, `viewBox` defines the position and dimension for the content of the `<symbol>` element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
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

### `<view>`

For {{SVGElement('view')}}, `viewBox` defines the position and dimension for the content of the `<view>` element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
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

## Examples

```css hidden
html,
body,
svg {
  height: 100%;
  vertical-align: top;
}
svg:not(:root) {
  display: inline-block;
}
```

The code snippet below includes three {{SVGElement("svg")}}s with different `viewBox` attribute values and identical {{SVGElement("rect")}} and {{SVGElement("circle")}} descendants creating very different results. The size of `<rect>` is defined using relative units, so the visual size of the square produced looks unchanged regardless of the `viewBox` value. The radius length {{SVGAttr("r")}} attribute of the `<circle>` is the same in each case, but this user unit value is resolved against the size defined in the `viewBox`, producing different results in each case.

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100%" height="100%" />
  <circle cx="50%" cy="50%" r="4" fill="white" />
</svg>

<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100%" height="100%" />
  <circle cx="50%" cy="50%" r="4" fill="white" />
</svg>

<svg viewBox="-5 -5 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100%" height="100%" />
  <circle cx="50%" cy="50%" r="4" fill="white" />
</svg>
```

{{EmbedLiveSample("Examples", '100%', 200)}}

The user units of `r="4"` are resolved against the `viewBox` sizes, creating dramatically different circle sizes. The exact effect of the `viewBox` attribute is influenced by the {{ SVGAttr("preserveAspectRatio") }} attribute.

> [!NOTE]
> Values for `width` or `height` lower or equal to `0` disable rendering of the element.

## Specifications

{{Specifications}}
