---
title: 'EventSource: message event'
slug: Web/API/EventSource/message_event
tags:
  - API
  - Event
  - EventSource
  - Reference
  - message
browser-compat: api.EventSource.message_event
---
{{APIRef}}

The `message` event of the {{domxref("EventSource")}} API is fired when data is received through an event source.

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
      <td>{{domxref("MessageEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{domxref("EventSource.onmessage")}}</td>
    </tr>
  </tbody>
</table>

## Examples

In this basic example, an `EventSource` is created to receive events from the server; a page with the name `sse.php` is responsible for generating the events.

```js
var evtSource = new EventSource('sse.php');
var eventList = document.querySelector('ul');

evtSource.addEventListener('message', (e) => {
  var newElement = document.createElement("li");

  newElement.textContent = "message: " + e.data;
  eventList.appendChild(newElement);
});
```

### onmessage equivalent

```js
evtSource.onmessage = (e) => {
  var newElement = document.createElement("li");

  newElement.textContent = "message: " + e.data;
  eventList.appendChild(newElement);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using server-sent events](/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [`open`](/en-US/docs/Web/API/EventSource/open_event)
- [`error`](/en-US/docs/Web/API/EventSource/error_event)
