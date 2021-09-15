---
title: 'HTMLElement: pointercancel event'
slug: Web/API/HTMLElement/pointercancel_event
tags:
  - Event
  - HTML DOM
  - HTMLElement
  - Pointer Events
  - PointerEvent
  - Reference
  - pointercancel
  - user input
browser-compat: api.HTMLElement.pointercancel_event
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
        <code
          ><a href="/en-US/docs/Web/API/GlobalEventHandlers/onpointercancel"
            >onpointercancel</a
          ></code
        >
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
const para = document.querySelector('p');

para.addEventListener('pointercancel', (event) => {
  console.log('Pointer event cancelled');
});
```

Using the `onpointercancel` event handler property:

```js
const para = document.querySelector('p');

para.onpointercancel = (event) => {
  console.log('Pointer event cancelled');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events

  - [`gotpointercapture`](/en-US/docs/Web/API/HTMLElement/gotpointercapture_event)
  - [`lostpointercapture`](/en-US/docs/Web/API/HTMLElement/lostpointercapture_event)
  - [`pointerover`](/en-US/docs/Web/API/HTMLElement/pointerover_event)
  - [`pointerenter`](/en-US/docs/Web/API/HTMLElement/pointerenter_event)
  - [`pointerdown`](/en-US/docs/Web/API/HTMLElement/pointerdown_event)
  - [`pointermove`](/en-US/docs/Web/API/HTMLElement/pointermove_event)
  - [`pointerup`](/en-US/docs/Web/API/HTMLElement/pointerup_event)
  - [`pointerout`](/en-US/docs/Web/API/HTMLElement/pointerout_event)
  - [`pointerleave`](/en-US/docs/Web/API/HTMLElement/pointerleave_event)

- [`onpointercancel`](/en-US/docs/Web/API/GlobalEventHandlers/onpointercancel) event handler property
- This event on `Document` targets: [`pointercancel`](/en-US/docs/Web/API/Document/pointercancel_event) event
