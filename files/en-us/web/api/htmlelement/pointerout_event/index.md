---
title: 'HTMLElement: pointerout event'
slug: Web/API/HTMLElement/pointerout_event
tags:
  - Event
  - HTML DOM
  - HTMLElement
  - PointerEvent
  - Reference
browser-compat: api.HTMLElement.pointerout_event
---
{{APIRef}}

The `pointerout` event is fired for several reasons including: pointing device is moved out of the _hit test_ boundaries of an element; firing the {{event("pointerup")}} event for a device that does not support hover (see {{event("pointerup")}}); after firing the {{event("pointercancel")}} event (see {{event("pointercancel")}}); when a pen stylus leaves the hover range detectable by the digitizer.

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
        <code
          ><a href="/en-US/docs/Web/API/GlobalEventHandlers/onpointerout"
            >onpointerout</a
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

para.addEventListener('pointerout', (event) => {
  console.log('Pointer moved out');
});
```

Using the `onpointerout` event handler property:

```js
const para = document.querySelector('p');

para.onpointerout = (event) => {
  console.log('Pointer moved out');
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
- [`pointerleave`](/en-US/docs/Web/API/HTMLElement/pointerleave_event)
- [`onpointerout`](/en-US/docs/Web/API/GlobalEventHandlers/onpointerout) event handler property
- This event on `Document` targets: [`pointerout`](/en-US/docs/Web/API/Document/pointerout_event) event
