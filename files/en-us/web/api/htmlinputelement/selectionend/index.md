---
title: "HTMLInputElement: selectionEnd property"
short-title: selectionEnd
slug: Web/API/HTMLInputElement/selectionEnd
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.selectionEnd
---

{{ApiRef("HTML DOM")}}

The **`selectionEnd`** property of the {{domxref("HTMLInputElement")}} interface is a number that represents the end index of the selected text. When there’s no selection, this returns the offset of the character immediately following the current text input cursor position.

>**Note:** According to the [WHATWG forms spec](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply) `selectionEnd` property applies only to inputs of types text, search, URL, tel, and password. In modern browsers, throws an exception while setting `selectionEnd` property on the rest of input types.Additionally, this property returns `null` while accessing `selectionEnd` property on non-text input elements.

If `selectionEnd` is less than `selectionStart`, then both are
treated as the value of `selectionEnd`.

## Value

A non-negative number.

## Example

### HTML

```html
<!-- use selectionEnd on non text input element -->
<label for="color">selectionStart property on type=color</label>
<input id="color" type="color" />

<!-- use selectionEnd on text input element -->
<label for="pin">Input PIN</label>
<input type="text" id="pin" value="impossible PIN: 102-12-145" />
<button id="pin-btn" type="button">PIN correction</button>
```

### JavaScript

```js
const text = document.querySelector("#pin");
const pinBtn = document.querySelector("#pin-btn");
const validPinChecker = /[^\d{3}-\d{2}-\d{3}]/g; 
const selectionEnd = text.value.length;

pinBtn.addEventListener("click", () => {
  const selectedText = text.value.substring(text.selectionStart, selectionEnd);
  const correctedText = selectedText.replace(validPinChecker, "");
  text.value = correctedText;
});

console.log(colorStart.selectionEnd); // Output : null
```

### Result

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTextAreaElement.selectionEnd")}} property
- {{domxref("HTMLInputElement.selectionStart")}} property
- {{domxref("HTMLInputElement.setSelectionRange")}} method
