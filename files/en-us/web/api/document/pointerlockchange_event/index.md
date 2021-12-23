---
title: 'Document: pointerlockchange event'
slug: Web/API/Document/pointerlockchange_event
tags:
  - Document
  - Event
  - Reference
  - Web
  - pointerlockchange
browser-compat: api.Document.pointerlockchange_event
---
{{APIRef}}

The `pointerlockchange` event is fired when the pointer is locked/unlocked.

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
        {{domxref("Document/onpointerlockchange", "onpointerlockchange")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

Using `addEventListener()`:

```js
document.addEventListener('pointerlockchange', (event) => {
  console.log('Pointer lock changed');
});
```

Using the `onpointerlockchange` event handler property:

```js
document.onpointerlockchange = (event) => {
  console.log('Pointer lock changed');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Pointer Lock API](/en-US/docs/Web/API/Pointer_Lock_API)
