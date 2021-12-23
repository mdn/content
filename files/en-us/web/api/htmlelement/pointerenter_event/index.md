---
title: 'HTMLElement: pointerenter event'
slug: Web/API/HTMLElement/pointerenter_event
tags:
  - Event
  - HTML DOM
  - HTMLElement
  - NeedsSpecTable
  - PointerEvent
  - Reference
browser-compat: api.HTMLElement.pointerenter_event
---
{{APIRef}}

The `pointerenter` event fires when a pointing device is moved into the hit test boundaries of an element or one of its descendants, including as a result of a {{event("pointerdown")}} event from a device that does not support hover (see {{event("pointerdown")}}).

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
        <code
          ><a href="/en-US/docs/Web/API/GlobalEventHandlers/onpointerenter"
            >onpointerenter</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

Using `addEventListener()`:

```js
const para = document.querySelector('p');

para.addEventListener('pointerenter', (event) => {
  console.log('Pointer entered element');
});
```

Using the `onpointerenter` event handler property:

```js
const para = document.querySelector('p');

para.onpointerenter = (event) => {
  console.log('Pointer entered element');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`gotpointercapture`](/en-US/docs/Web/API/HTMLElement/gotpointercapture_event)
- [`lostpointercapture`](/en-US/docs/Web/API/HTMLElement/lostpointercapture_event)
- [`pointerover`](/en-US/docs/Web/API/HTMLElement/pointerover_event)
- [`pointerdown`](/en-US/docs/Web/API/HTMLElement/pointerdown_event)
- [`pointermove`](/en-US/docs/Web/API/HTMLElement/pointermove_event)
- [`pointerup`](/en-US/docs/Web/API/HTMLElement/pointerup_event)
- [`pointercancel`](/en-US/docs/Web/API/HTMLElement/pointercancel_event)
- [`pointerout`](/en-US/docs/Web/API/HTMLElement/pointerout_event)
- [`pointerleave`](/en-US/docs/Web/API/HTMLElement/pointerleave_event)
- [`onpointerenter`](/en-US/docs/Web/API/GlobalEventHandlers/onpointerenter) event handler property
- This event on `Document` targets: [`pointerenter`](/en-US/docs/Web/API/Document/pointerenter_event) event
