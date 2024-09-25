---
title: "HTMLInputElement: size property"
short-title: size
slug: Web/API/HTMLInputElement/size
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.size
---

{{APIRef("HTML DOM")}}

The **`size`** property of the {{DOMxRef("HTMLInputElement")}} interface defines the number of visible characters displayed. It reflects the {{htmlelement("input")}} element's [`size`](/en-US/docs/Web/HTML/Element/input#size) attribute.

The `size` property is relevant to the [`text`](/en-US/docs/Web/HTML/Element/input/text), [`search`](/en-US/docs/Web/HTML/Element/input/search), [`tel`](/en-US/docs/Web/HTML/Element/input/tel), [`email`](/en-US/docs/Web/HTML/Element/input/email), [`url`](/en-US/docs/Web/HTML/Element/input/url), and [`password`](/en-US/docs/Web/HTML/Element/input/password) input type only. The value is a non-negative integer greater than zero. If omitted or invalid, the value is `20`.

## Value

An integer.

## Examples

```js
const inputElement = document.getElementById("password");
console.log(inputElement.size);
inputElement.size = 12;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMXref("HTMLInputElement.minLength")}}
- {{DOMXref("HTMLInputElement.maxLength")}}
- {{DOMXref("HTMLSelectElement.size")}}
