---
title: 207 Multi-Status
slug: Web/HTTP/Status/207
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc4918#section-11.1
---

{{HTTPSidebar}}

The HTTP **`207 Multi-Status`** [successful response](/en-US/docs/Web/HTTP/Status#successful_responses) status code indicates a mixture of responses.
This response is used exclusively in the context of Web Distributed Authoring and Versioning ({{Glossary("WebDAV")}}).

The response body is a `text/xml` or `application/xml` HTTP entity with a `multistatus` root element that lists individual response codes.

> [!NOTE]
> Browsers accessing web pages will never encounter this status code.
> The ability to return a _collection of resources_ is part of the {{Glossary("WebDAV")}} protocol and is only encountered by web applications that access a WebDAV server.

## Status

```plain
207 Multi-Status
```

## Examples

### Receiving a `207` response in a WebDAV context

The following response is an example `207` response that a {{Glossary("WebDAV")}} server sends to a client.
There is a `multistatus` root element with details of the individual collections:

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

- {{HTTPStatus("204")}}
- {{HTTPStatus("403")}}
- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
