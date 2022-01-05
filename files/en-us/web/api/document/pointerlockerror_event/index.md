---
title: 'Document: pointerlockerror event'
slug: Web/API/Document/pointerlockerror_event
tags:
  - Document
  - Event
  - Reference
  - Web
  - pointerlockerror
browser-compat: api.Document.pointerlockerror_event
---
{{APIRef}}

The `pointerlockerror` event is fired when locking the pointer failed (for technical reasons or because the permission was denied).

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
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("Document/onpointerlockerror", "onpointerlockerror")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

Using `addEventListener()`:

```js
const para = document.querySelector('p');

document.addEventListener('pointerlockerror', (event) => {
  console.log('Error locking pointer');
});
```

Using the `onpointerlockerror` event handler property:

```js
document.onpointerlockerror = (event) => {
  console.log('Error locking pointer');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Pointer Lock API](/en-US/docs/Web/API/Pointer_Lock_API)
