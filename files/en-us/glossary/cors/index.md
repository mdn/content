---
title: CORS
slug: Glossary/CORS
tags:
  - Glossary
  - Infrastructure
  - Security
---
**CORS** (Cross-Origin Resource Sharing) is a system, consisting of transmitting {{Glossary("HTTP_header", "HTTP headers")}}, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.

The [same-origin security policy](/en-US/docs/Web/Security/Same-origin_policy) forbids cross-origin access to resources. But CORS gives web servers the ability to say they want to opt into allowing cross-origin access to their resources.

## See also

- [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS) on MDN
- [Cross-origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) on Wikipedia
- [Fetch specification](https://fetch.spec.whatwg.org)

### CORS headers

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Indicates whether the response can be shared.
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Indicates whether or not the response to the request can be exposed when the credentials flag is true.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Specifies the method or methods allowed when accessing the resource in response to a preflight request.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Indicates which headers can be exposed as part of the response by listing their names.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Indicates how long the results of a preflight request can be cached.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Used when issuing a preflight request to let the server know which HTTP headers will be used when the actual request is made.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Used when issuing a preflight request to let the server know which [HTTP method](/en-US/docs/Web/HTTP/Methods) will be used when the actual request is made.
- {{HTTPHeader("Origin")}}
  - : Indicates where a fetch originates from.
