---
title: "CaretPosition: offsetNode property"
short-title: offsetNode
slug: Web/API/CaretPosition/offsetNode
page-type: web-api-instance-property
browser-compat: api.CaretPosition.offsetNode
---

The **`offsetNode`** property of the {{domxref("CaretPosition")}} interface returns a {{domxref("Node")}} containing the found node at the caret's position.

## Value

A {{domxref("Node")}}.

## Examples

This example logs the `offsetNode` and `offset` of the caret position when clicking inside the input field

```html
<input
  aria-label="text field"
  value="Click inside this input field"
  style="width: 100%; padding: 10px; font-size: 16px; box-sizing: border-box" />
```

```js
document.querySelector("input").addEventListener("click", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  const caret = document.caretPositionFromPoint?.(x, y);
  if (!caret) return;

  const node = caret.offsetNode;
  const offset = caret.offset;

  console.dir("offsetNode:", node);
  console.log("offset:", offset);
});
```

{{EmbedLiveSample("offsetnode", "", 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node")}}
- {{domxref("Document.caretPositionFromPoint()")}}
