---
title: GET
slug: Web/HTTP/Methods/GET
page-type: http-method
browser-compat: http.methods.GET
---

{{HTTPSidebar}}

The **HTTP `GET` method** requests a representation of the specified resource.
Requests using `GET` should only be used to request data and shouldn't include {{Glossary("HTTP Content", "content")}}.

> [!NOTE]
> While not strictly prohibited by the specification, the semantics of sending a message body in `GET` requests are undefined.
> Some systems may reject the request with a {{HTTPStatus("400")}} or another [4XX client error](/en-US/docs/Web/HTTP/Status#client_error_responses).

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
