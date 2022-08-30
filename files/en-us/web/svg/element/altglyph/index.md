---
title: <altGlyph>
slug: Web/SVG/Element/altGlyph
tags:
  - Deprecated
  - Element
  - Reference
  - SVG
  - SVG Text Content
browser-compat: svg.elements.altGlyph
---
{{SVGRef}}{{deprecated_header}}

The **`<altGlyph>`** SVG element allows sophisticated selection of the glyphs used to render its child character data.

## Usage context

{{svginfo}}

## Attributes

- {{SVGAttr("x")}}
  - : This attribute defines the corresponding absolute x-coordinates for rendering the element.
    _Value type_: [**\<list-of-coordinates>**](/en-US/docs/Web/SVG/Content_type#list-of-ts) ; _Default value_: Absolute x-coordinate of ancestor {{SVGElement("text")}} or {{SVGElement("tspan")}}; _Animatable_: **yes**
- {{SVGAttr("y")}}
  - : This attribute defines the corresponding absolute y-coordinates for rendering the element.
    _Value type_: [**\<list-of-coordinates>**](/en-US/docs/Web/SVG/Content_type#list-of-ts) ; _Default value_: Absolute y-coordinate of ancestor {{SVGElement("text")}} or {{SVGElement("tspan")}}; _Animatable_: **yes**
- {{SVGAttr("dx")}}
  - : This attribute indicates a shift along the x-axis on the position of the element.
    _Value type_: [**\<list-of-coordinates>**](/en-US/docs/Web/SVG/Content_type#list-of-ts) ; _Default value_: Relative x-coordinate of ancestor {{SVGElement("text")}} or {{SVGElement("tspan")}}; _Animatable_: **yes**
- {{SVGAttr("dy")}}
  - : This attribute indicates a shift along the x-axis on the position of the element.
    _Value type_: [**\<list-of-coordinates>**](/en-US/docs/Web/SVG/Content_type#list-of-ts) ; _Default value_: Relative y-coordinate of ancestor {{SVGElement("text")}} or {{SVGElement("tspan")}}; _Animatable_: **yes**
- {{SVGAttr("rotate")}}
  - : This attribute defines the supplemental rotation that will be applied to the element.
    _Value type_: [**\<list-of-numbers>**](/en-US/docs/Web/SVG/Content_type#list-of-ts) ; _Default value_: _none_; _Animatable_: **yes (non-additive)**
- {{SVGAttr("glyphRef")}}
  - : The glyph identifier, the format of which is dependent on the format defined by the `format` attribute of the given font.
    _Value type_: **\<string>** ; _Default value_: _none_; _Animatable_: **no**
- {{SVGAttr("format")}}
  - : The format of the given font.
    _Value type_: **\<string**[**>**](/en-US/docs/Web/SVG/Content_type#percentage) ; _Default value_: _none_; _Animatable_: **no**
- {{SVGAttr("xlink:href")}}
  - : An [\<iri>](/en-US/docs/Web/SVG/Content_type#iri) reference either to a {{SVGElement("glyph")}} element in an SVG document or to an {{SVGElement("altGlyphDef")}} element.

    If the reference is to a {{SVGElement("glyph")}} element and that glyph is available, then that glyph is rendered instead of the character(s) that are inside of the {{SVGElement("altGlyph")}} element.

    If the reference is to an {{SVGElement("altGlyphDef")}} element, then if an appropriate set of alternate glyphs is located from processing the {{SVGElement("altGlyphDef")}} element, then those alternate glyphs are rendered instead of the character(s) that are inside of the {{SVGElement("altGlyph")}} element.
    _Value type_: [**\<iri**](/en-US/docs/Web/SVG/Content_type#iri)[**>**](/en-US/docs/Web/SVG/Content_type#percentage) ; _Default value_: _none_; _Animatable_: **no**

### Global attributes

- [Core Attributes](/en-US/docs/Web/SVG/Attribute/Core)
  - : Most notably: {{SVGAttr("id")}} {{SVGAttr("lang")}}
- [Styling Attributes](/en-US/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr("class")}}, {{SVGAttr("style")}}
- [Conditional Processing Attributes](/en-US/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Most notably: {{SVGAttr("requiredExtensions")}}, {{SVGAttr("systemLanguage")}}
- Event Attributes
  - : [Global event attributes](/en-US/docs/Web/SVG/Attribute/Events#global_event_attributes), [Document element event attributes](/en-US/docs/Web/SVG/Attribute/Events#document_element_event_attributes), [Graphical event attributes](/en-US/docs/Web/SVG/Attribute/Events#graphical_event_attributes)
- [Presentation Attributes](/en-US/docs/Web/SVG/Attribute/Presentation)
  - : Most notably: {{SVGAttr("clip-path")}}, {{SVGAttr("clip-rule")}}, {{SVGAttr("color")}}, {{SVGAttr("color-interpolation")}}, {{SVGAttr("color-rendering")}}, {{SVGAttr("cursor")}}, {{SVGAttr("display")}}, {{SVGAttr("dominant-baseline")}}, {{SVGAttr("fill")}}, {{SVGAttr("fill-opacity")}}, {{SVGAttr("fill-rule")}}, {{SVGAttr("filter")}}, {{SVGAttr("mask")}}, {{SVGAttr("opacity")}}, {{SVGAttr("pointer-events")}}, {{SVGAttr("shape-rendering")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stroke-dasharray")}}, {{SVGAttr("stroke-dashoffset")}}, {{SVGAttr("stroke-linecap")}}, {{SVGAttr("stroke-linejoin")}}, {{SVGAttr("stroke-miterlimit")}}, {{SVGAttr("stroke-opacity")}}, {{SVGAttr("stroke-width")}}, {{SVGAttr("text-anchor")}}, {{SVGAttr("transform")}}, {{SVGAttr("vector-effect")}}, {{SVGAttr("visibility")}}
- XLink Attributes
  - : {{SVGAttr("xlink:href")}}, {{SVGAttr("xlink:type")}}, {{SVGAttr("xlink:role")}}, {{SVGAttr("xlink:arcrole")}}, {{SVGAttr("xlink:title")}}, {{SVGAttr("xlink:show")}}, {{SVGAttr("xlink:actuate")}}

## DOM Interface

This element implements the {{domxref("SVGAltGlyphElement")}} interface.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("tspan")}}
- {{SVGElement("glyph")}}
- {{SVGElement("altGlyphDef")}}
