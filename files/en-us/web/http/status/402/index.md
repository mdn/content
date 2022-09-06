---
title: 402 Payment Required
slug: Web/HTTP/Status/402
tags:
  - Browser
  - Client error
  - HTTP
  - Status code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.402
---
{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP **`402 Payment Required`** is a nonstandard response status code that is reserved for future use. This status code was created to enable digital cash or (micro) payment systems and would indicate that the requested content is not available until the client makes a payment.

Sometimes, this status code indicates that the request cannot be processed until the client makes a payment. However, no standard use convention exists and different entities use it in different contexts.

## Status

```
402 Payment Required
```

## Example response

```http
HTTP/1.1 402 Payment Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## Specifications

{{Specifications}}

## Browser compatibility

This status code is _reserved_ but not defined. No browser actually supports it and the error will be displayed as a generic `4xx` status code.

## See also

- [HTTP authentication](/en-US/docs/Web/HTTP/Authentication)
