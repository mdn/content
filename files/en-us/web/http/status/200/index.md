---
title: 200 OK
slug: Web/HTTP/Status/200
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.200
---

{{HTTPSidebar}}

The HTTP **`200 OK`** success status response code indicates that the request has succeeded. A 200 response is cacheable by default.

The meaning of a success depends on the HTTP request method:

- {{HTTPMethod("GET")}}: The resource has been fetched and is transmitted in the message body.
- {{HTTPMethod("HEAD")}}: The representation headers are included in the response without any message body
- {{HTTPMethod("POST")}}: The resource describing the result of the action is transmitted in the message body
- {{HTTPMethod("TRACE")}}: The message body contains the request message as received by the server.

The successful result of a {{HTTPMethod("PUT")}} or a {{HTTPMethod("DELETE")}} is often not a `200 OK` but a {{HTTPStatus("204")}} `No Content` (or a {{HTTPStatus("201")}} `Created` when the resource is uploaded for the first time).

## Status

```http
200 OK
```

## Specifications

{{Specifications}}

## See also

- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
