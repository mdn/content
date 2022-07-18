---
title: xlink:arcrole
slug: Web/SVG/Attribute/xlink:arcrole
tags:
  - Deprecated
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.xlink.xlink_arcrole
---
{{SVGRef}}{{Deprecated_Header}}

The **`xlink:arcrole`** attribute specifies a contextual role for the element and corresponds to the [RDF Primer](https://www.w3.org/TR/rdf-primer/) notion of a property.

This contextual role can differ from the meaning of the resource when taken outside the context of this particular arc. For example, a resource might generically represent a "person," but in the context of a particular arc it might have the role of "mother" and in the context of a different arc it might have the role of "daughter."

You can use this attribute with the following SVG elements:

- {{SVGElement("a")}}
- {{SVGElement("altGlyph")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateColor")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("cursor")}}
- {{SVGElement("feImage")}}
- {{SVGElement("filter")}}
- {{SVGElement("font-face-uri")}}
- {{SVGElement("glyphRef")}}
- {{SVGElement("image")}}
- {{SVGElement("linearGradient")}}
- {{SVGElement("mpath")}}
- {{SVGElement("pattern")}}
- {{SVGElement("radialGradient")}}
- {{SVGElement("script")}}
- {{SVGElement("set")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("use")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
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

- `<iri>`
  - : This value specifies an {{Glossary("IRI")}} reference that identifies some resource that describes the intended property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Definition of the `xlink:arcrole` attribute in the XLink specification](https://www.w3.org/TR/xlink/#link-semantics)
