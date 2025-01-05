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
See [HTTP caching](/en-US/docs/Web/HTTP/Caching) for more information.

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

The examples below show {{HTTPMethod("GET")}} requests made using [curl](https://curl.se/) with conditional request headers.
The `--http1.1` flag is used to force the HTTP/1.1 protocol for readability.

The first request uses an `If-Modified-Since` condition with a future date of 21st November 2050.
This must evaluate to `false`, because the resource can't have been updated after a time that hasn't happened yet:

```bash
curl --http1.1 -I --header 'If-Modified-Since: Tue, 21 Nov 2050 08:00:00 GMT' \
 https://developer.mozilla.org/en-US/
```

This will result in the following HTTP request:

```http
GET /en-US/ HTTP/1.1
Host: developer.mozilla.org
User-Agent: curl/8.7.1
Accept: */*
If-Modified-Since: Tue, 21 Nov 2050 08:00:00 GMT
```

The response would be {{HTTPStatus("200", "200 OK")}} with the current version of the resource if the resource had been updated after the timestamp in the {{HTTPHeader("If-Modified-Since")}} header.
Instead, we get a `304` response that includes {{HTTPHeader("ETag")}}, {{HTTPHeader("Age")}} and {{HTTPHeader("Expires")}} headers, telling us our cached version of the resource is still current:

```http
HTTP/1.1 304 Not Modified
Date: Wed, 28 Aug 2024 09:52:35 GMT
Expires: Wed, 28 Aug 2024 10:01:53 GMT
Age: 3279
ETag: "b20a0973b226eeea30362acb81f9e0b3"
Cache-Control: public, max-age=3600
Vary: Accept-Encoding
X-cache: hit
Alt-Svc: clear
```

Now run another `curl` command using the `etag` value from the previous response with the {{HTTPHeader("If-None-Match")}} condition (since this `etag` is the current version of the resource on the server we expect to receive a `304 Not Modified` response):

```bash
curl --http1.1 -I --header 'If-None-Match: "b20a0973b226eeea30362acb81f9e0b3"' \
 https://developer.mozilla.org/en-US/
```

This will result in the following HTTP request:

```http
GET /en-US/ HTTP/1.1
Host: developer.mozilla.org
User-Agent: curl/8.7.1
Accept: */*
If-None-Match: "b20a0973b226eeea30362acb81f9e0b3"
```

Because the `etag` value matches at the time of the request, the entity tag fails the condition, and a `304` response is returned:

```http
HTTP/1.1 304 Not Modified
Date: Wed, 28 Aug 2024 10:36:35 GMT
Expires: Wed, 28 Aug 2024 11:02:17 GMT
Age: 662
ETag: "b20a0973b226eeea30362acb81f9e0b3"
Cache-Control: public, max-age=3600
Vary: Accept-Encoding
X-cache: hit
Alt-Svc: clear
```

## Specifications

{{Specifications}}

## Compatibility notes

Browser behavior differs if this response erroneously includes a body on persistent connections.
See {{HTTPStatus("204", "204 No Content")}} for more details.

## See also

- [Redirections in HTTP](/en-US/docs/Web/HTTP/Redirections)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [HTTP conditional requests](/en-US/docs/Web/HTTP/Conditional_requests)
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
