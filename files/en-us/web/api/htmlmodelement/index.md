---
title: HTMLModElement
slug: Web/API/HTMLModElement
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
browser-compat: api.HTMLModElement
---
{{ APIRef("HTML DOM") }}

The **`HTMLModElement`** interface provides special properties (beyond the regular methods and properties available through the {{domxref("HTMLElement")}} interface they also have available to them by inheritance) for manipulating modification elements, that is {{HTMLElement("del")}} and {{HTMLElement("ins")}}.

{{InheritanceDiagram(600, 120)}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLModElement.cite")}}
  - : Is a {{domxref("DOMString")}} reflecting the {{htmlattrxref("cite", "del")}} HTML attribute, containing a URI of a resource explaining the change.
- {{domxref("HTMLModElement.dateTime")}}
  - : Is a {{domxref("DOMString")}} reflecting the {{htmlattrxref("datetime", "del")}} HTML attribute, containing a date-and-time string representing a timestamp for the change.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML elements implementing this interface: {{HTMLElement("ins")}}, {{HTMLElement("del")}}.
