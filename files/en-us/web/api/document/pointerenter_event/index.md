---
title: 'Document: pointerenter event'
slug: Web/API/Document/pointerenter_event
tags:
  - API
  - Document
  - Event
  - PointerEvent
  - Reference
  - onpointerenter
  - pointerenter
browser-compat: api.Document.pointerenter_event
---
{{APIRef}}

The `pointerenter` event fires when a pointing device is moved into the hit test boundaries of an element or one of its descendants, including as a result of a {{domxref("Document/pointerdown_event", "pointerdown")}} event from a device that does not support hover (see {{domxref("Document/pointerdown_event", "pointerdown")}}).

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
        {{domxref("GlobalEventHandlers/onpointerenter", "onpointerenter")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

Using `addEventListener()`:

```js
document.addEventListener('pointerenter', (event) => {
  console.log('Pointer entered element');
});
```

Using the `onpointerenter` event handler property:

```js
document.onpointerenter = (event) => {
  console.log('Pointer entered element');
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
- {{domxref("Document/pointerdown_event", "pointerdown")}}
- {{domxref("Document/pointermove_event", "pointermove")}}
- {{domxref("Document/pointerup_event", "pointerup")}}
- {{domxref("Document/pointercancel_event", "pointercancel")}}
- {{domxref("Document/pointerout_event", "pointerout")}}
- {{domxref("Document/pointerleave_event", "pointerleave")}}
- {{domxref("GlobalEventHandlers/onpointerenter", "onpointerenter")}} event handler property
- This event on `HTMLElement` targets: {{domxref("HTMLElement/pointerenter_event", "pointerenter")}} event
