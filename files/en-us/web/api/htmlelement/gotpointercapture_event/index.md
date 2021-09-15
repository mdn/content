---
title: 'HTMLElement: gotpointercapture event'
slug: Web/API/HTMLElement/gotpointercapture_event
tags:
  - Event
  - HTML DOM
  - HTMLElement
  - NeedsSpecTable
  - PointerEvent
  - Reference
browser-compat: api.HTMLElement.gotpointercapture_event
---
{{APIRef}}

The **`gotpointercapture`** event is fired when an element captures a pointer using [`setPointerCapture()`](/en-US/docs/Web/API/Element/setPointerCapture).

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
        {{domxref("GlobalEventHandlers/ongotpointercapture", "ongotpointercapture")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

This example gets a `<p>` element and listens for the `gotpointercapture` event. It then calls `setPointerCapture()` on the element on a `pointerdown` event, which will trigger `gotpointercapture`.

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

  - [`lostpointercapture`](/en-US/docs/Web/API/HTMLElement/lostpointercapture_event)
  - [`pointerover`](/en-US/docs/Web/API/HTMLElement/pointerover_event)
  - [`pointerenter`](/en-US/docs/Web/API/HTMLElement/pointerenter_event)
  - [`pointerdown`](/en-US/docs/Web/API/HTMLElement/pointerdown_event)
  - [`pointermove`](/en-US/docs/Web/API/HTMLElement/pointermove_event)
  - [`pointerup`](/en-US/docs/Web/API/HTMLElement/pointerup_event)
  - [`pointercancel`](/en-US/docs/Web/API/HTMLElement/pointercancel_event)
  - [`pointerout`](/en-US/docs/Web/API/HTMLElement/pointerout_event)
  - [`pointerleave`](/en-US/docs/Web/API/HTMLElement/pointerleave_event)

- [`ongotpointercapture`](/en-US/docs/Web/API/GlobalEventHandlers/ongotpointercapture) event handler property
- This event on `Document` targets: [`gotpointercapture`](/en-US/docs/Web/API/Document/gotpointercapture_event) event
