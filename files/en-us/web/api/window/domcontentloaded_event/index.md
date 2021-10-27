---
title: 'Window: DOMContentLoaded event'
slug: Web/API/Window/DOMContentLoaded_event
tags:
  - Event
  - Reference
  - Web
  - Window
  - events
browser-compat: api.Window.DOMContentLoaded_event
---
{{APIRef}}

The **`DOMContentLoaded`** event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

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
      <td>None</td>
    </tr>
  </tbody>
</table>

The original target for this event is the {{domxref("Document")}} that has loaded. You can listen for this event on the `Window` interface to handle it in the capture or bubbling phases. For full details on this event please see the page on the Document: {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} event.

A different event, {{domxref("Window/load_event", "load")}}, should be used only to detect a fully-loaded page. It is a common mistake to use `load` where `DOMContentLoaded` would be more appropriate.

## Examples

### Basic usage

```js
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Window/load_event", "load")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/beforeunload_event", "beforeunload")}}, {{domxref("Window/unload_event", "unload")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
