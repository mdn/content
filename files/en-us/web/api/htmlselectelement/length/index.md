---
title: "HTMLSelectElement: length property"
short-title: length
slug: Web/API/HTMLSelectElement/length
page-type: web-api-instance-property
browser-compat: api.HTMLSelectElement.length
---

{{ APIRef("HTML DOM") }}

The **`length`** property of the {{DOMxRef("HTMLSelectElement")}} interface specifies the number of {{htmlelement("option")}} elements in the {{htmlelement("select")}} element. It represents the number of nodes in the {{DOMxRef("HTMLSelectElement.options", "options")}} collection. On setting, it acts as ({{DOMxRef("HTMLOptionsCollection.length")}}).

## Value

A number.

## Examples

```js
const selectElement = document.getElementById("fruits");
console.log(selectElement.length);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("select")}}
- {{HTMLElement("option")}}
- {{DOMXref("HTMLSelectElement.options")}}
- {{DOMXref("HTMLSelectElement.selectedOptions")}}
- {{DOMXref("HTMLSelectElement.multiple")}}
- {{DOMXref("HTMLSelectElement.selectedIndex")}}
