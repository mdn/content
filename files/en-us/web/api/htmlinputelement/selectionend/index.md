---
title: "HTMLInputElement: selectionEnd property"
short-title: selectionEnd
slug: Web/API/HTMLInputElement/selectionEnd
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.selectionEnd
---

{{ApiRef("HTML DOM")}}

The **`selectionEnd`** property of the {{domxref("HTMLInputElement")}} interface returns the index of the character immediately following the end of the selected text. If nothing is selected, it returns the index of the character just after the text cursor.

> [!NOTE]
> According to the [WHATWG forms spec](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply), the `selectionEnd` property applies only to inputs of types text, search, URL, tel, and password. On other input types, reading `selectionEnd` returns `null`, and setting it throws an `InvalidStateError`.

If `selectionEnd` is less than `selectionStart`, then both are
treated as the value of `selectionEnd`.

## Value

A non-negative number.

## Examples

### HTML

```html
<!-- using selectionEnd on non text input element -->
<label for="color">selectionStart property on type=color</label>
<input id="color" type="color" />

<!-- using selectionEnd on text input element -->
<fieldset>
  <legend>selectionEnd property on type=text</legend>
  <label for="pin">Input PIN</label>
  <input type="text" id="pin" value="impossible PIN: 102-12-145" />
  <button id="pin-btn" type="button">PIN correction</button>
</fieldset>
```

### JavaScript

```js
const colorEnd = document.getElementById("color");
const text = document.querySelector("#pin");
const pinBtn = document.querySelector("#pin-btn");
const validPinChecker = /^\d{3}-\d{2}-\d{3}/g;
const selectionEnd = text.value.length;
const selectedText = text.value.substring(text.selectionStart, selectionEnd);

pinBtn.addEventListener("click", () => {
  const correctedText = selectedText.replace(validPinChecker, "");
  text.value = correctedText;
});

// open browser console to verify output
console.log(colorEnd.selectionEnd); // Output : null
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTextAreaElement.selectionEnd")}} property
- {{domxref("HTMLInputElement.selectionStart")}} property
- {{domxref("HTMLInputElement.setSelectionRange")}} method
