---
title: "HTMLTextAreaElement: selectionStart property"
short-title: selectionStart
slug: Web/API/HTMLTextAreaElement/selectionStart
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.selectionStart
---

{{APIRef("HTML DOM")}}

The **`selectionStart`** property of the {{domxref("HTMLTextAreaElement")}} interface specifies the start position of the current text selection in a {{HTMLElement("textarea")}} element. It is a number representing the beginning index of the selected text. It can be used to both retrieve and set the start of the index of the beginning of a `<textarea>`s selected text.

When nothing is selected, the value of both the `selectionStart` and {{domxref("HTMLTextAreaElement.selectionEnd", "selectionEnd")}} is the position of the cursor (caret) inside the `<textarea>` element.

Setting `selectionStart` to a value greater then the current value of {{domxref("HTMLTextAreaElement.selectionEnd", "selectionEnd")}} updates both the `selectionStart` and `selectionEnd` properties to that value. If that value is equal to or greater than the {{domxref("HTMLTextAreaElement.textLength", "textLength")}}, both properties are both set to the `textLength` property value.

The property value can be retrieved and set without the `<textarea>` having focus, but the element does need to have focus for the {{cssxref("::selection")}} pseudo-element to match the selected text.

Setting the `selectionStart` to a new value fires the {{domxref("HTMLTextAreaElement.selectionchange_event", "selectchange")}} and {{domxref("HTMLTextAreaElement.select_event", "select")}}events.

## Value

A non-negative number.

## Examples

```js
const textarea = document.getElementById("text-box");
const start = textarea.selectionStart;
```

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
- {{domxref("HTMLTextAreaElement.select()")}}
- {{domxref("HTMLTextAreaElement.setSelectionRange()")}}
- {{domxref("HTMLTextAreaElement.setRangeText()")}}
- {{domxref("HTMLInputElement.selectionStart")}}
- {{domxref("Selection")}}
- {{cssxref("::selection")}} pseudo-element
