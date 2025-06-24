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

This method can only be successfully called on windows that are considered **script-closable**. This generally includes:

- Windows opened using {{domxref("Window.open()")}}
- Windows opened via web content, such as links (`<a target="_blank">`) or forms (`<form target="_blank">`), without user modifier actions

Windows opened by browser UI actions — such as **right-click → Open in new tab**, **Ctrl+Click**, **Shift+Click**, or **middle-click** — are **not** script-closable. Calling `close()` on such windows will result in an error message like:

> `Scripts may not close windows that were not opened by script.`

Note also that `close()` has no effect when called on {{domxref("Window")}}
objects returned by
[`HTMLIFrameElement.contentWindow`](/en-US/docs/Web/API/HTMLIFrameElement/contentWindow).

> [!NOTE]
> Some documentation and specifications mention session history as a factor (e.g., top-level windows with only one history entry). However, this can be confusing and inconsistent across browsers. You can inspect `window.history.length` to understand the session state, but this value may also be affected by iframe activity or the new tab page.

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

## Script-closable behavior by context

| Window Opened Via                       | Script-Closable? | Notes                     |
| --------------------------------------- | ---------------- | ------------------------- |
| `window.open()`                         | ✅ Yes           | Script-created            |
| `<a href target="_blank">`              | ✅ Often         | If not Ctrl/Shift-clicked |
| `<form target="_blank">`                | ✅ Often         | If not user-modified      |
| Ctrl+Click or middle-click              | ❌ No            | Treated as user-initiated |
| Browser UI (e.g., bookmarks or new tab) | ❌ No            | Not script-created        |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
