---
title: DOMException()
slug: Web/API/DOMException/DOMException
tags:
  - API
  - Constructor
  - DOMException
  - Reference
browser-compat: api.DOMException.DOMException
---
{{ APIRef("DOM") }}

The **`DOMException()`** constructor returns a
`{{domxref("DOMException")}}` object with a specified message and name.

## Syntax

```js
var domException = new DOMException();
var domException = new DOMException(message);
var domException = new DOMException(message, name);
```

### Parameters

- `message` {{optional_inline}}
  - : A description of the exception. If not present, the empty string `''` is
    used.
- `name` {{optional_inline}}
  - : A {{domxref("DOMString")}}. If the specified name is a [standard error name](/en-US/docs/Web/API/DOMException#error_names), then getting the [`code`](/en-US/docs/Web/API/DOMException/code) property of the `DOMException` object will return the code number corresponding to the specified name.

### Return value

A newly created {{domxref("DOMException")}} object.

## Examples

In this example, pressing the button causes a custom `DOMException` to be thrown, which is then caught and the custom error message shown in an alert.

### HTML

```html
<button>Trigger DOM Exception</button>

<p id="output"></p>
```

### JavaScript

```js
const button = document.querySelector('button');

button.onclick = function() {
    try {
        throw new DOMException("Custom DOM Exception Triggered.");
    } catch(error) {
        document.querySelector("#output").textContent = `Error: ${error.message}`;
    }
}
```

### Result

{{ EmbedLiveSample('Examples', '100%', 100) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
