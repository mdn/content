---
title: "EventSource: EventSource() constructor"
short-title: EventSource()
slug: Web/API/EventSource/EventSource
page-type: web-api-constructor
browser-compat: api.EventSource.EventSource
---

{{APIRef('WebSockets API')}}

The **`EventSource()`**
constructor returns a newly-created {{domxref("EventSource")}}, which represents a
remote resource.

## Syntax

```js-nolint
new EventSource(url)
new EventSource(url, options)
```

### Parameters

- `url`
  - : A string that represents the location of the remote resource
    serving the events/messages.
- `options` {{optional_inline}}

  - : Provides options to configure the new connection. The possible entries are:

    - `withCredentials` {{optional_inline}}
      - : A boolean value, defaulting to `false`, indicating
        if CORS should be set to `include` credentials.

## Examples

```js
const evtSource = new EventSource("sse.php");
const eventList = document.querySelector("ul");

evtSource.onmessage = (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
};
```

> **Note:** You can find a full example on GitHub — see [Simple SSE demo using PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("EventSource")}}
