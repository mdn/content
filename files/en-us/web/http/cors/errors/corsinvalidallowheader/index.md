---
title: "Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'"
slug: Web/HTTP/CORS/Errors/CORSInvalidAllowHeader
tags:
  - CORS
  - CORSInvalidAllowHeader
  - Cross-Origin
  - Error
  - HTTP
  - HTTPS
  - Messages
  - Reasons
  - Security
  - console
  - troubleshooting
---
{{HTTPSidebar}}

## Reason

```
Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'
```

## What went wrong?

The response to the {{Glossary("CORS")}} request that was sent by the server includes
an {{HTTPHeader("Access-Control-Allow-Headers")}} header which includes at least one
invalid header name.

The `Access-Control-Allow-Headers` header is sent by the server in response
to a {{Glossary("preflight request")}}; it lets the client know which [HTTP headers](/en-US/docs/Web/HTTP/Headers) are permitted in CORS requests.
If the client {{Glossary("user agent")}} finds among the comma-delineated values
provided by the header any header name it does not recognize, this error occurs.

This is a problem that most likely can only be fixed on the server side, by modifying
the server's configuration to no longer send the invalid or unknown header name with the
`Access-Control-Allow-Headers` header. It may also be worth checking to
ensure that the user agent or HTTP library you're using on the client is up-to-date.

## See also

- [CORS errors](/en-US/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/en-US/docs/Web/HTTP/CORS)
- [HTTP headers](/en-US/docs/Web/HTTP/Headers)
