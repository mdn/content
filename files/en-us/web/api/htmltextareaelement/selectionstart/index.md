---
title: "HTMLTextAreaElement: selectionStart property"
short-title: selectionStart
slug: Web/API/HTMLTextAreaElement/selectionStart
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.selectionStart
---

{{APIRef("HTML DOM")}}

The **`selectionStart`** property of the {{domxref("HTMLTextAreaElement")}} interface specifies the start position of the current text selection in a {{HTMLElement("textarea")}} element. It is a number representing the zero-based index of the first selected character. The property can be used to retrieve or set the start position.

When nothing is selected, the value of both `selectionStart` and {{domxref("HTMLTextAreaElement.selectionEnd", "selectionEnd")}} is the position of the cursor (caret) inside the `<textarea>` element.

Setting `selectionStart` to a value greater than the current value of `selectionEnd` updates both properties to the new value. Values greater than the {{domxref("HTMLTextAreaElement.textLength", "textLength")}} are treated as `textLength`.

The property value can be retrieved and set without the `<textarea>` having focus, but the element must have focus for the {{cssxref("::selection")}} pseudo-element to match the selected text.

Setting `selectionStart` to a new value fires the {{domxref("HTMLTextAreaElement.selectionchange_event", "selectionchange")}} and {{domxref("HTMLTextAreaElement.select_event", "select")}} events.

## Value

A non-negative number.

## Examples

This example reports the selected text and its start and end positions. Select some text in the textarea, and then click the button.

### HTML

```html
<label for="text-box">Select some text:</label>
<textarea id="text-box" rows="3">The quick brown fox.</textarea>
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

- {{HTMLElement("textarea")}}
- {{domxref("HTMLTextAreaElement")}}
- {{domxref("HTMLTextAreaElement.selectionEnd")}}
- {{domxref("HTMLTextAreaElement.selectionDirection")}}
- {{domxref("HTMLTextAreaElement.textLength")}}
- {{domxref("HTMLTextAreaElement.selectionchange_event", "selectionchange")}} event
- {{domxref("HTMLTextAreaElement.select()")}}
- {{domxref("HTMLTextAreaElement.setSelectionRange()")}}
- {{domxref("HTMLTextAreaElement.setRangeText()")}}
- {{domxref("HTMLInputElement.selectionStart")}}
- {{domxref("Selection")}}
- {{cssxref("::selection")}} pseudo-element
