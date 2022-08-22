---
title: Window.back()
slug: Web/API/Window/back
page-type: web-api-instance-method
tags:
  - API
  - Firefox
  - Gecko
  - HTML DOM
  - Method
  - Non-standard
  - Deprecated
  - Window
  - back
---
{{APIRef}}{{ Non-standard_header() }}{{deprecated_header}}

The obsolete and non-standard method `back()` on the {{domxref("window")}}
interface returns the window to the previous item in the history. This was a
Firefox-specific method and was removed in Firefox 31.

> **Note:** Use the standard {{domxref("history.back")}} method instead.

## Syntax

```js
back()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This simple example handles a click on a "Back" button by calling `back()`.

```js
function handleMyBackButton() {
  if (canGoBack) {
    window.back();
  }
}
```

## Specifications

This is not part of any specification.

## Browser compatibility

This non-standard method was only implemented in Firefox, and was removed in Firefox
31\.

## See also

- {{domxref("History.back()")}}
- {{domxref("History.forward()")}}
