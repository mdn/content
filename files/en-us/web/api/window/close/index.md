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

This method can only be successfully called on windows that are considered _script-closable_. This generally includes:

- Windows opened using {{domxref("Window.open()")}}
- Windows opened via web content, such as links (`<a target="_blank">`) or forms (`<form target="_blank">`), without user modifier actions

Windows opened by browser UI actions — such as right-click → Open in new tab, Ctrl+Click, Shift+Click, or middle-click — are not script-closable. Calling `close()` on such windows will result in an error message like: `Scripts may not close windows that were not opened by script.`

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
// Global variable to store a reference to the opened window
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
