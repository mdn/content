---
title: "KeyboardEvent: altKey property"
short-title: altKey
slug: Web/API/KeyboardEvent/altKey
page-type: web-api-instance-property
browser-compat: api.KeyboardEvent.altKey
---

{{APIRef("UI Events")}}

The **`KeyboardEvent.altKey`** read-only property is a
boolean value that indicates if the <kbd>alt</kbd> key (<kbd>Option</kbd> or <kbd>⌥</kbd> on macOS) was pressed (`true`) or not (`false`) when
the event occurred.

## Value

A boolean value.

## Examples

```html
<p>
  Press any character key, with or without holding down the ALT key.<br />
  You can also use the SHIFT key together with the ALT key.
</p>
<pre id="output"></pre>
```

```js
const output = document.getElementById("output");

function showChar(e) {
  output.textContent = `Key KeyDown: ${String.fromCharCode(e.charCode)}
charCode: ${e.charCode}
ALT key KeyDown: ${e.altKey}
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
