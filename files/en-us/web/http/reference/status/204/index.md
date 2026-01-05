---
title: 204 No Content
slug: Web/HTTP/Reference/Status/204
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.204
sidebar: http
---

The HTTP **`204 No Content`** [successful response](/en-US/docs/Web/HTTP/Reference/Status#successful_responses) status code indicates that a request has succeeded, but the client doesn't need to navigate away from its current page.
A `204` response is cacheable by default, and an {{HTTPHeader("ETag")}} header is included in such cases.

A `204 No Content` in response to these request methods has the following meaning and results:

- {{HTTPMethod("DELETE")}}: The action was successful, and no further information needs to be supplied.
- {{HTTPMethod("PUT")}}: The action was successful, and the {{HTTPHeader("ETag")}} value contains the entity tag for the new representation of that target resource.

A `204` response can be used when implementing "save and continue editing" functionality for applications like wiki sites.
In this case, a {{HTTPMethod("PUT")}} request could be used to save the page contents, and a `204 No Content` response indicates to the browser that the editor should not be replaced by other content.

Note that the response must not include any content or the {{HTTPHeader("Content-Length")}} header (browsers may reject responses that include content).

## Status

```http
204 No Content
```

## Examples

### Receiving a response after deleting an image

In this example, the client sends a request to delete an image using the `DELETE` method.
The request includes an {{HTTPHeader("Authorization")}} header with a token to authenticate the request:

```http
DELETE /image/123 HTTP/1.1
Host: example.com
Authorization: Bearer 1234abcd
```

After successfully deleting the image, the server responds with a `204` response with no body, indicating no further information needs to be sent to the client.

```http
HTTP/1.1 204 No Content
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
```

## Specifications

{{Specifications}}

## See also

- [HTTP request methods](/en-US/docs/Web/HTTP/Reference/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Reference/Status)
