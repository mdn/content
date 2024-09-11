---
title: "HTMLInputElement: selectionStart property"
short-title: selectionStart
slug: Web/API/HTMLInputElement/selectionStart
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.selectionStart
---

{{ApiRef("HTML DOM")}}

The **`selectionStart`** property of the {{domxref("HTMLInputElement")}} interface is a number that represents the beginning index of the selected text. When nothing is selected, then returns the position of the text input cursor (caret) inside of the `<input>` element.

> [!NOTE]
> According to the [WHATWG forms spec](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply) `selectionStart` property applies only to inputs of types text, search, URL, tel, and password. In modern browsers, throws an exception while setting `selectionStart` property on the rest of input types. Additionally, this property returns `null` while accessing `selectionStart` property on non-text input elements.

If `selectionStart` is greater than `selectionEnd`, then both are
treated as the value of `selectionEnd`.

## Value

A non-negative number.

## Examples

### HTML

```html
<!-- use selectionStart on non text input element -->
<label for="color">selectionStart property on type=color</label>
<input id="color" type="color" />

<!-- use selectionStart on text input element -->
<fieldset>
  <legend>selectionStart property on type=text</legend>
  <label for="statement">Select 'mdn' word from the text : </label>
  <input
    type="text"
    id="statement"
    value="The mdn is a documentation repository." />
  <button id="statement-btn">Select mdn text</button>
</fieldset>
```

### JavaScript

```js
const inputElement = document.getElementById("statement");
const statementBtn = document.getElementById("statement-btn");
const colorStart = document.getElementById("color");

statementBtn.addEventListener("click", () => {
  inputElement.selectionStart = 4;
  inputElement.selectionEnd = 7;
  inputElement.focus();
});

// open browser console to verify output
console.log(colorStart.selectionStart); // Output : null
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTextAreaElement.selectionStart")}} property
- {{domxref("HTMLInputElement.selectionEnd")}} property
- {{domxref("HTMLInputElement.setSelectionRange")}} method
