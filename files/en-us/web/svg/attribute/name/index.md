---
title: name
slug: Web/SVG/Attribute/name
tags:
  - Deprecated
  - SVG
  - SVG Attribute
---
{{SVGRef}}{{Deprecated_Header}}

The **`name`** attribute specifies either the name of a color profile or a font face.

You can use this attribute with the following SVG elements:

*   {{ SVGElement("font-face-name") }}

## font-face-name

For {{SVGElement("font-face-name")}}, `name` defines the name of the font face.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>&#x3C;name></code></td>
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

*   `<name>`
    *   : This value specifies the name of a local font. Unlike the syntax allowed between the parentheses of the `local(…)` clause in an [`@font-face` rule `src`](/en-US/docs/Web/CSS/@font-face/src) descriptor, the font name specified in this attribute is not surrounded in single or double quotes.

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
        {{SpecName("SVG1.1", "fonts.html#FontFaceNameElementNameAttribute", "name for &lt;font-face-name&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;font-face-name></code></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "color.html#ColorProfileElementNameAttribute", "name for &lt;color-profile&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;color-profile></code></td>
    </tr>
  </tbody>
</table>
