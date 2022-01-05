---
title: HTMLTableElement.tFoot
slug: Web/API/HTMLTableElement/tFoot
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - Property
  - Reference
browser-compat: api.HTMLTableElement.tFoot
---
{{APIRef("HTML DOM")}}

The **`HTMLTableElement.tFoot`** property represents the
{{HTMLElement("tfoot")}} element of a {{HTMLElement("table")}}. Its value will be
`null` if there is no such element.

## Syntax

```js
HTMLTableSectionElementObject = table.tFoot
table.tFoot = HTMLTableSectionElementObject
```

## Example

```js
if (table.tFoot == my_foot) {
  // ...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface implementing this property: {{domxref("HTMLTableElement")}}.
