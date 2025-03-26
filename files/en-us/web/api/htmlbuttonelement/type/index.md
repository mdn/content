---
title: "HTMLButtonElement: type property"
short-title: type
slug: Web/API/HTMLButtonElement/type
page-type: web-api-instance-property
browser-compat: api.HTMLButtonElement.type
---

{{ApiRef("HTML DOM")}}

The **`type`** property of the {{domxref("HTMLButtonElement")}} interface is a string that indicates the behavior type of the {{HTMLElement("button")}} element.

It reflects the [`type`](/en-US/docs/Web/HTML/Element/button#type) attribute of the {{HTMLElement("button")}} element.

## Value

A string representing the type.

Its possible values are listed in the attribute's [button types](/en-US/docs/Web/API/HTMLButtonElement#htmlbuttonelement.type) section.

## Example

### HTML

```html
<button id="button" type="reset">type</button>
```

### JavaScript

```js
const buttonElement = document.querySelector("#button");
console.log(buttonElement.type); // "reset"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTextAreaElement.type")}} property
- {{domxref("HTMLInputElement.type")}} property
