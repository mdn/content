---
title: 414 URI Too Long
slug: Web/HTTP/Status/414
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.414
---

{{HTTPSidebar}}

The HTTP **`414 URI Too Long`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code indicates that a URI requested by the client was longer than the server is willing to interpret.

There are a few rare conditions when this error might occur:

- a client has improperly converted a {{HTTPMethod("POST")}} request to a {{HTTPMethod("GET")}} request with long query information,
- a client has descended into a loop of redirection (for example, a redirected URI prefix that points to a suffix of itself), or
- the server is under attack by a client attempting to exploit potential security holes.

Some systems implement `414 URI Too Long` as `414 Request-URI Too Large`.

## Status

```http
414 URI Too Long
```

## Examples

### Form submission using GET

In the following example, an HTML [`<form>` method](/en-US/docs/Web/HTML/Element/form#method) accidentally uses `get` instead of `post`.
A large amount of form data is appended to the URL specified at the form's `action` attribute and is sent as a GET request:

```http
GET /search?feedback=it+was+the+best+of+times+it+was+the+worst+of+times… HTTP/1.1
Host: example.com
```

The particular server's URI length limit is reached with this request and a 414 is sent in response:

```http
HTTP/1.1 414 URI Too Long
Content-Type: text/html; charset=UTF-8
Date: Fri, 28 Jun 2024 11:40:58 GMT
Content-Length: 1234

<!doctype html>
<head>
  <title>414 - URI Too Long</title>
</head>
  <body>
    <h1>414 - URI Too Long</h1>
    <p>The URI provided was too long for the server to process.</p>
  </body>
</html>
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{Glossary("URI")}}
