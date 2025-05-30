---
title: "KeyboardEvent: ctrlKey property"
short-title: ctrlKey
slug: Web/API/KeyboardEvent/ctrlKey
page-type: web-api-instance-property
browser-compat: api.KeyboardEvent.ctrlKey
---

{{APIRef("UI Events")}}

The **`KeyboardEvent.ctrlKey`** read-only property returns a
boolean value that indicates if the <kbd>control</kbd> key was pressed
(`true`) or not (`false`) when the event occurred.

## Value

A boolean value.

## Examples

```html
<p>
  Press any character key, with or without holding down the CTRL key.<br />
  You can also use the SHIFT key together with the CTRL key.
</p>
<pre id="output"></pre>
```

```js
const output = document.getElementById("output");

function showChar(e) {
  output.textContent = `Key KeyDown: ${String.fromCharCode(e.charCode)}
charCode: ${e.charCode}
CTRL key KeyDown: ${e.ctrlKey}
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
