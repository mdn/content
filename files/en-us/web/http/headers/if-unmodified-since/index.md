---
title: If-Unmodified-Since
slug: Web/HTTP/Headers/If-Unmodified-Since
page-type: http-header
browser-compat: http.headers.If-Unmodified-Since
---

{{HTTPSidebar}}

The HTTP **`If-Unmodified-Since`** {{Glossary("request header")}} makes the request for the resource [conditional](/en-US/docs/Web/HTTP/Conditional_requests).
The server will send the requested resource (or accept it in the case of a {{HTTPMethod("POST")}} or another non-{{Glossary("Safe/HTTP", "safe")}} method) only if the resource on the server has not been modified after the date in the request header.
If the resource has been modified after the specified date, the response will be a {{HTTPStatus("412", "412 Precondition Failed")}} error.

The `If-Unmodified-Since` header is commonly used in the following situations:

- In conjunction with non-{{Glossary("Safe/HTTP", "safe")}} methods like {{HTTPMethod("POST")}}, this header can be used to implement an [optimistic concurrency control](https://en.wikipedia.org/wiki/Optimistic_concurrency_control), as is done by some wikis: revision are rejected if the stored document has been modified since the original was retrieved, avoiding conflicts.
- In conjunction with a range request using the {{HTTPHeader("Range")}} header, this header can be used to ensure that the new fragment requested comes from an unmodified document.

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
If-Unmodified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
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
If-Unmodified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP Conditional Requests](/en-US/docs/Web/HTTP/Conditional_requests) guide
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Range")}}, {{HTTPHeader("Range")}} range request headers
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-None-Match")}} conditional request headers
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} response status codes
