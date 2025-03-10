---
title: "Window: back() method"
short-title: back()
slug: Web/API/Window/back
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
---

{{APIRef}}{{ Non-standard_header() }}{{deprecated_header}}

The obsolete and non-standard method `back()` on the {{domxref("window")}}
interface returns the window to the previous item in the history. This was a
Firefox-specific method and was removed in Firefox 31.

> [!NOTE]
> Use the standard {{domxref("history.back")}} method instead.

## Syntax

```js-nolint
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
