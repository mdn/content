---
title: "CaretPosition: getClientRect() method"
short-title: getClientRect()
slug: Web/API/CaretPosition/getClientRect
page-type: web-api-instance-method
browser-compat: api.CaretPosition.getClientRect
---

{{APIRef("CSSOM view")}}

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

  const rect = caret.getClientRect();

  log(`Caret bounding rect: ${JSON.stringify(rect)}`);
  log(`Caret is at (${rect.x.toFixed(2)}, ${rect.y.toFixed(2)})`);
});
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

{{EmbedLiveSample("Get the caret's screen position", "", 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMRect")}}
- {{domxref("Document.caretPositionFromPoint()")}}
- {{domxref("Element.getBoundingClientRect()")}}
