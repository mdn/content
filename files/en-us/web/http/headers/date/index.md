---
title: Date
slug: Web/HTTP/Headers/Date
page-type: http-header
browser-compat: http.headers.Date
---

{{HTTPSidebar}}

The **`Date`** general HTTP header contains the date and time
at which the message originated.

> **Warning:** `Date` is listed
> in the [forbidden header names](https://fetch.spec.whatwg.org/#forbidden-header-name)
> in the fetch spec, so this code will not send the `Date` header:
>
> ```js
> fetch("https://httpbin.org/get", {
>   headers: {
>     Date: new Date().toUTCString(),
>   },
> });
> ```

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Date: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Directives

- \<day-name>
  - : One of "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", or "Sun" (case-sensitive).
- \<day>
  - : 2 digit day number, e.g. "04" or "23".
- \<month>
  - : One of "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct",
    "Nov", "Dec" (case sensitive).
- \<year>
  - : 4 digit year number, e.g. "1990" or "2016".
- \<hour>
  - : 2 digit hour number, e.g. "09" or "23".
- \<minute>
  - : 2 digit minute number, e.g. "04" or "59".
- \<second>
  - : 2 digit second number, e.g. "04" or "59".
- GMT
  - : Greenwich Mean Time. HTTP dates are always expressed in GMT, never in local
    time.

## Examples

```http
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Age")}}
