---
title: 'HTMLElement: pointerleave event'
slug: Web/API/HTMLElement/pointerleave_event
tags:
  - Event
  - HTML DOM
  - HTMLElement
  - PointerEvent
  - Reference
browser-compat: api.HTMLElement.pointerleave_event
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
        <code
          ><a href="/en-US/docs/Web/API/GlobalEventHandlers/onpointerleave"
            >onpointerleave</a
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

para.addEventListener('pointerleave', (event) => {
  console.log('Pointer left element');
});
```

Using the `onpointerleave` event handler property:

```js
const para = document.querySelector('p');

para.onpointerleave = (event) => {
  console.log('Pointer left element');
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
- [`pointerenter`](/en-US/docs/Web/API/HTMLElement/pointerenter_event)
- [`pointerdown`](/en-US/docs/Web/API/HTMLElement/pointerdown_event)
- [`pointermove`](/en-US/docs/Web/API/HTMLElement/pointermove_event)
- [`pointerup`](/en-US/docs/Web/API/HTMLElement/pointerup_event)
- [`pointercancel`](/en-US/docs/Web/API/HTMLElement/pointercancel_event)
- [`pointerout`](/en-US/docs/Web/API/HTMLElement/pointerout_event)
- [`onpointerleave`](/en-US/docs/Web/API/GlobalEventHandlers/onpointerleave) event handler property
- This event on `Document` targets: [`pointerleave`](/en-US/docs/Web/API/Document/pointerleave_event) event
