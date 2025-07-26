---
title: "CaretPosition: getClientRect() method"
short-title: getClientRect()
slug: Web/API/CaretPosition/getClientRect
page-type: web-api-instance-method
browser-compat: api.CaretPosition.getClientRect
---

{{APIRef("CSSOM")}}

The `getClientRect()` method of the {{domxref("CaretPosition")}} interface returns the client rectangle for the caret range.

## Syntax

```js-nolint
getClientRect()
```

### Parameters

None.

### Return value

A {{domxref("DOMRect")}} object.

## Examples

### Get the caret's screen position

```html
<input aria-label="text field" value="Click inside this input field" />
```

```css
input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
}
```

```js
document.querySelector("input").addEventListener("click", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  const caret = document.caretPositionFromPoint?.(x, y);
  if (!caret) return;

  const rect = caret.getClientRect();

  console.dir("Caret bounding rect:", rect);
  console.log(`Caret is at (${rect.x.toFixed(2)}, ${rect.y.toFixed(2)})`);
});
```

{{EmbedLiveSample("get_client_rect", "", 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMRect")}}
- {{domxref("Document.caretPositionFromPoint()")}}
- {{domxref("Element.getBoundingClientRect()")}}
