---
title: HTMLTableElement.tHead
slug: Web/API/HTMLTableElement/tHead
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

## Syntax

```js
thead_element = table.tHead;
table.tHead = thead_element;
```

### Parameters

- `thead_element` is a {{domxref("HTMLTableSectionElement")}}.

## Example

```js
if (table.tHead == my_head_el) {
  // ...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface implementing this property: {{domxref("HTMLTableElement")}}.
