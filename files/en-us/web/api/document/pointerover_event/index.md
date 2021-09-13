---
title: 'Document: pointerover event'
slug: Web/API/Document/pointerover_event
tags:
  - Document
  - Event
  - PointerEvent
  - Reference
  - Web
  - onpointerover
  - pointer
  - pointerover
browser-compat: api.Document.pointerover_event
---
{{APIRef}}

The `pointerover` event is fired when a pointing device is moved into an element's hit test boundaries.

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
        {{domxref("GlobalEventHandlers/onpointerover", "onpointerover")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

Using `addEventListener()`:

```js
document.addEventListener('pointerover', (event) => {
  console.log('Pointer moved in');
});
```

Using the `onpointerover` event handler property:

```js
document.onpointerover = (event) => {
  console.log('Pointer moved in');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document/gotpointercapture_event", "gotpointercapture")}}
- {{domxref("Document/lostpointercapture_event", "lostpointercapture")}}
- {{domxref("Document/pointerenter_event", "pointerenter")}}
- {{domxref("Document/pointerdown_event", "pointerdown")}}
- {{domxref("Document/pointermove_event", "pointermove")}}
- {{domxref("Document/pointercancel_event", "pointercancel")}}
- {{domxref("Document/pointerout_event", "pointerout")}}
- {{domxref("Document/pointerleave_event", "pointerleave")}}
- {{domxref("GlobalEventHandlers/onpointerover", "onpointerover")}} event handler property
- This event on `HTMLElement` targets: {{domxref("HTMLElement/pointerover_event", "pointerover")}} event
