---
title: SVGScriptElement
slug: Web/API/SVGScriptElement
tags:
  - API
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGScriptElement
---
{{APIRef("SVG")}}

The **`SVGScriptElement`** interface corresponds to the SVG {{SVGElement("script")}} element.

{{InheritanceDiagram(600, 140)}}

## Properties

- {{domxref("SVGScriptElement.href")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} attribute of the given {{SVGElement("script")}} element.
- {{domxref("SVGScriptElement.type")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMString")}} corresponding to the {{SVGAttr("type")}} attribute of the given {{SVGElement("script")}} element. A {{domxref("DOMException")}} is raised with the code `NO_MODIFICATION_ALLOWED_ERR` on an attempt to change the value of a read only attribute.
- {{domxref("SVGScriptElement.crossOrigin")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMString")}} corresponding to the {{SVGAttr("crossorigin")}} attribute of the given {{SVGElement("script")}} element.

## Methods

_This interface doesn't implement any specific methods, but inherits methods from its parent interface, {{domxref("SVGElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
