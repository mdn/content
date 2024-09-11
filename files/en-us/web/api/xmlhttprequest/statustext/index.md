---
title: "XMLHttpRequest: statusText property"
short-title: statusText
slug: Web/API/XMLHttpRequest/statusText
page-type: web-api-instance-property
browser-compat: api.XMLHttpRequest.statusText
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

The read-only **`XMLHttpRequest.statusText`** property returns a string containing the response's status message as returned by the HTTP server. Unlike [`XMLHTTPRequest.status`](/en-US/docs/Web/API/XMLHttpRequest/status) which indicates a numerical status code, this property contains the _text_ of the response status, such as "OK" or "Not Found". If the request's [`readyState`](/en-US/docs/Web/API/XMLHttpRequest/readyState) is in `UNSENT` or `OPENED` state, the value of `statusText` will be an empty string.

If the server response doesn't explicitly specify a status text, `statusText` will assume the default value "OK".

> [!NOTE]
> Responses over an HTTP/2 connection will always have an empty string as status message as HTTP/2 does not support them.

## Value

A string.

## Examples

```js
const xhr = new XMLHttpRequest();
console.log("0 UNSENT", xhr.statusText);

xhr.open("GET", "/server", true);
console.log("1 OPENED", xhr.statusText);

xhr.onprogress = () => {
  console.log("3 LOADING", xhr.statusText);
};

xhr.onload = () => {
  console.log("4 DONE", xhr.statusText);
};

xhr.send(null);

/**
 * Outputs the following:
 *
 * 0 UNSENT
 * 1 OPENED
 * 3 LOADING OK
 * 4 DONE OK
 */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- List of [HTTP status](/en-US/docs/Web/HTTP/Status)
- [HTTP](/en-US/docs/Web/HTTP)
- [WHATWG Fetch Living Standard](https://fetch.spec.whatwg.org/#concept-response-status-message)
