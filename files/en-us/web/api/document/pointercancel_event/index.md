---
title: 'Document: pointercancel event'
slug: Web/API/Document/pointercancel_event
tags:
  - API
  - Document
  - Event
  - PointerEvent
  - onpointercancel
  - pointercancel
browser-compat: api.Document.pointercancel_event
---
{{APIRef}}

The **`pointercancel`** event is fired when the browser determines that there are unlikely to be any more pointer events, or if after the {{event("pointerdown")}} event is fired, the pointer is then used to manipulate the viewport by panning, zooming, or scrolling.

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
        {{domxref("GlobalEventHandlers/onpointercancel", "onpointercancel")}}
      </td>
    </tr>
  </tbody>
</table>

Some examples of situations that will trigger a `pointercancel` event:

- A hardware event occurs that cancels the pointer activities. This may include, for example, the user switching applications using an application switcher interface or the "home" button on a mobile device.
- The device's screen orientation is changed while the pointer is active.
- The browser decides that the user started pointer input accidentally. This can happen if, for example, the hardware supports palm rejection to prevent a hand resting on the display while using a stylus from accidentally triggering events.
- The {{cssxref("touch-action")}} CSS property prevents the input from continuing.

> **Note:** After the `pointercancel` event is fired, the browser will also send {{event("pointerout")}} followed by {{event("pointerleave")}}.

## Examples

Using `addEventListener()`:

```js
document.addEventListener('pointercancel', (event) => {
  console.log('Pointer event cancelled')
});
```

Using the `onpointercancel` event handler property:

```js
document.onpointercancel = (event) => {
  console.log('Pointer event cancelled')
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events

  - {{domxref("Document/gotpointercapture_event", "gotpointercapture")}}
  - {{domxref("Document/lostpointercapture_event", "lostpointercapture")}}
  - {{domxref("Document/pointerover_event", "pointerover")}}
  - {{domxref("Document/pointerenter_event", "pointerenter")}}
  - {{domxref("Document/pointerdown_event", "pointerdown")}}
  - {{domxref("Document/pointermove_event", "pointermove")}}
  - {{domxref("Document/pointerup_event", "pointerup")}}
  - {{domxref("Document/pointerout_event", "pointerout")}}
  - {{domxref("Document/pointerleave_event", "pointerleave")}}

- {{domxref("GlobalEventHandlers.onpointercancel")}} event handler property
- This event on `HTMLElement` targets: {{domxref("HTMLElement/pointercancel_event", "pointercancel")}} event
