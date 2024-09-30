---
title: 429 Too Many Requests
slug: Web/HTTP/Status/429
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc6585#section-4
---

{{HTTPSidebar}}

The HTTP **`429 Too Many Requests`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code indicates the client has sent too many requests in a given amount of time.
This mechanism of asking the client to slow down the rate of requests is commonly called "{{glossary("rate limit", "rate limiting")}}".

A {{HTTPHeader("Retry-After")}} header may be included to this response to indicate how long a client should wait before making the request again.

Implementations of rate limiting vary; restrictions may be server-wide or per resource.
Typically, rate-limiting restrictions are based on a client's IP but can be specific to users or authorized applications if requests are authenticated or contain a {{Glossary("cookie")}}.

## Status

```http
429 Too Many Requests
```

## Examples

### Response containing Retry-After header

The following request is being sent repeatedly in a loop by a client that is misconfigured:

```http
GET /reports/mdn HTTP/1.1
Host: example.com
```

In this example, server-wide rate limiting is active when a client exceeds a set threshold of requests per minute.
A 429 response is returned with a {{HTTPHeader("Retry-After")}} header that indicates that requests will be allowed for this client again in 60 minutes:

```http
HTTP/1.1 429 Too Many Requests
Content-Type: text/html
Retry-After: 3600

<html>
  <head>
    <title>Too Many Requests</title>
  </head>
  <body>
    <h1>Too Many Requests</h1>
    <p>You're doing that too often! Try again later.</p>
  </body>
</html>
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPHeader("Retry-After")}}
- Python solution: [How to avoid HTTP error 429 python](https://stackoverflow.com/questions/22786068/how-to-avoid-http-error-429-too-many-requests-python)
