---
title: EyeDropper.open()
slug: Web/API/EyeDropper/open
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - EyeDropper
  - open
  - Experimental
browser-compat: api.EyeDropper.open
---
{{APIRef("EyeDropper API")}}{{SeeCompatTable}}

The **`EyeDropper.open()`** method starts the eyedropper mode, returning a promise which is fulfilled once the user has either selected a color or dismissed the eyedropper mode.

## Syntax

```js
open()
open(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An options object to pass an {{domxref("AbortSignal")}} signal:

    - `signal`
      - : An {{domxref("AbortSignal")}}. The eyedropper mode will be aborted when the `AbortSignal`'s {{domxref("AbortController/abort()", "abort()")}} method is called.

### Return value

A {{jsxref("Promise")}} that eventually resolves when the user selects a pixel color from the screen.

The promise resolves to an object with the following property:

- `sRGBHex`
  - : A string representing the selected color, in hexadecimal sRGB format (`#aabbcc`).

### Exceptions

Exceptions are not thrown but returned when the {{jsxref("Promise")}} is rejected.
The promise is rejected in two cases:

- When the user dismisses the eyedropper mode by pressing the <kbd>Escape</kbd> key.
- When the eyedropper mode is aborted by the {{domxref("AbortController")}} passed as an argument to `open()`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("EyeDropper")}} interface it belongs to.
