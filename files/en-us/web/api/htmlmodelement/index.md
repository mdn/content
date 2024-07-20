---
title: HTMLModElement
slug: Web/API/HTMLModElement
page-type: web-api-interface
browser-compat: api.HTMLModElement
---

{{ APIRef("HTML DOM") }}

The **`HTMLModElement`** interface provides special properties (beyond the regular methods and properties available through the {{domxref("HTMLElement")}} interface they also have available to them by inheritance) for manipulating modification elements, that is {{HTMLElement("del")}} and {{HTMLElement("ins")}}.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLModElement.cite")}}
  - : A string reflecting the [`cite`](/en-US/docs/Web/HTML/Element/del#cite) HTML attribute, containing a URI of a resource explaining the change.
- {{domxref("HTMLModElement.dateTime")}}
  - : A string reflecting the [`datetime`](/en-US/docs/Web/HTML/Element/del#datetime) HTML attribute, containing a date-and-time string representing a timestamp for the change.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML elements implementing this interface: {{HTMLElement("ins")}}, {{HTMLElement("del")}}.
