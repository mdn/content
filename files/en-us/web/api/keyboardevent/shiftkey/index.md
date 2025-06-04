---
title: "KeyboardEvent: shiftKey property"
short-title: shiftKey
slug: Web/API/KeyboardEvent/shiftKey
page-type: web-api-instance-property
browser-compat: api.KeyboardEvent.shiftKey
---

{{APIRef("UI Events")}}

The **`KeyboardEvent.shiftKey`** read-only property is a
boolean value that indicates if the <kbd>shift</kbd> key was pressed
(`true`) or not (`false`) when the event occurred.

The pressing of the shift key may change the {{domxref("KeyboardEvent/key", "key")}} of the event too. For example, pressing <kbd>B</kbd> generates `key: "b"`, while simultaneously pressing <kbd>Shift</kbd> generates `key: "B"`.

## Value

A boolean value.

## Examples

```html
<p>
  Press any character key, with or without holding down the SHIFT key.<br />
  You can also use the SHIFT key together with the ALT key.
</p>
<pre id="output"></pre>
```

```js
const output = document.getElementById("output");

function showChar(e) {
  output.textContent = `Key KeyDown: "${e.key}"
SHIFT key KeyDown: ${e.shiftKey}
`;
}

document.addEventListener("keydown", showChar);
```

{{EmbedLiveSample("examples", "", "400")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("KeyboardEvent") }}
