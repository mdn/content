---
title: "Reason: Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '*'"
slug: Web/HTTP/CORS/Errors/CORSNotSupportingCredentials
page-type: http-cors-error
---

{{HTTPSidebar}}

## Reason

```plain
Reason: Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '*'
```

## What went wrong?

The {{Glossary("CORS")}} request was attempted with the credentials flag set, but the server is configured using the wildcard (`"*"`) as the value of {{HTTPHeader("Access-Control-Allow-Origin")}}, which doesn't allow the use of credentials.

To correct this problem on the client side, ensure that the credentials flag's value is `false` when issuing your CORS request.

- If the request is being issued using {{domxref("XMLHttpRequest")}}, make sure you're not setting {{domxref("XMLHttpRequest.withCredentials", "withCredentials")}} to `true`.
- If using [Server-sent events](/en-US/docs/Web/API/Server-sent_events), make sure {{domxref("EventSource.withCredentials")}} is `false` (it's the default value).
- If using the [Fetch API](/en-US/docs/Web/API/Fetch_API), make sure {{domxref("Request.credentials")}} is `"omit"`.

If, instead, you need to adjust the server's behavior, you'll need to change the value of `Access-Control-Allow-Origin` to grant access to the origin from which the client is loaded.

## See also

- [CORS errors](/en-US/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/en-US/docs/Web/HTTP/CORS)
