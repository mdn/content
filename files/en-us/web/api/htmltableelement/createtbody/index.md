---
title: "HTMLTableElement: createTBody() method"
short-title: createTBody()
slug: Web/API/HTMLTableElement/createTBody
page-type: web-api-instance-method
browser-compat: api.HTMLTableElement.createTBody
---

{{APIRef("HTML DOM")}}

The **`createTBody()`** method of
{{domxref("HTMLTableElement")}} objects creates and returns a new
{{HTMLElement("tbody")}} element associated with a given {{HtmlElement("table")}}.

> [!NOTE]
> Unlike {{domxref("HTMLTableElement.createTHead()")}} and
> {{domxref("HTMLTableElement.createTFoot()")}}, `createTBody()`
> systematically creates a new `<tbody>` element, even if the table
> already contains one or more bodies. If so, the new one is inserted after the existing
> ones.

## Syntax

```js-nolint
createTBody()
```

### Parameters

None.

### Return value

{{domxref("HTMLTableSectionElement")}}

## Examples

```js
let myBody = myTable.createTBody();
// Now this should be true: myBody === myTable.tBodies.item(myTable.tBodies.length - 1)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
