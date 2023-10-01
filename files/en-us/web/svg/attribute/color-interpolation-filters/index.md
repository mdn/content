---
title: color-interpolation-filters
slug: Web/SVG/Attribute/color-interpolation-filters
page-type: svg-attribute
browser-compat: svg.attributes.presentation.color-interpolation-filters
---

{{SVGRef}}

The **`color-interpolation-filters`** attribute specifies the color space for imaging operations performed via filter effects.

> **Note:** This property just has an affect on filter operations. Therefore, it has no effect on filter primitives like {{SVGElement("feOffset")}}, {{SVGElement("feImage")}}, {{SVGElement("feTile")}} or {{SVGElement("feFlood")}}.
>
> `color-interpolation-filters` has a different initial value than {{SVGAttr("color-interpolation")}}. `color-interpolation-filters` has an initial value of `linearRGB`, whereas `color-interpolation` has an initial value of `sRGB`. Thus, in the default case, filter effects operations occur in the linearRGB color space, whereas all other color interpolations occur by default in the sRGB color space.
>
> It has no affect on filter functions, which operate in the {{Glossary("sRGB")}} color space.

> **Note:** As a presentation attribute, `color-interpolation-filters` can be used as a CSS property.

You can use this attribute with the following SVG elements:

- {{SVGElement("feSpotLight")}}
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

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>auto</code> | <code>sRGB</code> | <code>linearRGB</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>linearRGB</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>discrete</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : Indicates that the user agent can choose either the `sRGB` or `linearRGB` spaces for color interpolation. This option indicates that the author doesn't require that color interpolation occur in a particular color space.
- `sRGB`
  - : Indicates that color interpolation should occur in the sRGB color space.
- `linearRGB`
  - : Indicates that color interpolation should occur in the linearized RGB color space as described in [the sRGB specification](https://webstore.iec.ch/publication/6169).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [sRGB specification](https://webstore.iec.ch/publication/6169)
- {{SVGAttr("color-interpolation")}}
