---
title: 'HTMLElement: lostpointercapture event'
slug: Web/API/HTMLElement/lostpointercapture_event
tags:
  - Event
  - HTML DOM
  - HTMLElement
  - NeedsSpecTable
  - PointerEvent
  - Reference
browser-compat: api.HTMLElement.lostpointercapture_event
---
{{APIRef}}

The **`lostpointercapture`** event is fired when a [captured pointer](/en-US/docs/Web/API/Pointer_events#pointer_capture) is released.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("PointerEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        <code
          ><a
            href="/en-US/docs/Web/API/GlobalEventHandlers/onlostpointercapture"
            >onlostpointercapture</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

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

  - [`gotpointercapture`](/en-US/docs/Web/API/HTMLElement/gotpointercapture_event)
  - [`pointerover`](/en-US/docs/Web/API/HTMLElement/pointerover_event)
  - [`pointerenter`](/en-US/docs/Web/API/HTMLElement/pointerenter_event)
  - [`pointerdown`](/en-US/docs/Web/API/HTMLElement/pointerdown_event)
  - [`pointermove`](/en-US/docs/Web/API/HTMLElement/pointermove_event)
  - [`pointerup`](/en-US/docs/Web/API/HTMLElement/pointerup_event)
  - [`pointercancel`](/en-US/docs/Web/API/HTMLElement/pointercancel_event)
  - [`pointerout`](/en-US/docs/Web/API/HTMLElement/pointerout_event)
  - [`pointerleave`](/en-US/docs/Web/API/HTMLElement/pointerleave_event)

- [`onlostpointercapture`](/en-US/docs/Web/API/GlobalEventHandlers/onlostpointercapture) event handler property
- This event on `Document` targets: [`lostpointercapture`](/en-US/docs/Web/API/Document/lostpointercapture_event) event
