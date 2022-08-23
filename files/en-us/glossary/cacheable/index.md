---
title: Cacheable
slug: Glossary/cacheable
tags:
  - Glossary
  - WebMechanics
---
A **cacheable** response is an HTTP response that can be cached, that is stored to be retrieved and used later, saving a new request to the server. Not all HTTP responses can be cached, these are the following constraints for an HTTP response to be cached:

- The method used in the request is itself _cacheable_, that is either a {{HTTPMethod("GET")}} or a {{HTTPMethod("HEAD")}} method. A response to a {{HTTPMethod("POST")}} or {{HTTPMethod("PATCH")}} request can also be cached if freshness is indicated and the {{HTTPHeader("Content-Location")}} header is set, but this is rarely implemented. (For example, Firefox does not support it per <https://bugzilla.mozilla.org/show_bug.cgi?id=109553>.) Other methods, like {{HTTPMethod("PUT")}} or {{HTTPMethod("DELETE")}} are not cacheable and their result cannot be cached.
- The status code of the response is _known_ by the application caching, and it is considered _cacheable_. The following status code are cacheable: {{HTTPStatus("200")}}, {{HTTPStatus("203")}}, {{HTTPStatus("204")}}, {{HTTPStatus("206")}}, {{HTTPStatus("300")}}, {{HTTPStatus("301")}}, {{HTTPStatus("404")}}, {{HTTPStatus("405")}}, {{HTTPStatus("410")}}, {{HTTPStatus("414")}}, and {{HTTPStatus("501")}}.
- There are _specific headers_ in the response, like {{HTTPHeader("Cache-Control")}}, that prevents caching.

Note that some non-cacheable requests/responses to a specific URI may invalidate previously cached responses on the same URI. For example, a {{HTTPMethod("PUT")}} to pageX.html will invalidate all cached {{HTTPMethod("GET")}} or {{HTTPMethod("HEAD")}} requests to the same URI.

When both, the method of the request and the status of the response, are cacheable, the response to the request can be cached:

```http
GET /pageX.html HTTP/1.1
(…)

200 OK
(…)
```

A {{HTTPMethod("PUT")}} request cannot be cached. Moreover, it invalidates cached data for request to the same URI done via {{HTTPMethod("HEAD")}} or {{HTTPMethod("GET")}}:

```http
PUT /pageX.html HTTP/1.1
(…)

200 OK
(…)
```

A specific {{HTTPHeader("Cache-Control")}} header in the response can prevent caching:

```http
GET /pageX.html HTTP/1.1
(…)

200 OK
Cache-Control: no-cache
(…)
```

## See also

- Definition of [cacheable](https://datatracker.ietf.org/doc/html/rfc7231#section-4.2.3) in the HTTP specification.
- Description of common cacheable methods: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}
- Description of common non-cacheable methods: {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, often {{HTTPMethod("POST")}}
