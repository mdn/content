---
title: Preflight request
slug: Glossary/Preflight_request
page-type: glossary-definition
---

{{GlossarySidebar}}

A CORS preflight request is a {{Glossary("CORS")}} request that checks to see if the CORS protocol is understood and a server is aware using specific methods and headers.

It is an {{HTTPMethod("OPTIONS")}} request, using three HTTP request headers: {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Access-Control-Request-Headers")}}, and the {{HTTPHeader("Origin")}} header.

A preflight request is automatically issued by a browser and in normal cases, front-end developers don't need to craft such requests themselves. It appears when request is qualified as ["to be preflighted"](/en-US/docs/Web/HTTP/CORS#preflighted_requests) and omitted for [simple requests](/en-US/docs/Web/HTTP/CORS#simple_requests).

For example, a client might be asking a server if it would allow a {{HTTPMethod("DELETE")}} request, before sending a `DELETE` request, by using a preflight request:

```http
OPTIONS /resource/foo
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: origin, x-requested-with
Origin: https://foo.bar.org
```

If the server allows it, then it will respond to the preflight request with an {{HTTPHeader("Access-Control-Allow-Methods")}} response header, which lists `DELETE`:

```http
HTTP/1.1 204 No Content
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Max-Age: 86400
```

The preflight response can be optionally cached for the requests created in the same {{Glossary("URL")}} using {{HTTPHeader("Access-Control-Max-Age")}} header like in the above example. To cache preflight responses, the browser uses a specific cache that is separate from the general HTTP cache that the browser manages. Preflight responses are never cached in the browser's general HTTP cache.

## See also

- {{Glossary("CORS")}}
- {{HTTPMethod("OPTIONS")}}
