---
title: "DOMException: DOMException() constructor"
short-title: DOMException()
slug: Web/API/DOMException/DOMException
page-type: web-api-constructor
browser-compat: api.DOMException.DOMException
---

{{ APIRef("DOM") }}

The **`DOMException()`** constructor returns a
{{domxref("DOMException")}} object with a specified message and name.

## Syntax

```js-nolint
new DOMException()
new DOMException(message)
new DOMException(message, name)
```

### Parameters

- `message` {{optional_inline}}
  - : A description of the exception. If not present, the empty string `''` is
    used.
- `name` {{optional_inline}}
  - : A string. If the specified name is a [standard error name](/en-US/docs/Web/API/DOMException#error_names), then getting the [`code`](/en-US/docs/Web/API/DOMException/code) property of the `DOMException` object will return the code number corresponding to the specified name.

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
const button = document.querySelector("button");

button.onclick = () => {
  try {
    throw new DOMException("Custom DOM Exception Triggered.");
  } catch (error) {
    document.querySelector("#output").textContent = `Error: ${error.message}`;
  }
};
```

### Result

{{ EmbedLiveSample('Examples', '100%', 100) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [A polyfill of `DOMException` constructor](https://github.com/zloirock/core-js#domexception) is available in [`core-js`](https://github.com/zloirock/core-js)
