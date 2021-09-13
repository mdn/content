---
title: 'Document: pointerleave event'
slug: Web/API/Document/pointerleave_event
tags:
  - API
  - Document
  - Event
  - PointerEvent
  - Reference
  - onpointerleave
  - pointerleave
browser-compat: api.Document.pointerleave_event
---
{{APIRef}}

The `pointerleave` event is fired when a pointing device is moved out of the hit test boundaries of an element. For pen devices, this event is fired when the stylus leaves the hover range detectable by the digitizer.

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
        {{domxref("GlobalEventHandlers/onpointerleave", "onpointerleave")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

Using `addEventListener()`:

```js
document.addEventListener('pointerleave', (event) => {
  console.log('Pointer left element');
});
```

Using the `onpointerleave` event handler property:

```js
document.onpointerleave = (event) => {
  console.log('Pointer left element');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document/gotpointercapture_event", "gotpointercapture")}}
- {{domxref("Document/lostpointercapture_event", "lostpointercapture")}}
- {{domxref("Document/pointerover_event", "pointerover")}}
- {{domxref("Document/pointerenter_event", "pointerenter")}}
- {{domxref("Document/pointerdown_event", "pointerdown")}}
- {{domxref("Document/pointermove_event", "pointermove")}}
- {{domxref("Document/pointerup_event", "pointerup")}}
- {{domxref("Document/pointercancel_event", "pointercancel")}}
- {{domxref("Document/pointerout_event", "pointerout")}}
- {{domxref("GlobalEventHandlers/onpointerleave", "onpointerleave")}} event handler property
- This event on `HTMLElement` targets: {{domxref("HTMLElement/pointerleave_event", "pointerleave")}} event
