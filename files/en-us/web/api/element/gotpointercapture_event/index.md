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

An {{domxref("PointerEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

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
