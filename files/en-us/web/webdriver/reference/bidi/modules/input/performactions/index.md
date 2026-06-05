---
title: "`input.performActions` command"
short-title: performActions
slug: Web/WebDriver/Reference/BiDi/Modules/input/performActions
page-type: webdriver-command
browser-compat: webdriver.bidi.input.performActions
sidebar: webdriver
---

The `input.performActions` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`input`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input) module simulates user input actions in a given context to interact with elements on the page. After performing actions, call [`input.releaseActions`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input/releaseActions) to release any inputs left in an intermediate state.

## Syntax

```json-nolint
{
  "method": "input.performActions",
  "params": {
    "context": "<contextId>",
    "actions": [
      {
        "type": "<outerType>",
        "id": "<sourceId>",
        "actions": [
          {
            "type": "<innerType>",
            ...
          }
        ]
      }
    ]
  }
}
```

### Parameters

The `params` field contains:

- `context`
  - : A string that contains the ID of the context in which to perform the actions. Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
- `actions`
  - : An array of objects, each representing an input source and the actions to perform for that source.
    Each such object represents the outer `actions` object, which in turn, contains an outer `type` (input source type can be `"key"`, `"pointer"`, or `"wheel"`) and an inner `actions` array.
    Each object in the inner `actions` array has its own inner `type` and additional fields that depend on it.

    All input sources are processed in parallel.
    In each tick (step), every input source performs one action simultaneously or does nothing if assigned a `"pause"` action.
    This allows combining input sources, for example, holding <kbd>Shift</kbd> while clicking.

    Each outer `actions` object has the following fields:
    - `id`
      - : A string that uniquely identifies this input source within the action sequence, for example, `"mouse1"` or `"keyboard1"`.
    - `type`
      - : A string (the outer `type`) that identifies the type of input source. Accepted values are `"none"`, `"key"`, `"pointer"`, and `"wheel"`.
    - `actions`
      - : An array of objects (the inner `actions`), each representing an action for the input source specified in the outer [`type`](#type) field.

        Each inner `actions` object has an inner `type` field that specifies the operation to perform and additional fields that depend on it.
        The inner `type` accepts the following values:
        - `"pause"`: Waits for the given duration before the next step.
        - `"keyDown"`: Simulates pressing a key.
        - `"keyUp"`: Simulates releasing a key.
        - `"pointerDown"`: Simulates pressing a pointer button.
        - `"pointerUp"`: Simulates releasing a pointer button.
        - `"pointerMove"`: Simulates moving the pointer.
        - `"scroll"`: Simulates a mouse wheel scroll.

        The following table shows, for each outer `type` value, the valid values for the inner `type`:

        | Outer `type` values | Accepted inner `type` values                               |
        | ------------------- | ---------------------------------------------------------- |
        | `"none"`            | `"pause"`                                                  |
        | `"key"`             | `"pause"`, `"keyDown"`, `"keyUp"`                          |
        | `"pointer"`         | `"pause"`, `"pointerDown"`, `"pointerUp"`, `"pointerMove"` |
        | `"wheel"`           | `"pause"`, `"scroll"`                                      |

        The following table shows, for each inner `type` value, the fields available in the inner `actions` object:

        | Inner `type` values    | Fields available in the inner `actions` object                                                                |
        | ---------------------- | ------------------------------------------------------------------------------------------------------------- |
        | `"pause"`              | [`duration`](#duration)                                                                                       |
        | `"keyDown"`, `"keyUp"` | [`value`](#value)                                                                                             |
        | `"pointerDown"`        | [`button`](#button), [pointer properties](#pointer_properties)                                                |
        | `"pointerUp"`          | [`button`](#button)                                                                                           |
        | `"pointerMove"`        | [`x`](#x), [`y`](#y), [`duration`](#duration), [`origin`](#origin), [pointer properties](#pointer_properties) |
        | `"scroll"`             | [`x`](#x), [`y`](#y), [`deltaX`](#deltax), [`deltaY`](#deltay), [`duration`](#duration), [`origin`](#origin)  |

    The outer `actions` object also supports the following field:
    - `parameters` {{optional_inline}}
      - : An object with a `pointerType` field that specifies the pointer device type. Accepted values are `"mouse"` (default), `"pen"`, or `"touch"`. This field is valid only when the outer [`type`](#type) is `"pointer"`.

The following fields are available in each inner `actions` object, depending on the inner `type`:

- `button`
  - : A non-negative integer that identifies the pointer button (`0` = primary, `1` = middle, `2` = secondary).
    Specify this when the inner `type` field value is `"pointerDown"` or `"pointerUp"`.
- `deltaX`
  - : An integer that specifies the horizontal scroll delta in CSS pixels.
    Specify this when the inner `type` field value is `"scroll"`.
- `deltaY`
  - : An integer that specifies the vertical scroll delta in CSS pixels.
    Specify this when the inner `type` field value is `"scroll"`.
- `duration` {{optional_inline}}
  - : A non-negative integer that specifies the time in milliseconds over which the action is performed.
    Specify this when the inner `type` field value is `"pause"`, `"pointerMove"`, or `"scroll"`.
    For `"pointerMove"` and `"scroll"`, the overall movement occurs as a series of small movements over this period at a browser-defined rate (for example, one step per animation frame).
    When multiple outer `actions` objects run in parallel, the tick lasts as long as the longest `duration` value in that tick.
- `origin` {{optional_inline}}
  - : A string or an object that specifies the origin for the move or scroll.
    Specify this when the inner `type` field value is `"pointerMove"` or `"scroll"`.

    If `origin` is a string, accepted values are:
    - `"viewport"`: Indicates that the x and y coordinates are relative to the viewport's top-left corner.
      Use this for absolute positioning within the page.
      This is the default value for `"scroll"` if `origin` is omitted.
    - `"pointer"`: Indicates that the x and y coordinates are relative to the current pointer position.
      Use this for relative moves from where the pointer currently is.

    If `origin` is an object, include the following fields:
    - `type`
      - : A string set to `"element"`.
    - `element`
      - : An object containing the ID that uniquely identifies the DOM element to use as the origin.
        The ID is returned by the browser when you locate the element using [`browsingContext.locateNodes`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes), [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate), or [`script.callFunction`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction).

- `value`
  - : A string that contains the key value.
    Specify this when the inner `type` field value is `"keyDown"` or `"keyUp"`.
    For special keys such as <kbd>Shift</kbd> or <kbd>Enter</kbd>, use the Unicode code points defined in the [WebDriver keyboard actions](https://w3c.github.io/webdriver/#keyboard-actions) table (for example, `"\uE008"` for the <kbd>Shift</kbd> key). For printable characters, use the character directly (for example, `"a"`).
- Pointer properties
  - : The following fields are part of the inner `actions` object and describe the physical characteristics of the pointer device, such as a mouse, stylus, or touchscreen.
    Specify these when the inner `type` is `"pointerDown"` or `"pointerMove"`.
    - `width` {{optional_inline}}
      - : A non-negative integer that specifies the width, in CSS pixels, of the pointer contact area.
        See {{domxref("PointerEvent.width")}}.
    - `height` {{optional_inline}}
      - : A non-negative integer that specifies the height, in CSS pixels, of the pointer contact area.
        See {{domxref("PointerEvent.height")}}.
    - `pressure` {{optional_inline}}
      - : A float that specifies the normalized pressure of the pointer in the range `0.0`–`1.0`.
        See {{domxref("PointerEvent.pressure")}}.
    - `tangentialPressure` {{optional_inline}}
      - : A float that specifies the normalized tangential pressure in the range `-1.0`–`1.0`.
        See {{domxref("PointerEvent.tangentialPressure")}}.
    - `twist` {{optional_inline}}
      - : An integer that specifies the clockwise rotation, in degrees, of the pointer in the range `0`–`359`.
        See {{domxref("PointerEvent.twist")}}.
    - `altitudeAngle` {{optional_inline}}
      - : A float that specifies the altitude angle, in radians, of the pointer in the range `0.0`–`π/2`.
        See {{domxref("PointerEvent.altitudeAngle")}}.
    - `azimuthAngle` {{optional_inline}}
      - : A float that specifies the azimuth angle, in radians, of the pointer in the range `0.0`–`2π`.
        See {{domxref("PointerEvent.azimuthAngle")}}.
- `x`
  - : A number (for `"pointerMove"`) or an integer (for `"scroll"`) that specifies the x-coordinate.
    Specify this when the inner `type` field value is `"pointerMove"` or `"scroll"`.
- `y`
  - : A number (for `"pointerMove"`) or an integer (for `"scroll"`) that specifies the y-coordinate.
    Specify this when the inner `type` field value is `"pointerMove"` or `"scroll"`.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : The action sequence is malformed; for example, if a required field is missing, a field value is of the wrong type, or an outer `type` value is not `"none"`, `"key"`, `"pointer"`, or `"wheel"`.
- `no such frame`
  - : No context with the given context ID is found.

## Examples

### Holding Shift while clicking an element

Consider a scenario where you want to hold the <kbd>Shift</kbd> key while clicking an element, for example to extend a text selection.

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), get the context ID using [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) and the element identifier using [`browsingContext.locateNodes`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes).
Send the following message with two outer `actions` objects — a `"key"` source and a `"pointer"` source — each with an outer `type` and an inner `actions` array, running in parallel across the following three ticks:

- Tick 1: The keyboard presses <kbd>Shift</kbd> while the pointer moves to the element. Since the `duration` of `pointerMove` is specified as `300`, the tick lasts 300 ms, which is the longest `duration` in this tick.
- Tick 2: The keyboard pauses while the pointer button is pressed (`pointerDown`). This tick lasts for 0 ms.
- Tick 3: The <kbd>Shift</kbd> key is released (`keyUp`) and the pointer button is released (`pointerUp`) simultaneously. This tick also lasts for 0 ms.

```json-nolint
{
  "id": 1,
  "method": "input.performActions",
  "params": {
    "context": "5f07e3ca-ecac-465e-b9ef-49000c196ecf",
    "actions": [
      {
        "type": "key",
        "id": "keyboard1",
        "actions": [
          {
            "type": "keyDown", // Tick 1: Shift key down (0 ms)
            "value": "\uE008"
          },
          {
            "type": "pause" // Tick 2: Keyboard pause (0 ms)
          },
          {
            "type": "keyUp", // Tick 3: Shift key up (0 ms)
            "value": "\uE008"
          }
        ]
      },
      {
        "type": "pointer",
        "id": "mouse1",
        "parameters": {
          "pointerType": "mouse"
        },
        "actions": [
          {
            "type": "pointerMove", // Tick 1: Move to element (300 ms)
            "x": 0,
            "y": 0,
            "duration": 300,
            "origin": {
              "type": "element",
              "element": {
                "sharedId": "3be28343-afd3-4dea-a2b6-a863fbbb80e1"
              }
            }
          },
          {
            "type": "pointerDown", // Tick 2: Press button (0 ms)
            "button": 0
          },
          {
            "type": "pointerUp", // Tick 3: Release button (0 ms)
            "button": 0
          }
        ]
      }
    ]
  }
}
```

The browser responds as follows:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

### Scrolling the page

Consider a scenario where you want to simulate scrolling a page down.

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), get the context ID using [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
Send the following message that scrolls from the top-left of the viewport (`x: 0, y: 0`) by `300` CSS pixels downward (`deltaY: 300`) with no horizontal scrolling (`deltaX: 0`).

```json
{
  "id": 2,
  "method": "input.performActions",
  "params": {
    "context": "5f07e3ca-ecac-465e-b9ef-49000c196ecf",
    "actions": [
      {
        "type": "wheel",
        "id": "wheel1",
        "actions": [
          {
            "type": "scroll",
            "x": 0,
            "y": 0,
            "deltaX": 0,
            "deltaY": 300
          }
        ]
      }
    ]
  }
}
```

The browser responds as follows:

```json
{
  "id": 2,
  "type": "success",
  "result": {}
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`input.releaseActions`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input/releaseActions) command
- [`input.setFiles`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input/setFiles) command
- [`input.fileDialogOpened`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input/fileDialogOpened) event
