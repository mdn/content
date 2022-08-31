---
title: <set>
slug: Web/SVG/Element/set
tags:
  - Element
  - SVG
  - SVG Animation
browser-compat: svg.elements.set
---
{{SVGRef}}

The SVG **`<set>`** element provides a simple means of just setting the value of an attribute for a specified duration.

It supports all attribute types, including those that cannot reasonably be interpolated, such as string and boolean values. For attributes that can be reasonably be interpolated, the {{SVGElement('animate')}} is usually preferred.

> **Note:** The `<set>` element is non-additive. The {{SVGAttr('additive')}} and {{SVGAttr('accumulate')}} attributes are not allowed, and will be ignored if specified.

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <style>
    rect { cursor: pointer }
    .round { rx: 5px; fill: green; }
  </style>

  <rect id="me" width="10" height="10">
    <set attributeName="class" to="round" begin="me.click" dur="2s" />
  </rect>
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attributes

- {{SVGAttr("to")}}
  - : This attribute defines the value to be applied to the target attribute for the duration of the animation. The value must match the requirements of the target attribute.
    _Value type_: [**\<anything>**](/en-US/docs/Web/SVG/Content_type#anything); _Default value_: none; _Animatable_: **no**

### Animation Attributes

- [Animation timing attributes](/en-US/docs/Web/SVG/Attribute#animation_timing_attributes)
  - : {{SVGAttr("begin")}}, {{SVGAttr("dur")}}, {{SVGAttr("end")}}, {{SVGAttr("min")}}, {{SVGAttr("max")}}, {{SVGAttr("restart")}}, {{SVGAttr("repeatCount")}}, {{SVGAttr("repeatDur")}}, {{SVGAttr("fill")}}
- [Other Animation attributes](/en-US/docs/Web/SVG/Attribute#animation_attributes)
  - : Most notably: {{SVGAttr("attributeName")}}
- [Animation event attributes](/en-US/docs/Web/SVG/Attribute/Events#animation_event_attributes)
  - : Most notably: {{SVGAttr("onbegin")}}, {{SVGAttr("onend")}}, {{SVGAttr("onrepeat")}}

### Global attributes

- [Core Attributes](/en-US/docs/Web/SVG/Attribute/Core)
  - : Most notably: {{SVGAttr('id')}}
- [Styling Attributes](/en-US/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- Event Attributes
  - : [Global event attributes](/en-US/docs/Web/SVG/Attribute/Events#global_event_attributes), [Document element event attributes](/en-US/docs/Web/SVG/Attribute/Events#document_element_event_attributes)

## Usage notes

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("animate")}}
