---
title: Window.forward()
slug: Web/API/Window/forward
page-type: web-api-instance-method
tags:
  - API
  - Deprecated
  - Firefox
  - HTML DOM
  - Method
  - Non-standard
  - Deprecated
  - Window
  - forward
---
{{APIRef}}{{Non-standard_header}} {{deprecated_header}}

Moves the window one document forward in history. This was a Firefox-specific method and was removed in Firefox 31.

> **Note:** Use the standard {{domxref("History.forward", "window.history.forward()")}} method instead.

## Syntax

```js
forward()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
function goForward() {
  if (canGoForward) {
    window.forward();
  }
}
```

## Specifications

This is not part of any specification.

## Browser compatibility

This non-standard method was only implemented in Firefox, and was removed in Firefox 31.

## See also

- {{domxref("History.back()")}}
- {{domxref("History.forward()")}}
