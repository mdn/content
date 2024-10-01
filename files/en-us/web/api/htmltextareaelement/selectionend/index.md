---
title: "HTMLTextAreaElement: selectionEnd property"
short-title: selectionEnd
slug: Web/API/HTMLTextAreaElement/selectionEnd
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.selectionEnd
---

{{APIRef("HTML DOM")}}

The **`selectionEnd`** property of the {{domxref("HTMLTextAreaElement")}} interface specifies the end position of the current text selection in a {{HTMLElement("textarea")}} element. It is a number representing the last index of the selected text. It can be used to both retrieve and set the index of the end of a `<textarea>`s selected text.

When nothing is selected, the value of both the {{domxref("HTMLTextAreaElement.selectionStart", "selectionStart")}} and `selectionEnd` is the position of the cursor (caret) inside the `<textarea>` element.

Setting `selectionEnd` to a value less than the current value of {{domxref("HTMLTextAreaElement.selectionStart", "selectionStart")}} updates both the `selectionEnd` and `selectionStart` properties to that value. If both value are less than 0, both properties are set to the {{domxref("HTMLTextAreaElement.textLength", "textLength")}} property value.

The property value can be retrieved and set without the `<textarea>` having focus, but the element does need to have focus for the {{cssxref("::selection")}} pseudo-element to match the selected text.

Setting the `selectionEnd` to a new value fires the {{domxref("HTMLTextAreaElement.selectionchange_event", "selectchange")}} and {{domxref("HTMLTextAreaElement.select_event", "select")}} events.

## Value

A non-negative number.

## Examples

```js
const textarea = document.getElementById("text-box");
const end = textarea.selectionEnd;
```

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
- {{domxref("HTMLTextAreaElement.selectionChange_event", "selectionChange")}} event
- {{domxref("HTMLTextAreaElement.select()")}}
- {{domxref("HTMLTextAreaElement.setSelectionRange()")}}
- {{domxref("HTMLTextAreaElement.setRangeText()")}}
- {{domxref("HTMLInputElement.selectionEnd")}}
- {{domxref("Selection")}}
- {{cssxref("::selection")}} pseudo-element
