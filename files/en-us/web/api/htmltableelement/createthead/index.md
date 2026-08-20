---
title: "HTMLTableElement: createTHead() method"
short-title: createTHead()
slug: Web/API/HTMLTableElement/createTHead
page-type: web-api-instance-method
browser-compat: api.HTMLTableElement.createTHead
---

{{APIRef("HTML DOM")}}

The **`createTHead()`** method of the {{domxref("HTMLTableElement")}} interface creates a {{HTMLElement("thead")}} element, inserts it before the first element child of the given {{HTMLElement("table")}} that's neither a {{HTMLElement("caption")}} nor a {{HTMLElement("colgroup")}}, or as the last child if no such insertion location is found, and returns it. If the table already has a `<thead>` element child, this method returns the first such child without creating one.

When creation is needed, this method creates and inserts the element directly, without requiring separate calls to methods such as {{domxref("Document.createElement()")}} and {{domxref("Node.insertBefore()")}}.

## Syntax

```js-nolint
createTHead()
```

### Parameters

None.

### Return value

An {{domxref("HTMLTableSectionElement")}} (which is always a `thead`).

## Examples

```js
const myHead = myTable.createTHead();
// Now this should be true: myHead === myTable.tHead
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTableElement.createCaption()")}}
- {{domxref("HTMLTableElement.createTBody()")}}
- {{domxref("HTMLTableElement.createTFoot()")}}
- {{domxref("HTMLTableElement.deleteTHead()")}}
