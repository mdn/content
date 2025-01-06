---
title: "HTMLTextAreaElement: setRangeText() method"
short-title: setRangeText()
slug: Web/API/HTMLTextAreaElement/setRangeText
page-type: web-api-instance-method
browser-compat: api.HTMLTextAreaElement.setRangeText
---

{{APIRef("HTML DOM")}}

The **`setRangeText()`** method of the {{domxref("HTMLTextAreaElement")}} interface replaces a
range of text in an {{HTMLElement("textarea")}} element with new text passed as the argument.

Additional optional parameters include the start of the section of text to change, the end of the section, and a keyword defining what part of the `<textarea>` should be selected after the text is updated. If the `startSelection` and `endSelection` arguments are not provided, the range is assumed to be the selection.

The final argument determines how the selection will be set after the text has been replaced. The possible values are `"select"`, which selects the newly inserted text, `"start"`, which moves the selection to just before the inserted text, `"end"`, which moves the selection to just after the inserted text, or the default, `"preserve"`, which tries to preserve the selection.

In addition, the {{domxref("HTMLTextAreaElement.select_event", "select")}} and {{domxref("HTMLTextAreaElement.selectionchange_event", "selectchange")}} events are fired.

## Syntax

```js-nolint
setRangeText(replacement)
setRangeText(replacement, startSelection)
setRangeText(replacement, startSelection, endSelection)
setRangeText(replacement, startSelection, endSelection, selectMode)
```

### Parameters

- `replacement`
  - : The string to insert.
- {{domxref("HTMLTextAreaElement.selectionStart", "selectionStart")}} {{optional_inline}}
  - : The index of the first selected character. An index greater than the length
    of the element's value is treated as pointing to the end of the value.
- {{domxref("HTMLTextAreaElement.selectionEnd", "selectionEnd")}} {{optional_inline}}
  - : The index of the character _after_ the last selected character. An
    index greater than the length of the element's value is treated as pointing to the end
    of the value. If `selectionEnd` is less than `selectionStart`, then both are treated as the value of `selectionEnd`.
- `selectMode` {{optional_inline}}
  - : A keyword, either `select`, `start`, `end`, or the default `preserve`, defining how the selection should be set after the text has been replaced.

### Return value

None ({{jsxref("undefined")}}).

## Examples

Click the button in this example to replace part of the text in the text box. The newly
inserted text will be highlighted (selected) afterwards.

### HTML

```html
<label for="ta">Example text input:</label>
<textarea id="ta">
  This text has NOT been updated.
</textarea>
<button id="btn">Update text</button>
```

### JavaScript

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  changeText();
});

function changeText() {
  const textarea = document.getElementById("ta");
  textarea.focus();
  textarea.setRangeText("ALREADY", 14, 17, "select");
}
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
- {{domxref("HTMLTextAreaElement.select()")}}
- {{domxref("HTMLTextAreaElement.setSelectionRange()")}}
- {{domxref("HTMLTextAreaElement.textLength")}}
- {{domxref("Selection")}}
- {{cssxref("::selection")}} pseudo-element
