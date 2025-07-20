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

Windows are _script-closable_ if they were created by web content. This generally includes:

- Windows opened using {{domxref("Window.open()")}}
- Windows opened via web content, such as links (`<a target="_blank">`) or forms (`<form target="_blank">`), without user modifier actions

Windows opened by browser UI actions (like right-click → new tab) are often not script-closable. They may only be closed if they have not been navigated (history length remains 1). Calling `close()` otherwise typically shows a console warning.

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
