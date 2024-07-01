---
title: 402 Payment Required
slug: Web/HTTP/Status/402
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.402
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP **`402 Payment Required`** status response code is part of the `400`-`499` class of [client error responses](/en-US/docs/Web/HTTP/Status#client_error_responses) and is a **nonstandard** response status code reserved for future use.
This status code was created to enable digital cash or (micro) payment systems and would indicate that the requested content is not available until the client makes a payment.

Sometimes, this status code indicates that the request cannot be processed until the client makes a payment.
No standard use convention exists and different entities use it in different contexts.

## Status

```http
402 Payment Required
```

## Examples

### Payment required

```http
HTTP/1.1 402 Payment Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## Specifications

{{Specifications}}

## Compatibility notes

This status code is _reserved_ but not defined.
No browser supports it and an error will be displayed as a generic `4xx` status code.

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [HTTP authentication](/en-US/docs/Web/HTTP/Authentication)
