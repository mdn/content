---
title: "HTMLTableElement: createTFoot() method"
short-title: createTFoot()
slug: Web/API/HTMLTableElement/createTFoot
page-type: web-api-instance-method
browser-compat: api.HTMLTableElement.createTFoot
---

{{APIRef("HTML DOM")}}

The **`createTFoot()`** method of the {{domxref("HTMLTableElement")}} interface creates a {{HTMLElement("tfoot")}} element, inserts it as the last child of the given {{HTMLElement("table")}}, and returns it. If the table already has a `<tfoot>` element child, this method returns the first such child without creating one.

When creation is needed, this method creates and inserts the element directly, without requiring separate calls to methods such as {{domxref("Document.createElement()")}} and {{domxref("Node.appendChild()")}}.

## Syntax

```js-nolint
createTFoot()
```

### Parameters

None.

### Return value

An {{domxref("HTMLTableSectionElement")}} (which is always a `tfoot`).

## Examples

```js
const myFoot = myTable.createTFoot();
// Now this should be true: myFoot === myTable.tFoot
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTableElement.createCaption()")}}
- {{domxref("HTMLTableElement.createTBody()")}}
- {{domxref("HTMLTableElement.createTHead()")}}
- {{domxref("HTMLTableElement.deleteTFoot()")}}
