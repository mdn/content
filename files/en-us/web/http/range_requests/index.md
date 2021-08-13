---
title: HTTP range requests
slug: Web/HTTP/Range_requests
tags:
  - Guide
  - HTTP
  - HTTP range requests
---
{{HTTPSidebar}}

HTTP range requests allow to send only a portion of an HTTP message from a server to a client. Partial requests are useful for large media or downloading files with pause and resume functions, for example.

## Checking if a server supports partial requests

If the {{HTTPHeader("Accept-Ranges")}} is present in HTTP responses (and its value isn't "`none`"), the server supports range requests. You can check this by issuing a {{HTTPMethod("HEAD")}} request with cURL, for example.

```
curl -I http://i.imgur.com/z4d4kWk.jpg

HTTP/1.1 200 OK
...
Accept-Ranges: bytes
Content-Length: 146515
```

In this response, `Accept-Ranges: bytes` indicates that bytes can be used as unit to define a range. Here the {{HTTPHeader("Content-Length")}} header is also useful as it indicates the full size of the image to retrieve.

If sites omit the `Accept-Ranges` header, they likely don't support partial requests. Some sites also explicitly send "`none`" as a value, indicating no support. In some apps, download managers disable their pause buttons in that case.

```
curl -I https://www.youtube.com/watch?v=EwTZ2xpQwpA

HTTP/1.1 200 OK
...
Accept-Ranges: none
```

## Requesting a specific range from a server

If the server supports range requests, you can issue such a request by using the {{HTTPHeader("Range")}} header. It indicates the part(s) of a document that the server should return.

### Single part ranges

We can request a single range from a resource. Again, we can test a request by using cURL. The "`-H`" option will append a header line to the request, which in this case is the `Range` header requesting the first 1024 bytes.

```
curl http://i.imgur.com/z4d4kWk.jpg -i -H "Range: bytes=0-1023"
```

The issued request looks like this:

```
GET /z4d4kWk.jpg HTTP/1.1
Host: i.imgur.com
Range: bytes=0-1023
```

The server responses with the {{HTTPStatus("206")}} `Partial Content` status:

```
HTTP/1.1 206 Partial Content
Content-Range: bytes 0-1023/146515
Content-Length: 1024
...
(binary content)
```

The {{HTTPHeader("Content-Length")}} header now indicates the size of the requested range (and not the full size of the image). The {{HTTPHeader("Content-Range")}} response header indicates where in the full resource this partial message belongs.

### Multipart ranges

The {{HTTPHeader("Range")}} header also allows you to get multiple ranges at once in a multipart document. The ranges are separated by a comma.

```
curl http://www.example.com -i -H "Range: bytes=0-50, 100-150"
```

The server responses with the {{HTTPStatus("206")}} `Partial Content` status and a {{HTTPHeader("Content-Type")}}`: multipart/byteranges; boundary=3d6b6a416f9b5` header, indicating that a multipart byterange follows. Each part contains its own `Content-Type` and `Content-Range` fields and the required boundary parameter specifies the boundary string used to separate each body-part.

```
HTTP/1.1 206 Partial Content
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 282

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 0-50/1270

<!doctype html>
<html>
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

```
If-Range: Wed, 21 Oct 2015 07:28:00 GMT
```

## Partial request responses

There are three relevant statuses, when working with range requests:

- In case of a successful range request, the {{HTTPStatus("206")}} `Partial Content` status is sent back from a server.
- In case of a range request that is out of bounds (none of the range values overlap the extent of the resource, i.e first-byte-pos of all ranges is greater than the resource length), the server responds with a {{HTTPStatus("416")}} `Requested Range Not Satisfiable` status.
- In case of no support of range requests, the {{HTTPStatus("200")}} `OK` status is sent back from a server.

## Comparison to chunked `Transfer-Encoding`

The {{HTTPHeader("Transfer-Encoding")}} header allows chunked encoding, which is useful when larger amounts of data are sent to the client and the total size of the response is not known until the request has been fully processed. The server sends data to the client straight away without buffering the response or determining the exact length, which leads to improved latency. Range requests and chunking are compatible and can be used with or without each other.

## See also

- Related status codes {{HTTPStatus("200")}}, {{HTTPStatus("206")}}, {{HTTPStatus("416")}}.
- Related headers: {{HTTPHeader("Accept-Ranges")}}, {{HTTPHeader("Range")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("If-Range")}}, {{HTTPHeader("Transfer-Encoding")}}.
- [Download resumption in Internet Explorer](https://blogs.msdn.microsoft.com/ieinternals/2011/06/03/download-resumption-in-internet-explorer/)
