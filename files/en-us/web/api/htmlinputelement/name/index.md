---
title: "HTMLInputElement: name property"
short-title: name
slug: Web/API/HTMLInputElement/name
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.name
---

{{ApiRef("HTML DOM")}}

The **`name`** property of the {{domxref("HTMLInputElement")}} interface indicates the name of the {{HTMLElement("input")}} element. It reflects the element's [`name`](/en-US/docs/Web/HTML/Element/input#name) attribute.

## Value

A string representing the element's name.

## Example

Given the following HTML:

```html
<p>
  <label for="planet">Which planet were you born on?</label>
  <input id="planet" type="text" name="origin" />
</p>
```

You can use the `name` property to retrieve or set the `<input>`'s name:

```js
const inputElement = document.querySelector("#planet");
console.log(`Element's name: ${inputElement.name}`); // "Element's name: origin"
inputElement.name = "planet"; // updates the element's name
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.type")}}
