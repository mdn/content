---
title: KeyboardEvent.metaKey
slug: Web/API/KeyboardEvent/metaKey
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - MouseEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.KeyboardEvent.metaKey
---
{{APIRef("UI Events")}}

The **`KeyboardEvent.metaKey`** read-only property returning a
boolean value that indicates if the <kbd>Meta</kbd> key was pressed
(`true`) or not (`false`) when the event occurred. Some operating
systems may intercept the key so it is never detected.

> **Note:** On Macintosh keyboards, this is the <kbd>⌘ Command</kbd> key.

> **Warning:** At least as of Firefox 48, the <kbd>⊞ Windows</kbd> key is no longer considered the
> "Meta" key. `KeyboardEvent.metaKey` is `false` when the <kbd>⊞
> Windows</kbd> key is pressed.

## Value

A boolean value.

## Examples

```html
<button onclick="ismetaKey(event)">Click me with the meta key</button>

<p id="output"></p>
```

```js
function ismetaKey(e) {
  document.querySelector("#output").textContent = `metaKey pressed? ${e.metaKey}`;
}
```

#### Result

{{ EmbedLiveSample('Examples', 400, 90) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("KeyboardEvent") }}
