---
title: baseProfile
slug: Web/SVG/Attribute/baseProfile
tags:
  - Deprecated
  - SVG
  - SVG Attribute
spec-urls: https://www.w3.org/TR/SVG11/struct.html#SVGElementBaseProfileAttribute
---
{{SVGRef}}{{Deprecated_Header}}

The **`baseProfile`** attribute describes the minimum SVG language profile that the author believes is necessary to correctly render the content. The attribute does not specify any processing restrictions; It can be considered metadata.

For example, the value of the attribute could be used by an authoring tool to warn the user when they are modifying the document beyond the scope of the specified base profile.

Each SVG profile should define the text that is appropriate for this attribute.

You can use this attribute with the following SVG elements:

- {{SVGElement("svg")}}

## Context notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>Profile name</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Example

```svg
<svg width="120" height="120" version="1.1"
 xmlns="http://www.w3.org/2000/svg" baseProfile="full">

  ...

</svg>
```

## Specifications

{{Specifications}}
