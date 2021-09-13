---
title: 'Document: pointermove event'
slug: Web/API/Document/pointermove_event
tags:
  - Document
  - Event
  - PointerEvent
  - Reference
  - Web
  - pointer
  - pointermove
browser-compat: api.Document.pointermove_event
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

## Examples

Using `addEventListener()`:

```js
document.addEventListener('pointermove', (event) => {
  console.log('Pointer moved');
});
```

Using the `onpointermove` event handler property:

```js
document.onpointermove = (event) => {
  console.log('Pointer moved');
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
- {{domxref("Document/pointerup_event", "pointerup")}}
- {{domxref("Document/pointercancel_event", "pointercancel")}}
- {{domxref("Document/pointerout_event", "pointerout")}}
- {{domxref("Document/pointerleave_event", "pointerleave")}}
- {{domxref("GlobalEventHandlers/onpointerout", "onpointerout")}} event handler property
- This event on `HTMLElement` targets: {{domxref("HTMLElement/pointermove_event", "pointermove")}} event
