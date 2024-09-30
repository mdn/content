---
title: "XMLHttpRequest: getAllResponseHeaders() method"
short-title: getAllResponseHeaders()
slug: Web/API/XMLHttpRequest/getAllResponseHeaders
page-type: web-api-instance-method
browser-compat: api.XMLHttpRequest.getAllResponseHeaders
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

The {{domxref("XMLHttpRequest")}} method
**`getAllResponseHeaders()`** returns all the response
headers, separated by {{Glossary('CRLF')}}, as a string, or returns `null`
if no response has been received.

If a network error happened, an empty string
is returned.

> [!NOTE]
> For multipart requests, this returns the headers from the
> _current_ part of the request, not from the original channel.

## Syntax

```js-nolint
getAllResponseHeaders()
```

### Parameters

None.

### Return value

A string representing all of the response's headers (except those
whose field name is `Set-Cookie`) separated by {{Glossary('CRLF')}},
or `null` if no response has been received. If a network error
happened, an empty string is returned.

An example of what a raw header string looks like:

```http
date: Fri, 08 Dec 2017 21:04:30 GMT\r\n
content-encoding: gzip\r\n
x-content-type-options: nosniff\r\n
server: meinheld/0.6.1\r\n
x-frame-options: DENY\r\n
content-type: text/html; charset=utf-8\r\n
connection: keep-alive\r\n
strict-transport-security: max-age=63072000\r\n
vary: Cookie, Accept-Encoding\r\n
content-length: 6502\r\n
x-xss-protection: 1; mode=block\r\n
```

Each line is terminated by both carriage return and line feed characters
(`\r\n`). These are essentially delimiters separating each of the headers.

> [!NOTE]
> In modern browsers, the header names are returned in all lower
> case, as per the latest spec.

## Examples

This example examines the headers in the request's {{domxref("XMLHttpRequest/readystatechange_event", "readystatechange")}} event. The code shows how to obtain
the raw header string, as well as how to convert it into an array of individual headers
and then how to take that array and create a mapping of header names to their values.

```js
const request = new XMLHttpRequest();
request.open("GET", "foo.txt", true);
request.send();

request.onreadystatechange = () => {
  if (request.readyState === this.HEADERS_RECEIVED) {
    // Get the raw header string
    const headers = request.getAllResponseHeaders();

    // Convert the header string into an array
    // of individual headers
    const arr = headers.trim().split(/[\r\n]+/);

    // Create a map of header names to values
    const headerMap = {};
    arr.forEach((line) => {
      const parts = line.split(": ");
      const header = parts.shift();
      const value = parts.join(": ");
      headerMap[header] = value;
    });
  }
};
```

Once this is done, you can, for example:

```js
const contentType = headerMap["content-type"];
```

This obtains the value of the {{httpheader("Content-Type")}} header into the variable
`contentType`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- Setting request headers: {{domxref("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}}
