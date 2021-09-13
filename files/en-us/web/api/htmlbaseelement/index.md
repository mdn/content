---
title: HTMLBaseElement
slug: Web/API/HTMLBaseElement
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
browser-compat: api.HTMLBaseElement
---
{{APIRef("HTML DOM")}}

The **`HTMLBaseElement`** interface contains the base URI for a document. This object inherits all of the properties and methods as described in the {{domxref("HTMLElement")}} interface.

{{InheritanceDiagram(600, 120)}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLBaseElement.href")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("href", "base")}} HTML attribute, containing a base URL for relative URLs in the document.
- {{domxref("HTMLBaseElement.target")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("target", "base")}} HTML attribute, containing a default target browsing context or frame for elements that do not have a target reference specified.

## Methods

_No specific method; inherits attributes from its parent, {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML element implementing this interface: {{ HTMLElement("base") }}
