---
title: 'Window: copy event'
slug: Web/API/Window/copy_event
tags:
  - API
  - Clippboard API
  - Event
  - Reference
  - Web
  - Window
  - copy
browser-compat: api.Window.copy_event
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

The original target for this event is the {{domxref("Element")}} that was the intended target of the copy action. You can listen for this event on the {{domxref("Window")}} interface to handle it in the capture or bubbling phases. For full details on this event please see the page on the [Element: copy event](/en-US/docs/Web/API/Element/copy_event).

## Examples

```js
window.addEventListener('copy', (event) => {
    console.log('copy action initiated')
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Window/cut_event", "cut")}}, {{domxref("Window/paste_event", "paste")}}
- This event on {{domxref("Element")}} targets: {{domxref("Element/copy_event", "copy")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/copy_event", "copy")}}
