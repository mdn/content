---
title: fill-opacity
slug: Web/SVG/Attribute/fill-opacity
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.fill-opacity
---
{{SVGRef}}

The **`fill-opacity`** attribute is a presentation attribute defining the opacity of the paint server (*color*, *gradient*, *pattern*, etc) applied to a shape.

> **Note:** As a presentation attribute `fill-opacity` can be used as a CSS property.

You can use this attribute with the following SVG elements:

*   {{SVGElement('altGlyph')}}
*   {{SVGElement('circle')}}
*   {{SVGElement('ellipse')}}
*   {{SVGElement('path')}}
*   {{SVGElement('polygon')}}
*   {{SVGElement('polyline')}}
*   {{SVGElement('rect')}}
*   {{SVGElement('text')}}
*   {{SVGElement('textPath')}}
*   {{SVGElement('tref')}}
*   {{SVGElement('tspan')}}

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Default fill opacity: 1 -->
  <circle cx="50" cy="50" r="40" />

  <!-- Fill opacity as a number -->
  <circle cx="150" cy="50" r="40"
          fill-opacity="0.7" />

  <!-- Fill opacity as a percentage -->
  <circle cx="250" cy="50" r="40"
          fill-opacity="50%" />

  <!-- Fill opacity as a CSS property -->
  <circle cx="350" cy="50" r="40"
          style="fill-opacity: .25;" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 150)}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>[0-1]</code> |
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** SVG2 introduces percentage values for `fill-opacity`, however, it is not widely supported yet (*See [Browser compatibility](#browser_compatibility) below*) as a consequence, it is best practices to set opacity with a value in the range `[0-1]`.

## Browser compatibility

{{Compat}}

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
      <td>
        {{SpecName("SVG2", "painting.html#FillOpacityProperty", "fill-opacity")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>Definition for shapes and texts</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "painting.html#FillOpacityProperty", "fill-opacity")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for shapes and texts</td>
    </tr>
  </tbody>
</table>
