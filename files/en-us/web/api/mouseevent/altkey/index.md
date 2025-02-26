---
title: "MouseEvent: altKey property"
short-title: altKey
slug: Web/API/MouseEvent/altKey
page-type: web-api-instance-property
browser-compat: api.MouseEvent.altKey
---

{{APIRef("UI Events")}}

The **`MouseEvent.altKey`** read-only property is a boolean value that indicates whether the <kbd>alt</kbd> key was pressed or not when a given mouse event occurs.

Be aware that the browser can't always detect the <kbd>alt</kbd> key on some operating systems.
On some Linux variants, for example, a left mouse click combined with the <kbd>alt</kbd> key is used to move or resize windows.

> [!NOTE]
> On Macintosh keyboards, this key is also known as the <kbd>option</kbd> key.

## Value

A boolean value, where `true` indicates that the key is pressed, and `false` indicates that the key is _not_ pressed.

## Examples

This example logs the `altKey` property when you trigger a {{domxref("Element/click_event", "click")}} event.

### HTML

```html
<p>Click anywhere to test the <code>altKey</code> property.</p>
<p id="log"></p>
```

### JavaScript

```js
let log = document.querySelector("#log");
document.addEventListener("click", logKey);

function logKey(e) {
  log.textContent = `The alt key is pressed: ${e.altKey}`;
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("MouseEvent") }}
