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
        "type": "<inputSourceType>",
        "id": "<sourceId>",
        "actions": [
          {
            "type": "<actionType>",
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
  - : A string that contains the ID ([UUID](/en-US/docs/Glossary/UUID)) of the context in which to perform the actions. Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
- `actions`
  - : An array of objects, each representing an input source (`"key"`, `"pointer"`, or `"wheel"`) and the actions to perform for that source.
    All input sources are processed in parallel.
    This allows combining input sources, for example, holding <kbd>Shift</kbd> while clicking.

    Each `actions` object has the following fields:
    - `id`
      - : A string that uniquely identifies this input source within the action sequence, for example, `"mouse1"` or `"keyboard1"`.
    - `type`
      - : A string that identifies the type of input source. Accepted values are `"none"`, `"key"`, `"pointer"`, and `"wheel"`.
    - `actions`
      - : An array of objects, each representing an action for the input source specified in the [`type`](#type) field.

        Each object has a `type` field that specifies the type of operation and additional fields that depend on the value of this `type`. The `type` field accepts the following values:
        - `"pause"`: Waits for the given duration before the next step.
        - `"keyDown"`: Simulates pressing a key.
        - `"keyUp"`: Simulates releasing a key.
        - `"pointerDown"`: Simulates pressing a pointer button.
        - `"pointerUp"`: Simulates releasing a pointer button.
        - `"pointerMove"`: Simulates moving the pointer.
        - `"scroll"`: Simulates a mouse wheel scroll.

        The following table shows, for each input source `type` value, the `type` values valid inside the nested `actions` array:

        | Input source `type` values | Accepted operation `type` values                           |
        | -------------------------- | ---------------------------------------------------------- |
        | `"none"`                   | `"pause"`                                                  |
        | `"key"`                    | `"pause"`, `"keyDown"`, `"keyUp"`                          |
        | `"pointer"`                | `"pause"`, `"pointerDown"`, `"pointerUp"`, `"pointerMove"` |
        | `"wheel"`                  | `"pause"`, `"scroll"`                                      |

        The following table shows the additional fields in the `actions` object for each operation type:

        | Operation `type` values | Fields available with this `type` value                                                                              |
        | ----------------------- | -------------------------------------------------------------------------------------------------------------------- |
        | `"pause"`               | [`duration`](#duration)                                                                                              |
        | `"keyDown"`, `"keyUp"`  | [`value`](#value)                                                                                                    |
        | `"pointerDown"`         | [`button`](#button), [pointer properties](#common_pointer_properties)                                                |
        | `"pointerUp"`           | [`button`](#button)                                                                                                  |
        | `"pointerMove"`         | [`x`](#x), [`y`](#y), [`duration`](#duration), [`origin`](#origin), [pointer properties](#common_pointer_properties) |
        | `"scroll"`              | [`x`](#x), [`y`](#y), [`deltaX`](#deltax), [`deltaY`](#deltay), [`duration`](#duration), [`origin`](#origin)         |

    - `parameters` {{optional_inline}}
      - : An object with a `pointerType` field that specifies the pointer device type. Accepted values are `"mouse"` (default), `"pen"`, or `"touch"`. This field is valid only when the input source [`type`](#type) is `"pointer"`.

The following fields are supported depending on the value of the operation `type`:

- `button`
  - : A non-negative integer that identifies the pointer button (`0` = primary, `1` = middle, `2` = secondary).
    Specify this when the `type` field value is `"pointerDown"` or `"pointerUp"`.
- `deltaX`
  - : An integer that specifies the horizontal scroll delta in CSS pixels.
    Specify this when the `type` field value is `"scroll"`.
- `deltaY`
  - : An integer that specifies the vertical scroll delta in CSS pixels.
    Specify this when the `type` field value is `"scroll"`.
- `duration` {{optional_inline}}
  - : A non-negative integer that specifies the time in milliseconds.
    Specify this when the `type` field value is `"pause"`, `"pointerMove"`, or `"scroll"`.
- `origin` {{optional_inline}}
  - : A string or an object that specifies the origin for the move or scroll. Accepted string values are `"viewport"` and `"pointer"`. For an object, include the following fields:
    - `type`
      - : A string set to `"element"`.
    - `element`
      - : An object containing the ID that uniquely identifies the DOM element to use as the origin. The ID is returned by the browser when you locate the element using [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) or [`script.callFunction`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction).

    Specify this when the `type` field value is `"pointerMove"` or `"scroll"`. For `"scroll"`, `"viewport"` is the default if this field is omitted.

- `value`
  - : A string that contains the key value, such as <kbd>a</kbd>, <kbd>Enter</kbd>, or <kbd>Shift</kbd>.
    Specify this when the `type` field value is `"keyDown"` or `"keyUp"`.
- Common pointer properties
  - : The following optional fields describe the physical characteristics of the pointer device, such as a mouse, stylus, or touchscreen. Specify these when the `type` field value is `"pointerDown"` or `"pointerMove"`.
    - `width` {{optional_inline}}
      - : A non-negative integer that specifies the width, in CSS pixels, of the pointer contact area. See {{domxref("PointerEvent.width")}}.
    - `height` {{optional_inline}}
      - : A non-negative integer that specifies the height, in CSS pixels, of the pointer contact area. See {{domxref("PointerEvent.height")}}.
    - `pressure` {{optional_inline}}
      - : A float that specifies the normalized pressure of the pointer in the range `0.0`–`1.0`. See {{domxref("PointerEvent.pressure")}}.
    - `tangentialPressure` {{optional_inline}}
      - : A float that specifies the normalized tangential pressure in the range `-1.0`–`1.0`. See {{domxref("PointerEvent.tangentialPressure")}}.
    - `twist` {{optional_inline}}
      - : An integer that specifies the clockwise rotation, in degrees, of the pointer in the range `0`–`359`. See {{domxref("PointerEvent.twist")}}.
    - `altitudeAngle` {{optional_inline}}
      - : A float that specifies the altitude angle, in radians, of the pointer in the range `0.0`–`1.5707963267948966`. See {{domxref("PointerEvent.altitudeAngle")}}.
    - `azimuthAngle` {{optional_inline}}
      - : A float that specifies the azimuth angle, in radians, of the pointer in the range `0.0`–`6.283185307179586`. See {{domxref("PointerEvent.azimuthAngle")}}.
- `x`
  - : A number (for `"pointerMove"`) or an integer (for `"scroll"`) that specifies the x-coordinate.
    Specify this when the `type` field value is `"pointerMove"` or `"scroll"`.
- `y`
  - : A number (for `"pointerMove"`) or an integer (for `"scroll"`) that specifies the y-coordinate.
    Specify this when the `type` field value is `"pointerMove"` or `"scroll"`.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : The action sequence is malformed; for example, if a required field is missing or a field value is of the wrong type.

## Examples

### Clicking an element

Consider a scenario where you want to simulate a mouse click on an element.
With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an active session, get the context ID using [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) and the element identifier using [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate).
Send the following message that uses three sequential steps: moving (`pointerMove`) the pointer to the center of the element (`x: 0, y: 0` relative to the element), pressing (`pointerDown`) the primary mouse button (`0`), and then releasing (`pointerUp`) it.

```json
{
  "id": 1,
  "method": "input.performActions",
  "params": {
    "context": "5f07e3ca-ecac-465e-b9ef-49000c196ecf",
    "actions": [
      {
        "type": "pointer",
        "id": "mouse1",
        "parameters": {
          "pointerType": "mouse"
        },
        "actions": [
          {
            "type": "pointerMove",
            "x": 0,
            "y": 0,
            "origin": {
              "type": "element",
              "element": {
                "sharedId": "3be28343-afd3-4dea-a2b6-a863fbbb80e1"
              }
            }
          },
          {
            "type": "pointerDown",
            "button": 0
          },
          {
            "type": "pointerUp",
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
With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an active session, get the context ID using [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
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
