---
title: TextEncoder
slug: Web/API/TextEncoder
page-type: web-api-interface
browser-compat: api.TextEncoder
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

The **`TextEncoder`** interface enables you to {{glossary("character encoding", "encode")}} a JavaScript string using {{glossary("UTF-8")}}.

## Constructor

- {{DOMxRef("TextEncoder.TextEncoder", "TextEncoder()")}}
  - : Creates and returns a new `TextEncoder`.

## Instance properties

_The `TextEncoder` interface doesn't inherit any properties._

- {{DOMxRef("TextEncoder.encoding")}} {{ReadOnlyInline}}
  - : Always returns `utf-8`.

## Instance methods

_The `TextEncoder` interface doesn't inherit any methods_.

- {{DOMxRef("TextEncoder.encode()")}}
  - : Takes a string as input, and returns a {{jsxref("Uint8Array")}} containing the string encoded using UTF-8.
- {{DOMxRef("TextEncoder.encodeInto()")}}
  - : Takes a string to encode and a destination {{jsxref("Uint8Array")}} to put the resulting UTF-8 encoded text into, and returns an object indicating the progress of the encoding.
    This is potentially more performant than the older `encode()` method.

## Examples

### Encoding to UTF-8

This example shows how to encode the "€" character to UTF-8.

```html
<button id="encode">Encode</button>
<button id="reset">Reset</button>
<div id="output"></div>
```

```css hidden
div {
  margin: 1rem 0;
}
```

```js
const utf8encoder = new TextEncoder();
const text = "€";

const output = document.querySelector("#output");
const encodeButton = document.querySelector("#encode");
encodeButton.addEventListener("click", () => {
  output.textContent = utf8encoder.encode(text);
});

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  window.location.reload();
});
```

{{embedlivesample("Encoding to UTF-8")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("TextDecoder")}} interface describing the inverse operation.
