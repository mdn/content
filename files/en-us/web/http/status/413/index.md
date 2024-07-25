---
title: 413 Content Too Large
slug: Web/HTTP/Status/413
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.413
---

{{HTTPSidebar}}

The HTTP **`413 Content Too Large`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code indicates that the request entity was larger than limits defined by server.
The server might close the connection or return a {{HTTPHeader("Retry-After")}} header field.

The response phrase used to be **`Payload Too Large`** and this message is still widely used.
The usage of "payload" is replaced with "content" to avoid confusion with frame payloads in HTTP/2 and HTTP/3.

## Status

```http
413 Content Too Large
```

## Examples

### File upload limit exceeded

The following example shows what the client may send when an [`<input type="file">`](/en-US/docs/Web/HTML/Element/input/file) element includes an image on form submission with `method="post"`:

```http
POST /upload HTTP/1.1
Host: example.com
Content-Type: multipart/form-data; boundary=----Boundary1234
Content-Length: 4012345

------Boundary1234
Content-Disposition: form-data; name="file"; filename="myImage.jpg"
Content-Type: image/jpeg

\xFF\xD8\xFF\xE0\x00...(binary data)
------Boundary1234--
```

The server may reject the upload if there is a restriction on the maximum size of files it will process, and the response body includes a `message` with some context:

```http
HTTP/1.1 413 Content Too Large
Content-Type: application/json
Content-Length: 97

{
  "error": "Upload failed",
  "message": "Maximum allowed upload size is 4MB",
}
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Retry-After")}}
- {{Glossary("HTTP Content")}}
- [RFC 9110, section 6.4.1: Content semantics](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4.1)
