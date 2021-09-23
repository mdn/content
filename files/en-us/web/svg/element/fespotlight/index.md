---
title: <feSpotLight>
slug: Web/SVG/Element/feSpotLight
tags:
  - Element
  - NeedsBrowserCompatibility
  - NeedsMobileBrowserCompatibility
  - Reference
  - SVG
  - SVG Filter
browser-compat: svg.elements.feSpotLight
---
{{SVGRef}}

The **`<feSpotLight>`** [SVG](/en-US/docs/Web/SVG) filter primitive defines a light source which allows to create a spotlight effect. It that can be used within a lighting filter primitive: {{SVGElement("feDiffuseLighting")}} or {{SVGElement("feSpecularLighting")}}.

## Usage context

{{svginfo}}

## Attributes

### Global attributes

*   [Core attributes](/en-US/docs/Web/SVG/Attribute#core_attributes)

### Specific attributes

*   {{SVGAttr("x")}}
*   {{SVGAttr("y")}}
*   {{SVGAttr("z")}}
*   {{SVGAttr("pointsAtX")}}
*   {{SVGAttr("pointsAtY")}}
*   {{SVGAttr("pointsAtZ")}}
*   {{SVGAttr("specularExponent")}}
*   {{SVGAttr("limitingConeAngle")}}

## DOM Interface

This element implements the {{domxref("SVGFESpotLightElement")}} interface.

## Example

### HTML Content

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="spotlight">
      <feSpecularLighting result="spotlight" specularConstant="1.5"
          specularExponent="4" lighting-color="#FFF">
        <feSpotLight x="600" y="600" z="400" limitingConeAngle="5.5" />
      </feSpecularLighting>
      <feComposite in="SourceGraphic" in2="spotlight" operator="out"
          k1="0" k2="1" k3="1" k4="0"/>
    </filter>
  </defs>

  <image xlink:href="/files/6457/mdn_logo_only_color.png" x="10%" y="10%"
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

*   {{SVGElement("filter")}}
*   {{SVGElement("animate")}}
*   {{SVGElement("set")}}
*   {{SVGElement("feDiffuseLighting")}}
*   {{SVGElement("feSpecularLighting")}}
*   {{SVGElement("feDistantLight")}}
*   {{SVGElement("fePointLight")}}
*   [SVG tutorial: Filter effects](/en-US/docs/Web/SVG/Tutorial/Filter_effects)
