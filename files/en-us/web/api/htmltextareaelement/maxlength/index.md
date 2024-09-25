---
title: "HTMLTextAreaElement: maxLength property"
short-title: maxLength
slug: Web/API/HTMLTextAreaElement/maxLength
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.maxLength
---

{{ApiRef("HTML DOM")}}

The **`maxLength`** property of the {{domxref("HTMLTextAreaElement")}} interface indicates the maximum number of characters (in UTF-16 code units) allowed to be entered for the value of the {{HTMLElement("textarea")}} element, and the maximum number of characters allowed for the value to be valid. It reflects the element's [`maxlength`](/en-US/docs/Web/HTML/Element/textarea#maxlength) attribute. `-1` means there is no limit on the length of the value.

> [!NOTE]
> Browsers generally prevent users from entering more characters than the `maxlength` attribute allows. Should the length be longer, the element is considered invalid and the {{domxref("ValidityState")}} object's {{domxref("ValidityState.tooLong", "tooLong")}} property will be `true`.

## Value

A number representing the element's `maxlength` if present, or `-1`.

## Example

Given the following HTML:

```html
<p>
  <label for="comment">Comment</label>
  <textarea id="comment" minlength="10" maxlength="200" /></textarea>
</p>
```

You can use the `maxLength` property to retrieve or set the `<textarea>`'s `maxlength` attribute value:

```js
const textareaElement = document.querySelector("#comment");
console.log(`Element's maxLength: ${textareaElement.maxLength}`); // "Element's maxlength: 200"
textareaElement.maxLength = 220; // updates the element's maxlength attribute value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTextAreaElement.value")}}
- {{domxref("HTMLTextAreaElement.minLength")}}
- {{domxref("ValidityState.tooLong")}}
