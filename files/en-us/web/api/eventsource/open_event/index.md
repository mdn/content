---
title: 'EventSource: open event'
slug: Web/API/EventSource/open_event
tags:
  - API
  - Event
  - EventSource
  - Reference
  - open
browser-compat: api.EventSource.open_event
---
{{APIRef}}

The `open` event of the {{domxref("EventSource")}} API is fired when a connection with an event source is opened.

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
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{domxref("EventSource.onopen")}}</td>
    </tr>
  </tbody>
</table>

## Examples

```js
var evtSource = new EventSource('sse.php');

// addEventListener version
evtSource.addEventListener('open', (e) => {
  console.log("The connection has been established.");
});

// onopen version
evtSource.onopen = (e) => {
  console.log("The connection has been established.");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using server-sent events](/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)
- {{event("open")}}
- {{event("error")}}
- {{event("message")}}
