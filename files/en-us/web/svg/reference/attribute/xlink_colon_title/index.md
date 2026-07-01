---
title: xlink:title
slug: Web/SVG/Reference/Attribute/xlink:title
page-type: svg-attribute
status:
  - deprecated
browser-compat: svg.global_attributes.xlink_title
sidebar: svgref
---

{{Deprecated_Header}}

The **`xlink:title`** attribute is used to describe the meaning of a link or resource in a human-readable fashion.

The use of this information is highly dependent on the type of processing being done. It may be used, for example, to make titles available to applications used by visually impaired users, or to create a table of links, or to present help text that appears when a user lets a mouse pointer hover over a starting resource.

> [!NOTE]
> New content should use a {{SVGElement("title")}} child element rather than a `xlink:title` attribute.

## Elements

You can use this attribute with the following SVG elements:

- {{SVGElement("a")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("feImage")}}
- {{SVGElement("filter")}}
- {{SVGElement("image")}}
- {{SVGElement("linearGradient")}}
- {{SVGElement("mpath")}}
- {{SVGElement("pattern")}}
- {{SVGElement("radialGradient")}}
- {{SVGElement("script")}}
- {{SVGElement("set")}}
- {{SVGElement("textPath")}}
- {{SVGElement("use")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Guides/Content_type#anything"
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

- `<anything>`
  - : This value specifies the title used to describe the meaning of the link or resource.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
