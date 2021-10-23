---
title: rx
slug: Web/SVG/Attribute/rx
tags:
  - SVG
  - SVG Attribute
---
{{SVGRef}}

The **`rx`** attribute defines a radius on the x-axis.

You can use this attribute with the following SVG elements:

*   {{SVGElement("ellipse")}}
*   {{SVGElement("rect")}}

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="50"  cy="50" rx="0"  ry="25" />
  <ellipse cx="150" cy="50" rx="25" ry="25" />
  <ellipse cx="250" cy="50" rx="50" ry="25" />

  <rect x="20"  y="120" width="60" height="60" rx="0"   ry="15"/>
  <rect x="120" y="120" width="60" height="60" rx="15"  ry="15"/>
  <rect x="220" y="120" width="60" height="60" rx="150" ry="15"/>
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## ellipse

For {{SVGElement('ellipse')}}, `rx` defines the x-radius of the shape. With a value lower or equal to zero the ellipse won't be drawn at all.

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
        | <code>auto</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** Starting with SVG2, `rx` is a *Geometry Property* meaning this attribute can also be used as a CSS property for ellipses.

## rect

For {{SVGElement('rect')}}, `rx` defines the x-axis radius of the ellipse used to round off the corners of the rectangle.

The way the value of the `rx` attribute is interpreted depend on both the {{SVGAttr("ry")}} attribute and the width of the rectangle:

*   If a properly specified value is provided for `rx` but not for {{SVGAttr("ry")}} (or the opposite), then the browser will consider the missing value equal to the defined one.
*   If neither `rx` nor {{SVGAttr("ry")}} has a properly specified value, then the browser will draw a rectangle with square corners.
*   If `rx` is greater than half of the width of the rectangle, then the browser will consider the value for `rx` as half of the width of the rectangle.

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
        | <code>auto</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** Starting with SVG2, `rx` is a *Geometry Property* meaning this attribute can also be used as a CSS property for rects.

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
      <td>{{SpecName("SVG2", "geometry.html#RX", "rx")}}</td>
      <td>{{Spec2("SVG2")}}</td>
      <td>Definition as a geometry property</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "shapes.html#EllipseElementRXAttribute", "rx")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;ellipse></code></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "shapes.html#RectElementRXAttribute", "rx")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;rect></code></td>
    </tr>
  </tbody>
</table>
