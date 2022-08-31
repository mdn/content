---
title: <cursor>
slug: Web/SVG/Element/cursor
tags:
  - Deprecated
  - Element
  - NeedsExample
  - Reference
  - SVG
browser-compat: svg.elements.cursor
---
{{SVGRef}}{{Deprecated_Header}}

> **Note:** The CSS {{cssxref("cursor")}} property should be used instead of this element.

The **`<cursor>`** [SVG](/en-US/docs/Web/SVG) element can be used to define a platform-independent custom cursor. A recommended approach for defining a platform-independent custom cursor is to create a PNG image and define a `cursor` element that references the PNG image and identifies the exact position within the image which is the pointer position (i.e., the hot spot).

The PNG format is recommended because it supports the ability to define a transparency mask via an alpha channel. If a different image format is used, this format should support the definition of a transparency mask (two options: provide an explicit alpha channel or use a particular pixel color to indicate transparency). If the transparency mask can be determined, the mask defines the shape of the cursor; otherwise, the cursor is an opaque rectangle. Typically, the other pixel information (e.g., the R, G and B channels) defines the colors for those parts of the cursor which are not masked out. Note that cursors usually contain at least two colors so that the cursor can be visible over most backgrounds.

## Usage context

{{SVGInfo}}

## Attributes

### Global attributes

- [Conditional processing attributes](/en-US/docs/Web/SVG/Attribute#conditional_processing_attributes)
- [Core attributes](/en-US/docs/Web/SVG/Attribute#core_attributes)
- [Xlink attributes](/en-US/docs/Web/SVG/Attribute#xlink_attributes)

### Specific attributes

- {{SVGAttr("x")}} {{Deprecated_Inline}}
- {{SVGAttr("y")}} {{Deprecated_Inline}}
- {{SVGAttr("xlink:href")}}

## DOM Interface

This element implements the {{DOMxRef("SVGCursorElement")}} interface.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
