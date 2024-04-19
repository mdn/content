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

You can use this attribute with the following SVG elements:

- {{SVGElement("marker")}}
- {{SVGElement("pattern")}}
- {{SVGElement("svg")}}
- {{SVGElement("symbol")}}
- {{SVGElement("view")}}

## Example

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

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!--
  with relative unit such as percentage, the visual size
  of the square looks unchanged regardless of the viewBox
  -->
  <rect x="0" y="0" width="100%" height="100%" />

  <!--
  with a large viewBox the circle looks small
  as it is using user units for the r attribute:
  4 resolved against 100 as set in the viewBox
  -->
  <circle cx="50%" cy="50%" r="4" fill="white" />
</svg>

<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <!--
  with relative unit such as percentage, the visual size
  of the square looks unchanged regardless of the viewBox
  -->
  <rect x="0" y="0" width="100%" height="100%" />

  <!--
  with a small viewBox the circle looks large
  as it is using user units for the r attribute:
  4 resolved against 10 as set in the viewBox
  -->
  <circle cx="50%" cy="50%" r="4" fill="white" />
</svg>

<svg viewBox="-5 -5 10 10" xmlns="http://www.w3.org/2000/svg">
  <!--
  The point of coordinate 0,0 is now in the center of the viewport,
  and 100% is still resolve to a width or height of 10 user units so
  the rectangle looks shifted to the bottom/right corner of the viewport
  -->
  <rect x="0" y="0" width="100%" height="100%" />

  <!--
  With the point of coordinate 0,0 in the center of the viewport the
  value 50% is resolve to 5 which means the center of the circle is
  in the bottom/right corner of the viewport.
  -->
  <circle cx="50%" cy="50%" r="4" fill="white" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

The exact effect of this attribute is influenced by the {{ SVGAttr("preserveAspectRatio") }} attribute.

> **Note:** Values for `width` or `height` lower or equal to `0` disable rendering of the element.

## marker

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

## pattern

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

## svg

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

## symbol

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

## view

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

## Specifications

{{Specifications}}
