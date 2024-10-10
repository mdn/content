---
title: 100 Continue
slug: Web/HTTP/Status/100
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.100
---

{{HTTPSidebar}}

The HTTP **`100 Continue`** [informational response](/en-US/docs/Web/HTTP/Status#informational_responses) status code indicates that the initial part of a request has been received and has not yet been rejected by the server.
The client should continue with a request or discard the 100 response if the request is already finished.

When a request has an {{HTTPHeader("Expect", "Expect: 100-continue")}} header, the 100 Continue response indicates that the server is ready or capable of receiving the request content.
Waiting for a 100 Continue response can be helpful if a client anticipates that an error is likely, for example, when sending state-changing operations without previously verified authentication credentials.

## Status

```http
100 Continue
```

## Examples

### PUT request with 100 Continue

The following {{HTTPMethod("PUT")}} request sends information to a server about a file upload.
The client is indicating that it will proceed with the content if it receives a 100 response to avoid sending data over the network that could result in an error like {{HTTPStatus("405")}}, {{HTTPStatus("401")}}, or {{HTTPStatus("403")}}.
At first, the client sends headers only, including an {{HTTPHeader("Expect", "Expect: 100-continue")}} header:

```http
PUT /videos HTTP/1.1
Host: uploads.example.com
Content-Type: video/h264
Content-Length: 123456789
Expect: 100-continue
```

The server indicates that the request can proceed:

```http
HTTP/1.1 100 Continue
```

The client completes the request by sending the actual data:

```http
[Video data as content for PUT request]
```

## Specifications

{{Specifications}}

## See also

- {{HTTPHeader("Expect")}}
- {{HTTPStatus(417)}}
