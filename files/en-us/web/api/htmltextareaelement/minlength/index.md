---
title: "HTMLTextAreaElement: minLength property"
short-title: minLength
slug: Web/API/HTMLTextAreaElement/minLength
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.minLength
---

{{ApiRef("HTML DOM")}}

The **`minLength`** property of the {{domxref("HTMLTextAreaElement")}} interface indicates the minimum number of characters (in UTF-16 code units) required for the value of the {{HTMLElement("textarea")}} element to be valid. It reflects the element's [`minlength`](/en-US/docs/Web/HTML/Element/textarea#minlength) attribute. `-1` means there is no minimum length requirement.

> [!NOTE]
> If the textarea has a value, and that value has fewer characters than the `minlength` attribute requires, the element is considered invalid and the {{domxref("ValidityState")}} object's {{domxref("ValidityState.tooShort", "tooShort")}} property will be `true`.

## Value

A number representing the element's `minlength` if present or `-1`.

## Example

Given the following HTML:

```html
<p>
  <label for="comment">Comment</label>
  <textarea id="comment" minlength="10" maxlength="200" /></textarea>
</p>
```

You can use the `minLength` property to retrieve or set the `<textarea>`'s `minlength` attribute value:

```js
const textareaElement = document.querySelector("#comment");
console.log(`Element's minLength: ${textareaElement.minLength}`); // "Element's minlength: 10"
textareaElement.minLength = 5; // updates the element's minlength attribute value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTextAreaElement.value")}}
- {{domxref("HTMLTextAreaElement.maxLength")}}
- {{domxref("ValidityState.tooShort")}}
