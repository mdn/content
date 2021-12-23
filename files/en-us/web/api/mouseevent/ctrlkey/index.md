---
title: MouseEvent.ctrlKey
slug: Web/API/MouseEvent/ctrlKey
tags:
  - API
  - DOM
  - DOM Events
  - MouseEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.MouseEvent.ctrlKey
---
{{APIRef("DOM Events")}}

The **`MouseEvent.ctrlKey`** read-only property is a boolean value that indicates whether the <kbd>ctrl</kbd> key was pressed or not when a given mouse event occurs.

> **Note:** On Macintosh keyboards, this key is the <kbd>control</kbd> key.

## Value

A boolean value, where `true` indicates that the key is pressed, and `false` indicates that the key is _not_ pressed.

## Example

This example logs the `ctrlKey` property when you trigger a {{Event("click")}} event.

### HTML

```html
<p>Click anywhere to test the <code>ctrlKey</code> property.</p>
<p id="log"></p>
```

### JavaScript

```js
let log = document.querySelector('#log');
document.addEventListener('click', logKey);

function logKey(e) {
  log.textContent = `The ctrl key is pressed: ${e.ctrlKey}`;
}
```

### Result

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("MouseEvent") }}
