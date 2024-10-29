---
title: Expires
slug: Web/HTTP/Headers/Expires
page-type: http-header
browser-compat: http.headers.Expires
---

{{HTTPSidebar}}

The HTTP **`Expires`** {{Glossary("response header")}} contains the date/time after which the response is considered expired in the context of [HTTP caching](/en-US/docs/Web/HTTP/Caching).

The value `0` is used to represent a date in the past, indicating the resource has already expired.

> [!NOTE]
> If there is a {{HTTPHeader("Cache-Control")}} header with the `max-age` or `s-maxage` directive in the response, the `Expires` header is ignored.

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
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Expires: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Directives

- `<day-name>`
  - : One of `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, or `Sun` (case-sensitive).
- `<day>`
  - : 2 digit day number, e.g., "04" or "23".
- `<month>`
  - : One of `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` (case sensitive).
- `<year>`
  - : 4 digit year number, e.g., "1990" or "2016".
- `<hour>`
  - : 2 digit hour number, e.g., "09" or "23".
- `<minute>`
  - : 2 digit minute number, e.g., "04" or "59".
- `<second>`
  - : 2 digit second number, e.g., "04" or "59".
- GMT
  - : Greenwich Mean Time. HTTP dates are always expressed in GMT, never in local time.

## Examples

```http
Expires: Wed, 21 Oct 2015 07:28:00 GMT
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP caching](/en-US/docs/Web/HTTP/Caching) guide
- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Age")}}
