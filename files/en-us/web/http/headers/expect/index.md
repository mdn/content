---
title: Expect
slug: Web/HTTP/Headers/Expect
page-type: http-header
browser-compat: http.headers.Expect
---

{{HTTPSidebar}}

The **`Expect`** HTTP request header indicates expectations
that need to be met by the server to handle the request successfully.

Upon `Expect: 100-continue`, the server responds with:

- {{HTTPStatus("100")}} (Continue) if the information from the request header is insufficient to
  resolve the response and the client should proceed with sending the body.
- {{HTTPStatus("417")}} (Expectation Failed) if the server cannot meet the expectation

or any other status otherwise (e.g. a 4xx status for a client error, or a 2xx status if the
request can be resolved successfully without further processing).

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

```http
Expect: 100-continue
```

## Directives

There is only one defined expectation:

- `100-continue`
  - : Informs recipients that the client is about to send a (presumably large) message
    body in this request and wishes to receive a {{HTTPStatus("100")}} (Continue) interim
    response.

## Examples

### Large message body

A client sends a request with `Expect` header and waits for the server to respond
before sending the message body.

```http
PUT /somewhere/fun HTTP/1.1
Host: origin.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

The server checks the headers and generates the response.
The server sends {{HTTPStatus("100")}} (Continue), which instructs the client to send the message body.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPStatus("417", "417 Expectation Failed")}}
- {{HTTPStatus("100", "100 Continue")}}
