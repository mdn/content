---
title: "HTMLInputElement: selectionEnd property"
short-title: selectionEnd
slug: Web/API/HTMLInputElement/selectionEnd
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.selectionEnd
---

{{APIRef("HTML DOM")}}

The **`selectionEnd`** property of the {{domxref("HTMLInputElement")}} interface specifies the end position of the current text selection in an {{HTMLElement("input")}} element. It is a number representing the zero-based index of the character immediately following the last selected character. The property can be used to retrieve or set the end position.

When nothing is selected, the value of both {{domxref("HTMLInputElement.selectionStart", "selectionStart")}} and `selectionEnd` is the position of the cursor (caret) inside the `<input>` element.

Setting `selectionEnd` to a value less than the current value of `selectionStart` updates both properties to the new value. Values greater than the length of the input's value are treated as the end of the value.

The `selectionEnd` property applies only to inputs of types `text`, `search`, `url`, `tel`, and `password`. On other input types, reading the property returns `null`, and setting it throws an `InvalidStateError` {{domxref("DOMException")}}.

The property value can be retrieved and set without the `<input>` having focus, but the element must have focus for the {{cssxref("::selection")}} pseudo-element to match the selected text.

Setting `selectionEnd` to a new value fires the {{domxref("HTMLInputElement.selectionchange_event", "selectionchange")}} and {{domxref("HTMLInputElement.select_event", "select")}} events.

## Value

A non-negative number.

## Examples

This example reports the selected text and its start and end positions. Select some text in the input, and then click the button.

### HTML

```html
<label for="text-box">Select some text:</label>
<input id="text-box" type="text" value="The quick brown fox." />
<button id="show-selection" type="button">Show selection</button>
<p id="output">No selection reported yet.</p>
```

### JavaScript

```js
const textBox = document.querySelector("#text-box");
const output = document.querySelector("#output");

document.querySelector("#show-selection").addEventListener("click", () => {
  const start = textBox.selectionStart;
  const end = textBox.selectionEnd;
  const selectedText = textBox.value.substring(start, end);

  output.textContent = `You selected "${selectedText}" (start: ${start}, end: ${end}).`;
});
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("input")}}
- {{domxref("HTMLInputElement")}}
- {{domxref("HTMLInputElement.selectionStart")}}
- {{domxref("HTMLInputElement.selectionDirection")}}
- {{domxref("HTMLInputElement.selectionchange_event", "selectionchange")}} event
- {{domxref("HTMLInputElement.select()")}}
- {{domxref("HTMLInputElement.setSelectionRange()")}}
- {{domxref("HTMLInputElement.setRangeText()")}}
- {{domxref("HTMLTextAreaElement.selectionEnd")}}
- {{domxref("Selection")}}
- {{cssxref("::selection")}} pseudo-element
