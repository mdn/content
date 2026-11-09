---
title: "HTMLTableElement: createTBody() method"
short-title: createTBody()
slug: Web/API/HTMLTableElement/createTBody
page-type: web-api-instance-method
browser-compat: api.HTMLTableElement.createTBody
---

{{APIRef("HTML DOM")}}

The **`createTBody()`** method of the {{domxref("HTMLTableElement")}} interface creates a {{HTMLElement("tbody")}} element, inserts it immediately after the last {{HTMLElement("tbody")}} element child of the given {{HTMLElement("table")}}, or as the last child if there is no such element, and returns it.

This method creates and inserts the element directly, without requiring separate calls to methods such as {{domxref("Document.createElement()")}}, {{domxref("Node.insertBefore()")}}, and {{domxref("Node.appendChild()")}}.

> [!NOTE]
> Unlike {{domxref("HTMLTableElement.createTHead()")}} and {{domxref("HTMLTableElement.createTFoot()")}}, `createTBody()` always creates a new `<tbody>` element, even if the table already contains one or more bodies.

## Syntax

```js-nolint
createTBody()
```

### Parameters

None.

### Return value

An {{domxref("HTMLTableSectionElement")}} (which is always a `tbody`).

## Examples

```js
const myBody = myTable.createTBody();
// Now this should be true: myBody === myTable.tBodies.item(myTable.tBodies.length - 1)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTableElement.createCaption()")}}
- {{domxref("HTMLTableElement.createTFoot()")}}
- {{domxref("HTMLTableElement.createTHead()")}}
