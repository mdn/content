---
title: 'Element: lostpointercapture event'
slug: Web/API/Element/lostpointercapture_event
tags:
  - Event
  - HTML DOM
  - Element
  - NeedsSpecTable
  - PointerEvent
  - Reference
browser-compat: api.Element.lostpointercapture_event
page-type: web-api-event
---
{{APIRef}}

The **`lostpointercapture`** event is fired when a [captured pointer](/en-US/docs/Web/API/Pointer_events#pointer_capture) is released.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('lostpointercapture', (event) => {});

onlostpointercapture = (event) => { };
```

## Event type

An {{domxref("PointerEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Examples

This example listens for the `lostpointercapture` event for an element, and captures the pointer for the element on `pointerdown`. When the user subsequently releases the pointer, the `lostpointercapture` event will be fired.

```js
const para = document.querySelector('p');

para.addEventListener('lostpointercapture', () => {
  console.log('I\'ve been released!')
});

para.addEventListener('pointerdown', (event) => {
  para.setPointerCapture(event.pointerId);
});
```

The same example, but using the `onlostpointercapture` event handler property:

```js
const para = document.querySelector('p');

para.onlostpointercapture = () => {
  console.log('I\'ve been released!')
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

  - [`gotpointercapture`](/en-US/docs/Web/API/Element/gotpointercapture_event)
  - [`pointerover`](/en-US/docs/Web/API/Element/pointerover_event)
  - [`pointerenter`](/en-US/docs/Web/API/Element/pointerenter_event)
  - [`pointerdown`](/en-US/docs/Web/API/Element/pointerdown_event)
  - [`pointermove`](/en-US/docs/Web/API/Element/pointermove_event)
  - [`pointerup`](/en-US/docs/Web/API/Element/pointerup_event)
  - [`pointercancel`](/en-US/docs/Web/API/Element/pointercancel_event)
  - [`pointerout`](/en-US/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/en-US/docs/Web/API/Element/pointerleave_event)

- This event on `Document` targets: [`lostpointercapture`](/en-US/docs/Web/API/Document/lostpointercapture_event) event
