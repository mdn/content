---
title: Accept-Ranges
slug: Web/HTTP/Headers/Accept-Ranges
tags:
  - HTTP
  - HTTP Header
  - Range Requests
  - Reference
  - Response Header
browser-compat: http.headers.Accept-Ranges
---
{{HTTPSidebar}}

The **`Accept-Ranges`** HTTP response header is a marker used
by the server to advertise its support for partial requests from the client for file downloads. The value of this field
indicates the unit that can be used to define a range.

In the presence of an `Accept-Ranges` header, the browser may try to
_resume_ an interrupted download instead of trying to restart the download.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Accept-Ranges: <range-unit>
Accept-Ranges: none
```

## Directives

- `<range-unit>`
  - : Defines the range unit that the server supports. Though `bytes` is the only
    range unit formally defined by {{RFC("7233")}}, additional range units may be
    registered in the[HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units).
- `none`
  - : Indicates that no range unit is supported. This makes the header equivalent of its own absence
    and is therefore, rarely used. Although in some browsers, like IE9, this setting is used to
    disable or remove the pause buttons in the download manager.

## Examples

```http
Accept-Ranges: bytes
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- [IANA HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units)
