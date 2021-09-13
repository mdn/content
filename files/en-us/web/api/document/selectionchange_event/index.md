---
title: 'Document: selectionchange event'
slug: Web/API/Document/selectionchange_event
tags:
  - API
  - Event
  - Reference
  - Selection
  - Selection API
  - selectionchange
browser-compat: api.Document.selectionchange_event
---
{{APIRef}}

The **`selectionchange`** event of the [Selection API](/en-US/docs/Web/API/Selection) is fired when the current {{domxref("Selection")}} of a {{domxref("Document")}} is changed.

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers.onselectionchange", "onselectionchange")}}
      </td>
    </tr>
  </tbody>
</table>

The event can be handled by adding an event listener for `selectionchange` or using the global {{domxref("GlobalEventHandlers.onselectionchange","onselectionchange")}} event handler.

> **Note:** This event is not quite the same as the `selectionchange` events fired when the text selection in an {{HTMLElement("input")}} or {{HTMLElement("textarea")}} element is changed.
> See {{domxref("GlobalEventHandlers.onselectionchange")}} for more information.

## Examples

```js
// addEventListener version
document.addEventListener('selectionchange', () => {
  console.log(document.getSelection());
});

// onselectionchange version
document.onselectionchange = () => {
  console.log(document.getSelection());
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document/selectstart_event", "selectstart")}}
- {{domxref("Document.getSelection()")}}
- {{domxref("Selection", "Selection")}}
