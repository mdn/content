---
title: 'HTMLElement: pointerover event'
slug: Web/API/HTMLElement/pointerover_event
tags:
  - Event
  - PointerEvent
browser-compat: api.HTMLElement.pointerover_event
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
        <code
          ><a href="/en-US/docs/Web/API/GlobalEventHandlers/onpointerover"
            >onpointerover</a
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

para.addEventListener('pointerover', (event) => {
  console.log('Pointer moved in');
});
```

Using the `onpointerover` event handler property:

```js
const para = document.querySelector('p');

para.onpointerover = (event) => {
  console.log('Pointer moved in');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`gotpointercapture`](/en-US/docs/Web/API/HTMLElement/gotpointercapture_event)
- [`lostpointercapture`](/en-US/docs/Web/API/HTMLElement/lostpointercapture_event)
- [`pointerenter`](/en-US/docs/Web/API/HTMLElement/pointerenter_event)
- [`pointerdown`](/en-US/docs/Web/API/HTMLElement/pointerdown_event)
- [`pointermove`](/en-US/docs/Web/API/HTMLElement/pointermove_event)
- [`pointerup`](/en-US/docs/Web/API/HTMLElement/pointerup_event)
- [`pointercancel`](/en-US/docs/Web/API/HTMLElement/pointercancel_event)
- [`pointerout`](/en-US/docs/Web/API/HTMLElement/pointerout_event)
- [`pointerleave`](/en-US/docs/Web/API/HTMLElement/pointerleave_event)
- [`onpointerover`](/en-US/docs/Web/API/GlobalEventHandlers/onpointerover) event handler property
- This event on `Document` targets: [`pointerover`](/en-US/docs/Web/API/Document/pointerover_event) event
