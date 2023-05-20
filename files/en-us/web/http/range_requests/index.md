---
title: HTTP range requests
slug: Web/HTTP/Range_requests
page-type: guide
---

{{HTTPSidebar}}

An HTTP range request asks the server to send only a portion of an HTTP message back to a client. Range requests are useful for clients like media players that support random access, data tools that know they need only part of a large file, and download managers that let the user pause and resume the download.

## Checking if a server supports partial requests

If an HTTP response includes the {{HTTPHeader("Accept-Ranges")}} header and its value is anything other than "`none`", then the server supports range requests. You can perform a manual check by issuing a {{HTTPMethod("HEAD")}} request with a tool like cURL.

```bash
curl -I http://i.imgur.com/z4d4kWk.jpg
```

```http
HTTP/1.1 200 OK
…
Accept-Ranges: bytes
Content-Length: 146515
```

In this response, `Accept-Ranges: bytes` indicates that bytes can be used as units to define a range. Here the {{HTTPHeader("Content-Length")}} header is also useful as it indicates the full size of the image to retrieve.

If sites omit the `Accept-Ranges` header, they likely don't support partial requests. Some sites include the header but give it the explicit value "`none`" to indicate they lack support:

```bash
curl -I https://www.youtube.com/watch?v=EwTZ2xpQwpA
```

```http
HTTP/1.1 200 OK
…
Accept-Ranges: none
```

A download manager might disable its pause button in that case.

## Requesting a specific range from a server

If the server supports range requests, then by including the {{HTTPHeader("Range")}} header in your HTTP request, you can specify which part or parts of the document you want the server to return.

### Single part ranges

We can request a single range from a resource. Again, we can test a request by using cURL. The "`-H`" option will append a header line to the request, which in this case is the `Range` header requesting the first 1024 bytes.

```bash
curl http://i.imgur.com/z4d4kWk.jpg -i -H "Range: bytes=0-1023"
```

The issued request looks like this:

```http
GET /z4d4kWk.jpg HTTP/1.1
Host: i.imgur.com
Range: bytes=0-1023
```

The server responses with the {{HTTPStatus("206")}} `Partial Content` status:

```http
HTTP/1.1 206 Partial Content
Content-Range: bytes 0-1023/146515
Content-Length: 1024
…
(binary content)
```

The {{HTTPHeader("Content-Length")}} header now indicates the size of the requested range (and not the full size of the image). The {{HTTPHeader("Content-Range")}} response header indicates where in the full resource this partial message belongs.

### Multipart ranges

The {{HTTPHeader("Range")}} header also allows you to get multiple ranges at once in a multipart document. The ranges are separated by a comma.

```bash
curl http://www.example.com -i -H "Range: bytes=0-50, 100-150"
```

The server responses with the {{HTTPStatus("206")}} `Partial Content` status and a {{HTTPHeader("Content-Type")}}`: multipart/byteranges; boundary=3d6b6a416f9b5` header, indicating that a multipart byterange follows. Each part contains its own `Content-Type` and `Content-Range` fields and the required boundary parameter specifies the boundary string used to separate each body-part.

```http
HTTP/1.1 206 Partial Content
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 282

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 0-50/1270

<!DOCTYPE html>
<html lang="en-US">
<head>
    <title>Example Do
--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-150/1270

eta http-equiv="Content-type" content="text/html; c
--3d6b6a416f9b5--
```

### Conditional range requests

When resuming to request more parts of a resource, you need to guarantee that the stored resource has not been modified since the last fragment has been received.

The {{HTTPHeader("If-Range")}} HTTP request header makes a range request conditional: if the condition is fulfilled, the range request will be issued and the server sends back a {{HTTPStatus("206")}} `Partial Content` answer with the appropriate body. If the condition is not fulfilled, the full resource is sent back, with a {{HTTPStatus("200")}} `OK` status. This header can be used either with a {{HTTPHeader("Last-Modified")}} validator, or with an {{HTTPHeader("ETag")}}, but not with both.

```http
If-Range: Wed, 21 Oct 2015 07:28:00 GMT
```

## Partial request responses

There are three relevant statuses, when working with range requests:

- A successful range request elicits a {{HTTPStatus("206")}} `Partial Content` status from the server.
- A range request that is out of bounds will result in a {{HTTPStatus("416")}} `Requested Range Not Satisfiable` status, meaning that none of the range values overlap the extent of the resource. For example, the first-byte-pos of every range might be greater than the resource length.
- If range requests are not supported, an {{HTTPStatus("200")}} `OK` status is sent back and the entire response body is transmitted.

## Comparison to chunked `Transfer-Encoding`

The {{HTTPHeader("Transfer-Encoding")}} header allows chunked encoding, which is useful when larger amounts of data are sent to the client and the total size of the response is not known until the request has been fully processed. The server sends data to the client straight away without buffering the response or determining the exact length, which leads to improved latency. Range requests and chunking are compatible and can be used with or without each other.

## See also

- Related status codes {{HTTPStatus("200")}}, {{HTTPStatus("206")}}, {{HTTPStatus("416")}}.
- Related headers: {{HTTPHeader("Accept-Ranges")}}, {{HTTPHeader("Range")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("If-Range")}}, {{HTTPHeader("Transfer-Encoding")}}.
