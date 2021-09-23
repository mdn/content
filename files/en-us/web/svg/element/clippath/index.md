---
title: <clipPath>
slug: Web/SVG/Element/clipPath
tags:
  - Element
  - Reference
  - SVG
browser-compat: svg.elements.clipPath
---
{{SVGRef}}

The **`<clipPath>`** [SVG](/en-US/docs/Web/SVG) element defines a clipping path, to be used by the {{SVGAttr("clip-path")}} property.

A clipping path restricts the region to which paint can be applied. Conceptually, parts of the drawing that lie outside of the region bounded by the clipping path are not drawn.

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100">
  <clipPath id="myClip">
    <!--
      Everything outside the circle will be
      clipped and therefore invisible.
    -->
    <circle cx="40" cy="35" r="35" />
  </clipPath>

  <!-- The original black heart, for reference -->
  <path id="heart" d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z" />

  <!--
    Only the portion of the red heart
    inside the clip circle is visible.
  -->
  <use clip-path="url(#myClip)" xlink:href="#heart" fill="red" />
</svg>
```

```css
/* With a touch of CSS for browsers who *
 * implemented the r Geometry Property. */

@keyframes openYourHeart {from {r: 0} to {r: 60px}}

#myClip circle {
  animation: openYourHeart 15s infinite;
}
```

{{EmbedLiveSample('Example', 100, 100)}}

A clipping path is conceptually equivalent to a custom viewport for the referencing element. Thus, it affects the *rendering* of an element, but not the element's *inherent geometry*. The bounding box of a clipped element (meaning, an element which references a `<clipPath>` element via a {{SVGAttr("clip-path")}} property, or a child of the referencing element) must remain the same as if it were not clipped.

By default, {{cssxref("pointer-events")}} are not dispatched on clipped regions. For example, a circle with a radius of `10` which is clipped to a circle with a radius of `5` will not receive "click" events outside the smaller radius.

## Attributes

*   {{SVGAttr("clipPathUnits")}}
    *   : Defines the coordinate system for the contents of the `<clipPath>` element.
        *Value type*: `userSpaceOnUse`|`objectBoundingBox` ; *Default value*: `userSpaceOnUse`; *Animatable*: **yes**

### Global attributes

*   [Core Attributes](/en-US/docs/Web/SVG/Attribute/Core)
    *   : Most notably: {{SVGAttr('id')}}
*   [Styling Attributes](/en-US/docs/Web/SVG/Attribute/Styling)
    *   : {{SVGAttr('class')}}, {{SVGAttr('style')}}
*   [Conditional Processing Attributes](/en-US/docs/Web/SVG/Attribute/Conditional_Processing)
    *   : Most notably: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
*   [Presentation Attributes](/en-US/docs/Web/SVG/Attribute/Presentation)
    *   : Most notably: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}

## Usage notes

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Related

*   Other clipping and masking SVG elements: {{SVGElement("mask")}}
*   Some CSS properties: {{cssxref("clip-path")}}, {{cssxref("pointer-events")}}
