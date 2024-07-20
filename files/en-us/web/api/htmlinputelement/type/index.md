---
title: "HTMLInputElement: type property"
short-title: type
slug: Web/API/HTMLInputElement/type
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.type
---

{{ApiRef("HTML DOM")}}

The **`type`** property of the {{domxref("HTMLInputElement")}} interface indicates the kind of data allowed in the {{HTMLElement("input")}} element, for example a number, a date, or an email. Browsers will select the appropriate widget and behavior to help users to enter a valid value.

It reflects the [`type`](/en-US/docs/Web/HTML/Element/input#type) attribute of the {{HTMLElement("input")}} element.

## Value

A string representing the type.

Its possible values are listed in the attribute's [input types](/en-US/docs/Web/HTML/Element/input#input_types) section.

## Example

### HTML

```html
<input id="input1" type="date" />
```

### JavaScript

```js
const inputElement = document.querySelector("#input1");
console.log(inputElement.type); // Output: "date"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTextAreaElement.type")}} property
- {{domxref("HTMLButtonElement.type")}} property
