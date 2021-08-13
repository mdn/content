---
title: Expires
slug: Web/HTTP/Headers/Expires
tags:
  - Caching
  - HTTP
  - Response
  - header
browser-compat: http.headers.Expires
---
{{HTTPSidebar}}

The **`Expires`** header contains the date/time after which the
response is considered stale.

Invalid dates, like the value 0, represent a date in the past and mean that the
resource is already expired.

> **Note:** If there is a {{HTTPHeader("Cache-Control")}} header
> with the `max-age` or `s-maxage` directive in the response,
> the `Expires` header is ignored.

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
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```
Expires: <http-date>
```

## Directives

- \<http-date>
  - : An HTTP-date timestamp.

## Examples

```
Expires: Wed, 21 Oct 2015 07:28:00 GMT
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Age")}}
