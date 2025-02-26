---
title: "HTMLOutputElement: htmlFor property"
short-title: htmlFor
slug: Web/API/HTMLOutputElement/htmlFor
page-type: web-api-instance-property
browser-compat: api.HTMLOutputElement.htmlFor
---

{{ APIRef("HTML DOM") }}

The **`htmlFor`** property of the {{DOMxRef("HTMLOutputElement")}} interface is a string containing a space-separated list of other elements' `id`s, indicating that those elements contributed input values to (or otherwise affected) the calculation. It reflects the [`for`](/en-US/docs/Web/HTML/Element/output#for) attribute of the {{HTMLElement("output")}} element.

## Value

A string.

## Examples

```js
const outputElem = document.getElementById("result");
for (const id of outputElem.htmlFor.split(" ")) {
  const elem = document.getElementById(id);
  elem.style.outline = "2px solid red";
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("output")}}
