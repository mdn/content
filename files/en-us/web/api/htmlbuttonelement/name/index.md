---
title: "HTMLButtonElement: name property"
short-title: name
slug: Web/API/HTMLButtonElement/name
page-type: web-api-instance-property
browser-compat: api.HTMLButtonElement.name
---

{{ApiRef("HTML DOM")}}

The **`name`** property of the {{domxref("HTMLButtonElement")}} interface indicates the name of the {{HTMLElement("button")}} element or the empty string if the element has no name. It reflects the element's [`name`](/en-US/docs/Web/HTML/Element/button#name) attribute.

## Value

A string representing the element's name.

## Example

```js
const buttonElement = document.querySelector("#myButton");
console.log(`Element's name: ${buttonElement.name}`);
buttonElement.name = "newName";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLButtonElement.value")}}
- {{domxref("HTMLButtonElement.type")}}
