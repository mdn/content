---
title: onclick
slug: Web/SVG/Attribute/onclick
tags:
  - SVG
  - SVG Attribute
  - events
browser-compat: svg.attributes.events.global.onclick
---
{{SVGRef}}

The **`onclick`** attribute specifies some script to run when the element is clicked.

You can use this attribute with the following SVG elements:

*   {{SVGElement("a")}}
*   {{SVGElement("altGlyph")}}
*   {{SVGElement("animate")}}
*   {{SVGElement("animateMotion")}}
*   {{SVGElement("animateTransform")}}
*   {{SVGElement("circle")}}
*   {{SVGElement("defs")}}
*   {{SVGElement("desc")}}
*   {{SVGElement("ellipse")}}
*   {{SVGElement("foreignObject")}}
*   {{SVGElement("g")}}
*   {{SVGElement("image")}}
*   {{SVGElement("line")}}
*   {{SVGElement("linearGradient")}}
*   {{SVGElement("marker")}}
*   {{SVGElement("metadata")}}
*   {{SVGElement("mpath")}}
*   {{SVGElement("path")}}
*   {{SVGElement("pattern")}}
*   {{SVGElement("polygon")}}
*   {{SVGElement("polyline")}}
*   {{SVGElement("radialGradient")}}
*   {{SVGElement("rect")}}
*   {{SVGElement("script")}}
*   {{SVGElement("set")}}
*   {{SVGElement("stop")}}
*   {{SVGElement("style")}}
*   {{SVGElement("svg")}}
*   {{SVGElement("switch")}}
*   {{SVGElement("symbol")}}
*   {{SVGElement("text")}}
*   {{SVGElement("textPath")}}
*   {{SVGElement("title")}}
*   {{SVGElement("tref")}}
*   {{SVGElement("tspan")}}
*   {{SVGElement("use")}}
*   {{SVGElement("view")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
  margin: 0;
}
```

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="100" onclick="alert('You have clicked the circle.')" />
</svg>
```

{{EmbedLiveSample("Example", "220", "220")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#Anything"
            >&#x3C;anything></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

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
        {{SpecName("SVG2", "interact.html#EventAttributes", "onclick")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "script.html#OnClickEventAttribute", "onclick")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
