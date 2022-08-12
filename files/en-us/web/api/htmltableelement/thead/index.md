---
title: HTMLTableElement.tHead
slug: Web/API/HTMLTableElement/tHead
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - Property
  - Reference
browser-compat: api.HTMLTableElement.tHead
---
{{APIRef("HTML DOM")}}

The **`HTMLTableElement.tHead`** represents the
{{HTMLElement("thead")}} element of a {{HTMLElement("table")}} . Its value will be
`null` if there is no such element.

## Value

A {{domxref("HTMLTableSectionElement")}}.

## Examples

```js
if (table.tHead === my_head_el) {
  // …
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface implementing this property: {{domxref("HTMLTableElement")}}.
