---
title: <ellipse>
slug: Web/SVG/Element/ellipse
page-type: svg-element
browser-compat: svg.elements.ellipse
---

{{SVGRef}}

The **`<ellipse>`** element is an SVG basic shape, used to create ellipses based on a center coordinate, and both their x and y radius.

> **Note:** Ellipses are unable to specify the exact orientation of the ellipse (if, for example, you wanted to draw an ellipse tilted at a 45 degree angle), but it can be rotated by using the {{SVGAttr("transform")}} attribute.

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="50" rx="100" ry="50" />
</svg>
```

{{EmbedLiveSample('Example', 100, '100%')}}

## Attributes

- {{SVGAttr("cx")}}
  - : The x position of the center of the ellipse.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("cy")}}
  - : The y position of the center of the ellipse.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("rx")}}
  - : The radius of the ellipse on the x axis.
    _Value type_: `auto`|[**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("ry")}}
  - : The radius of the ellipse on the y axis.
    _Value type_: `auto`|[**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("pathLength")}}
  - : This attribute lets specify the total length for the path, in user units.
    _Value type_: [**\<number>**](/en-US/docs/Web/SVG/Content_type#number) ; _Default value_: _none_; _Animatable_: **yes**

> **Note:** Starting with SVG2 `cx`, `cy`, `rx` and `ry` are _Geometry Properties_, meaning those attributes can also be used as CSS properties for that element.

### Global attributes

- [Core Attributes](/en-US/docs/Web/SVG/Attribute/Core)
  - : Most notably: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [Styling Attributes](/en-US/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Conditional Processing Attributes](/en-US/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Most notably: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- Event Attributes
  - : [Global event attributes](/en-US/docs/Web/SVG/Attribute/Events#global_event_attributes), [Graphical event attributes](/en-US/docs/Web/SVG/Attribute/Events#graphical_event_attributes)
- [Presentation Attributes](/en-US/docs/Web/SVG/Attribute/Presentation)
  - : Most notably: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- ARIA Attributes
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Usage notes

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other SVG basic shapes: **{{ SVGElement('circle') }}**, {{ SVGElement('line') }}, {{ SVGElement('polygon') }}, {{ SVGElement('polyline') }}, {{ SVGElement('rect') }}
