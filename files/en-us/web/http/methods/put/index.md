---
title: PUT
slug: Web/HTTP/Methods/PUT
page-type: http-method
browser-compat: http.methods.PUT
---

{{HTTPSidebar}}

The **HTTP `PUT` request method** creates a new resource or replaces a representation of the target resource with the request payload.

The difference between `PUT` and {{HTTPMethod("POST")}} is that `PUT` is idempotent: calling it once or several times successively has the same effect (that is no _side_ effect), whereas successive identical {{HTTPMethod("POST")}} requests may have additional effects, akin to placing an order several times.

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
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>No</td>
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
PUT /new.html HTTP/1.1
```

## Example

### Request

```http
PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16

<p>New File</p>
```

### Responses

If the target resource does not have a current representation and the `PUT` request successfully creates one, then the origin server must inform the user agent by sending a {{HTTPStatus("201")}} (`Created`) response.

```http
HTTP/1.1 201 Created
Content-Location: /new.html
```

If the target resource does have a current representation and that representation is successfully modified in accordance with the state of the enclosed representation, then the origin server must send either a {{HTTPStatus("200")}} (`OK`) or a {{HTTPStatus("204")}} (`No Content`) response to indicate successful completion of the request.

```http
HTTP/1.1 204 No Content
Content-Location: /existing.html
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPStatus("201")}}
- {{HTTPStatus("204")}}
