---
title: "HTMLInputElement: type property"
short-title: type
slug: Web/API/HTMLInputElement/type
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.type
---

{{ApiRef("HTML DOM")}}

The **`type`** property of the {{domxref("HTMLInputElement")}} interface is a string that indicates behaviour and rendering type of the {{HTMLElement("input")}} element.

It reflects the [`type`](/en-US/docs/Web/HTML/Element/input#type) attribute of the {{HTMLElement("input")}} element.

## Value

A string representing type values. Default value is a `text`.

It's possible values are listed in [input types](/en-US/docs/Web/HTML/Element/input#input_types).

## Examples

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

- {{domxref("HTMLTextAreaElement.type")}} property that returns the string "textarea".
- {{domxref("HTMLButtonElement.type")}} property
