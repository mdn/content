---
title: SVGScriptElement
slug: Web/API/SVGScriptElement
page-type: web-api-interface
browser-compat: api.SVGScriptElement
---

{{APIRef("SVG")}}

The **`SVGScriptElement`** interface corresponds to the SVG {{SVGElement("script")}} element.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("SVGScriptElement.async")}}
  - : A boolean reflecting the `async` attribute of the given {{SVGElement("script")}} element. It indicates whether the script should be executed asynchronously.
- {{domxref("SVGScriptElement.crossOrigin")}}
  - : A string reflecting the {{SVGAttr("crossorigin")}} attribute of the given {{SVGElement("script")}} element. It is a {{Glossary("CORS")}} settings attribute.
- {{domxref("SVGScriptElement.defer")}} {{Experimental_Inline}}
  - : A boolean reflecting the `defer` attribute of the given {{SVGElement("script")}} element. It indicates whether the script should be executed after the document has been parsed.
- {{domxref("SVGScriptElement.href")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} {{deprecated_inline}} attribute of the given {{SVGElement("script")}} element.
- {{domxref("SVGScriptElement.type")}} {{ReadOnlyInline}}
  - : A string corresponding to the {{SVGAttr("type")}} attribute of the given {{SVGElement("script")}} element. A {{domxref("DOMException")}} is raised with the code `NO_MODIFICATION_ALLOWED_ERR` on an attempt to change the value of a read only attribute.

## Instance methods

_This interface doesn't implement any specific methods, but inherits methods from its parent interface, {{domxref("SVGElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
