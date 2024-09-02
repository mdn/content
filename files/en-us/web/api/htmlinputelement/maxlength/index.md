---
title: "HTMLInputElement: maxLength property"
short-title: maxLength
slug: Web/API/HTMLInputElement/maxLength
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.maxLength
---

{{ApiRef("HTML DOM")}}

The **`maxLength`** property of the {{domxref("HTMLInputElement")}} interface indicates the maximum number of characters (in UTF-16 code units) allowed to be entered for the value of the {{HTMLElement("input")}} element, and the maximum number of characters allowed for the value to be valid. It reflects the element's [`maxlength`](/en-US/docs/Web/HTML/Element/input#maxlength) attribute. `-1` means there is no limit on the length of the value.

> [!NOTE]
> Browser generally prevent users from entering more characters than the `maxlength` attribute allows. Should the length be longer, the element is considered invalid and the {{domxref("ValidityState")}} object's {{domxref("ValidityState.tooLong", "tooLong")}} property will be `true`.

## Value

A number representing the element's `maxlength` if present, or `-1`.

## Example

Given the following HTML:

```html
<p>
  <label for="password">Your password</label>
  <input id="password" type="password" minlength="8" maxlength="20" />
</p>
```

You can use the `maxLength` property to retrieve or set the `<input>`'s `maxlength` attribute value:

```js
const inputElement = document.querySelector("#password");
console.log(`Element's maxLength: ${inputElement.maxLength}`); // "Element's maxlength: 20"
inputElement.maxLength = 18; // updates the element's maxlength attribute value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.minLength")}}
- {{domxref("ValidityState.tooLong")}}
