---
title: HTMLInputElement.setSelectionRange()
slug: Web/API/HTMLInputElement/setSelectionRange
page-type: web-api-instance-method
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - Method
  - Reference
  - Text Field Selection API
browser-compat: api.HTMLInputElement.setSelectionRange
---
{{APIRef("HTML DOM")}}

The **`HTMLInputElement.setSelectionRange()`** method sets the
start and end positions of the current text selection in an {{HTMLElement("input")}}
or {{HTMLElement("textarea")}} element.

Optionally, in newer browser versions, you can specify the direction in which selection
should be considered to have occurred. This lets you indicate, for example, that the
selection was set by the user clicking and dragging from the end of the selected text
toward the beginning.

This method updates the `HTMLInputElement.selectionStart`,
`selectionEnd`, and `selectionDirection` properties in one call.

Note that according to the [WHATWG forms spec](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply) `selectionStart`, `selectionEnd` properties and
`setSelectionRange` method apply only to inputs of types text, search, URL,
tel and password. Chrome, starting from version 33, throws an exception while accessing
those properties and method on the rest of input types. For example, on input of type
number: "Failed to read the 'selectionStart' property from 'HTMLInputElement': The input
element's type ('number') does not support selection".

If you wish to select **all** text of an input element, you can use the [HTMLInputElement.select()](/en-US/docs/Web/API/HTMLInputElement/select)
method instead.

## Syntax

```js
setSelectionRange(selectionStart, selectionEnd)
setSelectionRange(selectionStart, selectionEnd, selectionDirection)
```

### Parameters

If `selectionEnd` is less than `selectionStart`, then both are
treated as the value of `selectionEnd`.

- `selectionStart`
  - : The 0-based index of the first selected character. An index greater than the length
    of the element's value is treated as pointing to the end of the value.
- `selectionEnd`
  - : The 0-based index of the character _after_ the last selected character. An
    index greater than the length of the element's value is treated as pointing to the end
    of the value.
- `selectionDirection` {{optional_inline}}

  - : A string indicating the direction in which the selection is considered to have been
    performed. Possible values:

    - `"forward"`
    - `"backward"`
    - `"none"` if the direction is unknown or irrelevant. Default value.

### Return value

None ({{jsxref("undefined")}}).

## Examples

Click the button in this example to select the third, fourth, and fifth characters in
the text box ("zil" in the word "Mozilla").

### HTML

```html
<input type="text" id="text-box" size="20" value="Mozilla">
<button onclick="selectText()">Select text</button>
```

### JavaScript

```js
function selectText() {
  const input = document.getElementById('text-box');
  input.focus();
  input.setSelectionRange(2, 5);
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
