---
title: EyeDropper.prototype.open()
slug: Web/API/EyeDropper/open
tags:
  - API
  - Method
  - Reference
  - EyeDropper
  - open
browser-compat: api.EyeDropper.open
---
{{APIRef("EyeDropper API")}}

The **`EyeDropper.prototype.open()`** method starts the eyedropper mode, returning a promise which is fulfilled once the user has either selected a color or dismissed the eyedropper mode.

The promise resolves to a {{domxref("ColorSelectionResult")}} object that provides the selected color hex value.

The promise rejects in two cases:

* When the user dismisses the eyedropper mode by pressing the `ESC` key.
* When the eyedropper mode is aborted by the {{domxref("AbortController")}} passed as an argument to `open()`.

## Syntax

```js
eyeDropper.open();
eyeDropper.open({ signal: abortController.signal });
```

### Parameters

- `options` {{optional_inline}}

  - : An options object to pass an {{domxref("AbortSignal")}} signal:

    - `signal`
      - : An {{domxref("AbortSignal")}}. The eyedropper mode will be aborted when the `AbortSignal`'s {{domxref("AbortController/abort()", "abort()")}} method is called.

### Return value

A {{jsxref("Promise")}} that resolves to a {{domxref("ColorSelectionResult")}} object.

## See also

- The {{DOMxRef("EyeDropper")}} interface it belongs to.
