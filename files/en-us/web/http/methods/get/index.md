---
title: GET
slug: Web/HTTP/Methods/GET
page-type: http-method
browser-compat: http.methods.GET
---

{{HTTPSidebar}}

The **`GET`** HTTP method requests a representation of the specified resource.
Requests using `GET` should only be used to request data and shouldn't contain a body.

> [!NOTE]
> The semantics of sending a message body in `GET` requests are undefined.
> Some systems may reject the request with a [4XX client error](/en-US/docs/Web/HTTP/Status#client_error_responses) response.

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

## Examples

### Successfully retrieving a resource

The following `GET` request asks for `example.com/contact`:

```http
GET /contact HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

The server sends back the resource with a {{HTTPStatus("200", "200 OK")}} response:

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Date: Fri, 21 Jun 2024 14:18:33 GMT
Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT
Content-Length: 1234

<!doctype html>
<!-- HTML content follows -->
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [HTTP headers](/en-US/docs/Web/HTTP/Headers)
- {{HTTPHeader("Range")}} header
- {{HTTPMethod("POST")}} method
