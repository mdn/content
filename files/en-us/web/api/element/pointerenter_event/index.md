---
title: 'Element: pointerenter event'
slug: Web/API/Element/pointerenter_event
tags:
  - Event
  - HTML DOM
  - Element
  - NeedsSpecTable
  - PointerEvent
  - Reference
browser-compat: api.Element.pointerenter_event
page-type: web-api-event
---
{{APIRef}}

The `pointerenter` event fires when a pointing device is moved into the hit test boundaries of an element or one of its descendants, including as a result of a {{domxref("Element/pointerdown_event", "pointerdown")}} event from a device that does not support hover (see {{domxref("Element/pointerdown_event", "pointerdown")}}).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('pointerenter', (event) => {});

onpointerenter = (event) => { };
```

## Event type

A {{domxref("PointerEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Event properties

_This interface inherits properties from {{domxref("MouseEvent")}} and {{domxref("Event")}}._

- {{ domxref('PointerEvent.pointerId')}} {{ReadOnlyInline}}
  - : A unique identifier for the pointer causing the event.
- {{ domxref('PointerEvent.width')}} {{ReadOnlyInline}}
  - : The width (magnitude on the X axis), in CSS pixels, of the contact geometry of the pointer.
- {{ domxref('PointerEvent.height')}} {{ReadOnlyInline}}
  - : The height (magnitude on the Y axis), in CSS pixels, of the contact geometry of the pointer.
- {{ domxref('PointerEvent.pressure')}} {{ReadOnlyInline}}
  - : The normalized pressure of the pointer input in the range `0` to `1`, where `0` and `1` represent the minimum and maximum pressure the hardware is capable of detecting, respectively.
- {{ domxref('PointerEvent.tangentialPressure')}} {{ReadOnlyInline}}
  - : The normalized tangential pressure of the pointer input (also known as barrel pressure or [cylinder stress](https://en.wikipedia.org/wiki/Cylinder_stress)) in the range `-1` to `1`, where `0` is the neutral position of the control.
- {{ domxref('PointerEvent.tiltX')}} {{ReadOnlyInline}}
  - : The plane angle (in degrees, in the range of `-90` to `90`) between the Y–Z plane and the plane containing both the pointer (e.g. pen stylus) axis and the Y axis.
- {{ domxref('PointerEvent.tiltY')}} {{ReadOnlyInline}}
  - : The plane angle (in degrees, in the range of `-90` to `90`) between the X–Z plane and the plane containing both the pointer (e.g. pen stylus) axis and the X axis.
- {{ domxref('PointerEvent.twist')}} {{ReadOnlyInline}}
  - : The clockwise rotation of the pointer (e.g. pen stylus) around its major axis in degrees, with a value in the range `0` to `359`.
- {{ domxref('PointerEvent.pointerType')}} {{ReadOnlyInline}}
  - : Indicates the device type that caused the event (mouse, pen, touch, etc.)
- {{ domxref('PointerEvent.isPrimary')}} {{ReadOnlyInline}}
  - : Indicates if the pointer represents the primary pointer of this pointer type.

## Examples

Using `addEventListener()`:

```js
const para = document.querySelector('p');

para.addEventListener('pointerenter', (event) => {
  console.log('Pointer entered element');
});
```

Using the `onpointerenter` event handler property:

```js
const para = document.querySelector('p');

para.onpointerenter = (event) => {
  console.log('Pointer entered element');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`gotpointercapture`](/en-US/docs/Web/API/HTMLElement/gotpointercapture_event)
- [`lostpointercapture`](/en-US/docs/Web/API/HTMLElement/lostpointercapture_event)
- [`pointerover`](/en-US/docs/Web/API/Element/pointerover_event)
- [`pointerdown`](/en-US/docs/Web/API/Element/pointerdown_event)
- [`pointermove`](/en-US/docs/Web/API/Element/pointermove_event)
- [`pointerup`](/en-US/docs/Web/API/Element/pointerup_event)
- [`pointercancel`](/en-US/docs/Web/API/Element/pointercancel_event)
- [`pointerout`](/en-US/docs/Web/API/Element/pointerout_event)
- [`pointerleave`](/en-US/docs/Web/API/Element/pointerleave_event)
- This event on `Document` targets: [`pointerenter`](/en-US/docs/Web/API/Document/pointerenter_event) event
