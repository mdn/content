---
title: HTMLEmbedElement
slug: Web/API/HTMLEmbedElement
page-type: web-api-interface
browser-compat: api.HTMLEmbedElement
---

{{APIRef("HTML DOM")}}

The **`HTMLEmbedElement`** interface provides special properties (beyond the regular {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating {{HTMLElement("embed")}} elements.

> [!NOTE]
> This topic describes the `HTMLEmbedElement` interface as defined in the standard. It does not address earlier, non-standardized version of the interface.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLEmbedElement.align")}} {{deprecated_inline}}
  - : A string representing an enumerated property indicating alignment of the element's contents with respect to the surrounding context. The possible values are `"left"`, `"right"`, `"center"`, and `"justify"`.
- {{domxref("HTMLEmbedElement.height")}}
  - : A string reflecting the [`height`](/en-US/docs/Web/HTML/Element/embed#height) HTML attribute, containing the displayed height of the resource.
- {{domxref("HTMLEmbedElement.name")}} {{deprecated_inline}}
  - : A string representing the name of the embedded object.
- {{domxref("HTMLEmbedElement.src")}}
  - : A string that reflects the [`src`](/en-US/docs/Web/HTML/Element/embed#src) HTML attribute, containing the address of the resource.
- {{domxref("HTMLEmbedElement.type")}}
  - : A string that reflects the [`type`](/en-US/docs/Web/HTML/Element/embed#type) HTML attribute, containing the type of the resource.
- {{domxref("HTMLEmbedElement.width")}}
  - : A string that reflects the [`width`](/en-US/docs/Web/HTML/Element/embed#width) HTML attribute, containing the displayed width of the resource.

## Instance methods

_Also inherits methods from its parent interface, {{domxref("HTMLElement")}}._

- {{domxref("HTMLEmbedElement.getSVGDocument()")}}
  - : Returns the embedded SVG as a {{domxref("Document")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("embed") }}
