---
title: 300 Multiple Choices
slug: Web/HTTP/Status/300
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.300
---

{{HTTPSidebar}}

The HTTP **`300 Multiple Choices`** [redirection response](/en-US/docs/Web/HTTP/Status#redirection_messages) status code indicates that the request has more than one possible response.
The user-agent or the user should choose one of them.
There is no standardized way of choosing one of the responses, so this response code is rarely used.

If the server has a preferred choice that the client should request, it should generate a {{HTTPHeader("Location")}} header.
See [Content negotiation](/en-US/docs/Web/HTTP/Content_negotiation) for more information.

## Status

```http
300 Multiple Choices
```

## Examples

### 300 response with a `Location` header

The following example shows how reactive negotiation (or [agent-driven negotiation](/en-US/docs/Web/HTTP/Content_negotiation#agent-driven_negotiation)) may look like.
In this scenario, a `300` response with details of different representations of a resource is sent by the server, and the client chooses which resource it wants.
The downsides to this approach is that the content may have a different format or syntax depending on the implementation, and that it includes an additional request-response exchange which slows down the overall client-server interaction:

```http
GET /resource HTTP/1.1
Host: example.com
Accept: application/json
```

```http
HTTP/1.1 300 Multiple Choices
Content-Type: application/json
Location: http://example.com/resource-html
{
  "message": "Multiple choices available.",
  "choices": [
    {
      "contentType": "text/pdf",
      "uri": "http://example.com/resource-pdf"
    },
    {
      "contentType": "text/html",
      "uri": "http://example.com/resource-html"
    }
  ]
}
```

## Specifications

{{Specifications}}

## See also

- [Redirections in HTTP](/en-US/docs/Web/HTTP/Redirections)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus("301")}} `Moved Permanently`
- {{HTTPStatus("302")}} `Found` temporary redirect
- {{HTTPStatus("308")}} `Permanent Redirect`
