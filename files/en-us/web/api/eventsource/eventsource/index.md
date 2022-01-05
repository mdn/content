---
title: EventSource()
slug: Web/API/EventSource/EventSource
tags:
  - API
  - Constructor
  - EventSource
  - Reference
  - Server-sent events
browser-compat: api.EventSource.EventSource
---
{{APIRef('WebSockets API')}}

The **`EventSource()`**
constructor returns a newly-created {{domxref("EventSource")}}, which represents a
remote resource.

## Syntax

```js
eventSource = new EventSource(url, configuration);
```

### Parameters

- `url`
  - : A {{domxref("USVString")}} that represents the location of the remote resource
    serving the events/messages.
- `configuration` {{optional_inline}}

  - : Provides options to configure the new connection. The possible entries are:

    - `withCredentials`, defaulting to `false`, indicating if
      CORS should be set to `include` credentials.

## Examples

```js
var evtSource = new EventSource('sse.php');
var eventList = document.querySelector('ul');

evtSource.onmessage = function(e) {
  var newElement = document.createElement("li");

  newElement.textContent = "message: " + e.data;
  eventList.appendChild(newElement);
}
```

> **Note:** You can find a full example on GitHub — see [Simple SSE
> demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("EventSource")}}
