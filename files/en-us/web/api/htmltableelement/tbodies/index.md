---
title: "HTMLTableElement: tBodies property"
short-title: tBodies
slug: Web/API/HTMLTableElement/tBodies
page-type: web-api-instance-property
browser-compat: api.HTMLTableElement.tBodies
---

{{APIRef("HTML DOM")}}

The **`tBodies`** read-only property of the {{domxref("HTMLTableElement")}} interface returns a live {{domxref("HTMLCollection")}} of all {{HTMLElement("tbody")}} element children of the given {{HTMLElement("table")}}.

Although the property is read-only, the returned object is live and is automatically updated when the `HTMLTableElement` changes.

The collection returned includes implicit {{HTMLElement("tbody")}} elements. For example:

```html
<table>
  <tr>
    <td>cell one</td>
  </tr>
</table>
```

The HTML DOM generated from the above HTML will have a {{HTMLElement("tbody")}} element even though the tags are not included in the source HTML.

## Value

A live {{domxref("HTMLCollection")}} of {{domxref("HTMLTableSectionElement")}} (which are all `tbody`) objects.

## Examples

This snippet gets the number of bodies in a table.

```js
myTable.tBodies.length;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTableElement.caption")}}
- {{domxref("HTMLTableElement.tFoot")}}
- {{domxref("HTMLTableElement.tHead")}}
- {{domxref("HTMLTableElement.createTBody()")}}
