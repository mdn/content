---
title: EventSource.close()
slug: Web/API/EventSource/close
tags:
  - API
  - EventSource
  - Method
  - Reference
  - Server-sent events
  - close
browser-compat: api.EventSource.close
---
{{APIRef('WebSockets API')}}

The **`close()`** method of the {{domxref("EventSource")}}
interface closes the connection, if one is made, and sets the
{{domxref("EventSource.readyState")}} attribute to `2` (closed).

> **Note:** If the connection is already closed, the method does nothing.

## Syntax

```js
eventSource.close();
```

### Parameters

None.

### Return value

Void.

## Examples

```js
var button = document.querySelector('button');
var evtSource = new EventSource('sse.php');

button.onclick = function() {
  console.log('Connection closed');
  evtSource.close();
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
