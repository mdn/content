---
title: SVGStyleElement
slug: Web/API/SVGStyleElement
page-type: web-api-interface
tags:
  - API
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGStyleElement
---
{{APIRef("SVG")}}

The **`SVGStyleElement`** interface corresponds to the SVG {{SVGElement("style")}} element.

{{InheritanceDiagram}}

## Properties

_This interface also inherits properties from its parent interface, {{domxref("SVGElement")}}._

- {{domxref("SVGStyleElement.type")}} {{deprecated_inline}}

  - : A string corresponding to the {{SVGAttr("type")}} attribute of the given element.

- {{domxref("SVGStyleElement.media")}}

  - : A string corresponding to the {{SVGAttr("media")}} attribute of the given element.

- {{domxref("SVGStyleElement.title")}}

  - : A string corresponding to the [`title` attribute](/en-US/docs/Web/SVG/Element/style#title) of the given element.

- {{domxref("SVGStyleElement.sheet")}} {{readonlyInline}}
  - : Returns the {{domxref("CSSStyleSheet")}} object associated with the given element, or `null` if there is none.
  
- {{domxref("SVGStyleElement.disabled")}}
  - : A boolean value indicating whether or not the associated stylesheet is disabled.

## Methods

_This interface doesn't implement any specific methods, but inherits methods from its parent interface, {{domxref("SVGElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
