---
title: "Window: blur() method"
short-title: blur()
slug: Web/API/Window/blur
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.Window.blur
---

{{APIRef}}{{deprecated_header}}

The **`Window.blur()`** method does nothing.

> [!NOTE]
> Historically, this method was the programmatic equivalent of the user shifting focus away
> from the current window. This behavior was removed due to hostile sites abusing this functionality.
> In Firefox, you can enable the old behavior with the `dom.disable_window_flip` preference.

## Syntax

```js-nolint
blur()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
window.blur();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
