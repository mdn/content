---
title: "Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'"
slug: Web/HTTP/CORS/Errors/CORSInvalidAllowMethod
page-type: http-cors-error
---

{{HTTPSidebar}}

## Reason

```plain
Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'
```

## What went wrong?

The response to the {{Glossary("CORS")}} request that was sent by the server includes
an {{HTTPHeader("Access-Control-Allow-Methods")}} header which includes at least one
invalid method name.

The `Access-Control-Allow-Methods` header is sent by the server to let the
client know what [HTTP request methods](/en-US/docs/Web/HTTP/Methods) it
supports for CORS requests. The header's value is a comma-delineated string of HTTP
method names, such as {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, or
{{HTTPMethod("HEAD")}}. If any of the specified values are not recognized by the client
{{Glossary("user agent")}}, this error occurs.

This is a problem that most likely can only be fixed on the server side, by modifying
the server's configuration to no longer send the invalid or unknown method name with the
`Access-Control-Allow-Methods` header. It may also be worth checking to
ensure that the user agent or HTTP library you're using on the client is up-to-date.

## See also

- [CORS errors](/en-US/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/en-US/docs/Web/HTTP/CORS)
- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
