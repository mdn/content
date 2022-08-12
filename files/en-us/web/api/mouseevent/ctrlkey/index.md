---
title: MouseEvent.ctrlKey
slug: Web/API/MouseEvent/ctrlKey
page-type: web-api-instance-property
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
{{APIRef("UI Events")}}

The **`MouseEvent.ctrlKey`** read-only property is a boolean value that indicates whether the <kbd>ctrl</kbd> key was pressed or not when a given mouse event occurs.

> **Note:** On Macintosh keyboards, this key is the <kbd>control</kbd> key.

## Value

A boolean value, where `true` indicates that the key is pressed, and `false` indicates that the key is _not_ pressed.

## Examples

This example logs the `ctrlKey` property when you trigger a {{domxref("Element/click_event", "click")}} event.

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

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("MouseEvent") }}
