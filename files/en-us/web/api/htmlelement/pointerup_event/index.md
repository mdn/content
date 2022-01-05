---
title: 'HTMLElement: pointerup event'
slug: Web/API/HTMLElement/pointerup_event
tags:
  - Event
  - HTML DOM
  - HTMLElement
  - PointerEvent
  - Reference
browser-compat: api.HTMLElement.pointerup_event
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
        <code
          ><a href="/en-US/docs/Web/API/GlobalEventHandlers/onpointerup"
            >onpointerup</a
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

para.addEventListener('pointerup', (event) => {
  console.log('Pointer up');
});
```

Using the `onpointerup` event handler property:

```js
const para = document.querySelector('p');

para.onpointerup = (event) => {
  console.log('Pointer up');
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
- [`pointercancel`](/en-US/docs/Web/API/HTMLElement/pointercancel_event)
- [`pointerout`](/en-US/docs/Web/API/HTMLElement/pointerout_event)
- [`pointerleave`](/en-US/docs/Web/API/HTMLElement/pointerleave_event)
- [`onpointerup`](/en-US/docs/Web/API/GlobalEventHandlers/onpointerup) event handler property
- This event on [`Document`](/en-US/docs/Web/API/Document) targets: [`pointerup`](/en-US/docs/Web/API/Document/pointerup_event)
