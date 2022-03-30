---
title: SVGStyleElement
slug: Web/API/SVGStyleElement
tags:
  - API
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGStyleElement
---
{{APIRef("SVG")}}

## SVG style interface

The **`SVGStyleElement`** interface corresponds to the SVG {{SVGElement("style")}} element.

{{InheritanceDiagram}}

## Properties

_This interface also inherits properties from its parent interface, {{domxref("SVGElement")}}._

- {{domxref("SVGStyleElement.type")}}

  - : A {{domxref("DOMString")}} corresponding to the {{SVGAttr("type")}} attribute of the given element.

    SVG 1.1 defined that a {{domxref("DOMException")}} is raised with code `NO_MODIFICATION_ALLOWED_ERR` on an attempt to change the value of a read-only attribute. This restriction was removed in SVG 2.

- {{domxref("SVGStyleElement.media")}}

  - : A {{domxref("DOMString")}} corresponding to the {{SVGAttr("media")}} attribute of the given element.

    SVG 1.1 defined that a {{domxref("DOMException")}} is raised with code `NO_MODIFICATION_ALLOWED_ERR` on an attempt to change the value of a read-only attribute. This restriction was removed in SVG 2.

- {{domxref("SVGStyleElement.title")}}

  - : A {{domxref("DOMString")}} corresponding to the {{SVGAttr("title")}} attribute of the given element.

    SVG 1.1 defined that a {{domxref("DOMException")}} is raised with code `NO_MODIFICATION_ALLOWED_ERR` on an attempt to change the value of a read-only attribute. This restriction was removed in SVG 2.

## Methods

_This interface doesn't implement any specific methods, but inherits methods from its parent interface, {{domxref("SVGElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
