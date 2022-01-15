---
title: version
slug: Web/SVG/Attribute/version
tags:
  - Deprecated
  - SVG
  - SVG Attribute
browser-compat: svg.elements.svg.version
---
{{SVGRef}}{{Deprecated_Header}}

The **`version`** attribute is used to indicate what specification a SVG document conforms to. It is only allowed on the root {{SVGElement("svg")}} element. It is purely advisory and has no influence on rendering or processing.

While it is specified to accept any number, the only two valid choices are currently `1.0` and `1.1`.

You can use this attribute with the following SVG elements:

*   {{SVGElement("svg")}}

```html
<svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="80" height="80"/>
</svg>
```

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
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
        {{SpecName("SVG1.1", "struct.html#SVGElementVersionAttribute", "version")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
