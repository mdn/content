---
title: "HTMLSelectElement: size property"
short-title: size
slug: Web/API/HTMLSelectElement/size
page-type: web-api-instance-property
browser-compat: api.HTMLSelectElement.size
---

{{ APIRef("HTML DOM") }}

The **`size`** property of the {{DOMxRef("HTMLSelectElement")}} interface specifies the number of options, or rows, that should be visible at one time. It reflects the {{htmlelement("select")}} element's [`size`](/en-US/docs/Web/HTML/Element/select#size) attribute. If omitted, the value is `0`.

> [!NOTE]
> While by default a `<select>` displays a single row unless {{DOMxRef("HTMLSelectElement.multiple", "multiple")}} is true, in which case four rows are displayed, the default value for the `size` property is `0`.

## Value

A number.

## Examples

```js
const selectElement = document.getElementById("fruits");
console.log(selectElement.size);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("select")}}
- {{HTMLElement("option")}}
- {{DOMXref("HTMLSelectElement.selectedOptions")}}
- {{DOMXref("HTMLSelectElement.length")}}
