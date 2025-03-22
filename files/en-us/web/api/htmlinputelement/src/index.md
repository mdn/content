---
title: "HTMLInputElement: src property"
short-title: src
slug: Web/API/HTMLInputElement/src
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.src
---

{{APIRef("HTML DOM")}}

The **`src`** property of the {{DOMxRef("HTMLInputElement")}} interface specifies the source of an image to display as the graphical submit button. It reflects the {{htmlelement("input")}} element's [`src`](/en-US/docs/Web/HTML/Element/input#src) attribute.

The `src` property is valid for the [`image`](/en-US/docs/Web/HTML/Element/input/image) type only.

## Value

A string.

## Examples

```js
const inputElement = document.getElementById("imageButton");
console.log(input.src);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMXref("HTMLButtonElement")}}
- {{HTMLElement("button")}}
- {{HTMLElement("input")}}
- {{HTMLElement("img")}}
