---
title: result
slug: Web/SVG/Attribute/result
tags:
  - NeedsCompatTable
  - SVG
  - SVG Attribute
spec-urls: https://drafts.fxtf.org/filter-effects/#element-attrdef-filter-primitive-result
---
{{SVGRef}}

The **`result`** attribute defines the assigned name for this filter primitive. If supplied, then graphics that result from processing this filter primitive can be referenced by an {{SVGAttr("in")}} attribute on a subsequent filter primitive within the same {{SVGElement("filter")}} element. If no value is provided, the output will only be available for re-use as the implicit input into the next filter primitive if that filter primitive provides no value for its `in` attribute.

You can use this attribute with the following SVG elements:

- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDropShadow")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence type="turbulence" baseFrequency="0.05"
        numOctaves="2" result="turbulence"/>
    <feDisplacementMap in2="turbulence" in="SourceGraphic"
        scale="50" xChannelSelector="R" yChannelSelector="G"/>
  </filter>

  <circle cx="100" cy="100" r="100"
      style="filter: url(#displacementFilter)"/>
</svg>
```

{{EmbedLiveSample("Example", 220, 220)}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>&#x3C;filter-primitive-reference></code></td>
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

- `<filter-primitive-reference>`
  - : This value is a {{cssxref("custom-ident")}} and defines the name for the filter primitive. It is only meaningful within a given {{SVGElement("filter")}} element and thus has only local scope. It is legal for the same `<filter-primitive-reference>` to appear multiple times within the same `<filter>` element. When referenced, this value will use the closest preceding filter primitive with the given result.

## Specifications

{{Specifications}}
