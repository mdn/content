---
title: "HTMLSelectElement: name property"
short-title: name
slug: Web/API/HTMLSelectElement/name
page-type: web-api-instance-property
browser-compat: api.HTMLSelectElement.name
---

{{ApiRef("HTML DOM")}}

The **`name`** property of the {{domxref("HTMLSelectElement")}} interface indicates the name of the {{HTMLElement("select")}} element. It reflects the element's [`name`](/en-US/docs/Web/HTML/Element/select#name) attribute.

## Value

A string representing the element's name.

## Example

```js
const selectElement = document.querySelector("#planets");
console.log(`Element's name: ${selectElement.name}`);
selectElement.name = "galaxies"; // sets or updates the element's name
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLSelectElement.value")}}
- {{domxref("HTMLSelectElement.selectedIndex")}}
- {{domxref("HTMLSelectElement.options")}}
