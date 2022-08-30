---
title: If-Range
slug: Web/HTTP/Headers/If-Range
tags:
  - Conditional Requests
  - HTTP
  - HTTP Header
  - Range Requests
  - Reference
  - Request header
browser-compat: http.headers.If-Range
---
{{HTTPSidebar}}

The **`If-Range`** HTTP request header makes a range request
conditional: if the condition is fulfilled, the range request is issued, and the
server sends back a {{HTTPStatus("206")}} `Partial Content` answer with the
appropriate body. If the condition is not fulfilled, the full resource is sent back
with a {{HTTPStatus("200")}} `OK` status.

This header can be used either with the {{HTTPHeader("Last-Modified")}} validator or
with {{HTTPHeader("ETag")}}, but not with both.

The most common use case is to resume a download, to guarantee that the stored resource
has not been modified since the last fragment has been received.

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
If-Range: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
If-Range: <etag>
```

## Directives

- \<etag>
  - : An entity tag uniquely representing the requested resource. It is a string of ASCII
    characters placed between double quotes (Like `"675af34563dc-tr34"`). A weak entity tag (one prefixed by `W/`) must not be used in this header.
- \<day-name>
  - : One of "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", or "Sun" (case-sensitive).
- \<day>
  - : 2 digit day number, e.g. "04" or "23".
- \<month>
  - : One of "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov",
    "Dec" (case-sensitive).
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

```http
If-Range: Wed, 21 Oct 2015 07:28:00 GMT
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("206", "206 Partial Content")}}
- [HTTP Conditional Requests](/en-US/docs/Web/HTTP/Conditional_requests)
