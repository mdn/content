---
title: 'Window: cut event'
slug: Web/API/Window/cut_event
tags:
  - API
  - Clipboard API
  - Cut
  - Event
  - Reference
  - Web
  - Window
browser-compat: api.Window.cut_event
---
{{APIRef}}

The **`cut`** event is fired when the user has initiated a "cut" action through the browser's user interface.

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
      <td>{{domxref("HTMLElement/oncut", "oncut")}}</td>
    </tr>
  </tbody>
</table>

The original target for this event is the {{domxref("Element")}} that was the intended target of the cut action. You can listen for this event on the {{domxref("Window")}} interface to handle it in the capture or bubbling phases. For full details on this event please see the page on the [Element: cut event](/en-US/docs/Web/API/Element/cut_event).

## Examples

```js
window.addEventListener('cut', (event) => {
    console.log('cut action initiated')
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Window/copy_event", "copy")}}, {{domxref("Window/paste_event", "paste")}}
- This event on {{domxref("Element")}} targets: {{domxref("Element/cut_event", "cut")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/cut_event", "cut")}}
