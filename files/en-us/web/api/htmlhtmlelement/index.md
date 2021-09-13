---
title: HTMLHtmlElement
slug: Web/API/HTMLHtmlElement
tags:
  - API
  - HTML DOM
  - Interface
  - NeedsNewLayout
  - Reference
browser-compat: api.HTMLHtmlElement
---
{{ APIRef("HTML DOM") }}

The **`HTMLHtmlElement`** interface serves as the root node for a given HTML document. This object inherits the properties and methods described in the {{domxref("HTMLElement")}} interface.

You can retrieve the `HTMLHtmlElement` object for a given document by reading the value of the {{domxref("document.documentElement")}} property.

{{InheritanceDiagram(600,120)}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLHtmlElement.version")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}} representing the version of the HTML Document Type Definition (DTD) that governs this document. This property should not be used any more as it is non-conforming. Omit it.

## Methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML element implementing this interface: {{HTMLElement("html")}}.
