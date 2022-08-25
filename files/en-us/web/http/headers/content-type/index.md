---
title: Content-Type
slug: Web/HTTP/Headers/Content-Type
tags:
  - Content-Type
  - HTTP
  - HTTP header
  - Representation header
  - Reference
browser-compat: http.headers.Content-Type
---
{{HTTPSidebar}}

The **`Content-Type`** representation header is used to indicate the original {{Glossary("MIME type","media type")}} of the resource (prior to any content encoding applied for sending).

In responses, a `Content-Type` header provides the client with the actual content type of the returned content. This header's value may be ignored, for example when browsers perform MIME sniffing; set the {{HTTPHeader("X-Content-Type-Options")}} header value to `nosniff` to prevent this behavior.

In requests, (such as {{HTTPMethod("POST")}} or {{HTTPMethod("PUT")}}), the client tells the server what type of data is actually sent.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Representation header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>yes</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
      </th>
      <td>
        yes, with the additional restriction that values can't contain a
        <em>CORS-unsafe request header byte</em>: 0x00-0x1F (except 0x09 (HT)),
        <code>"():&#x3C;>?@[\]{}</code>, and 0x7F (DEL).<br />It also needs to
        have a MIME type of its parsed value (ignoring parameters) of either
        <code>application/x-www-form-urlencoded</code>,
        <code>multipart/form-data</code>, or <code>text/plain</code>.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Type: text/html; charset=UTF-8
Content-Type: multipart/form-data; boundary=something
```

## Directives

- `media-type`
  - : The [MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the resource or the data.
- charset
  - : The character encoding standard.
- boundary
  - : For multipart entities the `boundary` directive is required. The directive consists of 1 to 70 characters from a set of characters (and not ending with white space) known to be very robust through email gateways. It is used to encapsulate the boundaries of the multiple parts of the message. Often, the header boundary is prepended with two dashes and the final boundary has two dashes appended at the end.

## Examples

### `Content-Type` in HTML forms

In a {{HTTPMethod("POST")}} request, resulting from an HTML form submission, the `Content-Type` of the request is specified by the `enctype` attribute on the {{HTMLElement("form")}} element.

```html
<form action="/" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="some text">
  <input type="file" name="myFile">
  <button type="submit">Submit</button>
</form>
```

The request looks something like this (less interesting headers are omitted here):

```http
POST /foo HTTP/1.1
Content-Length: 68137
Content-Type: multipart/form-data; boundary=---------------------------974767299852498929531610575

-----------------------------974767299852498929531610575
Content-Disposition: form-data; name="description"

some text
-----------------------------974767299852498929531610575
Content-Disposition: form-data; name="myFile"; filename="foo.txt"
Content-Type: text/plain

(content of the uploaded file foo.txt)
-----------------------------974767299852498929531610575--
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Content-Disposition")}}
- {{HTTPStatus("206")}} Partial Content
- {{HTTPHeader("X-Content-Type-Options")}}
