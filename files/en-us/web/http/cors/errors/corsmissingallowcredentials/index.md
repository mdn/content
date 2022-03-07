---
title: "Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'"
slug: Web/HTTP/CORS/Errors/CORSMIssingAllowCredentials
tags:
  - CORS
  - CORSMissingAllowCredentials
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
Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'
```

## What went wrong?

The {{Glossary("CORS")}} request requires that the server permit the use of
credentials, but the server's {{HTTPHeader("Access-Control-Allow-Credentials")}}
header's value isn't set to `true` to enable their use.

To fix this problem on the client side, revise the code to not request the use of
credentials.

- If the request is being issued using {{domxref("XMLHttpRequest")}}, make sure you're
  not setting {{domxref("XMLHttpRequest.withCredentials", "withCredentials")}} to
  `true`.
- If using [Server-sent events](/en-US/docs/Web/API/Server-sent_events),
  make sure {{domxref("EventSource.withCredentials")}} is `false` (it's the
  default value).
- If using the [Fetch API](/en-US/docs/Web/API/Fetch_API), make sure
  {{domxref("Request.credentials")}} is `"omit"`.

To eliminate this error by changing the server's configuration, adjust the server's
configuration to set the `Access-Control-Allow-Credentials` header's value to
`true`.

## See also

- [CORS errors](/en-US/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/en-US/docs/Web/HTTP/CORS)
