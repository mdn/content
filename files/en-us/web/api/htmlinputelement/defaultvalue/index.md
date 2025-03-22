---
title: "HTMLInputElement: defaultValue property"
short-title: defaultValue
slug: Web/API/HTMLInputElement/defaultValue
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.defaultValue
---

{{ApiRef("HTML DOM")}}

The **`defaultValue`** property of the {{domxref("HTMLInputElement")}} interface indicates the original (or default) value of the {{HTMLElement("input")}} element. It reflects the element's [`value`](/en-US/docs/Web/HTML/Element/input#value) attribute.

## Value

A string representing the default, or original, value of the `<input>` element.

## Example

Given the following HTML:

```html
<label for="planet">Which planet were you born on?</label>
<input id="planet" type="text" value="Azarath" />
```

The following will provide the same results, no matter what the user enters into the text input.

```js
const inputElement = document.querySelector("#planet");
console.log(`Original value: ${inputElement.defaultValue}`); // "Original value: Azarath"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.type")}}
