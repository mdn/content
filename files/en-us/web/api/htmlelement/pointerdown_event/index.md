---
title: 'HTMLElement: pointerdown event'
slug: Web/API/HTMLElement/pointerdown_event
tags:
  - Event
  - HTML DOM
  - HTMLElement
  - PointerEvent
  - Reference
browser-compat: api.HTMLElement.pointerdown_event
---
{{APIRef}}

The `pointerdown` event is fired when a pointer becomes active. For mouse, it is fired when the device transitions from no buttons depressed to at least one button depressed. For touch, it is fired when physical contact is made with the digitizer. For pen, it is fired when the stylus makes physical contact with the digitizer.

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
          ><a href="/en-US/docs/Web/API/GlobalEventHandlers/onpointerdown"
            >onpointerdown</a
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

para.addEventListener('pointerdown', (event) => {
  console.log('Pointer down event');
});
```

Using the `onpointerdown` event handler property:

```js
const para = document.querySelector('p');

para.onpointerdown = (event) => {
  console.log('Pointer down event');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`onpointerdown`](/en-US/docs/Web/API/GlobalEventHandlers/onpointerdown) event handler property.
- This event on `Document` targets: [`pointerdown`](/en-US/docs/Web/API/Document/pointerdown_event) event
