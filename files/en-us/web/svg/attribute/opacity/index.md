---
title: opacity
slug: Web/SVG/Attribute/opacity
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.opacity
---
{{SVGRef}}

The **`opacity`** attribute specifies the transparency of an object or of a group of objects, that is, the degree to which the background behind the element is overlaid.

> **Note:** As a presentation attribute, `opacity` can be used as a CSS property. See the {{cssxref("opacity", "CSS opacity")}} property for more information.

You can use this attribute with the following SVG elements:

*   {{SVGElement("a")}}
*   {{SVGElement("audio")}}
*   {{SVGElement("canvas")}}
*   {{SVGElement("circle")}}
*   {{SVGElement("ellipse")}}
*   {{SVGElement("foreignObject")}}
*   {{SVGElement("g")}}
*   {{SVGElement("iframe")}}
*   {{SVGElement("image")}}
*   {{SVGElement("line")}}
*   {{SVGElement("marker")}}
*   {{SVGElement("path")}}
*   {{SVGElement("polygon")}}
*   {{SVGElement("polyline")}}
*   {{SVGElement("rect")}}
*   {{SVGElement("svg")}}
*   {{SVGElement("switch")}}
*   {{SVGElement("symbol")}}
*   {{SVGElement("text")}}
*   {{SVGElement("textPath")}}
*   {{SVGElement("tspan")}}
*   {{SVGElement("use")}}
*   {{SVGElement("unknown")}}
*   {{SVGElement("video")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="0" y2="100%">
      <stop offset="0%" style="stop-color:skyblue;" />
      <stop offset="100%" style="stop-color:seagreen;" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" />
  <circle cx="50" cy="50" r="40" fill="black" />
  <circle cx="150" cy="50" r="40" fill="black" opacity="0.3" />
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Default value</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Value</th>
      <td><code>&#x3C;alpha-value></code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

*   `<alpha-value>`
    *   : The uniform opacity setting to be applied across an entire object, as a {{cssxref("number")}}. Any values outside the range 0.0 (fully transparent) to 1.0 (fully opaque) will be clamped to this range.

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
        {{SpecName("CSS4 Colors", "#transparency", "opacity")}}
      </td>
      <td>{{Spec2("CSS4 Colors")}}</td>
      <td>Defines in more detail what this attribute applies to.</td>
    </tr>
    <tr>
      <td>
        {{SpecName("CSS3 Colors", "#transparency", "opacity")}}
      </td>
      <td>{{Spec2("CSS3 Colors")}}</td>
      <td>Defines in more detail what this attribute applies to.</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG2", "render.html#ObjectAndGroupOpacityProperties", "opacity")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>
        References the specification in CSS Color 3 and notes that there are
        some related attributes.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "masking.html#OpacityProperty", "opacity")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   {{cssxref("opacity", "CSS opacity")}}
