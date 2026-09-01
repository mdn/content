---
title: "HTMLTextAreaElement: selectionEnd property"
short-title: selectionEnd
slug: Web/API/HTMLTextAreaElement/selectionEnd
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.selectionEnd
---

{{APIRef("HTML DOM")}}

The **`selectionEnd`** property of the {{domxref("HTMLTextAreaElement")}} interface specifies the end position of the current text selection in a {{HTMLElement("textarea")}} element.

## Value

A non-negative number.

## Description

The `selectionEnd` property is a number representing the zero-based index of the character immediately following the last selected character in a `<textarea>`. The property can be used to retrieve or set the end position.

When nothing is selected, the value of both {{domxref("HTMLTextAreaElement.selectionStart", "selectionStart")}} and `selectionEnd` is the position of the cursor (caret) inside the `<textarea>` element.

Setting `selectionEnd` to a value less than the current value of `selectionStart` updates both properties to the new value. Values greater than the {{domxref("HTMLTextAreaElement.textLength", "textLength")}} are treated as `textLength`.

The property value can be retrieved and set without the `<textarea>` having focus, but the element must have focus for the {{cssxref("::selection")}} pseudo-element to match the selected text.

Setting `selectionEnd` to a new value fires the {{domxref("HTMLTextAreaElement.selectionchange_event", "selectionchange")}} and {{domxref("HTMLTextAreaElement.select_event", "select")}} events.

## Examples

### Basic usage

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
- {{domxref("HTMLTextAreaElement.selectionStart")}}
- {{domxref("HTMLTextAreaElement.selectionDirection")}}
- {{domxref("HTMLTextAreaElement.textLength")}}
- {{domxref("HTMLTextAreaElement.selectionchange_event", "selectionchange")}} event
- {{domxref("HTMLTextAreaElement.select()")}}
- {{domxref("HTMLTextAreaElement.setSelectionRange()")}}
- {{domxref("HTMLTextAreaElement.setRangeText()")}}
- {{domxref("HTMLInputElement.selectionEnd")}}
- {{domxref("Selection")}}
- {{cssxref("::selection")}} pseudo-element
