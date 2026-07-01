---
title: "HTMLInputElement: setSelectionRange() method"
short-title: setSelectionRange()
slug: Web/API/HTMLInputElement/setSelectionRange
page-type: web-api-instance-method
browser-compat: api.HTMLInputElement.setSelectionRange
---

{{APIRef("HTML DOM")}}

The **`HTMLInputElement.setSelectionRange()`** method sets the start and end positions of the current text selection in an {{HTMLElement("input")}} or {{HTMLElement("textarea")}} element. This updates the selection state immediately, though the visual highlight only appears when the element is focused.

Optionally, you can specify the direction in which selection should be considered to have occurred. This lets you indicate, for example, that the selection was set by the user clicking and dragging from the end of the selected text toward the beginning.

This method updates the {{domxref("HTMLInputElement.selectionStart")}}, {{domxref("HTMLInputElement.selectionEnd")}}, and {{domxref("HTMLInputElement.selectionDirection")}} properties in one call, regardless of whether the element is focused. The visual selection highlight will only appear when the element has focus.

The element must be of one of the following input types: [`password`](/en-US/docs/Web/HTML/Reference/Elements/input/password), [`search`](/en-US/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/en-US/docs/Web/HTML/Reference/Elements/input/tel), [`text`](/en-US/docs/Web/HTML/Reference/Elements/input/text), or [`url`](/en-US/docs/Web/HTML/Reference/Elements/input/url). Otherwise the browser throws an `InvalidStateError` exception.

If you wish to select **all** text of an input element, you can use the [HTMLInputElement.select()](/en-US/docs/Web/API/HTMLInputElement/select) method instead.

## Syntax

```js-nolint
setSelectionRange(selectionStart, selectionEnd)
setSelectionRange(selectionStart, selectionEnd, selectionDirection)
```

### Parameters

- `selectionStart`
  - : The 0-based index of the first selected character. An index greater than the length
    of the element's value is treated as pointing to the end of the value.
- `selectionEnd`
  - : The 0-based index of the character _after_ the last selected character. An
    index greater than the length of the element's value is treated as pointing to the end
    of the value. If `selectionEnd` is less than `selectionStart`, then both are treated as the value of `selectionEnd`.

- `selectionDirection` {{optional_inline}}
  - : A string indicating the direction in which the selection is considered to have been
    performed. Possible values:
    - `"forward"`
    - `"backward"`
    - `"none"` if the direction is unknown or irrelevant. Default value.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the element is not one of the following input types: [`password`](/en-US/docs/Web/HTML/Reference/Elements/input/password), [`search`](/en-US/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/en-US/docs/Web/HTML/Reference/Elements/input/tel), [`text`](/en-US/docs/Web/HTML/Reference/Elements/input/text), or [`url`](/en-US/docs/Web/HTML/Reference/Elements/input/url).

## Examples

Click the button in this example to select the third, fourth, and fifth characters in
the text box ("zil" in the word "Mozilla").

### HTML

```html
<input type="text" id="text-box" size="20" value="Mozilla" />
<button>Select text</button>
```

### JavaScript

```js
function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.setSelectionRange(2, 5);
}

document.querySelector("button").addEventListener("click", selectText);
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
