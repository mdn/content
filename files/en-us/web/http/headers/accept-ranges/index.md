---
title: Accept-Ranges
slug: Web/HTTP/Headers/Accept-Ranges
page-type: http-header
browser-compat: http.headers.Accept-Ranges
---

{{HTTPSidebar}}

The HTTP **`Accept-Ranges`** {{Glossary("response header")}} is used by the server to advertise its support for [range requests](/en-US/docs/Web/HTTP/Range_requests), allowing clients to request part or several parts of a resource.
The value of this header indicates the unit that can be used to define a range.

For example, a response with an `Accept-Ranges` header indicates that the server is capable of _resuming_ an interrupted download instead of a client restarting the transfer in full.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
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
  - : The range unit that the server supports, although `bytes` is the only range unit formally defined by {{RFC("7233")}}.
    Range units are registered in the [HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units).
- `none`
  - : No range unit is supported.
    This is equivalent to omitting the header and is, therefore, rarely used.
    This value was used in legacy browsers to disable or remove the pause buttons in the download manager if servers had no support for range requests.

## Examples

```http
Accept-Ranges: bytes
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP range requests](/en-US/docs/Web/HTTP/Range_requests) guide
- [HTTP conditional requests](/en-US/docs/Web/HTTP/Conditional_requests) guide
- {{HTTPHeader("Range")}}, {{HTTPHeader("If-Range")}} request headers
- [IANA HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units)
