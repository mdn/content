---
title: "HTMLTableElement: tHead property"
short-title: tHead
slug: Web/API/HTMLTableElement/tHead
page-type: web-api-instance-property
browser-compat: api.HTMLTableElement.tHead
---

{{APIRef("HTML DOM")}}

The **`tHead`** property of the {{domxref("HTMLTableElement")}} interface represents the first {{HTMLElement("thead")}} element child of the given {{HTMLElement("table")}}, or `null` if no such element exists.

## Value

An {{domxref("HTMLTableSectionElement")}} (which is always a `thead`) or `null`.

This property can be assigned, which causes the existing first {{HTMLElement("thead")}} element child, if any, to be removed, and the given value, if it is not `null`, to be inserted immediately before the first element child that's neither a {{HTMLElement("caption")}} nor a {{HTMLElement("colgroup")}}, or as the last child if there is no such element. Therefore, setting `null` has the same effect as calling {{domxref("HTMLTableElement.deleteTHead", "deleteTHead()")}}. If the assigned value is not an {{domxref("HTMLTableSectionElement")}} or `null`, a {{jsxref("TypeError")}} is thrown; otherwise, if it is not a {{HTMLElement("thead")}} element or `null`, a `HierarchyRequestError` {{domxref("DOMException")}} is thrown.

## Examples

```js
if (table.tHead) {
  // Do something with the thead
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTableElement.caption")}}
- {{domxref("HTMLTableElement.tBodies")}}
- {{domxref("HTMLTableElement.tFoot")}}
- {{domxref("HTMLTableElement.createTHead()")}}
- {{domxref("HTMLTableElement.deleteTHead()")}}
