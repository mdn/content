---
title: "Window: close() method"
short-title: close()
slug: Web/API/Window/close
page-type: web-api-instance-method
browser-compat: api.Window.close
---

{{APIRef}}

The **`Window.close()`** method closes the current window, or
the window on which it was called.

This method can only be called on windows that were opened by a script using the
{{domxref("Window.open()")}} method, or on top-level windows that have a single history entry. If the window doesn't match these requirements, an error
similar to this one appears in the console:
`Scripts may not close windows that were not opened by script.`

Note also that `close()` has no effect when called on {{domxref("Window")}}
objects returned by
[`HTMLIFrameElement.contentWindow`](/en-US/docs/Web/API/HTMLIFrameElement/contentWindow).

## Syntax

```js-nolint
close()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Closing a window opened with `window.open()`

This example shows a method which opens a window and a second one which closes the
window; this demonstrates how to use `Window.close()` to close a window
opened by calling {{domxref("window.open()")}}.

```js
//Global variable to store a reference to the opened window
let openedWindow;

function openWindow() {
  openedWindow = window.open("more-info.htm");
}

function closeOpenedWindow() {
  openedWindow.close();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
