---
title: filterRes
slug: Web/SVG/Attribute/filterRes
tags:
  - NeedsExample
  - SVG
  - SVG Attribute
  - SVG Filter
browser-compat: svg.elements.filter.filterRes
---
{{SVGRef}}{{deprecated_header}}

The **`filterRes`** attribute indicates the width and height of the intermediate images in pixels of a filter primitive.

Take care when assigning a non-default value to this attribute. Too small of a value may result in unwanted pixelation in the result. Too large of a value may result in slow processing and large memory usage.

Note that negative values or zero values disable the rendering of the element which referenced the filter.

You can use this attribute with the following SVG elements:

*   {{SVGElement("filter")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#Number-optional-number"
            >&#x3C;number-optional-number></a
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
      <td>Yes</td>
    </tr>
  </tbody>
</table>

*   `<number-optional-number>`
    *   : This value takes one or two values, the first one outlining the resolution in horizontal direction, the second one in vertical direction. If only one value is specified, it is used for both directions.

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
        {{SpecName("SVG1.1", "filters.html#FilterElementFilterResAttribute", "filterRes")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
