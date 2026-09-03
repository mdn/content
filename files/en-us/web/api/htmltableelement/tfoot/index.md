---
title: "HTMLTableElement: tFoot property"
short-title: tFoot
slug: Web/API/HTMLTableElement/tFoot
page-type: web-api-instance-property
browser-compat: api.HTMLTableElement.tFoot
---

{{APIRef("HTML DOM")}}

The **`tFoot`** property of the {{domxref("HTMLTableElement")}} interface represents the first {{HTMLElement("tfoot")}} element child of the given {{HTMLElement("table")}}, or `null` if no such element exists.

## Value

An {{domxref("HTMLTableSectionElement")}} (which is always a `tfoot`) or `null`.

This property can be assigned, which causes the existing first {{HTMLElement("tfoot")}} element child, if any, to be removed, and the given value, if it is not `null`, to be inserted as the last child. Therefore, setting `null` has the same effect as calling {{domxref("HTMLTableElement.deleteTFoot", "deleteTFoot()")}}. If the assigned value is not an {{domxref("HTMLTableSectionElement")}} or `null`, a {{jsxref("TypeError")}} is thrown; otherwise, if it is not a {{HTMLElement("tfoot")}} element or `null`, a `HierarchyRequestError` {{domxref("DOMException")}} is thrown.

## Examples

```js
if (table.tFoot) {
  // Do something with the tfoot
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTableElement.caption")}}
- {{domxref("HTMLTableElement.tBodies")}}
- {{domxref("HTMLTableElement.tHead")}}
- {{domxref("HTMLTableElement.createTFoot()")}}
- {{domxref("HTMLTableElement.deleteTFoot()")}}
