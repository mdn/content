---
title: 304 Not Modified
slug: Web/HTTP/Status/304
tags:
  - HTTP
  - Redirection
  - Reference
  - Status code
browser-compat: http.status.304
---
{{HTTPSidebar}}

The HTTP **`304 Not Modified`** client redirection response
code indicates that there is no need to retransmit the requested resources. It is an
implicit redirection to a cached resource. This happens when the request method is
{{glossary("Safe/HTTP", "safe")}}, like a {{HTTPMethod("GET")}} or a {{HTTPMethod("HEAD")}} request,
or when the request is conditional and uses a {{HTTPHeader("If-None-Match")}} or a
{{HTTPHeader("If-Modified-Since")}} header.

The equivalent {{HTTPStatus("200")}} `OK` response would have included the
headers {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Content-Location")}},
{{HTTPHeader("Date")}}, {{HTTPHeader("ETag")}}, {{HTTPHeader("Expires")}}, and
{{HTTPHeader("Vary")}}.

> **Note:** Many [developer tools' network panels](/en-US/docs/Tools/Network_Monitor)
> of browsers create extraneous requests leading to `304` responses, so that
> access to the local cache is visible to developers.

## Status

```
304 Not Modified
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Compatibility Notes

- Browser behavior differs if this response erroneously includes a body on persistent
  connections See [204 No Content](/en-US/docs/Web/HTTP/Status/204) for more
  detail.

## See also

- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
