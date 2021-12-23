---
title: 'Document: pointerout event'
slug: Web/API/Document/pointerout_event
tags:
  - Document
  - Event
  - PointerEvent
  - Reference
  - Web
  - onpointerout
  - pointerout
browser-compat: api.Document.pointerout_event
---
{{APIRef}}

The `pointerout` event is fired for several reasons including: pointing device is moved out of the _hit test_ boundaries of an element; firing the {{domxref("Document/pointerup_event", "pointerup")}} event for a device that does not support hover (see {{domxref("Document/pointerup_event", "pointerup")}}); after firing the {{domxref("Document/pointercancel_event", "pointercancel")}} event (see {{domxref("Document/pointercancel_event", "pointercancel")}}); when a pen stylus leaves the hover range detectable by the digitizer.

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
        {{domxref("GlobalEventHandlers/onpointerout", "onpointerout")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

Using `addEventListener()`:

```js
document.addEventListener('pointerout', (event) => {
  console.log('Pointer moved out');
});
```

Using the `onpointerout` event handler property:

```js
document.onpointerout = (event) => {
  console.log('Pointer moved out');
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
- {{domxref("Document/pointerleave_event", "pointerleave")}}
- {{domxref("GlobalEventHandlers/onpointerout", "onpointerout")}} event handler property
- This event on `HTMLElement` targets: {{domxref("HTMLElement/pointerout_event", "pointerout")}} event
