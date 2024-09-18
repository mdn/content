---
title: "HTMLInputElement: minLength property"
short-title: minLength
slug: Web/API/HTMLInputElement/minLength
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.minLength
---

{{ApiRef("HTML DOM")}}

The **`minLength`** property of the {{domxref("HTMLInputElement")}} interface indicates the minimum number of characters (in UTF-16 code units) required for the value of the {{HTMLElement("input")}} element to be valid. It reflects the element's [`minlength`](/en-US/docs/Web/HTML/Element/input#minlength) attribute. `-1` means there is no minimum length requirement.

> [!NOTE]
> If the input has a value, and that value has fewer characters than the `minlength` attribute requires, the element is considered invalid and the {{domxref("ValidityState")}} object's {{domxref("ValidityState.tooShort", "tooShort")}} property will be `true`.

## Value

A number representing the element's `minlength` if present or `-1`.

## Example

Given the following HTML:

```html
<p>
  <label for="password">Your password</label>
  <input id="password" type="password" minlength="8" maxlength="20" />
</p>
```

You can use the `minLength` property to retrieve or set the `<input>`'s `minlength` attribute value:

```js
const inputElement = document.querySelector("#password");
console.log(`Element's minLength: ${inputElement.minLength}`); // "Element's minlength: 8"
inputElement.minLength = 12; // updates the element's minlength attribute value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.maxLength")}}
- {{domxref("ValidityState.tooShort")}}
