---
title: If-Modified-Since
slug: Web/HTTP/Headers/If-Modified-Since
page-type: http-header
browser-compat: http.headers.If-Modified-Since
---

{{HTTPSidebar}}

The HTTP **`If-Modified-Since`** {{Glossary("request header")}} makes a request [conditional](/en-US/docs/Web/HTTP/Conditional_requests).
The server sends back the requested resource, with a {{HTTPStatus("200")}} status, only if it has been modified after the date in the `If-Modified-Since` header.
If the resource has not been modified since, the response is a {{HTTPStatus("304")}} without any body, and the {{HTTPHeader("Last-Modified")}} response header of the previous request contains the date of the last modification.

Unlike {{HTTPHeader("If-Unmodified-Since")}}, `If-Modified-Since` can only be used with a {{HTTPMethod("GET")}} or {{HTTPMethod("HEAD")}}.
When used in combination with {{HTTPHeader("If-None-Match")}}, it is ignored, unless the server doesn't support `If-None-Match`.

The most common use case is to update a cached entity that has no associated {{HTTPHeader("ETag")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
If-Modified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
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
If-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-None-Match")}}, {{HTTPHeader("If-Unmodified-Since")}} conditional request headers
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} response status codes
