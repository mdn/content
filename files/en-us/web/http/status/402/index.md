---
title: 402 Payment Required
slug: Web/HTTP/Status/402
tags:
  - Browser
  - Client error
  - HTTP
  - Status code
browser-compat: http.status.402
---
{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP **`402 Payment Required`** is a nonstandard client error status response code that is reserved for future use.

Sometimes, this code indicates that the request can not be processed until the client makes a payment. Originally it was created to enable digital cash or (micro) payment systems and would indicate that the requested content is not available until the client makes a payment. However, no standard use convention exists and different entities use it in different contexts.

## Status

```
402 Payment Required
```

## Example response

```
HTTP/1.1 402 Payment Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## Specifications

| Specification                                                    | Title                           |
| ---------------------------------------------------------------- | ------------------------------- |
| {{RFC("7231", "402 Payment Required" , "6.5.2")}} | HTTP/1.1: Semantics and Content |

## Browser compatibility

{{Compat}}

## See also

- [HTTP authentication](/en-US/docs/Web/HTTP/Authentication)
