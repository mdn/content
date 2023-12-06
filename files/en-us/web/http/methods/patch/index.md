---
title: PATCH
slug: Web/HTTP/Methods/PATCH
page-type: http-method
spec-urls: https://www.rfc-editor.org/rfc/rfc5789
---

{{HTTPSidebar}}

The **HTTP `PATCH` request method** applies partial modifications to a resource.

`PATCH` is somewhat analogous to the "update" concept found in {{Glossary("CRUD")}} (in general, HTTP is different than {{Glossary("CRUD")}}, and the two should not be confused).

A `PATCH` request is considered a set of instructions on how to modify a resource. Contrast this with {{HTTPMethod("PUT")}}; which is a complete representation of a resource.

A `PATCH` is not necessarily idempotent, although it can be. Contrast this with {{HTTPMethod("PUT")}}; which is always idempotent. The word "idempotent" means that any number of repeated, identical requests will leave the resource in the same state. For example if an auto-incrementing counter field is an integral part of the resource, then a {{HTTPMethod("PUT")}} will naturally overwrite it (since it overwrites everything), but not necessarily so for `PATCH`.

`PATCH` (like {{HTTPMethod("POST")}}) _may_ have side-effects on other resources.

To find out whether a server supports `PATCH`, a server can advertise its support by adding it to the list in the {{HTTPHeader("Allow")}} or {{HTTPHeader("Access-Control-Allow-Methods")}} (for [CORS](/en-US/docs/Web/HTTP/CORS)) response headers.

Another (implicit) indication that `PATCH` is allowed, is the presence of the {{HTTPHeader("Accept-Patch")}} header, which specifies the patch document formats accepted by the server.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Request has body</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Successful response has body</th>
      <td>May</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Safe")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>Only if freshness information is included</td>
    </tr>
    <tr>
      <th scope="row">
        Allowed in <a href="/en-US/docs/Learn/Forms">HTML forms</a>
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
PATCH /file.txt HTTP/1.1
```

## Example

### Request

```http
PATCH /file.txt HTTP/1.1
Host: www.example.com
Content-Type: application/example
If-Match: "e0023aa4e"
Content-Length: 100

[description of changes]
```

### Response

A successful response is indicated by any [2xx](https://httpwg.org/specs/rfc9110.html#status.2xx) status code.

In the example below a {{HTTPStatus("204")}} response code is used, because the response does not carry a payload body. A {{HTTPStatus("200")}} response could have contained a payload body.

```http
HTTP/1.1 204 No Content
Content-Location: /file.txt
ETag: "e0023aa4f"
```

## Specifications

{{Specifications}}

## See also

- {{HTTPStatus("204")}}
- {{HTTPHeader("Allow")}}, {{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Accept-Patch")}} – specifies the patch document formats accepted by the server.
