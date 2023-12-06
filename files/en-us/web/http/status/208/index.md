---
title: 208 Already Reported
slug: Web/HTTP/Status/208
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc5842.html#section-7.1
---

{{HTTPSidebar}}

> **Note:** The ability to _bind_ a resource to several paths is an extension to the {{Glossary("WebDAV")}} protocol (it may be received by web applications accessing a WebDAV server).
> Browsers accessing web pages will never encounter this status code.

The HTTP **`208 Already Reported`** response code is used in a {{HTTPStatus("207")}} (`207 Multi-Status`) response to save space and avoid conflicts.
If the same resource is requested several times (for example as part of a collection), with different paths, only the first one is reported with {{HTTPStatus("200")}}.
Responses for all other bindings will report with this `208` status code, so no conflicts are created and the response stays shorter.

## Status

```plain
208 Already Reported
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
    <D:href>http://www.example.com/Coll/Foo</D:href>
    <D:propstat>
      <D:prop>
        <D:displayname>Bird Inventory</D:displayname>
        <D:resource-id>
          <D:href>urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf9</D:href>
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

- {{HTTPStatus("200")}}
