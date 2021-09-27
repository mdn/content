---
title: xlink:title
slug: Web/SVG/Attribute/xlink:title
tags:
  - Deprecated
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.xlink.xlink_title
---
{{SVGRef}}{{Deprecated_Header}}

The **`xlink:title`** attribute is used to describe the meaning of a link or resource in a human-readable fashion.

The use of this information is highly dependent on the type of processing being done. It may be used, for example, to make titles available to applications used by visually impaired users, or to create a table of links, or to present help text that appears when a user lets a mouse pointer hover over a starting resource.

> **Note:** New content should use a {{SVGElement("title")}} child element rather than a `xlink:title` attribute.

You can use this attribute with the following SVG elements:

*   {{SVGElement("a")}}
*   {{SVGElement("altGlyph")}}
*   {{SVGElement("animate")}}
*   {{SVGElement("animateColor")}}
*   {{SVGElement("animateMotion")}}
*   {{SVGElement("animateTransform")}}
*   {{SVGElement("cursor")}}
*   {{SVGElement("feImage")}}
*   {{SVGElement("filter")}}
*   {{SVGElement("font-face-uri")}}
*   {{SVGElement("glyphRef")}}
*   {{SVGElement("image")}}
*   {{SVGElement("linearGradient")}}
*   {{SVGElement("mpath")}}
*   {{SVGElement("pattern")}}
*   {{SVGElement("radialGradient")}}
*   {{SVGElement("script")}}
*   {{SVGElement("set")}}
*   {{SVGElement("textPath")}}
*   {{SVGElement("tref")}}
*   {{SVGElement("use")}}

## Usage context

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#anything"
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

*   `<anything>`
    *   : This value specifies the title used to describe the meaning of the link or resource.

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
        {{SpecName("SVG2", "linking.html#XLinkTitleAttribute", "seed")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>
        Deprecated the attribute and made it only apply to
        {{SVGElement("a")}}, {{SVGElement("image")}},
        {{SVGElement("linearGradient")}},
        {{SVGElement("pattern")}},
        {{SVGElement("radialGradient")}},
        {{SVGElement("script")}}, {{SVGElement("textPath")}},
        and {{SVGElement("use")}}
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "linking.html#XLinkTitleAttribute", "seed")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
