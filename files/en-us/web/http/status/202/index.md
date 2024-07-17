---
title: 202 Accepted
slug: Web/HTTP/Status/202
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.202
---

{{HTTPSidebar}}

The HTTP **`202 Accepted`** status response code is part of the `200`-`299` class of [successful responses](/en-US/docs/Web/HTTP/Status#successful_responses) and indicates that a request has been accepted for processing, but processing has not been completed or may even not have started yet.
The processing of the request is not guaranteed; it may be disallowed when processing begins.

A `202` response is non-committal, meaning there is no way to later send an asynchronous HTTP response to indicate the outcome of the processing.
This response code is typically used when the request is handled by another process or server, or when requests are processed in batches.

## Status

```http
202 Accepted
```

## Examples

### Begin automated task

In the following example, we want to kick off an automation process to email dog owners about the pickup task:

```http
POST /tasks HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "task": "emailDogOwners",
  "template": "pickup"
}
```

The following response indicates that the request to start task has been accepted for processing:

```http
HTTP/1.1 202 Accepted
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
  "message": "Request accepted. Starting to process task.",
  "taskId": "123"
}
```

## Specifications

{{Specifications}}

## See also

- {{HTTPHeader("Accept")}}
- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
