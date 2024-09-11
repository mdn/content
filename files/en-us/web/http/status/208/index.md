---
title: 208 Already Reported
slug: Web/HTTP/Status/208
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc5842.html#section-7.1
---

{{HTTPSidebar}}

The HTTP **`208 Already Reported`** [successful response](/en-US/docs/Web/HTTP/Status#successful_responses) status code is used in a {{HTTPStatus("207", "207 Multi-Status")}} response to save space and avoid conflicts.
This response is used exclusively in the context of Web Distributed Authoring and Versioning ({{Glossary("WebDAV")}}).

If the same resource is requested several times (for example, as part of a collection) with different paths, only the first one is reported with {{HTTPStatus("200")}}.
Responses for all other bindings will report with this `208` status code, so no conflicts are created and the response stays shorter.

> [!NOTE]
> The ability to _bind_ a resource to several paths is an extension to the {{Glossary("WebDAV")}} protocol (it may be received by web applications accessing a WebDAV server).
> Browsers accessing web pages will never encounter this status code.

## Status

```plain
208 Already Reported
```

## Examples

### Receiving a `208` in a `207 Multi-Status` response

The following is a sample `207 Multi-Status` response from a WebDAV server, which includes a `208` response.
Notice the `208` in the last `<D:status>` element, which indicates that the resource named `Loop Demo` has been reported earlier in the `207` response.

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
- {{HTTPStatus("508", "508 Loop Detected")}}
- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
