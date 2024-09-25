---
title: "Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel"
slug: Web/HTTP/CORS/Errors/CORSMissingAllowHeaderFromPreflight
page-type: http-cors-error
---

{{HTTPSidebar}}

## Reason

```plain
Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel
```

## What went wrong?

The `Access-Control-Allow-Headers` header is sent by the server to let the client know which headers it supports for {{Glossary("CORS")}} requests. The value of `Access-Control-Allow-Headers` should be a comma-delineated list of header names, such as `X-Custom-Information` or any of the standard but non-basic header names (which are always allowed).

This error occurs when attempting to preflight a header that is not expressly allowed (that is, it's not included in the list specified by the `Access-Control-Allow-Headers` header sent by the server). To fix this, the server needs to be updated so that it allows the indicated header, or you need to avoid using that header.

## See also

- [CORS errors](/en-US/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/en-US/docs/Web/HTTP/CORS)
- [HTTP headers](/en-US/docs/Web/HTTP/Headers)
