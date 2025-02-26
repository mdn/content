---
title: "HTMLOutputElement: name property"
short-title: name
slug: Web/API/HTMLOutputElement/name
page-type: web-api-instance-property
browser-compat: api.HTMLOutputElement.name
---

{{ApiRef("HTML DOM")}}

The **`name`** property of the {{domxref("HTMLOutputElement")}} interface indicates the name of the {{HTMLElement("output")}} element. It reflects the element's [`name`](/en-US/docs/Web/HTML/Element/output#name) attribute.

## Value

A string representing the element's name.

## Example

```js
const outputElement = document.querySelector("#log");
console.log(`Element's name: ${outputElement.name}`);
outputElement.name = "sum"; // sets or updates the element's name
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLOutputElement.defaultValue")}}
- {{domxref("HTMLOutputElement.htmlFor")}}
- {{domxref("HTMLOutputElement.labels")}}
