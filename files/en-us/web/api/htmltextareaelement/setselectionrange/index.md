---
title: "HTMLTextAreaElement: setSelectionRange() method"
short-title: setSelectionRange()
slug: Web/API/HTMLTextAreaElement/setSelectionRange
page-type: web-api-instance-method
browser-compat: api.HTMLTextAreaElement.setSelectionRange
---

{{APIRef("HTML DOM")}}

The **`setSelectionRange()`** method of the {{domxref("HTMLTextAreaElement")}} interface sets the start and end positions of the current text selection in a {{HTMLElement("textarea")}} element.

For general information about this method, see {{domxref("HTMLInputElement.setSelectionRange()")}}.

## Syntax

```js-nolint
setSelectionRange(selectionStart, selectionEnd)
setSelectionRange(selectionStart, selectionEnd, selectionDirection)
```

### Parameters

- `selectionStart`
  - : The 0-based index of the first selected character. An index greater than the length of the element's value is treated as pointing to the end of the value. See the {{domxref("HTMLTextAreaElement/selectionStart", "selectionStart")}} property.
- `selectionEnd`
  - : The 0-based index of the character _after_ the last selected character. An index greater than the length of the element's value is treated as pointing to the end of the value. If `selectionEnd` is less than `selectionStart`, then both are treated as the value of `selectionEnd`. See the {{domxref("HTMLTextAreaElement/selectionEnd", "selectionEnd")}} property.
- `selectionDirection` {{optional_inline}}
  - : A string indicating the direction in which the selection is considered to have been performed. See the {{domxref("HTMLTextAreaElement/selectionDirection", "selectionDirection")}} property. Possible values:
    - `"forward"`
    - `"backward"`
    - `"none"` if the direction is unknown or irrelevant. Default value.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("textarea")}}
- {{domxref("HTMLTextAreaElement")}}
- {{domxref("Selection")}}
