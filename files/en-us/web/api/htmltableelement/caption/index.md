---
title: "HTMLTableElement: caption property"
short-title: caption
slug: Web/API/HTMLTableElement/caption
page-type: web-api-instance-property
browser-compat: api.HTMLTableElement.caption
---

{{APIRef("HTML DOM")}}

The **`caption`** property of the {{domxref("HTMLTableElement")}} interface represents the first {{HTMLElement("caption")}} element child of the given {{HTMLElement("table")}}, or `null` if no such element exists.

## Value

An {{domxref("HTMLTableCaptionElement")}} or `null`.

This property can be assigned, which causes the existing first {{HTMLElement("caption")}} element child, if any, to be removed, and the given value, if it is not `null`, to be inserted as the first child. Therefore, setting `null` has the same effect as calling {{domxref("HTMLTableElement.deleteCaption", "deleteCaption()")}}. If the assigned value is not an {{domxref("HTMLTableCaptionElement")}} or `null`, a {{jsxref("TypeError")}} is thrown.

## Examples

```js
if (table.caption) {
  // Do something with the caption
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTableElement.tBodies")}}
- {{domxref("HTMLTableElement.tFoot")}}
- {{domxref("HTMLTableElement.tHead")}}
- {{domxref("HTMLTableElement.createCaption()")}}
- {{domxref("HTMLTableElement.deleteCaption()")}}
