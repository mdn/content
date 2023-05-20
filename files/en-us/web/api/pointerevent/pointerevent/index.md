---
title: "PointerEvent: PointerEvent() constructor"
short-title: PointerEvent()
slug: Web/API/PointerEvent/PointerEvent
page-type: web-api-constructor
browser-compat: api.PointerEvent.PointerEvent
---

{{APIRef("Pointer Events")}}

The **`PointerEvent()`** constructor creates a new synthetic
and untrusted {{domxref("PointerEvent")}} object instance.

## Syntax

```js-nolint
new PointerEvent(type)
new PointerEvent(type, options)
```

### Parameters

- `type`
  - : A string representing the name of the event
    (see [PointerEvent event types](/en-US/docs/Web/API/PointerEvent#pointer_event_types)).
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("MouseEvent/MouseEvent", "MouseEvent()")}}_, can have the following properties:
    - `pointerId`
      - : A number, defaulting to `0`, that sets the value of the instance's {{domxref("PointerEvent.pointerId")}}.
    - `width`
      - : A number,, defaulting to `1`, that sets the value of the instance's {{domxref("PointerEvent.width")}}.
    - `height`
      - : A number,, defaulting to `1`, that sets the value of the instance's {{domxref("PointerEvent.height")}}.
    - `pressure`
      - : A number, defaulting to `0`, that sets the value of the instance's {{domxref("PointerEvent.pressure")}}.
    - `tangentialPressure`
      - : A number, defaulting to `0`, that sets the value of the instance's {{domxref("PointerEvent.tangentialPressure")}}.
    - `tiltX`
      - : A number, defaulting to `0`, that sets the value of the instance's {{domxref("PointerEvent.tiltX")}}.
    - `tiltY`
      - : A number, defaulting to `0`, that sets the value of the instance's {{domxref("PointerEvent.tiltY")}}.
    - `twist`
      - : A number, defaulting to `0`, that sets the value of the instance's {{domxref("PointerEvent.twist")}}.
    - `pointerType`
      - : A string, defaulting to `""` that sets the value of the instance's {{domxref("PointerEvent.pointerType")}}.
    - `isPrimary`
      - : A boolean value, defaulting to `false` that sets the value of the instance's {{domxref("PointerEvent.isPrimary")}}.

### Return value

A new {{domxref("PointerEvent")}} object.

## Examples

```js
const moveEvent = new PointerEvent("pointermove");

const downEvent = new PointerEvent("pointerdown", {
  pointerId: 1,
  bubbles: true,
  cancelable: true,
  pointerType: "touch",
  width: 100,
  height: 100,
  isPrimary: true,
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
