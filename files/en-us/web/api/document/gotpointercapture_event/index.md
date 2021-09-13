---
title: 'Document: gotpointercapture event'
slug: Web/API/Document/gotpointercapture_event
tags:
  - Document
  - Event
  - PointerEvent
  - Reference
  - Web
  - gotpointercapture
browser-compat: api.Document.gotpointercapture_event
---
{{APIRef}}

The **`gotpointercapture`** event is fired when an element captures a pointer using {{domxref("Element.setPointerCapture", "setPointerCapture()")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
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

This example gets a `<p>` element and listens for the `gotpointercapture` event. It then calls `setPointerCapture()` on the element on a `pointerdown` event, which will trigger `gotpointercapture`.

```js
const para = document.querySelector('p');

document.addEventListener('gotpointercapture', () => {
  console.log('I\'ve been captured!')
});

para.addEventListener('pointerdown', (event) => {
  para.setPointerCapture(event.pointerId);
});
```

The same example, using the `ongotpointercapture` event handler property:

```js
const para = document.querySelector('p');

document.ongotpointercapture = () => {
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

  - {{domxref("Document/lostpointercapture_event", "lostpointercapture")}}
  - {{domxref("Document/pointerover_event", "pointerover")}}
  - {{domxref("Document/pointerenter_event", "pointerenter")}}
  - {{domxref("Document/pointerdown_event", "pointerdown")}}
  - {{domxref("Document/pointermove_event", "pointermove")}}
  - {{domxref("Document/pointerup_event", "pointerup")}}
  - {{domxref("Document/pointercancel_event", "pointercancel")}}
  - {{domxref("Document/pointerout_event", "pointerout")}}
  - {{domxref("Document/pointerleave_event", "pointerleave")}}

- {{domxref("GlobalEventHandlers/ongotpointercapture", "ongotpointercapture")}} event handler property
- This event on `HTMLElement` targets: {{domxref("HTMLElement/gotpointercapture_event", "gotpointercapture")}} event
