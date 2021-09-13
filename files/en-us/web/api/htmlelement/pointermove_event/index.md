---
title: 'HTMLElement: pointermove event'
slug: Web/API/HTMLElement/pointermove_event
tags:
  - Event
  - HTML DOM
  - HTMLElement
  - PointerEvent
  - Reference
browser-compat: api.HTMLElement.pointermove_event
---
{{APIRef}}

The `pointermove` event is fired when a pointer changes coordinates, and the pointer has not been [canceled](/en-US/docs/Web/API/HTMLElement/pointercancel_event) by a browser [touch-action](/en-US/docs/Web/CSS/touch-action).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("PointerEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers/onpointermove", "onpointermove")}}
      </td>
    </tr>
  </tbody>
</table>

## Usage notes

The event, which is of type {{domxref("PointerEvent")}}, provides all the information you need to know about the user's interaction with the pointing device, including the position, movement distance, button states, and much more.

## Examples

To add a handler for `pointermove` events using {{domxref("EventTarget.addEventListener", "addEventListener()")}}:

```js
const para = document.querySelector('p');

para.addEventListener('pointermove', (event) => {
  console.log('Pointer moved');
});
```

You can also use the `onpointermove` event handler property:

```js
const para = document.querySelector('p');

para.onpointermove = (event) => {
  console.log('Pointer moved');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`gotpointercapture`](/en-US/docs/Web/API/HTMLElement/gotpointercapture_event)
- [`lostpointercapture`](/en-US/docs/Web/API/HTMLElement/lostpointercapture_event)
- [`pointerover`](/en-US/docs/Web/API/HTMLElement/pointerover_event)
- [`pointerenter`](/en-US/docs/Web/API/HTMLElement/pointerenter_event)
- [`pointerdown`](/en-US/docs/Web/API/HTMLElement/pointerdown_event)
- [`pointerup`](/en-US/docs/Web/API/HTMLElement/pointerup_event)
- [`pointercancel`](/en-US/docs/Web/API/HTMLElement/pointercancel_event)
- [`pointerout`](/en-US/docs/Web/API/HTMLElement/pointerout_event)
- [`pointerleave`](/en-US/docs/Web/API/HTMLElement/pointerleave_event)
- [`onpointermove`](/en-US/docs/Web/API/GlobalEventHandlers/onpointermove) event handler property
- This event on `Document` targets: [`pointermove`](/en-US/docs/Web/API/Document/pointermove_event) event

Internet Explorer also used to support an event named `MSPointerHover`, which fired when a contact (normally a pen) moves over an element without touching the surface. This proprietary method is specific to Internet Explorer and, as of Internet Explorer 11, has been deprecated. Starting with IE11 the [`pointermove`](/en-US/docs/Web/API/HTMLElement/pointermove_event) event will fire for all pen movement (regardless if its hovering or not).
