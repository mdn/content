---
title: "Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'"
slug: Web/HTTP/CORS/Errors/CORSMethodNotFound
page-type: http-cors-error
---

{{HTTPSidebar}}

## Reason

```plain
Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'
```

## What went wrong?

The HTTP method being used by the {{Glossary("CORS")}} request is not included in the
list of methods specified by the response's
{{HTTPHeader("Access-Control-Allow-Methods")}} header. This header specifies a
comma-delimited list of the HTTP methods which may be used when using CORS to access
the URL specified in the request; if the request is using any other method, this error
occurs.

For example, if the response includes:

```http
Access-Control-Allow-Methods: GET,HEAD,POST
```

Trying to use a {{HTTPMethod("PUT")}} request will fail with this error.

Make sure your code only uses the permitted HTTP methods when accessing the service.

> **Note:** If the server includes any unrecognized or undefined method names in its `Access-Control-Allow-methods` header, a different error occurs: [`Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'`](/en-US/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowMethod).

## See also

- [CORS errors](/en-US/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/en-US/docs/Web/HTTP/CORS)
- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
