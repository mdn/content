---
title: 207 Multi-Status
slug: Web/HTTP/Status/207
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc4918#section-11.1
---

{{HTTPSidebar}}

> **Note:** The ability to return a _collection of resources_ is part of the {{Glossary("WebDAV")}} protocol (it may be received by web applications accessing a WebDAV server).
> Browsers accessing web pages will never encounter this status code.

The HTTP **`207 Multi-Status`** response code indicates that there might be a mixture of responses.

The response body is a `text/xml` or `application/xml` HTTP entity with a `multistatus` root element. The XML body will list all individual response codes.

## Status

```
207 Multi-Status
```

## Example

```http
HTTP/1.1 207 Multi-Status
Content-Type: application/xml; charset="utf-8"
Content-Length: 1241

<?xml version="1.0" encoding="utf-8" ?>
<D:multistatus xmlns:D="DAV:">
  <D:response>
    <D:href>http://www.example.com/Coll/</D:href>
    <D:propstat>
      <D:prop>
        <D:displayname>Loop Demo</D:displayname>
        <D:resource-id>
          <D:href>urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf8</D:href>
        </D:resource-id>
      </D:prop>
      <D:status>HTTP/1.1 200 OK</D:status>
    </D:propstat>
  </D:response>
  <D:response>
    <D:href>http://www.example.com/Coll/Bar</D:href>
    <D:propstat>
      <D:prop>
        <D:displayname>Loop Demo</D:displayname>
        <D:resource-id>
          <D:href>urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf8</D:href>
        </D:resource-id>
      </D:prop>
      <D:status>HTTP/1.1 208 Already Reported</D:status>
    </D:propstat>
  </D:response>
</D:multistatus>
```

## Specifications

{{Specifications}}

## See also

- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- {{HTTPStatus("204")}}
- {{HTTPStatus("403")}}
