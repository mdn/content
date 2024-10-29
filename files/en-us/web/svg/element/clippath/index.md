---
title: <clipPath>
slug: Web/SVG/Element/clipPath
page-type: svg-element
browser-compat: svg.elements.clipPath
---

{{SVGRef}}

The **`<clipPath>`** [SVG](/en-US/docs/Web/SVG) element defines a clipping path, to be used by the {{SVGAttr("clip-path")}} property.

A clipping path restricts the region to which paint can be applied. Conceptually, parts of the drawing that lie outside of the region bounded by the clipping path are not drawn.

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
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
  <path
    id="heart"
    d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z" />

  <!--
    Only the portion of the red heart
    inside the clip circle is visible.
  -->
  <use clip-path="url(#myClip)" href="#heart" fill="red" />
</svg>
```

```css
/* With a touch of CSS for browsers who *
 * implemented the r Geometry Property. */

@keyframes openYourHeart {
  from {
    r: 0;
  }
  to {
    r: 60px;
  }
}

#myClip circle {
  animation: openYourHeart 15s infinite;
}
```

{{EmbedLiveSample('Example', 100, 100)}}

A clipping path is conceptually equivalent to a custom viewport for the referencing element. Thus, it affects the _rendering_ of an element, but not the element's _inherent geometry_. The bounding box of a clipped element (meaning, an element which references a `<clipPath>` element via a {{SVGAttr("clip-path")}} property, or a child of the referencing element) must remain the same as if it were not clipped.

By default, {{cssxref("pointer-events")}} are not dispatched on clipped regions. For example, a circle with a radius of `10` which is clipped to a circle with a radius of `5` will not receive "click" events outside the smaller radius.

## Attributes

- {{SVGAttr("clipPathUnits")}}
  - : Defines the coordinate system for the contents of the `<clipPath>` element.
    _Value type_: `userSpaceOnUse`|`objectBoundingBox` ; _Default value_: `userSpaceOnUse`; _Animatable_: **yes**

## Usage context

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Related

- Other clipping and masking SVG elements: {{SVGElement("mask")}}
- Some CSS properties: {{cssxref("clip-path")}}, {{cssxref("pointer-events")}}
