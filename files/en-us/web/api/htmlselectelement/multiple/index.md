---
title: "HTMLSelectElement: multiple property"
short-title: multiple
slug: Web/API/HTMLSelectElement/multiple
page-type: web-api-instance-property
browser-compat: api.HTMLSelectElement.multiple
---

{{ APIRef("HTML DOM") }}

The **`multiple`** property of the {{DOMxRef("HTMLSelectElement")}} interface specifies that the user may select more than one option from the list of options. It reflects the {{htmlelement("select")}} element's [`multiple`](/en-US/docs/Web/HTML/Element/select#multiple) attribute.

## Value

A boolean.

## Examples

```js
const selectElement = document.getElementById("comment");
console.log(selectElement.multiple);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("select")}}
- {{DOMXref("HTMLSelectElement.selectedOptions")}}
- {{DOMXref("HTMLSelectElement.length")}}
- {{DOMXref("HTMLSelectElement.selectedIndex")}}
