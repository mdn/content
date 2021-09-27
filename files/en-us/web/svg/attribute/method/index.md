---
title: method
slug: Web/SVG/Attribute/method
tags:
  - Experimental
  - NeedsExample
  - SVG
  - SVG Attribute
browser-compat: svg.elements.textPath.method
---
{{SVGRef}}{{SeeCompatTable}}

The **`method`** attribute indicates the method by which text should be rendered along the path of a {{SVGElement("textPath")}} element.

You can use this attribute with the following SVG elements:

*   {{SVGElement("textPath")}}

## textPath

For {{SVGElement("textPath")}}, `method` indicates the method by which text should be rendered along the path.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>align</code> | <code>stretch</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>align</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

*   align
    *   : This value indicates that the characters should be rendered so that they are not stretched or warped. The characters are rotated, scaled and stretched when they are rendered. As a result, for fonts with connected characters (e.g. cursive fonts), the connections may not align properly when text is rendered along the path.
*   stretch
    *   : This value indicates that the character outlines will be converted into paths, and then stretched and possibly warped. With this approach, connected characters, such as in cursive fonts, will maintain their connections.

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
        {{SpecName("SVG2", "text.html#TextPathElementMethodAttribute", "method")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>Described the <code>stretch</code> value in more detail.</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "text.html#TextPathElementMethodAttribute", "method")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
