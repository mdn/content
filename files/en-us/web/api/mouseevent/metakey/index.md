---
title: "MouseEvent: metaKey property"
short-title: metaKey
slug: Web/API/MouseEvent/metaKey
page-type: web-api-instance-property
browser-compat: api.MouseEvent.metaKey
---

{{APIRef("UI Events")}}

The **`MouseEvent.metaKey`** read-only property is a boolean value that indicates whether the <kbd>meta</kbd> key was pressed or not when a given mouse event occurs.

Be aware that many operating systems bind special functionality to the <kbd>meta</kbd> key, so this property may be `false` even when the key is actually pressed.
On Windows, for example, this key may open the Start menu.

> **Note:** On Macintosh keyboards, this key is the <kbd>command</kbd> key (<kbd>⌘</kbd>).
> On Windows keyboards, this key is the Windows key (<kbd>⊞</kbd>).

## Value

A boolean value, where `true` indicates that the key is pressed, and `false` indicates that the key is _not_ pressed.

## Examples

This example logs the `metaKey` property when you trigger a {{domxref("Element/click_event", "click")}} event.

### HTML

```html
<p>Click anywhere to test the <code>metaKey</code> property.</p>
<p id="log"></p>
```

### JavaScript

```js
let log = document.querySelector("#log");
document.addEventListener("click", logKey);

function logKey(e) {
  log.textContent = `The meta key is pressed: ${e.metaKey}`;
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
