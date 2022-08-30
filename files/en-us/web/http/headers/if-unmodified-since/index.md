---
title: If-Unmodified-Since
slug: Web/HTTP/Headers/If-Unmodified-Since
tags:
  - HTTP
  - HTTP Header
  - Reference
  - Request header
browser-compat: http.headers.If-Unmodified-Since
---
{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) **`If-Unmodified-Since`** request header makes the
request for the resource conditional: the server will send the requested resource or accept it in
the case of a {{HTTPMethod("POST")}} or another non-{{Glossary("Safe/HTTP", "safe")}} method only if the resource has not been modified after the date specified by this HTTP header. If the resource has been modified
after the specified date, the response will be a {{HTTPStatus("412", "412 Precondition Failed")}} error.

The **`If-Unmodified-Since`** HTTP header is commonly used in the following situations:

- In conjunction with non-{{Glossary("Safe/HTTP", "safe")}} methods, like {{HTTPMethod("POST")}},
  this header can be used to implement an [optimistic concurrency control](https://en.wikipedia.org/wiki/Optimistic_concurrency_control), as is done by some wikis: editions are rejected if the
  stored document has been modified since the original was retrieved.
- In conjunction with a range request using the {{HTTPHeader("Range")}} header, this header can
  be used to ensure that the new fragment requested comes from an unmodified document.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
If-Unmodified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Directives

- \<day-name>
  - : A 3-letter description of the day of the week. One of "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", or "Sun" (case-sensitive).
- \<day>
  - : A 2-digit day number of the month. Examples: "04", "23".
- \<month>
  - : A 3-letter description of the month. One of "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" (case-sensitive).
- \<year>
  - : A 4-digit year number. Examples: "1990", "2016".
- \<hour>
  - : A 2-digit hour number based on a 24-hour system. Examples: "09", "23".
- \<minute>
  - : A 2-digit minute number. Examples: "04", "59".
- \<second>
  - : A 2-digit second number. Examples: "04", "59".
- `GMT`
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

- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPHeader("Range")}}
- {{HTTPStatus("412", "412 Precondition Failed")}}
