---
title: 'Document: paste event'
slug: Web/API/Document/paste_event
tags:
  - API
  - Document
  - Event
  - Reference
  - Web
  - paste
browser-compat: api.Document.paste_event
---
{{APIRef}}

The **`paste`** event is fired when the user has initiated a "paste" action through the browser's user interface.

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
      <td>{{domxref("HTMLElement/onpaste", "onpaste")}}</td>
    </tr>
  </tbody>
</table>

The original target for this event is the {{domxref("Element")}} that was the intended target of the paste action. You can listen for this event on the {{domxref("Document")}} interface to handle it in the capture or bubbling phases. For full details on this event please see the page on the [Element: paste event](/en-US/docs/Web/API/Element/paste_event).

## Examples

```js
document.addEventListener('paste', (event) => {
    console.log('paste action initiated')
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Document/cut_event", "cut")}}, {{domxref("Document/copy_event", "copy")}}
- This event on {{domxref("Element")}} targets: {{domxref("Element/paste_event", "paste")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/paste_event", "paste")}}
