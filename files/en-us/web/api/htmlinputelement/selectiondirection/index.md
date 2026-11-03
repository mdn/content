---
title: "HTMLInputElement: selectionDirection property"
short-title: selectionDirection
slug: Web/API/HTMLInputElement/selectionDirection
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.selectionDirection
---

{{APIRef("HTML DOM")}}

The **`selectionDirection`** property of the {{domxref("HTMLInputElement")}} interface is a string that indicates the direction in which the user is selecting the text.

## Value

A string. It can have one of the following values:

- `forward`
  - : The user is extending the selection towards the end of the input text.
- `backward`
  - : The user is extending the selection towards the start of the input text.
- `none`
  - : The user is not extending the selection.

On Windows, the direction indicates the position of the caret relative to the selection: a "forward" selection has the caret at the end of the selection and a "backward" selection has the caret at the start of the selection. Windows has no "none" direction.

On Mac, the direction indicates which end of the selection is affected when the user adjusts the size of the selection using the arrow keys with the Shift modifier: the "forward" direction means the end of the selection is modified, and the "backward" direction means the start of the selection is modified. The "none" direction is the default on Mac, it indicates that no particular direction has yet been selected. The user sets the direction implicitly when first adjusting the selection, based on which directional arrow key was used.

When nothing is selected (the selection is a single caret), how the value of `selectionDirection` is determined is not consistently implemented and is generally not meaningful.

Setting `selectionDirection` to a new value fires the {{domxref("HTMLInputElement.selectionchange_event", "selectionchange")}} and {{domxref("HTMLInputElement.select_event", "select")}} events.

The `selectionDirection` property applies only to inputs of types `text`, `search`, `url`, `tel`, and `password`. On other input types, reading the property returns `null`, and setting it throws an `InvalidStateError` {{domxref("DOMException")}}.

## Examples

### HTML

```html
<label for="selectionDirection">selectionDirection property</label>
<input type="text" id="selectionDirection" value="MDN" />
<p id="direction"></p>
```

### JavaScript

```js
const textSelectionDirection = document.querySelector("#selectionDirection");
const pConsole = document.querySelector("#direction");
pConsole.textContent = `Selection direction : ${textSelectionDirection.selectionDirection}`;
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTextAreaElement.selectionDirection")}} property
- {{domxref("HTMLInputElement.selectionStart")}} property
- {{domxref("HTMLInputElement.selectionEnd")}} property
- {{domxref("HTMLInputElement.setSelectionRange")}} method
