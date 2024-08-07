---
title: 304 Not Modified
slug: Web/HTTP/Status/304
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.304
---

{{HTTPSidebar}}

The HTTP **`304 Not Modified`** [redirection response](/en-US/docs/Web/HTTP/Status#redirection_messages) status code indicates that there is no need to retransmit the requested resources.
This response code is sent when the request is a [conditional](/en-US/docs/Web/HTTP/Conditional_requests) {{HTTPMethod("GET")}} or {{HTTPMethod("HEAD")}} request with an {{HTTPHeader("If-None-Match")}} or an {{HTTPHeader("If-Modified-Since")}} header and the condition evaluates to 'false'.
It confirms that the resource cached by the client is still valid and that the server would have sent a {{HTTPStatus("200", "200 OK")}} response with the resource if the condition evaluated to 'true'.

The response must not contain a body and must include the headers that would have been sent in an equivalent {{HTTPStatus("200")}} response, such as:

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Location")}}
- {{HTTPHeader("Date")}}
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Vary")}}

> [!NOTE]
> Many [developer tools' network panels](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) of browsers create extraneous requests leading to `304` responses, so that access to the local cache is visible to developers.

## Status

```http
304 Not Modified
```

## Examples

### 304 response to conditional requests

The examples below show {{HTTPMethod("GET")}} requests made using [curl](https://curl.se/) with conditional request headers and the HTTP responses received in return.
The first example would return a {{HTTPStatus("200", "200 OK")}} if we know the resource has been updated since the timestamp in the {{HTTPHeader("If-Modified-Since")}} header.
For illustration, the request uses a future date of 21st November 2050 to check whether if the resource has been updated since this date:

```bash
curl -I --header 'If-Modified-Since: Tue, 21 Nov 2050 08:00:00 GMT' \
 https://developer.mozilla.org/en-US/
```

```http
> Request
GET /en-US/ HTTP/2
Host: developer.mozilla.org
User-Agent: curl/8.1.2
Accept: */*
If-Modified-Since: Tue, 21 Nov 2050 08:00:00 GMT

< Response
HTTP/2 304
date: Tue, 21 Nov 2023 08:44:28 GMT
expires: Tue, 21 Nov 2023 08:53:14 GMT
age: 3194
etag: "e27d81b845c3716cdb5d4220d78e2799"
cache-control: public, max-age=3600
```

A `304 Not Modified` response is also returned in response to a {{HTTPMethod("GET")}} request containing an {{HTTPHeader("If-None-Match")}} header with the {{HTTPHeader("ETag")}} from the response above.
Because the `etag` value exists, a matching entity tag fails the condition, and a `304` response is returned:

```bash
curl -I --header 'If-None-Match: "e27d81b845c3716cdb5d4220d78e2799"' \
 https://developer.mozilla.org/en-US/
```

```http
> Request
GET /en-US/ HTTP/2
Host: developer.mozilla.org
User-Agent: curl/8.1.2
Accept: */*
If-None-Match: "e27d81b845c3716cdb5d4220d78e2799"

< Response
HTTP/2 304
date: Tue, 21 Nov 2023 08:47:37 GMT
expires: Tue, 21 Nov 2023 09:38:23 GMT
age: 2920
etag: "e27d81b845c3716cdb5d4220d78e2799"
cache-control: public, max-age=3600
```

## Specifications

{{Specifications}}

## Compatibility notes

Browser behavior differs if this response erroneously includes a body on persistent connections.
See {{HTTPStatus("204")}} for more details.

## See also

- [Redirections in HTTP](/en-US/docs/Web/HTTP/Redirections)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [HTTP conditional requests](/en-US/docs/Web/HTTP/Conditional_requests)
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
