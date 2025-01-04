---
title: HTTP request methods
short-title: Request methods
slug: Web/HTTP/Methods
page-type: landing-page
browser-compat: http.methods
---

{{HTTPSidebar}}

HTTP defines a set of **request methods** to indicate the purpose of the request and what is expected if the request is successful.
Although they can also be nouns, these request methods are sometimes referred to as _HTTP verbs_.
Each request method has its own semantics, but some characteristics are shared across multiple methods, specifically request methods can be {{glossary("Safe/HTTP", "safe")}}, {{glossary("idempotent")}}, or {{glossary("cacheable")}}.

- {{HTTPMethod("GET")}}
  - : The `GET` method requests a representation of the specified resource.
    Requests using `GET` should only retrieve data and should not contain a request {{Glossary("HTTP Content", "content")}}.
- {{HTTPMethod("HEAD")}}
  - : The `HEAD` method asks for a response identical to a `GET` request, but without a response body.
- {{HTTPMethod("POST")}}
  - : The `POST` method submits an entity to the specified resource, often causing a change in state or side effects on the server.
- {{HTTPMethod("PUT")}}
  - : The `PUT` method replaces all current representations of the target resource with the request {{Glossary("HTTP Content", "content")}}.
- {{HTTPMethod("DELETE")}}
  - : The `DELETE` method deletes the specified resource.
- {{HTTPMethod("CONNECT")}}
  - : The `CONNECT` method establishes a tunnel to the server identified by the target resource.
- {{HTTPMethod("OPTIONS")}}
  - : The `OPTIONS` method describes the communication options for the target resource.
- {{HTTPMethod("TRACE")}}
  - : The `TRACE` method performs a message loop-back test along the path to the target resource.
- {{HTTPMethod("PATCH")}}
  - : The `PATCH` method applies partial modifications to a resource.

## Safe, idempotent, and cacheable request methods

The following table lists HTTP request methods and their categorization in terms of safety, cacheability, and idempotency.

| Method                    | Safe | Idempotent | Cacheable     |
| ------------------------- | ---- | ---------- | ------------- |
| {{HTTPMethod("GET")}}     | Yes  | Yes        | Yes           |
| {{HTTPMethod("HEAD")}}    | Yes  | Yes        | Yes           |
| {{HTTPMethod("OPTIONS")}} | Yes  | Yes        | No            |
| {{HTTPMethod("TRACE")}}   | Yes  | Yes        | No            |
| {{HTTPMethod("PUT")}}     | No   | Yes        | No            |
| {{HTTPMethod("DELETE")}}  | No   | Yes        | No            |
| {{HTTPMethod("POST")}}    | No   | No         | Conditional\* |
| {{HTTPMethod("PATCH")}}   | No   | No         | Conditional\* |
| {{HTTPMethod("CONNECT")}} | No   | No         | No            |

\* `POST` and `PATCH` are cacheable when responses explicitly include [freshness](/en-US/docs/Web/HTTP/Caching) information and a matching {{HTTPHeader("Content-Location")}} header.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [HTTP headers](/en-US/docs/Web/HTTP/Headers)
