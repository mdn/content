---
title: "XMLHttpRequest: status property"
short-title: status
slug: Web/API/XMLHttpRequest/status
page-type: web-api-instance-property
browser-compat: api.XMLHttpRequest.status
---

{{APIRef('XMLHttpRequest')}}

The read-only **`XMLHttpRequest.status`** property returns the numerical HTTP [status code](/en-US/docs/Web/HTTP/Status) of the `XMLHttpRequest`'s response.

Before the request completes, the value of `status` is 0. Browsers also report a status of 0 in case of `XMLHttpRequest` errors.

## Value

A number.

## Examples

```js
const xhr = new XMLHttpRequest();
console.log("UNSENT: ", xhr.status);

xhr.open("GET", "/server");
console.log("OPENED: ", xhr.status);

xhr.onprogress = () => {
  console.log("LOADING: ", xhr.status);
};

xhr.onload = () => {
  console.log("DONE: ", xhr.status);
};

xhr.send();

/**
 * Outputs the following:
 *
 * UNSENT: 0
 * OPENED: 0
 * LOADING: 200
 * DONE: 200
 */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- List of [HTTP status](/en-US/docs/Web/HTTP/Status)
- [HTTP](/en-US/docs/Web/HTTP)
