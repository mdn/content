---
title: "XMLHttpRequest: timeout property"
short-title: timeout
slug: Web/API/XMLHttpRequest/timeout
page-type: web-api-instance-property
browser-compat: api.XMLHttpRequest.timeout
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

The **`XMLHttpRequest.timeout`** property is an `unsigned long` representing the number of milliseconds a request can take before automatically being terminated. The default value is 0, which means there is no timeout. Timeout shouldn't be used for synchronous XMLHttpRequests requests used in a {{Glossary('document environment')}} or it will throw an `InvalidAccessError` exception. When a timeout happens, a [timeout](/en-US/docs/Web/API/XMLHttpRequest/timeout_event) event is fired.

> [!NOTE]
> You may not use a timeout for synchronous requests with an owning window.

[Using a timeout with an asynchronous request](/en-US/docs/Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests#example_using_a_timeout).

## Example

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

xhr.timeout = 2000; // time in milliseconds

xhr.onload = () => {
  // Request finished. Do processing here.
};

xhr.ontimeout = (e) => {
  // XMLHttpRequest timed out. Do something here.
};

xhr.send(null);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
