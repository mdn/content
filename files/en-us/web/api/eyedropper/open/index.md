---
title: "EyeDropper: open() method"
short-title: open()
slug: Web/API/EyeDropper/open
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.EyeDropper.open
---

{{securecontext_header}}{{APIRef("EyeDropper API")}}{{SeeCompatTable}}

The **`EyeDropper.open()`** method starts the eyedropper mode, returning a promise which is fulfilled once the user has selected a color and exited the eyedropper mode.

## Syntax

```js-nolint
open()
open(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An options object to pass an {{domxref("AbortSignal")}} signal:

    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}}. The eyedropper mode will be aborted when the `AbortSignal`'s {{domxref("AbortController/abort()", "abort()")}} method is called.

### Return value

A {{jsxref("Promise")}} that eventually resolves when the user selects a pixel color from the screen.

The promise resolves to an object with the following property:

- `sRGBHex`
  - : A string representing the selected color, in hexadecimal sRGB format (`#aabbcc`).

### Exceptions

Exceptions are not thrown but returned when the {{jsxref("Promise")}} is rejected.

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if `open()` is not called via a [transient user activation](/en-US/docs/Glossary/Transient_activation).
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if another eye dropper has already opened.
- `AbortError` {{domxref("DOMException")}}
  - : Thrown if the user aborts the selection by pressing the <kbd>Esc</kbd> key or if the selection is aborted by an {{domxref("AbortController")}} being passed as an argument to `open()`.
- `OperationError` {{domxref("DOMException")}}
  - : Thrown if the selection fails for other reasons.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("EyeDropper")}} interface it belongs to.
