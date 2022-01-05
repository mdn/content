---
title: 'Document: copy event'
slug: Web/API/Document/copy_event
tags:
  - API
  - Clipboard API
  - Document
  - Event
  - Reference
  - Web
  - copy
browser-compat: api.Document.copy_event
---
{{APIRef}}

The **`copy`** event fires when the user initiates a copy action through the browser's user interface.

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
      <td>{{domxref("ClipboardEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{domxref("HTMLElement/oncopy", "oncopy")}}</td>
    </tr>
  </tbody>
</table>

The original target for this event is the {{domxref("Element")}} that was the intended target of the copy action. You can listen for this event on the {{domxref("Document")}} interface to handle it in the capture or bubbling phases. For full details on this event please see the page on the [Element: copy event](/en-US/docs/Web/API/Element/copy_event).

## Examples

```js
document.addEventListener('copy', (event) => {
    console.log('copy action initiated')
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Document/cut_event", "cut")}}, {{domxref("Document/paste_event", "paste")}}
- This event on {{domxref("Element")}} targets: {{domxref("Element/copy_event", "copy")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/copy_event", "copy")}}
