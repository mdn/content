---
title: 304 Not Modified
slug: Web/HTTP/Status/304
page-type: http-status-code
browser-compat: http.status.304
---

{{HTTPSidebar}}

The HTTP **`304 Not Modified`** client redirection response
code indicates that there is no need to retransmit the requested resources. It is an
implicit redirection to a cached resource. This happens when the request method is
a {{glossary("Safe/HTTP", "safe")}} method, such as {{HTTPMethod("GET")}} or {{HTTPMethod("HEAD")}},
or when the request is conditional and uses an {{HTTPHeader("If-None-Match")}} or an
{{HTTPHeader("If-Modified-Since")}} header.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Compatibility notes

- Browser behavior differs if this response erroneously includes a body on persistent
  connections. See [204 No Content](/en-US/docs/Web/HTTP/Status/204) for more
  detail.

## See also

- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
- [204 No Content](/en-US/docs/Web/HTTP/Status/204)
