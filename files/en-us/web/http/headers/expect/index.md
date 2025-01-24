---
title: Expect
slug: Web/HTTP/Headers/Expect
page-type: http-header
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#field.expect
---

{{HTTPSidebar}}

The HTTP **`Expect`** {{Glossary("request header")}} indicates that there are expectations that need to be met by the server in order to handle the complete request successfully.

When a request has an `Expect: 100-continue` header, a server sends a {{HTTPStatus("100", "100 Continue")}} response to indicate that the server is ready or capable of receiving the rest of the request content.
Waiting for a `100` response can be helpful if a client anticipates that an error is likely, for example, when sending state-changing operations without previously verified authentication credentials.

A {{HTTPStatus("417", "417 Expectation Failed")}} response is returned if the server cannot meet the expectation, or any other status otherwise (e.g., a [4XX](/en-US/docs/Web/HTTP/Status#client_error_responses) status for a client error, or a [2XX](/en-US/docs/Web/HTTP/Status#successful_responses) status if the request can be resolved successfully without further processing).

None of the more common browsers send the `Expect` header, but some clients (command-line tools) do so by default.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>Yes</td>
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
  - : Informs recipients that the client is about to send a (presumably large) message body in this request and wishes to receive a {{HTTPStatus("100", "100 Continue")}} interim response.

## Examples

### Large message body

A client sends a request with `Expect` header and waits for the server to respond before sending the message body.

```http
PUT /somewhere/fun HTTP/1.1
Host: origin.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

The server checks the headers and generates the response, where a {{HTTPStatus("100", "100 Continue")}} instructs the client to send the message body:

```http
HTTP/1.1 100 Continue
```

The client completes the request by sending the actual data:

```http
[Video data as content for PUT request]
```

## Specifications

{{Specifications}}

## See also

- {{HTTPStatus("417", "417 Expectation Failed")}}
- {{HTTPStatus("100", "100 Continue")}}
