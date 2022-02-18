---
title: <switch>
slug: Web/SVG/Element/switch
tags:
  - Element
  - NeedsExample
  - SVG
  - SVG Container
browser-compat: svg.elements.switch
---
{{SVGRef}}

The **`<switch>`** [SVG](/en-US/docs/Web/SVG) element evaluates any {{SVGAttr("requiredFeatures")}}, {{SVGAttr("requiredExtensions")}} and {{SVGAttr("systemLanguage")}} attributes on its direct child elements in order, and then renders the first child where these attributes evaluate to true.

Other direct children will be bypassed and therefore not rendered. If a child element is a container element, like {{SVGElement("g")}}, then its subtree is also processed/rendered or bypassed/not rendered.

> **Note:** The `display` and `visibility` properties have no effect on `<switch>` element processing. In particular, setting `display:none` on a child has no effect on the true/false testing for `<switch>` processing.

## Usage context

{{svginfo}}

## Attributes

### Global attributes

- [Conditional processing attributes](/en-US/docs/Web/SVG/Attribute#conditional_processing_attributes)
- [Core attributes](/en-US/docs/Web/SVG/Attribute#core_attributes)
- [Graphical event attributes](/en-US/docs/Web/SVG/Attribute#graphical_event_attributes)
- [Presentation attributes](/en-US/docs/Web/SVG/Attribute#presentation_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("transform")}}

## DOM Interface

This element implements the {{domxref("SVGSwitchElement")}} interface.

## SVG \<switch> example

This example demonstrates showing different text content depending on the browser's language settings. The `switch` element will display the first of its child elements whose `systemLanguage` attribute matches the user's language, or the fallback element with no `systemLanguage` attribute if none of them match.

### HTML Content

```html
<svg viewBox="0 -20 100 50">
  <switch>
    <text systemLanguage="ar">مرحبا</text>
    <text systemLanguage="de,nl">Hallo!</text>
    <text systemLanguage="en-us">Howdy!</text>
    <text systemLanguage="en-gb">Wotcha!</text>
    <text systemLanguage="en-au">G'day!</text>
    <text systemLanguage="en">Hello!</text>
    <text systemLanguage="es">Hola!</text>
    <text systemLanguage="fr">Bonjour!</text>
    <text systemLanguage="ja">こんにちは</text>
    <text systemLanguage="ru">Привет!</text>
    <text>☺</text>
  </switch>
</svg>
```

### Result

{{ EmbedLiveSample('SVG_switch_example') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
