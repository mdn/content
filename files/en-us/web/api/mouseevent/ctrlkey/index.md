---
title: "MouseEvent: ctrlKey property"
short-title: ctrlKey
slug: Web/API/MouseEvent/ctrlKey
page-type: web-api-instance-property
browser-compat: api.MouseEvent.ctrlKey
---

{{APIRef("UI Events")}}

The **`MouseEvent.ctrlKey`** read-only property is a boolean value that indicates whether the <kbd>ctrl</kbd> key was pressed or not when a given mouse event occurs.

On Macintosh keyboards, this key is labeled the <kbd>control</kbd> key. Also, note that on a Mac, a click combined with the <kbd>control</kbd> key is intercepted by the operating system and used to open a context menu, so `ctrlKey` is not detectable on click events.

## Value

A boolean value, where `true` indicates that the key is pressed, and `false` indicates that the key is _not_ pressed.

## Examples

This example logs the `ctrlKey` property when you trigger a {{domxref("Element/mousemove_event", "mousemove")}} event.

### HTML

```html
<p id="log">The ctrl key was pressed while the cursor was moving: false</p>
```

### JavaScript

```js
const log = document.querySelector("#log");
window.addEventListener("mousemove", logKey);

function logKey(e) {
  log.textContent = `The ctrl key was pressed while the cursor was moving: ${e.ctrlKey}`;
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
