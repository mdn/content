---
title: 'Element: pointercancel event'
slug: Web/API/Element/pointercancel_event
tags:
  - Event
  - HTML DOM
  - Element
  - Pointer Events
  - PointerEvent
  - Reference
  - pointercancel
  - user input
browser-compat: api.Element.pointercancel_event
page-type: web-api-event
---
{{APIRef}}

The **`pointercancel`** event is fired when the browser determines that there are unlikely to be any more pointer events, or if after the {{domxref("Element/pointerdown_event", "pointerdown")}} event is fired, the pointer is then used to manipulate the viewport by panning, zooming, or scrolling.

Some examples of situations that will trigger a `pointercancel` event:

- A hardware event occurs that cancels the pointer activities. This may include, for example, the user switching applications using an application switcher interface or the "home" button on a mobile device.
- The device's screen orientation is changed while the pointer is active.
- The browser decides that the user started pointer input accidentally. This can happen if, for example, the hardware supports palm rejection to prevent a hand resting on the display while using a stylus from accidentally triggering events.
- The {{cssxref("touch-action")}} CSS property prevents the input from continuing.

> **Note:** After the `pointercancel` event is fired, the browser will also send {{domxref("Element/pointerout_event", "pointerout")}} followed by {{domxref("Element/pointerleave_event", "pointerleave")}}.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('pointercancel', (event) => {});

onpointercancel = (event) => { };
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

para.addEventListener('pointercancel', (event) => {
  console.log('Pointer event cancelled');
});
```

Using the `onpointercancel` event handler property:

```js
const para = document.querySelector('p');

para.onpointercancel = (event) => {
  console.log('Pointer event cancelled');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events

  - [`gotpointercapture`](/en-US/docs/Web/API/HTMLElement/gotpointercapture_event)
  - [`lostpointercapture`](/en-US/docs/Web/API/HTMLElement/lostpointercapture_event)
  - [`pointerover`](/en-US/docs/Web/API/Element/pointerover_event)
  - [`pointerenter`](/en-US/docs/Web/API/Element/pointerenter_event)
  - [`pointerdown`](/en-US/docs/Web/API/Element/pointerdown_event)
  - [`pointermove`](/en-US/docs/Web/API/Element/pointermove_event)
  - [`pointerup`](/en-US/docs/Web/API/Element/pointerup_event)
  - [`pointerout`](/en-US/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/en-US/docs/Web/API/Element/pointerleave_event)

- This event on `Document` targets: [`pointercancel`](/en-US/docs/Web/API/Document/pointercancel_event) event
