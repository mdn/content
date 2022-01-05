---
title: 'Document: pointerup event'
slug: Web/API/Document/pointerup_event
tags:
  - API
  - Document
  - Event
  - PointerEvent
  - Reference
  - Web
  - onpointerup
  - pointerup
browser-compat: api.Document.pointerup_event
---
{{APIRef}}

The `pointerup` event is fired when a pointer is no longer active.

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
        {{domxref("GlobalEventHandlers/onpointerup", "onpointerup")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

Using `addEventListener()`:

```js
document.addEventListener('pointerup', (event) => {
  console.log('Pointer up');
});
```

Using the `onpointerup` event handler property:

```js
document.onpointerup = (event) => {
  console.log('Pointer up');
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
- {{domxref("Document/pointercancel_event", "pointercancel")}}
- {{domxref("Document/pointerout_event", "pointerout")}}
- {{domxref("Document/pointerleave_event", "pointerleave")}}
- {{domxref("GlobalEventHandlers/onpointerup", "onpointerup")}} event handler property
- This event on `HTMLElement` targets: {{domxref("HTMLElement/pointerup_event", "pointerup")}} event
