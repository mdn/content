---
title: <fePointLight>
slug: Web/SVG/Element/fePointLight
tags:
  - Element
  - Reference
  - SVG
  - SVG Filter
  - SVG Light Source
browser-compat: svg.elements.fePointLight
---
{{SVGRef}}

The **`<fePointLight>`** filter primitive defines a light source which allows to create a point light effect. It that can be used within a lighting filter primitive: {{SVGElement("feDiffuseLighting")}} or {{SVGElement("feSpecularLighting")}}.

## Usage context

{{svginfo}}

## Attributes

### Global attributes

- [Core attributes](/en-US/docs/Web/SVG/Attribute#core_attributes)

### Specific attributes

- {{SVGAttr("x")}}
- {{SVGAttr("y")}}
- {{SVGAttr("z")}}

## DOM Interface

This element implements the {{domxref("SVGFEPointLightElement")}} interface.

## Example

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="spotlight">
      <feSpecularLighting result="spotlight" specularConstant="1.5"
          specularExponent="80" lighting-color="#FFF">
        <fePointLight x="50" y="50" z="220"/>
      </feSpecularLighting>
      <feComposite in="SourceGraphic" in2="spotlight" operator="arithmetic"
          k1="0" k2="1" k3="1" k4="0"/>
    </filter>
  </defs>

  <image xlink:href="mdn_logo_only_color.png" x="10%" y="10%"
      width="80%" height="80%" style="filter:url(#spotlight);"/>
</svg>
```

### Result

{{EmbedLiveSample("Example", 200, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feDistantLight")}}
- {{SVGElement("feSpotLight")}}
- [SVG tutorial: Filter effects](/en-US/docs/Web/SVG/Tutorial/Filter_effects)
