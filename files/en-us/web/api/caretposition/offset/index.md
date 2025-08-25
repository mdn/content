---
title: "CaretPosition: offset property"
short-title: offset
slug: Web/API/CaretPosition/offset
page-type: web-api-instance-property
browser-compat: api.CaretPosition.offset
---

{{APIRef("CSSOM view")}}

The **`offset`** property of the {{domxref("CaretPosition")}} interface returns an integer representing the offset of the selection in the caret position node.

This will be the character offset in a text node or the selected child node's index in an element node.

## Value

An integer.

## Examples

This example logs the `offsetNode` and `offset` of the caret position when clicking inside the input field.

```html
<input aria-label="text field" value="Click inside this input field" />
```

```html hidden
<pre id="log"></pre>
```

```css hidden
input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
}

#log {
  height: 200px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js
document.querySelector("input").addEventListener("click", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  const caret = document.caretPositionFromPoint?.(x, y);
  if (!caret) {
    log("Not supported");
    return;
  }

  const node = caret.offsetNode;
  const offset = caret.offset;

  log(`offsetNode: ${node}`);
  log(`offset: ${offset}`);
});
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

{{EmbedLiveSample("Examples", "", 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node")}}
- {{domxref("Document.caretPositionFromPoint()")}}
