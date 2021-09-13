---
title: HTMLMetaElement
slug: Web/API/HTMLMetaElement
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
browser-compat: api.HTMLMetaElement
---
{{ APIRef("HTML DOM") }}

The **`HTMLMetaElement`** interface contains descriptive metadata about a document. It inherits all of the properties and methods described in the {{domxref("HTMLElement")}} interface.

{{InheritanceDiagram(600, 120)}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

| Name                                  | Type                             | Description                                                                            |
| ------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------- |
| `content`                             | {{domxref("DOMString")}} | Gets or sets the value of meta-data property.                                          |
| `httpEquiv`                           | {{domxref("DOMString")}} | Gets or sets the name of an HTTP response header to define for a document.             |
| `name`                                | {{domxref("DOMString")}} | Gets or sets the name of a meta-data property to define for a document.                |
| `scheme` {{deprecated_inline}} | {{domxref("DOMString")}} | Gets or sets the name of a scheme used to interpret the value of a meta-data property. |

## Methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("meta")}}
