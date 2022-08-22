---
title: SVGViewElement
slug: Web/API/SVGViewElement
page-type: web-api-interface
tags:
  - API
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGViewElement
---
{{APIRef("SVG")}}

The **`SVGViewElement`** interface provides access to the properties of {{SVGElement("view")}} elements, as well as methods to manipulate them.

{{InheritanceDiagram}}

## Properties

_This interface also inherits properties from its parent interface, {{domxref("SVGElement")}}._

- {{domxref("SVGViewElement.viewTarget")}} {{deprecated_inline}}
  - : An {{domxref("SVGStringList")}} corresponding to the {{SVGAttr("viewTarget")}} attribute of the given {{SVGElement("view")}} element. A list of string values which contain the names listed in the {{SVGAttr("viewTarget")}} attribute. Each of the string values can be associated with the corresponding element using the {{domxref("Document.getElementById()", "getElementById()")}} method call.

## Methods

_This interface doesn't implement any specific methods, but inherits methods from its parent interface, {{domxref("SVGElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("view")}}
