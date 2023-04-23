---
title: "Reason: CORS disabled"
slug: Web/HTTP/CORS/Errors/CORSDisabled
page-type: http-cors-error
---

{{HTTPSidebar}}

## Reason

```plain
Reason: CORS disabled
```

## What went wrong?

A request that needs to use {{Glossary("CORS")}} was attempted, but CORS is disabled in
the user's browser. When this happens, the user needs to turn CORS back on in their
browser.

In Firefox, the preference that disables CORS is `content.cors.disable`.
Setting this to `true` disables CORS, so whenever that's the case, CORS
requests will always fail with this error.

## See also

- [CORS errors](/en-US/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/en-US/docs/Web/HTTP/CORS)
