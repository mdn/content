---
title: "HTMLFieldSetElement: name property"
short-title: name
slug: Web/API/HTMLFieldSetElement/name
page-type: web-api-instance-property
browser-compat: api.HTMLFieldSetElement.name
---

{{ApiRef("HTML DOM")}}

The **`name`** property of the {{domxref("HTMLFieldSetElement")}} interface indicates the name of the {{HTMLElement("fieldset")}} element. It reflects the element's [`name`](/en-US/docs/Web/HTML/Element/fieldset#name) attribute.

## Value

A string representing the element's name.

## Example

```js
const fs = document.querySelector("fieldset");
console.log(`Element's name: ${fs.name}`);
fs.name = "billing"; // sets or updates the element's name
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLFieldSetElement.elements")}}
- {{domxref("HTMLFieldSetElement.disabled")}}
- {{domxref("HTMLLegendElement")}}
- {{domxref("HTMLFormElement")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("legend")}}
- {{HTMLElement("form")}}
