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

The **`Accept-Ranges`** response HTTP header is a marker used
by the server to advertise its support of partial requests. The value of this field
indicates the unit that can be used to define a range.

In presence of an `Accept-Ranges` header, the browser may try to
_resume_ an interrupted download, rather than to start it from the start again.

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

```
Accept-Ranges: <range-unit>
Accept-Ranges: none
```

## Directives

- `<range-unit>`
  - : Defines the range unit the server supports. Though `bytes` is the only
    range unit formally defined by {{RFC("7233")}}, additional range units may be
    registered in the[
    HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units).
- `none`
  - : No range unit is supported, this makes the header equivalent of its own absence
    and is therefore rarely used, though some browsers, like IE9, it is used to
    disable or remove the pause buttons in the download manager.

## Examples

```
Accept-Ranges: bytes
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- [IANA
  HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units)
