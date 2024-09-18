---
title: "HTMLTextAreaElement: setSelectionRange() method"
short-title: setSelectionRange()
slug: Web/API/HTMLTextAreaElement/setSelectionRange
page-type: web-api-instance-method
browser-compat: api.HTMLTextAreaElement.setSelectionRange
---

{{APIRef("HTML DOM")}}

The **setSelectionRange()`** method of the {{domxref("HTMLTextAreaElement")}} interface sets the start and end positions of the current text selection, and optionally the direction, in an {{HTMLElement("textarea")}} element. The direction indicates the in which selection should be considered to have occurred; for example, that the selection was set by the user clicking and dragging from the end of the selected text toward the beginning. In addition, the {{domxref("HTMLTextAreaElement.select_event", "select")}} and {{domxref("HTMLTextAreaElement.selectionchange_event", "selectchange")}} events are fired.

This method also updates the {{domxref("HTMLTextAreaElement.selectionStart")}}, {{domxref("HTMLTextAreaElement.selectionEnd")}}, and {{domxref("HTMLTextAreaElement.selectionDirection")}} properties.

> [!NOTE]
> The `<textarea>` must be focused to enable selecting a subsection of the text to be selected using the `setSelectionRange()` method. Setting focus also fires a `selectchange` event.

To select **all** of the text of an `<textarea>` element, use the {{domxref("HTMLTextAreaElement.select()")}} method.

## Syntax

```js-nolint
setSelectionRange(selectionStart, selectionEnd)
setSelectionRange(selectionStart, selectionEnd, selectionDirection)
```

### Parameters

- {{domxref("HTMLTextAreaElement.selectionStart", "selectionStart")}}

  - : The index of the first selected character. An index greater than the length
    of the element's value is treated as pointing to the end of the value.

- {{domxref("HTMLTextAreaElement.selectionEnd", "selectionEnd")}}

- : The index of the character _after_ the last selected character. An
  index greater than the length of the element's value is treated as pointing to the end
  of the value. If `selectionEnd` is less than `selectionStart`, then both are treated as the value of `selectionEnd`.

- {{domxref("HTMLTextAreaElement.selectionDirection", "selectionDirection")}} {{optional_inline}}

- : The keyword `"forward"`, `"backward"`, or the default `"none"` — indicating the direction in which the selection is considered to have been performed.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const textarea = document.getElementById("text-box");
const chars = textarea.textLength;
// if the value is more than 10 characters long
if (chars > 10) {
  // Element must be focused to select a range of text within it
  textarea.focus();
  // select the text between the fifth character from the start and
  // the fifth character from the end
  textarea.setSelectionRange(5, chars - 5);
} else {
  // otherwise select all the text
  textarea.select();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("textarea")}}
- {{domxref("HTMLTextAreaElement")}}
- {{domxref("HTMLTextAreaElement.select()")}}
- {{domxref("HTMLTextAreaElement.textLength")}}
- {{domxref("Selection")}}
- {{cssxref("::selection")}} pseudo-element
