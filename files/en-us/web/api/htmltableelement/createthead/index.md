---
title: "HTMLTableElement: createTHead() method"
short-title: createTHead()
slug: Web/API/HTMLTableElement/createTHead
page-type: web-api-instance-method
browser-compat: api.HTMLTableElement.createTHead
---

{{APIRef("HTML DOM")}}

The **`createTHead()`** method of
{{domxref("HTMLTableElement")}} objects returns the {{HTMLElement("thead")}} element
associated with a given {{HtmlElement("table")}}. If no header exists in the table, this
method creates it, and then returns it.

> [!NOTE]
> If no header exists, `createTHead()` inserts a new
> header directly into the table. The header does not need to be added separately as
> would be the case if {{domxref("Document.createElement()")}} had been used to create
> the new `<thead>` element.

## Syntax

```js-nolint
createTHead()
```

### Parameters

None.

### Return value

{{domxref("HTMLTableSectionElement")}}

## Examples

```js
let myHead = myTable.createTHead();
// Now this should be true: myHead === myTable.tHead
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
