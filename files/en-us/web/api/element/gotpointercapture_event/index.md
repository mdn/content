---
title: 'Element: gotpointercapture event'
slug: Web/API/Element/gotpointercapture_event
tags:
  - Event
  - HTML DOM
  - Element
  - NeedsSpecTable
  - PointerEvent
  - Reference
browser-compat: api.Element.gotpointercapture_event
page-type: web-api-event
---
{{APIRef}}

The **`gotpointercapture`** event is fired when an element captures a pointer using [`setPointerCapture()`](/en-US/docs/Web/API/Element/setPointerCapture).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('gotpointercapture', (event) => {});

ongotpointercapture = (event) => { };
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

This example gets a `<p>` element and listens for the `gotpointercapture` event. It then calls `setPointerCapture()` on the element on a `pointerdown` event, which will trigger `gotpointercapture`.

```js
const para = document.querySelector('p');

para.addEventListener('gotpointercapture', () => {
  console.log('I\'ve been captured!')
});

para.addEventListener('pointerdown', (event) => {
  para.setPointerCapture(event.pointerId);
});
```

The same example, using the `ongotpointercapture` event handler property:

```js
const para = document.querySelector('p');

para.ongotpointercapture = () => {
  console.log('I\'ve been captured!')
};

para.addEventListener('pointerdown', (event) => {
  para.setPointerCapture(event.pointerId);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events

  - [`lostpointercapture`](/en-US/docs/Web/API/Element/lostpointercapture_event)
  - [`pointerover`](/en-US/docs/Web/API/Element/pointerover_event)
  - [`pointerenter`](/en-US/docs/Web/API/Element/pointerenter_event)
  - [`pointerdown`](/en-US/docs/Web/API/Element/pointerdown_event)
  - [`pointermove`](/en-US/docs/Web/API/Element/pointermove_event)
  - [`pointerup`](/en-US/docs/Web/API/Element/pointerup_event)
  - [`pointercancel`](/en-US/docs/Web/API/Element/pointercancel_event)
  - [`pointerout`](/en-US/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/en-US/docs/Web/API/Element/pointerleave_event)
