---
title: Content-Disposition
slug: Web/HTTP/Headers/Content-Disposition
page-type: http-header
browser-compat: http.headers.Content-Disposition
---

{{HTTPSidebar}}

In a regular HTTP response, the **`Content-Disposition`** response header is a header indicating if the content is expected to be displayed _inline_ in the browser, that is, as a Web page or as part of a Web page, or as an _attachment_, that is downloaded and saved locally.

In a `multipart/form-data` body, the HTTP **`Content-Disposition`** general header is a header that must be used on each subpart of a multipart body to give information about the field it applies to. The subpart is delimited by the _boundary_ defined in the {{HTTPHeader("Content-Type")}} header. Used on the body itself, `Content-Disposition` has no effect.

The `Content-Disposition` header is defined in the larger context of MIME messages for email, but only a subset of the possible parameters apply to HTTP forms and {{HTTPMethod("POST")}} requests. Only the value `form-data`, as well as the optional directive `name` and `filename`, can be used in the HTTP context.

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
Content-Disposition: attachment; filename*="filename.jpg"
```

The quotes around the filename are optional, but are necessary if you use special characters in the filename, such as spaces.

The parameters `filename` and `filename*` differ only in that `filename*` uses the encoding defined in [RFC 5987](https://datatracker.ietf.org/doc/html/rfc5987). When both `filename` and `filename*` are present in a single header field value, `filename*` is preferred over `filename` when both are understood. It's recommended to include both for maximum compatibility, and you can convert `filename*` to `filename` by substituting non-ASCII characters with ASCII equivalents (such as converting `é` to `e`). You may want to avoid percent escape sequences in `filename`, because they are handled inconsistently across browsers. (Firefox and Chrome decode them, while Safari does not.)

Browsers may apply transformations to conform to the file system requirements, such as converting path separators (`/` and `\`) to underscores (`_`).

> **Note:** Chrome, and Firefox 82 and later, prioritize the HTML [`<a>` element's](/en-US/docs/Web/HTML/Element/a) `download` attribute over the `Content-Disposition: inline` parameter (for [same-origin URLs](/en-US/docs/Web/Security/Same-origin_policy)). Earlier Firefox versions prioritize the header and will display the content inline.

### As a header for a multipart body

A `multipart/form-data` body requires a `Content-Disposition` header to provide information for each subpart of the form (e.g. for every form field and any files that are part of field data). The first directive is always `form-data`, and the header _must_ also include a `name` parameter to identify the relevant field. Additional directives are case-insensitive and have arguments that use quoted-string syntax after the `'='` sign. Multiple parameters are separated by a semicolon (`';'`).

```http
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

### Directives

- `name`

  - : Is followed by a string containing the name of the HTML field in the form that the content of this subpart refers to. When dealing with multiple files in the same field (for example, the [`multiple`](/en-US/docs/Web/HTML/Element/input#multiple) attribute of an `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}` element), there can be several subparts with the same name.

    A `name` with a value of `'_charset_'` indicates that the part is not an HTML field, but the default charset to use for parts without explicit charset information.

- `filename`

  - : Is followed by a string containing the original name of the file transmitted. This parameter provides mostly indicative information. The suggestions in [RFC2183](https://www.rfc-editor.org/rfc/rfc2183#section-2.3) apply:

    - Prefer ASCII characters if possible (the client may percent-encode it, as long as the server implementation decodes it).
    - Any path information should be stripped, such as by replacing `/` with `_`.
    - When writing to disk, it should not overwrite an existing file.
    - Avoid creating special files with security implications, such as creating a file on the command search path.
    - Satisfy other file system requirements, such as restricted characters and length limits.

Note that the request header does not have the `filename*` parameter and does not allow RFC 5987 encoding.

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

## See also

- [HTML Forms](/en-US/docs/Learn/Forms)
- The {{HTTPHeader("Content-Type")}} defining the boundary of the multipart body.
- The {{domxref("FormData")}} interface used to prepare form data for use in the {{domxref("fetch()")}} or {{domxref("XMLHttpRequest")}} APIs.
