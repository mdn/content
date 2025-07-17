---
title: "HTMLTextAreaElement: selectionDirection property"
short-title: selectionDirection
slug: Web/API/HTMLTextAreaElement/selectionDirection
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.selectionDirection
---

<!--  -->

{{APIRef("HTML DOM")}}

The **`selectionDirection`** property of the {{domxref("HTMLTextAreaElement")}} interface specifies the current direction of the selection. The possible values are `"forward"`, `"backward"`, and `"none"`. The `forward` value indicates the selection was performed in the start-to-end direction of the current locale, with `backward` indicating the opposite direction. The `none` value occurs if the direction is unknown. It can be used to both retrieve and change the direction of the `<textarea>`s selected text.

Setting the `selectionDirection` to a new value fires the {{domxref("HTMLTextAreaElement.selectionchange_event", "selectchange")}} and {{domxref("HTMLTextAreaElement.select_event", "select")}} events.

## Value

A string; `"forward"`, `"backward"`, or `"none"`.

## Examples

```js
const textarea = document.getElementById("text-box");
const end = textarea.selectionDirection;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("textarea")}}
- {{domxref("HTMLTextAreaElement")}}
- {{domxref("HTMLTextAreaElement.selectionStart")}}
- {{domxref("HTMLTextAreaElement.selectionEnd")}}
- {{domxref("HTMLTextAreaElement.textLength")}}
- {{domxref("HTMLTextAreaElement.select()")}}
- {{domxref("HTMLTextAreaElement.setSelectionRange()")}}
- {{domxref("HTMLTextAreaElement.setRangeText()")}}
- {{domxref("HTMLInputElement.selectionDirection")}}
- {{domxref("Selection")}}
- {{cssxref("::selection")}} pseudo-element
