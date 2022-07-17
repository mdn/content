---
title: 'Document: lostpointercapture event'
slug: Web/API/Document/lostpointercapture_event
page-type: web-api-event
tags:
  - API
  - Document
  - Event
  - PointerEvent
  - Reference
  - lostpointercapture
browser-compat: api.Document.lostpointercapture_event
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

This example listens for the `lostpointercapture` event, and captures the pointer for an element on `pointerdown`. When the user subsequently releases the pointer, the `lostpointercapture` event will be fired.

```js
const para = document.querySelector('p');

document.addEventListener('lostpointercapture', () => {
  console.log('I\'ve been released!')
});

para.addEventListener('pointerdown', (event) => {
  para.setPointerCapture(event.pointerId);
});
```

The same example, but using the `onlostpointercapture` event handler property:

```js
const para = document.querySelector('p');

document.onlostpointercapture = () => {
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

  - {{domxref("Document/pointerover_event", "pointerover")}}
  - {{domxref("Document/pointerenter_event", "pointerenter")}}
  - {{domxref("Document/pointerdown_event", "pointerdown")}}
  - {{domxref("Document/pointermove_event", "pointermove")}}
  - {{domxref("Document/pointerup_event", "pointerup")}}
  - {{domxref("Document/pointercancel_event", "pointercancel")}}
  - {{domxref("Document/pointerout_event", "pointerout")}}
  - {{domxref("Document/pointerleave_event", "pointerleave")}}

- This event on `Element` targets: {{domxref("Element/lostpointercapture_event", "lostpointercapture")}} event
