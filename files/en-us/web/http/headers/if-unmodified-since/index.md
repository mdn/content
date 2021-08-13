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

The **`If-Unmodified-Since`** request HTTP header makes the
request conditional: the server will send back the requested resource, or accept it in
the case of a {{HTTPMethod("POST")}} or another non-{{Glossary("Safe/HTTP", "safe")}} method, only if
it has not been last modified after the given date. If the resource has been modified
after the given date, the response will be a {{HTTPStatus("412")}} (Precondition Failed)
error.

There are two common use cases:

- In conjunction with non-{{Glossary("Safe/HTTP", "safe")}} methods, like {{HTTPMethod("POST")}},
  it can be used to implement an [optimistic
  concurrency control](https://en.wikipedia.org/wiki/Optimistic_concurrency_control), like done by some wikis: editions are rejected if the
  stored document has been modified since the original has been retrieved.
- In conjunction with a range request with a {{HTTPHeader("If-Range")}} header, it can
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

```
If-Unmodified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Directives

- \<day-name>
  - : One of "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", or "Sun" (case-sensitive).
- \<day>
  - : 2 digit day number, e.g. "04" or "23".
- \<month>
  - : One of "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov",
    "Dec" (case sensitive).
- \<year>
  - : 4 digit year number, e.g. "1990" or "2016".
- \<hour>
  - : 2 digit hour number, e.g. "09" or "23".
- \<minute>
  - : 2 digit minute number, e.g. "04" or "59".
- \<second>
  - : 2 digit second number, e.g. "04" or "59".
- `GMT`
  - : Greenwich Mean Time. HTTP dates are always expressed in GMT, never in local time.

## Examples

```
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
- {{HTTPHeader("If-Range")}}
- {{HTTPStatus("412", "412 Precondition Failed")}}
