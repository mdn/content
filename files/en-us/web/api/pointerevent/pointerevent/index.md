---
title: PointerEvent()
slug: Web/API/PointerEvent/PointerEvent
tags:
  - API
  - Constructor
  - PointerEvent
  - Reference
browser-compat: api.PointerEvent.PointerEvent
---
{{APIRef("Pointer Events")}}

The **`PointerEvent()`** constructor creates a new synthetic
and untrusted {{domxref("PointerEvent")}} object instance.

## Syntax

```js
 event = new PointerEvent(type, PointerEventInit);
```

### Arguments

- _type_
  - : Is a {{domxref("DOMString")}} representing the name of the event (see [PointerEvent event
    types](/en-US/docs/Web/API/PointerEvent#pointer_event_types)).
- _PointerEventInit_{{optional_inline}}

  - : Is a `PointerEventInit` dictionary, having the following fields:

    - `pointerId` — optional `long`, defaulting to `0`,
      sets the value of the instance's {{domxref("PointerEvent.pointerId")}}.
    - `width` — optional `double`, defaulting to `1`,
      sets the value of the instance'sc{{domxref("PointerEvent.width")}}.
    - `height` — optional `double`, defaulting to `1`,
      sets the value of the instance's {{domxref("PointerEvent.height")}}.
    - `pressure` — optional `float`, defaulting to `0`,
      sets the value of the instance's {{domxref("PointerEvent.pressure")}}.
    - `tangentialPressure` — optional `float`, defaulting to `0`,
      sets the value of the instance's {{domxref("PointerEvent.tangentialPressure")}}.
    - `tiltX` — optional `long`, defaulting to `0`,
      sets the value of the instance's {{domxref("PointerEvent.tiltX")}}.
    - `tiltY` — optional `long`, defaulting to `0`,
      sets the value of the instance's {{domxref("PointerEvent.tiltY")}}.
    - `twist` — optional `long`, defaulting to `0`,
      sets the value of the instance's {{domxref("PointerEvent.twist")}}.
    - `pointerType` — optional {{domxref("DOMString")}}, defaulting to `""`
      sets the value of the instance's {{domxref("PointerEvent.pointerType")}}.
    - `isPrimary` — optional boolean value, defaulting to `false`
      sets the value of the instance's {{domxref("PointerEvent.isPrimary")}}.

    > **Note:** The `PointerEventInit` dictionary also
    > accepts fields from the {{domxref("MouseEvent.MouseEvent","MouseEvent")}},
    > {{domxref("UIEvent.UIEvent", "UIEventInit")}} and {{domxref("Event.Event",
				"EventInit")}} dictionaries.

## Example

```js
var moveEvent = new PointerEvent("pointermove");

var downEvent = new PointerEvent("pointerdown",
   {pointerId: 1,
    bubbles: true,
    cancelable: true,
    pointerType: "touch",
    width: 100,
    height: 100,
    isPrimary: true
   });
```

## Browser compatibility

{{Compat}}
