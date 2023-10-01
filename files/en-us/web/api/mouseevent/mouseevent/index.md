---
title: "MouseEvent: MouseEvent() constructor"
short-title: MouseEvent()
slug: Web/API/MouseEvent/MouseEvent
page-type: web-api-constructor
browser-compat: api.MouseEvent.MouseEvent
---

{{APIRef("UI Events")}}

The **`MouseEvent()`** constructor creates a new {{domxref("MouseEvent")}} object.

## Syntax

```js-nolint
new MouseEvent(type)
new MouseEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `dblclick`, `mousedown`, `mouseenter`, `mouseleave`, `mousemove`, `mouseout`, `mouseover`, or `mouseup`.
- `options` {{optional_inline}}

  - : An object that, _in addition of the properties defined in {{domxref("UIEvent/UIEvent", "UIEvent()")}}_, can have the following properties:

    - `screenX` {{optional_inline}}
      - : A number, defaulting to `0`, that is the horizontal position of the mouse event on the user's screen;
        setting this value doesn't move the mouse pointer.
    - `screenY` {{optional_inline}}
      - : A number, defaulting to `0`, that is the vertical position of the mouse event on the user's screen;
        setting this value doesn't move the mouse pointer.
    - `clientX` {{optional_inline}}
      - : A number, defaulting to `0`, that is the horizontal position of the mouse event on the client window of user's screen;
        setting this value doesn't move the mouse pointer.
    - `clientY` {{optional_inline}}
      - : A number, defaulting to `0`, that is the vertical position of the mouse event on the client window of the user's screen;
        setting this value doesn't move the mouse pointer.
    - `ctrlKey` {{optional_inline}}
      - : A boolean value indicating if the <kbd>ctrl</kbd> key was simultaneously pressed. It defaults to `false`.
    - `shiftKey` {{optional_inline}}
      - : A boolean value indicating if the <kbd>shift</kbd> key was simultaneously pressed. It defaults to `false`.
    - `altKey` {{optional_inline}}
      - : A boolean value indicating if the <kbd>alt</kbd> key was simultaneously pressed. It defaults to `false`.
    - `metaKey` {{optional_inline}}
      - : A boolean value indicating if the <kbd>meta</kbd> key was simultaneously pressed. It defaults to `false`.
    - `button` {{optional_inline}}

      - : A number, defaulting to `0`, that describes which button is pressed during events related to the press or release of a button:

        | Value | Meaning                                                         |
        | ----- | --------------------------------------------------------------- |
        | `0`   | Main button pressed (usually the left button) or un-initialized |
        | `1`   | Auxiliary button pressed (usually the middle button)            |
        | `2`   | Secondary button pressed (usually the right button)             |

    - `buttons` {{optional_inline}}

      - : A number, defaulting to `0`, that describes which buttons are pressed when the event is launched:

        | Bit-field value | Meaning                                              |
        | --------------- | ---------------------------------------------------- |
        | `0`             | No button pressed                                    |
        | `1`             | Main button pressed (usually the left button)        |
        | `2`             | Secondary button pressed (usually the right button)  |
        | `4`             | Auxiliary button pressed (usually the middle button) |

    - `relatedTarget` {{optional_inline}}
      - : An {{domxref("EventTarget")}}, defaulting to `null` that is the element just left
        (in case of a {{domxref("Element/mouseenter_event", "mouseenter")}} or {{domxref("Element/mouseover_event", "mouseover")}})
        or is entering (in case of a {{domxref("Element/mouseout_event", "mouseout")}} or {{domxref("Element/mouseleave_event", "mouseleave")}}).
    - `region` {{non-standard_inline}} {{optional_inline}}
      - : A string, defaulting to `null`, that is the ID of the hit region affected by the event.
        The absence of any affected hit region is represented with the `null` value.

    In some implementations, passing anything other than a number for the screen and
    client fields will throw a {{jsxref("TypeError")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MouseEvent")}}, the interface of the objects it constructs.
