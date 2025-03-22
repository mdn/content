---
title: "HTMLInputElement: setRangeText() method"
short-title: setRangeText()
slug: Web/API/HTMLInputElement/setRangeText
page-type: web-api-instance-method
browser-compat: api.HTMLInputElement.setRangeText
---

{{APIRef("HTML DOM")}}

The **`HTMLInputElement.setRangeText()`** method replaces a
range of text in an {{HTMLElement("input")}} or {{HTMLElement("textarea")}} element with
a new string.

## Syntax

```js-nolint
setRangeText(replacement)
setRangeText(replacement, start)
setRangeText(replacement, start, end)
setRangeText(replacement, start, end, selectMode)
```

### Parameters

- `replacement`
  - : The string to insert.
- `start` {{optional_inline}}
  - : The 0-based index of the first character to replace. Defaults to the current
    `selectionStart` value (the start of the user's current selection).
- `end` {{optional_inline}}
  - : The 0-based index of the character _after_ the last character to replace.
    Defaults to the current `selectionEnd` value (the end of the user's current
    selection).
- `selectMode` {{optional_inline}}

  - : A string defining how the selection should be set after the text has been replaced.
    Possible values:

    - `"select"` selects the newly inserted text.
    - `"start"` moves the selection to just before the inserted text.
    - `"end"` moves the selection to just after the inserted text.
    - `"preserve"` attempts to preserve the selection. This is the default.

### Return value

None ({{jsxref("undefined")}}).

## Examples

Click the button in this example to replace part of the text in the text box. The newly
inserted text will be highlighted (selected) afterwards.

### HTML

```html
<input
  type="text"
  id="text-box"
  size="30"
  value="This text has NOT been updated." />
<button onclick="selectText()">Update text</button>
```

### JavaScript

```js
function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.setRangeText("ALREADY", 14, 17, "select");
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("input")}}
- {{HTMLElement("textarea")}}
- {{domxref("HTMLInputElement")}}
- {{domxref("Selection")}}
