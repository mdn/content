---
title: 413 Content Too Large
slug: Web/HTTP/Status/413
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.413
---

{{HTTPSidebar}}

The HTTP **`413 Content Too Large`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code indicates that the request entity was larger than limits defined by server.
The server might close the connection or return a {{HTTPHeader("Retry-After")}} header field.

Prior to {{rfc("9110")}} the response phrase for the status was **`Payload Too Large`**.
This message is still widely used.

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
