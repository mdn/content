---
title: 204 No Content
slug: Web/HTTP/Status/204
page-type: http-status-code
browser-compat: http.status.204
---

{{HTTPSidebar}}

The HTTP **`204 No Content`** success status response code
indicates that a request has succeeded, but that the client doesn't need to navigate away
from its current page.

This might be used, for example, when implementing "save and continue editing" functionality for a wiki site.
In this case a {{HTTPMethod("PUT")}} request would be used to save the page, and the `204 No Content` response
would be sent to indicate that the editor should not be replaced by some other page.

A 204 response is cacheable by default (an {{HTTPHeader("ETag")}} header is included in such a response).

## Status

```http
204 No Content
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Compatibility notes

- Although this status code is intended to describe a response with no body, servers
  may erroneously include data following the headers. The protocol allows user agents to
  vary in how they process such responses ([discussion regarding this specification text can be found here](https://github.com/httpwg/http-core/issues/26)). This is observable in persistent
  connections, where the invalid body may include a distinct response to a subsequent
  request.

  Apple Safari rejects any such data. Google Chrome and Microsoft Edge discard up to
  four invalid bytes preceding a valid response. Firefox tolerates in excess of a
  kilobyte of invalid data preceding a valid response.

## See also

- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
