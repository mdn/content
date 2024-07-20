---
title: 304 Not Modified
slug: Web/HTTP/Status/304
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.304
---

{{HTTPSidebar}}

The HTTP **`304 Not Modified`** client redirection response code indicates that there is no need to retransmit the requested resources.
This response code is sent when the request is a conditional {{HTTPMethod("GET")}} or {{HTTPMethod("HEAD")}} request with an {{HTTPHeader("If-None-Match")}} or an {{HTTPHeader("If-Modified-Since")}} header and the condition evaluates to false.
It is an implicit redirection to a cached resource that would have resulted in a {{HTTPStatus("200")}} `OK` response if the condition evaluated to true.

The response must not contain a body and must include the headers that would
have been sent in an equivalent {{HTTPStatus("200")}} `OK` response:
{{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Content-Location")}},
{{HTTPHeader("Date")}}, {{HTTPHeader("ETag")}}, {{HTTPHeader("Expires")}}, and
{{HTTPHeader("Vary")}}.

> **Note:** Many [developer tools' network panels](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
> of browsers create extraneous requests leading to `304` responses, so that
> access to the local cache is visible to developers.

## Status

```http
304 Not Modified
```

## Examples

The examples below show {{HTTPMethod("GET")}} requests made using curl with conditional request headers and the HTTP responses received in return.
The first example would return a {{HTTPStatus("200")}} `OK` if we know the resource has been updated since the timestamp in the {{HTTPHeader("If-Modified-Since")}} header.
For illustration, the request uses a future date of 21st November 2050 to check whether if the resource has been updated since this date:

```bash
curl -v --header 'If-Modified-Since: Tue, 21 Nov 2050 08:00:00 GMT' \
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
```

A `304 Not Modified` response is also returned in response to a {{HTTPMethod("GET")}} request containing an {{HTTPHeader("If-None-Match")}} header with the [ETag](/en-US/docs/Web/HTTP/Headers/ETag) from the response above.
Because the `etag` exists, a matching entity tag fails the condition, and a `304` response is returned:

```bash
curl -v --header 'If-None-Match: "e27d81b845c3716cdb5d4220d78e2799"' \
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
```

## Specifications

{{Specifications}}

## Compatibility notes

Browser behavior differs if this response erroneously includes a body on persistent connections. See [204 No Content](/en-US/docs/Web/HTTP/Status/204) for more details.

## See also

- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
- [HTTP conditional requests](/en-US/docs/Web/HTTP/Conditional_requests)
- [204 No Content](/en-US/docs/Web/HTTP/Status/204)
