---
title: XMLHttpRequest.timeout
slug: Web/API/XMLHttpRequest/timeout
tags:
  - AJAX
  - Asynchronous XHR
  - Asynchronous XMLHttpRequest
  - Property
  - Reference
  - XHR
  - XMLHttpRequest
  - timeout
browser-compat: api.XMLHttpRequest.timeout
---
{{APIRef('XMLHttpRequest')}}

The **`XMLHttpRequest.timeout`** property is an `unsigned long` representing the number of milliseconds a request can take before automatically being terminated. The default value is 0, which means there is no timeout. Timeout shouldn't be used for synchronous XMLHttpRequests requests used in a {{Glossary('document environment')}} or it will throw an `InvalidAccessError` exception. When a timeout happens, a [timeout](/en-US/docs/Web/API/XMLHttpRequest/timeout_event) event is fired.

> **Note:** You may not use a timeout for synchronous requests with an owning window.

[Using a timeout with an asynchronous request](/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests#example_using_a_timeout)

In Internet Explorer, the timeout property may be set only after calling the [open()](/en-US/docs/Web/API/XMLHttpRequest/open) method and before calling the [send()](/en-US/docs/Web/API/XMLHttpRequest/send) method.

## Example

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

xhr.timeout = 2000; // time in milliseconds

xhr.onload = function () {
  // Request finished. Do processing here.
};

xhr.ontimeout = function (e) {
  // XMLHttpRequest timed out. Do something here.
};

xhr.send(null);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
