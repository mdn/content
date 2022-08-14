---
title: XMLHttpRequest.msCaching
slug: Web/API/XMLHttpRequest/msCaching
page-type: api-instance-property
tags:
  - msCaching
  - Non-standard
  - Property
---
{{APIRef("XMLHttpRequest")}}

{{Non-standard_header()}}

**`msCaching`** is a read/write property which specifies whether stream data downloaded using [XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest) is cached to disk or not. In compatible browsers, if `msCaching` is not `disabled`, then `XMLHttpRequest` instances will be cached to disk regardless of whether [cache-control](/en-US/docs/Web/HTTP/Headers/Cache-Control) is set to `no-cache`.

## Value

One of the following strings:

- `auto`
  - : The caching for stream or ms-stream data is _disabled_.
- `enabled`
  - : The caching for stream or ms-stream data is _enabled_.
- `disabled`
  - : The caching for _any_ data is _disabled_.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

This proprietary method is specific to Internet Explorer 11.

## See also

- [msCachingEnabled](/en-US/docs/Web/API/XMLHttpRequest/msCachingEnabled)
- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
