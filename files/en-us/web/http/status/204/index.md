---
title: 204 No Content
slug: Web/HTTP/Status/204
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.204
---

{{HTTPSidebar}}

The HTTP **`204 No Content`** [successful response](/en-US/docs/Web/HTTP/Status#successful_responses) status code indicates that a request has succeeded, but the client doesn't need to navigate away from its current page.
A `204` response is cacheable by default, and an {{HTTPHeader("ETag")}} header is included in such cases.

A `204 No Content` in response to these request methods has the following meaning and results:

- {{HTTPMethod("DELETE")}}: The action was successful, and no further information needs to be supplied.
- {{HTTPMethod("PUT")}}: The action was successful, and the {{HTTPHeader("ETag")}} value contains the entity tag for the new representation of that target resource.

A `204` response can be used when implementing "save and continue editing" functionality for applications like wiki sites.
In this case, a {{HTTPMethod("PUT")}} request could be used to save the page contents, and a `204 No Content` response indicates to the browser that the editor should not be replaced by other content.

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

After successfully deleting the image, the server responds with a `204` response with no body (and an explicit {{HTTPHeader("Content-Length", "Content-Length: 0")}} header), indicating no further information needs to be sent to the client.

```http
HTTP/1.1 204 No Content
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Length: 0
```

## Specifications

{{Specifications}}

## Compatibility notes

Although this status code is intended for responses with no body, servers may erroneously include data after the headers. This issue is observable in persistent connections, where the invalid body may include a distinct response to a subsequent request.
The HTTP protocol allows browsers to handle such responses differently (there is an ongoing discussion regarding the specification text in the [HTTPWG `http-core` GitHub repository](https://github.com/httpwg/http-core/issues/26)).

Apple Safari rejects any such data.
Google Chrome and Microsoft Edge discard up to four invalid bytes preceding a valid response.
Firefox tolerates over a kilobyte of invalid data preceding a valid response.

## See also

- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
