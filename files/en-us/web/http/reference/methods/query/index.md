---
title: QUERY request method
short-title: QUERY
slug: Web/HTTP/Reference/Methods/QUERY
page-type: http-method
spec-urls: https://www.rfc-editor.org/rfc/rfc10008.html#section-2
sidebar: http
---

The **`QUERY`** HTTP method asks the target resource to process the request content in a safe and idempotent manner and return the result.
It is similar to {{HTTPMethod("POST")}} because the query is carried in the request content, but unlike `POST`, `QUERY` is explicitly {{Glossary("Safe/HTTP", "safe")}} and {{Glossary("Idempotent", "idempotent")}}.
This allows a `QUERY` request to be retried automatically without concern that it will cause additional changes to the target resource.

`QUERY` is useful when the query input is too large or complex for the target URI's query component.
The request's {{HTTPHeader("Content-Type")}} header is required and determines how the request content is interpreted by the target resource.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Request has body</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Successful response has body</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Safe")}}</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent")}}</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">
        Allowed in <a href="/en-US/docs/Learn_web_development/Extensions/Forms">HTML forms</a>
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
QUERY <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifies the target resource that will process the query when combined with the information provided in the {{HTTPHeader("Host")}} header.
    This is an absolute path (e.g., `/path/to/resource`) in requests to an origin server, and an absolute URL in requests to proxies (e.g., `https://example.com/path/to/resource`).
- `<query>` {{optional_inline}}
  - : An optional URI query component preceded by a question mark (`?`).
    It helps identify the resource being queried; the query operation itself is defined by the request content and its media type.

## Examples

### Querying a collection

The following request queries a contacts collection.
The request content selects three fields, limits the response to ten results, and filters contacts by email address:

```http
QUERY /contacts HTTP/1.1
Host: example.org
Content-Type: application/x-www-form-urlencoded
Accept: application/json

select=surname,givenname,email&limit=10&match=%22email=*@example.*%22
```

A successful response includes the query result in the response content:

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "surname": "Smith",
    "givenname": "John",
    "email": "smith@example.org"
  },
  {
    "surname": "Jones",
    "givenname": "Sally",
    "email": "sally.jones@example.com"
  }
]
```

## Specifications

{{Specifications}}

## See also

- [HTTP request methods](/en-US/docs/Web/HTTP/Reference/Methods)
- {{HTTPMethod("GET")}} and {{HTTPMethod("POST")}}
- {{HTTPHeader("Accept-Query")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Location")}} and {{HTTPHeader("Location")}}
- {{HTTPHeader("Allow")}}
