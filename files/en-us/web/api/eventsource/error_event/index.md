---
title: 'EventSource: error event'
slug: Web/API/EventSource/error_event
tags:
  - API
  - Error
  - Event
  - EventSource
  - Reference
browser-compat: api.EventSource.error_event
---
{{APIRef}}

The `error` event of the {{domxref("EventSource")}} API is fired when a connection with an event source fails to be opened.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("Event")}} or {{domxref("ErrorEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{domxref("EventSource.onerror")}}</td>
    </tr>
  </tbody>
</table>

## Examples

```js
var evtSource = new EventSource('sse.php');

// addEventListener version
evtSource.addEventListener('error', (e) => {
  console.log("An error occurred while attempting to connect.");
});

// onerror version
evtSource.onerror = (e) => {
  console.log("An error occurred while attempting to connect.");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using server-sent events](/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [`open`](/en-US/docs/Web/API/EventSource/open_event)
- [`message`](/en-US/docs/Web/API/EventSource/message_event)
