---
title: MouseEvent()
slug: Web/API/MouseEvent/MouseEvent
tags:
  - API
  - Constructor
  - DOM
  - MouseEvent
  - Reference
  - events
browser-compat: api.MouseEvent.MouseEvent
---
{{APIRef("DOM Events")}}

The **`MouseEvent()`** constructor creates a new
{{domxref("MouseEvent")}}.

## Syntax

```js
 event = new MouseEvent(typeArg, mouseEventInit);
```

### Values

- _typeArg_
  - : Is a {{domxref("DOMString")}} representing the name of the event.
- _mouseEventInit_ {{optional_inline}}

  - : Is a `MouseEventInit` dictionary, having the following fields:

    - `"screenX"`, optional `long`, defaulting to `0`,
      that is the horizontal position of the mouse event on the user's screen;
      setting this value doesn't move the mouse pointer.
    - `"screenY"`, optional `long`, defaulting to `0`,
      that is the vertical position of the mouse event on the user's screen;
      setting this value doesn't move the mouse pointer.
    - `"clientX"`, optional `long`, defaulting to `0`,
      that is the horizontal position of the mouse event on the client window of user's screen;
      setting this value doesn't move the mouse pointer.
    - `"clientY"`, optional `long`, defaulting to `0`,
      that is the vertical position of the mouse event
      on the client window of the user's screen;
      setting this value doesn't move the mouse pointer.
    - `"ctrlKey"`, optional boolean value, defaulting to `false`,
      that indicates if the <kbd>ctrl</kbd> key was simultaneously pressed.
    - `"shiftKey"`, optional boolean value, defaulting to `false`,
      that indicates if the <kbd>shift</kbd> key was simultaneously pressed.
    - `"altKey"`, optional boolean value, defaulting to `false`,
      that indicates if the <kbd>alt</kbd> key was simultaneously pressed.
    - `"metaKey"`, optional boolean value, defaulting to `false`,
      that indicates if the <kbd>meta</kbd>
      key was simultaneously pressed.
    - `"button"`, optional `short`, defaulting to `0`,
      that describes which button is pressed
      during events related to the press or release of a button:

      | Value | Meaning                                                         |
      | ----- | --------------------------------------------------------------- |
      | `0`   | Main button pressed (usually the left button) or un-initialized |
      | `1`   | Auxiliary button pressed (usually the middle button)            |
      | `2`   | Secondary button pressed (usually the right button)             |

    - `"buttons"`, optional `unsigned short`, defaulting to `0`,
      that describes which buttons are pressed
      when the event is launched:

      | Bit-field value | Meaning                                              |
      | --------------- | ---------------------------------------------------- |
      | `0`             | No button pressed                                    |
      | `1`             | Main button pressed (usually the left button)        |
      | `2`             | Secondary button pressed (usually the right button)  |
      | `4`             | Auxiliary button pressed (usually the middle button) |

    - `"relatedTarget"`, optional {{domxref("EventTarget")}}, defaulting to `null`
      that is the element just left
      (in case of a {{domxref("Element/mouseenter_event", "mouseenter")}} or {{domxref("Element/mouseover_event", "mouseover")}})
      or is entering (in case of a {{domxref("Element/mouseout_event", "mouseout")}} or {{domxref("Element/mouseleave_event", "mouseleave")}}).
    - `"region"`, optional {{domxref("DOMString")}}, defaulting to `null`,
      that is the ID of the hit region affected by the event.
      The absence of any affected hit region is represented with the `null` value.

    In some implementations, passing anything other than a number for the screen and
    client fields will throw a `TypeError`.

    > **Note:** The `MouseEventInit` dictionary also accepts fields from
    > {{domxref("UIEvent.UIEvent", "UIEventInit")}} and from {{domxref("Event.Event",
          "EventInit")}} dictionaries.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Polyfill

You can polyfill the `MouseEvent()` constructor functionality in Internet
Explorer 9 and higher with the following code:

```js
(function (window) {
  try {
    new MouseEvent('test');
    return false; // No need to polyfill
  } catch (e) {
		// Need to polyfill - fall through
  }

    // Polyfills DOM4 MouseEvent
	var MouseEventPolyfill = function (eventType, params) {
		params = params || { bubbles: false, cancelable: false };
		var mouseEvent = document.createEvent('MouseEvent');
		mouseEvent.initMouseEvent(eventType,
			params.bubbles,
			params.cancelable,
			window,
			0,
			params.screenX || 0,
			params.screenY || 0,
			params.clientX || 0,
			params.clientY || 0,
			params.ctrlKey || false,
			params.altKey || false,
			params.shiftKey || false,
			params.metaKey || false,
			params.button || 0,
			params.relatedTarget || null
		);

		return mouseEvent;
	}

	MouseEventPolyfill.prototype = Event.prototype;

	window.MouseEvent = MouseEventPolyfill;
})(window);
```

## See also

- {{domxref("MouseEvent")}}, the interface of the objects it constructs.
