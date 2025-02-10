---
title: <feSpecularLighting>
slug: Web/SVG/Element/feSpecularLighting
page-type: svg-element
browser-compat: svg.elements.feSpecularLighting
---

{{SVGRef}}

The **`<feSpecularLighting>`** [SVG](/en-US/docs/Web/SVG) filter primitive lights a source graphic using the alpha channel as a bump map. The resulting image is an RGBA image based on the light color. The lighting calculation follows the standard specular component of [the Phong lighting model](https://en.wikipedia.org/wiki/Phong_reflection_model). The resulting image depends on the light color, light position and surface geometry of the input bump map. The result of the lighting calculation is added. The filter primitive assumes that the viewer is at infinity in the z direction.

This filter primitive produces an image which contains the specular reflection part of the lighting calculation. Such a map is intended to be combined with a texture using the `add` term of the arithmetic {{SVGElement("feComposite")}} method. Multiple light sources can be simulated by adding several of these light maps before applying it to the texture image.

Like other filter primitives, it handles color components in the `linearRGB` {{glossary("color space")}} by default. You can use {{svgattr("color-interpolation-filters")}} to use `sRGB` instead.

## Usage context

{{svginfo}}

## Attributes

- {{SVGAttr("in")}}
- {{SVGAttr("surfaceScale")}}
- {{SVGAttr("specularConstant")}}
- {{SVGAttr("specularExponent")}}
- {{SVGAttr("kernelUnitLength")}}

## DOM Interface

This element implements the {{domxref("SVGFESpecularLightingElement")}} interface.

## Example

```html
<svg
  height="200"
  width="200"
  viewBox="0 0 220 220"
  xmlns="http://www.w3.org/2000/svg">
  <filter id="filter">
    <feSpecularLighting
      result="specOut"
      specularExponent="20"
      lighting-color="#bbbbbb">
      <fePointLight x="50" y="75" z="200" />
    </feSpecularLighting>
    <feComposite
      in="SourceGraphic"
      in2="specOut"
      operator="arithmetic"
      k1="0"
      k2="1"
      k3="1"
      k4="0" />
  </filter>
  <circle cx="110" cy="110" r="100" style="filter:url(#filter)" />
</svg>
```

### Result

{{EmbedLiveSample("Example", 220, 220)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("filter")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDistantLight")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("fePointLight")}}
- {{SVGElement("feSpotLight")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG tutorial: Filter effects](/en-US/docs/Web/SVG/Tutorial/Filter_effects)
