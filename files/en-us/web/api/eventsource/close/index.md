---
title: EventSource.close()
slug: Web/API/EventSource/close
page-type: web-api-instance-method
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
close()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const button = document.querySelector('button');
const evtSource = new EventSource('sse.php');

button.onclick = () => {
  console.log('Connection closed');
  evtSource.close();
}
```

> **Note:** You can find a full example on GitHub — see [Simple SSE demo using PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("EventSource")}}
