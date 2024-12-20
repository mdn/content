---
title: If-Range
slug: Web/HTTP/Headers/If-Range
page-type: http-header
browser-compat: http.headers.If-Range
---

{{HTTPSidebar}}

The HTTP **`If-Range`** {{Glossary("request header")}} makes a range request [conditional](/en-US/docs/Web/HTTP/Conditional_requests).
If the condition is fulfilled, a [range request](/en-US/docs/Web/HTTP/Range_requests) is issued, and the server sends back a {{HTTPStatus("206", "206 Partial Content")}} response with part (or parts) of the resource in the body.
If the condition is not fulfilled, the full resource is sent back with a {{HTTPStatus("200", "200 OK")}} status.

This header can be used either with the {{HTTPHeader("Last-Modified")}} validator or with {{HTTPHeader("ETag")}}, but not with both.

The most common use case is to resume a download with guarantees that the resource on the server has not been modified since the last part has been received by the client.

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
If-Range: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
If-Range: <etag>
```

## Directives

- `<etag>`
  - : An entity tag uniquely representing the requested resource. It is a string of ASCII
    characters placed between double quotes (Like `"675af34563dc-tr34"`). A weak entity tag (one prefixed by `W/`) must not be used in this header.
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
If-Range: Wed, 21 Oct 2015 07:28:00 GMT

If-Range: "67ab43"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP Conditional Requests](/en-US/docs/Web/HTTP/Conditional_requests) guide
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-None-Match")}} conditional request headers
- {{HTTPStatus("206", "206 Partial Content")}}, {{HTTPStatus("412", "412 Precondition Failed")}}, {{HTTPStatus("416", "416 Range Not Satisfiable")}} response status codes
