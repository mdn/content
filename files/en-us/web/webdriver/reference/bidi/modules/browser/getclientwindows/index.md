---
title: browser.getClientWindows command
short-title: browser.getClientWindows
slug: Web/WebDriver/Reference/BiDi/Modules/browser/getClientWindows
page-type: webdriver-command
browser-compat: webdriver.bidi.browser.getClientWindows
sidebar: webdriver
---

The `browser.getClientWindows` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`browser`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser) module returns a list of [client windows](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows).

## Syntax

```json-nolint
{
  "method": "browser.getClientWindows",
  "params": {}
}
```

### Parameters

None. However, you must include the `params` field and set it to an empty object (`{}`).

### Return value

The following field in the `result` object of the response describes the client windows in the browser:

- `clientWindows`
  - : An array of objects, each representing a client window.
    The array may be empty if the browser has no open windows.
    Each object has the following fields:
    - `active`
      - : A boolean that indicates whether the client window can receive keyboard input from the operating system.
        This can mean a tab within the window has system focus, or the browser UI itself is focused.
    - `clientWindow`
      - : A string that uniquely identifies the client window.
    - `height`
      - : A number that indicates the height of the window in {{glossary("CSS pixel", "CSS pixels")}}.
    - `state`
      - : A string that indicates the current state of the window.
        - `"fullscreen"`
          - : Indicates that the window is in fullscreen mode.
        - `"maximized"`
          - : Indicates that the window is maximized to fill the screen area.
        - `"minimized"`
          - : Indicates that the window is minimized (hidden from view).
        - `"normal"`
          - : Indicates that the window is in its normal (restored) state.
    - `width`
      - : A number that indicates the width of the window in {{glossary("CSS pixel", "CSS pixels")}}.
    - `x`
      - : A number that indicates the x-coordinate of the window in {{glossary("CSS pixel", "CSS pixels")}}, measured from the left edge of the screen area.
    - `y`
      - : A number that indicates the y-coordinate of the window in {{glossary("CSS pixel", "CSS pixels")}}, measured from the top edge of the screen area.

## Examples

### Getting all client windows

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), send the following message to retrieve all client windows:

```json
{
  "id": 1,
  "method": "browser.getClientWindows",
  "params": {}
}
```

The browser responds successfully with the list of client windows as follows:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "clientWindows": [
      {
        "active": true,
        "clientWindow": "09a7bf22-c52d-4011-88ad-507a7e0012c7",
        "height": 970,
        "state": "normal",
        "width": 1280,
        "x": 4,
        "y": 38
      }
    ]
  }
}
```

### Getting client windows when multiple browser windows are open

When multiple browser windows are open, the browser responds with one entry per window as follows:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "clientWindows": [
      {
        "active": true,
        "clientWindow": "09a7bf22-c52d-4011-88ad-507a7e0012c7",
        "height": 800,
        "state": "normal",
        "width": 1280,
        "x": 0,
        "y": 26
      },
      {
        "active": false,
        "clientWindow": "b3f8a1e5-d4c2-4e9f-8b3a-1f2e3d4c5b6a",
        "height": 0,
        "state": "minimized",
        "width": 0,
        "x": 0,
        "y": 0
      }
    ]
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`session.new`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) command
- [`browser.setClientWindowState`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/setClientWindowState) command
