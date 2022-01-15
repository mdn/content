---
title: min
slug: Web/SVG/Attribute/min
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.elements.animate.min
---
{{SVGRef}}

The **`min`** attribute specifies the minimum value of the active animation duration.

You can use this attribute with the following SVG elements:

*   {{SVGElement("animate")}}
*   {{SVGElement("animateColor")}}
*   {{SVGElement("animateMotion")}}
*   {{SVGElement("animateTransform")}}
*   {{SVGElement("set")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="10" r="10">
    <animate attributeName="cx" dur="4s" min="2s" repeatCount="indefinite"
        values="60 ; 110 ; 60 ; 10 ; 60" keyTimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1"/>
    <animate attributeName="cy" dur="4s" min="2s" repeatCount="indefinite"
        values="10 ; 60 ; 110 ; 60 ; 10" keyTimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1"/>
  </circle>
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#Clock-value"
            >&#x3C;clock-value></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

*   `<clock-value>`
    *   : Specifies the length of the minimum value of the active duration, measured in local time. The value must be greater than 0.

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
        {{SpecName("SVG Animations 2", "#MinAttribute", "min")}}
      </td>
      <td>{{Spec2("SVG Animations 2")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "animate.html#MinAttribute", "min")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
