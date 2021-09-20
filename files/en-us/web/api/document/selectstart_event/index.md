---
title: 'Document: selectstart event'
slug: Web/API/Document/selectstart_event
tags:
  - Document
  - Event
  - Reference
  - Selection
  - Selection API
  - selectstart
browser-compat: api.Document.selectstart_event
---
{{APIRef}}

The **`selectstart`** event of the [Selection API](/en-US/docs/Web/API/Selection) is fired when a user starts a new selection.

If the event is canceled, the selection is not changed.

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers.onselectstart", "onselectstart")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

```js
// addEventListener version
document.addEventListener('selectstart', () => {
  console.log('Selection started');
});

// onselectstart version
document.onselectstart = () => {
  console.log('Selection changed.');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document/selectionchange_event", "selectionchange")}}
