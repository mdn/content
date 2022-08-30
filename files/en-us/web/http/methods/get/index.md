---
title: GET
slug: Web/HTTP/Methods/GET
tags:
  - HTTP
  - Reference
  - Request method
browser-compat: http.methods.GET
---
{{HTTPSidebar}}

The **HTTP `GET` method** requests a representation of the specified resource. Requests using `GET` should only be used to request data (they shouldn't include data).

> **Note:** Sending body/payload in a `GET` request may cause some existing implementations to reject the request — while not prohibited by the specification, the semantics are undefined. It is better to just avoid sending payloads in `GET` requests.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Request has body</th>
      <td>No</td>
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
      <th scope="row">Allowed in HTML forms</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
GET /index.html
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP Headers](/en-US/docs/Web/HTTP/Headers)
- {{HTTPHeader("Range")}}
- {{HTTPMethod("POST")}}
