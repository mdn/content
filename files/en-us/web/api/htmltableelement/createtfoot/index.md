---
title: HTMLTableElement.createTFoot()
slug: Web/API/HTMLTableElement/createTFoot
page-type: web-api-instance-method
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - Method
  - NeedsSpecTable
  - Reference
browser-compat: api.HTMLTableElement.createTFoot
---
{{APIRef("HTML DOM")}}

The **`createTFoot()`** method of
{{domxref("HTMLTableElement")}} objects returns the {{HTMLElement("tfoot")}} element
associated with a given {{HtmlElement("table")}}. If no footer exists in the table, this
method creates it, and then returns it.

> **Note:** If no footer exists, `createTFoot()` inserts a new
> footer directly into the table. The footer does not need to be added separately as
> would be the case if {{domxref("Document.createElement()")}} had been used to create
> the new `<tfoot>` element.

## Syntax

```js
createTFoot()
```

### Parameters

None.

### Return value

{{domxref("HTMLTableSectionElement")}}

## Examples

```js
let myfoot = mytable.createTFoot();
// Now this should be true: myfoot === mytable.tFoot
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
