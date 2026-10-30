---
title: "`browser.setClientWindowState` command"
short-title: setClientWindowState
slug: Web/WebDriver/Reference/BiDi/Modules/browser/setClientWindowState
page-type: webdriver-command
browser-compat: webdriver.bidi.browser.setClientWindowState
sidebar: webdriver
---

The `browser.setClientWindowState` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`browser`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser) module changes the dimensions, position, or state of a [client window](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows).

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "browser.setClientWindowState",
  "params": {
    "clientWindow": "09a7bf22-c52d-4011-88ad-507a7e0012c7",
    "state": "maximized"
  }
}

/* With required and optional parameters */
{
  "method": "browser.setClientWindowState",
  "params": {
    "clientWindow": "09a7bf22-c52d-4011-88ad-507a7e0012c7",
    "height": 700,
    "state": "normal",
    "width": 1000,
    "x": 100,
    "y": 100
  }
}
```

### Parameters

The `params` field contains:

- `clientWindow`
  - : A string that contains the ID of the client window to change.
    Client window IDs are returned by the [`browser.getClientWindows`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getClientWindows) command.
- `height` {{optional_inline}}
  - : A non-negative integer that specifies the height of the window in {{glossary("CSS pixel", "CSS pixels")}}.
    This field is available only when `state` is `normal`.
- `state`
  - : A string that specifies the state of the window.
    It can take one of the following values:

    - `fullscreen`: The window enters fullscreen mode.
    - `maximized`: The window is maximized to fill the screen area.
    - `minimized`: The window is minimized (hidden from view).
    - `normal`: The window is restored from fullscreen, maximized, or minimized state.
- `width` {{optional_inline}}
  - : A non-negative integer that specifies the width of the window in {{glossary("CSS pixel", "CSS pixels")}}.
    This field is available only when `state` is `normal`.
- `x` {{optional_inline}}
  - : An integer that specifies the x-coordinate of the window in {{glossary("CSS pixel", "CSS pixels")}}, measured from the left edge of the screen area.
    This field is available only when `state` is `normal`.
- `y` {{optional_inline}}
  - : An integer that specifies the y-coordinate of the window in {{glossary("CSS pixel", "CSS pixels")}}, measured from the top edge of the screen area.
    This field is available only when `state` is `normal`.

### Return value

The `result` object in the response contains the following fields:

- `active`
  - : A boolean that indicates whether the client window can receive keyboard input from the operating system.
    This can mean a tab within the window has system focus, or the browser UI itself is focused.
- `clientWindow`
  - : A string that uniquely identifies the client window.
- `height`
  - : A non-negative integer that indicates the height of the window after the state change, in {{glossary("CSS pixel", "CSS pixels")}}.
- `state`
  - : A string that indicates the current state of the window.
    It has one of the following values:

    - `fullscreen`: Indicates that the window is in fullscreen mode.
    - `maximized`: Indicates that the window is maximized to fill the screen area.
    - `minimized`: Indicates that the window is minimized (hidden from view).
    - `normal`: Indicates that the window is in its normal (restored) state.
- `width`
  - : A non-negative integer that indicates the width of the window after the state change, in {{glossary("CSS pixel", "CSS pixels")}}.
- `x`
  - : An integer that indicates the x-coordinate of the window after the state change, in {{glossary("CSS pixel", "CSS pixels")}}, measured from the left edge of the screen area.
- `y`
  - : An integer that indicates the y-coordinate of the window after the state change, in {{glossary("CSS pixel", "CSS pixels")}}, measured from the top edge of the screen area.

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:

    - A required parameter is missing or has an invalid type.
    - The [`state`](#state) value is not one of `fullscreen`, `maximized`, `minimized`, or `normal`.
    - A dimension or coordinate is outside its permitted integer range.
- `no such client window`
  - : Thrown if no client window with the specified [`clientWindow`](#clientWindow) ID is found, or the window has no associated active documents when its state is changed.
- `unsupported operation`
  - : Thrown if the browser does not support changing the state of the client window or cannot change the specified window to the specified [`state`](#state).

## Description

The `browser.setClientWindowState` command changes the whole client window, including browser UI elements such as the address bar and toolbars.
If you want to change the size of the content viewport, use the [`browsingContext.setViewport`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/setViewport) command.

When `state` is `normal`, you can specify any of `height`, `width`, `x`, or `y` without supplying the other fields.
The browser applies supported changes as closely as possible to the specified values, so the actual size or position may differ.
The returned window information reflects the dimensions, position, and state of the window after the state change has completed.
The resulting dimensions and position depend on the window state, available screen area, and operating system's window behavior.

A browser that supports state changes can still leave the dimensions or position unchanged if it does not support resizing or moving windows.

## Examples

### Maximizing a client window

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Suppose you retrieve the client window ID using the [`browser.getClientWindows`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getClientWindows) command.
To maximize the window, send the following message:

```json
{
  "id": 4,
  "method": "browser.setClientWindowState",
  "params": {
    "clientWindow": "e8d9475b-49bb-44af-ad32-6ea598a22737",
    "state": "maximized"
  }
}
```

The browser responds with the updated window information as follows:

```json
{
  "id": 4,
  "type": "success",
  "result": {
    "active": true,
    "clientWindow": "e8d9475b-49bb-44af-ad32-6ea598a22737",
    "height": 822,
    "state": "maximized",
    "width": 1312,
    "x": 0,
    "y": 26
  }
}
```

The `state` field confirms that the window is maximized, while `height`, `width`, `x`, and `y` describe its resulting size and position.

### Resizing and repositioning a client window

Using the same connection and session as in the previous example, send the following message to change the window size to 1000 by 700 CSS pixels and its position to 100 CSS pixels from the left and top edges of the screen area:

```json
{
  "id": 5,
  "method": "browser.setClientWindowState",
  "params": {
    "clientWindow": "e8d9475b-49bb-44af-ad32-6ea598a22737",
    "height": 700,
    "state": "normal",
    "width": 1000,
    "x": 100,
    "y": 100
  }
}
```

The browser responds with the resulting dimensions and position as follows:

```json
{
  "id": 5,
  "type": "success",
  "result": {
    "active": true,
    "clientWindow": "e8d9475b-49bb-44af-ad32-6ea598a22737",
    "height": 700,
    "state": "normal",
    "width": 1000,
    "x": 100,
    "y": 100
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browser.getClientWindows`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getClientWindows) command
- [`browsingContext.setViewport`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/setViewport) command
