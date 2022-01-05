---
title: 'Document: pointerdown event'
slug: Web/API/Document/pointerdown_event
tags:
  - API
  - Document
  - Event
  - PointerEvent
  - Reference
  - onpointerdown
  - pointerdown
browser-compat: api.Document.pointerdown_event
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
        {{domxref("GlobalEventHandlers/onpointerdown", "onpointerdown")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

Using `addEventListener()`:

```js
document.addEventListener('pointerdown', (event) => {
  console.log('Pointer down event');
});
```

Using the `onpointerdown` event handler property:

```js
document.onpointerdown = (event) => {
  console.log('Pointer down event');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("GlobalEventHandlers/onpointerdown", "onpointerdown")}} event handler property.
- This event on `HTMLElement` targets: {{domxref("HTMLElement/pointerdown_event", "pointerdown")}} event
