---
title: TRACE
slug: Web/HTTP/Methods/TRACE
page-type: http-method
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#TRACE
---

{{HTTPSidebar}}

The **`TRACE`** HTTP method performs a message loop-back test along the path to the target resource.

The final recipient of the request should reflect the message as received (excluding any fields that might include sensitive data) back to the client as the message body of a {{HTTPStatus("200", "200 OK")}} response with a {{HTTPHeader("Content-Type")}} of `message/http`.
The final recipient is either the origin server or the first server to receive a {{HTTPHeader("Max-Forwards")}} value of `0` in the request.

The client must not send {{Glossary("HTTP Content", "content")}} in the request, or generate headers that might include sensitive data such as user credentials or cookies.
Not all servers implement the `TRACE` method, and some server owners have historically disallowed the use of the `TRACE` method due to security concerns.
In such cases, a {{HTTPStatus("405", "405 Method Not Allowed")}} [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) will be sent.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Request has body</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Successful response has body</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Safe")}}</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent")}}</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Allowed in <a href="/en-US/docs/Learn/Forms">HTML forms</a></th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
TRACE <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifies the target resource of the request when combined with the information provided in the {{HTTPHeader("Host")}} header.
    This is an absolute path (e.g., `/path/to/file.html`) in requests to an origin server, and an absolute URL in requests to proxies (e.g., `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : An optional query component preceded by a question-mark `?`.
    Often used to carry identifying information in the form of `key=value` pairs.

## Examples

### Successful TRACE request

A `TRACE` request can be performed using `curl`:

```bash
curl -v -X TRACE example.com
```

This produces the following HTTP request:

```http
TRACE / HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
```

A {{HTTPStatus("200", "200 OK")}} response with the request headers contained in response body is sent back to the client:

```http
HTTP/1.1 200 OK
Content-Length: 123
Date: Wed, 04 Sep 2024 11:50:24 GMT
Server: Apache/2.4.59 (Unix)
Content-Type: message/http

TRACE / HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
```

## Specifications

{{Specifications}}

## Browser compatibility

The browser doesn't use the `TRACE` method for user-initiated actions, so "browser compatibility" doesn't apply.
Developers can set this request method using [`fetch()`](/en-US/docs/Web/API/Window/fetch).

## See also

- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [HTTP headers](/en-US/docs/Web/HTTP/Headers)
- [Cross-Site Tracing (XST)](https://owasp.org/www-community/attacks/Cross_Site_Tracing)
