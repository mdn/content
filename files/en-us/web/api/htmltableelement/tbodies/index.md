---
title: HTMLTableElement.tBodies
slug: Web/API/HTMLTableElement/tBodies
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - Property
  - Read-only
  - Reference
browser-compat: api.HTMLTableElement.tBodies
---
{{APIRef("HTML DOM")}}

The **`HTMLTableElement.tBodies`** read-only property returns a
live {{domxref("HTMLCollection")}} of the bodies in a {{htmlElement("table")}}.

Although the property is read-only, the returned object is live and allows the
modification of its content.

The collection returned includes implicit {{HTMLElement("tbody")}} elements. For
example:

```html
<table>
  <tr>
    <td>cell one</td>
  </tr>
</table>
```

The HTML DOM generated from the above HTML will have a {{HTMLElement("tbody")}} element
even though the tags are not included in the source HTML.

## Value

A live {{domxref("HTMLCollection")}}.

## Examples

This snippet gets the number of bodies in a table.

```js
mytable.tBodies.length;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCollection")}}
- {{HTMLElement("tbody")}}
