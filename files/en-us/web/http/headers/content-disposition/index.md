---
title: Content-Disposition
slug: Web/HTTP/Headers/Content-Disposition
tags:
  - HTTP
  - HTTP Header
  - Request header
  - Response header
  - Reference
browser-compat: http.headers.Content-Disposition
---
{{HTTPSidebar}}

In a regular HTTP response, the **`Content-Disposition`** response header is a header indicating if the content is expected to be displayed _inline_ in the browser, that is, as a Web page or as part of a Web page, or as an _attachment_, that is downloaded and saved locally.

In a `multipart/form-data` body, the HTTP **`Content-Disposition`** general header is a header that must be used on each subpart of a multipart body to give information about the field it applies to. The subpart is delimited by the _boundary_ defined in the {{HTTPHeader("Content-Type")}} header. Used on the body itself, `Content-Disposition` has no effect.

The `Content-Disposition` header is defined in the larger context of MIME messages for e-mail, but only a subset of the possible parameters apply to HTTP forms and {{HTTPMethod("POST")}} requests. Only the value `form-data`, as well as the optional directive `name` and `filename`, can be used in the HTTP context.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Response header")}} (for the main body),<br />{{Glossary("Request header")}},
        {{Glossary("Response header")}} (for a subpart of a multipart
        body)
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

### As a response header for the main body

The first parameter in the HTTP context is either `inline` (default value, indicating it can be displayed inside the Web page, or as the Web page) or `attachment` (indicating it should be downloaded; most browsers presenting a 'Save as' dialog, prefilled with the value of the `filename` parameters if present).

```http
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="filename.jpg"
```

> **Note:** Chrome, and Firefox 82 and later, prioritize the HTML [\<a> element's](/en-US/docs/Web/HTML/Element/a) `download` attribute over the `Content-Disposition` `inline` parameter (for [same-origin URLs](/en-US/docs/Web/Security/Same-origin_policy)). Earlier Firefox versions prioritize the header and will display the content inline.

### As a header for a multipart body

A `multipart/form-data` body requires a `Content-Disposition` header to provide information for each subpart of the form (e.g. for every form field and any files that are part of field data). The first directive is always `form-data`, and the header _must_ also include a `name` parameter to identify the relevant field. Additional directives are case-insensitive and have arguments that use quoted-string syntax after the `'='` sign. Multiple parameters are separated by a semi-colon (`';'`).

```http
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

### Directives

- `name`

  - : Is followed by a string
    containing the name of the HTML field in the form
    that the content of this subpart refers to.
    When dealing with multiple files in the same field
    (for example, the {{htmlattrxref("multiple", "input")}} attribute of an `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}` element),
    there can be several subparts with the same name.

    A `name` with a value of `'_charset_'` indicates
    that the part is not an HTML field,
    but the default charset to use for parts without explicit charset information.

- `filename`
  - : Is followed by a string containing the original name of the file transmitted. The filename is always optional and must not be used blindly by the application: path information should be stripped, and conversion to the server file system rules should be done. This parameter provides mostly indicative information. When used in combination with `Content-Disposition: attachment`, it is used as the default filename for an eventual "Save As" dialog presented to the user.
- `filename*`
  - : The parameters `filename` and `filename*` differ only in that `filename*` uses the encoding defined in [RFC 5987](https://datatracker.ietf.org/doc/html/rfc5987). When both `filename` and `filename*` are present in a single header field value, `filename*` is preferred over `filename` when both are understood.

> **Warning:** The string following `filename` should always be put into quotes; but, for compatibility reasons, many browsers try to parse unquoted names that contain spaces.

## Examples

A response triggering the "Save As" dialog:

```http
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

<HTML>Save me!</HTML>
```

This simple HTML file will be saved as a regular download rather than displayed in the browser. Most browsers will propose to save it under the `cool.html` filename (by default).

An example of an HTML form posted using the `multipart/form-data` format that makes use of the `Content-Disposition` header:

```http
POST /test.html HTTP/1.1
Host: example.org
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--boundary--
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Compatibility notes

- Firefox 5 handles the `Content-Disposition` HTTP response header more effectively if both the `filename` and `filename*` parameters are provided; it looks through all provided names, using the `filename*` parameter if one is available, even if a `filename` parameter is included first. Previously, the first matching parameter would be used, thereby preventing a more appropriate name from being used. See {{bug(588781)}}.
- Firefox 82 (and later) and Chrome prioritize the HTML [\<a> element's](/en-US/docs/Web/HTML/Element/a) `download` attribute over the `Content-Disposition` `inline` parameter (for [same-origin URLs](/en-US/docs/Web/Security/Same-origin_policy)). Earlier Firefox versions prioritize the header and will display the content inline.

## See also

- [HTML Forms](/en-US/docs/Learn/Forms)
- The {{HTTPHeader("Content-Type")}} defining the boundary of the multipart body.
- The {{domxref("FormData")}} interface used to manipulate form data for use in the {{domxref("XMLHttpRequest")}} API.
