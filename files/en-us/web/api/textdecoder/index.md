---
title: TextDecoder
slug: Web/API/TextDecoder
page-type: web-api-interface
browser-compat: api.TextDecoder
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

The **`TextDecoder`** interface represents a decoder for a specific text encoding, such as `UTF-8`, `ISO-8859-2`, or `GBK`. A decoder takes an array of bytes as input and returns a JavaScript string.

## Constructor

- {{DOMxRef("TextDecoder.TextDecoder", "TextDecoder()")}}
  - : Creates and returns a new `TextDecoder`.

## Instance properties

_The `TextDecoder` interface doesn't inherit any properties._

- {{DOMxRef("TextDecoder.encoding")}} {{ReadOnlyInline}}
  - : A string containing the name of the character encoding system that this `TextDecoder` will use.
- {{DOMxRef("TextDecoder.fatal")}} {{ReadOnlyInline}}
  - : A boolean indicating whether the error mode is fatal.
- {{DOMxRef("TextDecoder.ignoreBOM")}} {{ReadOnlyInline}}
  - : A boolean indicating whether the [byte order mark](https://www.w3.org/International/questions/qa-byte-order-mark) is ignored.

## Instance methods

_The `TextDecoder` interface doesn't inherit any methods_.

- {{DOMxRef("TextDecoder.decode()")}}
  - : Decodes the given bytes into a JavaScript string and returns it.

## Examples

### Decoding UTF-8 text

This example shows how to decode the UTF-8 encoding of the character "𠮷".

```html
<button id="decode">Decode</button>
<button id="reset">Reset</button>
<div id="output"></div>
```

```css hidden
div {
  margin: 1rem 0;
}
```

```js
const utf8decoder = new TextDecoder(); // default 'utf-8'
const encodedText = new Uint8Array([240, 160, 174, 183]);

const output = document.querySelector("#output");
const decodeButton = document.querySelector("#decode");
decodeButton.addEventListener("click", () => {
  output.textContent = utf8decoder.decode(encodedText);
});

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  window.location.reload();
});
```

{{embedlivesample("Decoding UTF-8 text")}}

### Decoding non-UTF8 text

In this example, we decode the Russian text "Привет, мир!", which means "Hello, world." In our {{domxref("TextDecoder/TextDecoder", "TextDecoder()")}} constructor, we specify the Windows-1251 character encoding.

```html
<button id="decode">Decode</button>
<button id="reset">Reset</button>
<div id="decoded"></div>
```

```css hidden
div {
  margin: 1rem 0;
}
```

```js
const win1251decoder = new TextDecoder("windows-1251");
const encodedText = new Uint8Array([
  207, 240, 232, 226, 229, 242, 44, 32, 236, 232, 240, 33,
]);

const decoded = document.querySelector("#decoded");
const decodeButton = document.querySelector("#decode");
decodeButton.addEventListener("click", () => {
  decoded.textContent = win1251decoder.decode(encodedText);
});

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  window.location.reload();
});
```

{{embedlivesample("Decoding non-UTF8 text")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("TextEncoder")}} interface describing the inverse operation.
