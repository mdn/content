---
title: "Reason: CORS header 'Origin' cannot be added"
slug: Web/HTTP/CORS/Errors/CORSOriginHeaderNotAdded
page-type: http-cors-error
---

{{HTTPSidebar}}

## Reason

```plain
Reason: CORS header 'Origin' cannot be added
```

## What went wrong?

The {{Glossary("user agent")}} was unable to add the required {{HTTPHeader("Origin")}}
header to the {{Glossary("HTTP")}} request. All CORS requests must have an
`Origin` header.

This can happen if the JavaScript code is running with enhanced privileges allowing it
access to multiple domains' content, for example.

## See also

- [CORS errors](/en-US/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/en-US/docs/Web/HTTP/CORS)
