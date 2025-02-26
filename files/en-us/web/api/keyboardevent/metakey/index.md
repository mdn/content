---
title: "KeyboardEvent: metaKey property"
short-title: metaKey
slug: Web/API/KeyboardEvent/metaKey
page-type: web-api-instance-property
browser-compat: api.KeyboardEvent.metaKey
---

{{APIRef("UI Events")}}

The **`KeyboardEvent.metaKey`** read-only property returning a
boolean value that indicates if the <kbd>Meta</kbd> key was pressed
(`true`) or not (`false`) when the event occurred. Some operating
systems may intercept the key so it is never detected.

> [!NOTE]
> On Macintosh keyboards, this is the <kbd>⌘ Command</kbd> key.

> [!NOTE]
> Before Firefox 118, the <kbd>⊞ Windows</kbd> key was handled
> as an "OS" key rather than the "Meta" key. `KeyboardEvent.metaKey` was
> `false` when the <kbd>⊞ Windows</kbd> key was pressed.

## Value

A boolean value.

## Examples

```html
<button onclick="ismetaKey(event)">Click me with the meta key</button>

<p id="output"></p>
```

```js
function ismetaKey(e) {
  document.querySelector("#output").textContent =
    `metaKey pressed? ${e.metaKey}`;
}
```

### Result

{{ EmbedLiveSample('Examples', 400, 90) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("KeyboardEvent") }}
