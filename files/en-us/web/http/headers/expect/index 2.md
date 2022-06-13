---
title: Expect
slug: Web/HTTP/Headers/Expect
tags:
  - HTTP
  - HTTP Header
  - Reference
  - Request header
browser-compat: http.headers.Expect
---
{{HTTPSidebar}}

The **`Expect`** HTTP request header indicates expectations
that need to be fulfilled by the server in order to properly handle the request.

The only expectation defined in the specification is `Expect: 100-continue`,
to which the server shall respond with:

- {{HTTPStatus("100")}} if the information contained in the header is sufficient to
  cause an immediate success,
- {{HTTPStatus("417")}} (Expectation Failed) if it cannot meet the expectation; or any
  other 4xx status otherwise.

For example, the server may reject a request if its {{HTTPHeader("Content-Length")}} is
too large.

No common browsers send the `Expect` header, but some other clients such as
cURL do so by default.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

No other expectations except "100-continue" are specified currently.

```
Expect: 100-continue
```

## Directives

- `100-continue`
  - : Informs recipients that the client is about to send a (presumably large) message
    body in this request and wishes to receive a {{HTTPStatus("100")}} (Continue) interim
    response.

## Examples

### Large message body

A client sends a request with a Expect header and waits for the server to respond
before sending the message body.

```
PUT /somewhere/fun HTTP/1.1
Host: origin.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

The server now checks the request headers and may respond with a {{HTTPStatus("100")}}
(Continue) response to instruct the client to go ahead and send the message body, or it
will send a {{HTTPStatus("417")}} (Expectation Failed) status if any of the expectations
cannot be met.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPStatus("417", "417 Expectation Failed")}}
- {{HTTPStatus("100", "100 Continue")}}
