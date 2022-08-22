---
title: XMLHttpRequest.readyState
slug: Web/API/XMLHttpRequest/readyState
page-type: web-api-instance-property
tags:
  - AJAX
  - Property
  - Reference
  - XMLHttpRequest
browser-compat: api.XMLHttpRequest.readyState
---
{{APIRef('XMLHttpRequest')}}

The **XMLHttpRequest.readyState** property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states:

| Value | State              | Description                                                     |
| ----- | ------------------ | --------------------------------------------------------------- |
| `0`   | `UNSENT`           | Client has been created. `open()` not called yet.               |
| `1`   | `OPENED`           | `open()` has been called.                                       |
| `2`   | `HEADERS_RECEIVED` | `send()` has been called, and headers and status are available. |
| `3`   | `LOADING`          | Downloading; `responseText` holds partial data.                 |
| `4`   | `DONE`             | The operation is complete.                                      |

- UNSENT
  - : The XMLHttpRequest client has been created, but the open() method hasn't been called yet.
- OPENED
  - : open() method has been invoked. During this state, the request headers can be set using the [setRequestHeader()](/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader) method and the [send()](/en-US/docs/Web/API/XMLHttpRequest/send) method can be called which will initiate the fetch.
- HEADERS_RECEIVED
  - : send() has been called and the response headers have been received.
- LOADING
  - : Response's body is being received. If [`responseType`](/en-US/docs/Web/API/XMLHttpRequest/responseType) is "text" or empty string, [`responseText`](/en-US/docs/Web/API/XMLHttpRequest/responseText) will have the partial text response as it loads.
- DONE
  - : The fetch operation is complete. This could mean that either the data transfer has been completed successfully or failed.

> **Note:** The state names are different in versions of Internet Explorer earlier than 11. Instead of `UNSENT`, `OPENED`, `HEADERS_RECEIVED`, `LOADING` and `DONE`, the names `READYSTATE_UNINITIALIZED` (0), `READYSTATE_LOADING` (1), `READYSTATE_LOADED` (2), `READYSTATE_INTERACTIVE` (3) and `READYSTATE_COMPLETE` (4) are used.

## Example

```js
const xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState); // readyState will be 0

xhr.open('GET', '/api', true);
console.log('OPENED', xhr.readyState); // readyState will be 1

xhr.onprogress = () => {
    console.log('LOADING', xhr.readyState); // readyState will be 3
};

xhr.onload = () => {
    console.log('DONE', xhr.readyState); // readyState will be 4
};

xhr.send(null);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
