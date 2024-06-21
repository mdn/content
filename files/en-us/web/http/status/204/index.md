---
title: 204 No Content
slug: Web/HTTP/Status/204
page-type: http-status-code
browser-compat: http.status.204
---

{{HTTPSidebar}}

The HTTP **`204 No Content`** status response code is part of the `200`-`299` class of [successful responses](/en-US/docs/Web/HTTP/Status#successful_responses) and indicates that a request has succeeded, but the client doesn't need to navigate away from its current page.

This can be used when implementing "save and continue editing" functionality for an application like a wiki site, for example.
In this case a {{HTTPMethod("PUT")}} request can be used to save the page, and a `204 No Content` response indicates that the editor should not be replaced by another page.

A 204 response is cacheable by default and an {{HTTPHeader("ETag")}} header is included in such cases.

## Status

```http
204 No Content
```

## Examples

TODO

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Compatibility notes

Although this status code is intended to describe a response with no body, servers may erroneously include data after the headers.
The protocol allows user agents to vary in how they process such responses and there is discussion regarding the specification text in the [HTTPWG `http-core` GitHub repository](https://github.com/httpwg/http-core/issues/26).
This is observable in persistent connections, where the invalid body may include a distinct response to a subsequent request.

Apple Safari rejects any such data.
Google Chrome and Microsoft Edge discard up to four invalid bytes preceding a valid response.
Firefox tolerates in excess of a kilobyte of invalid data preceding a valid response.

## See also

- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
