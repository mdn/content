---
title: DELETE
slug: Web/HTTP/Methods/DELETE
page-type: http-method
browser-compat: http.methods.DELETE
---

{{HTTPSidebar}}

The **`DELETE`** HTTP method asks the server to delete a specified resource.

Content sent in a `DELETE` request has no defined semantics, and therefore should be omitted.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Request has body</th>
      <td>May</td>
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
DELETE /file.html HTTP/1.1
```

## Examples

### Successfully deleting a resource

The following request asks the server to delete the resource `file.html`:

```http
DELETE /file.html HTTP/1.1
Host: example.com
```

If the request is successful, there are several possible [successful response status codes](/en-US/docs/Web/HTTP/Status#successful_responses).
A {{HTTPStatus("204", "204 No Content")}} means the request has been enacted by the server and no additional information needs to be sent back to the client:

```http
HTTP/1.1 204 No Content
Date: Wed, 04 Sep 2024 10:16:04 GMT
```

A {{HTTPStatus("200", "200 OK")}} means the request has been enacted by the server and the response body includes a representation describing the outcome:

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Date: Fri, 21 Jun 2024 14:18:33 GMT
Content-Length: 1234

<html>
  <body>
    <h1>File "file.html" deleted.</h1>
  </body>
</html>
```

A {{HTTPStatus("202", "202 Accepted")}} means the request will likely succeed but has not yet been enacted by the server:

```http
HTTP/1.1 202 Accepted
Date: Wed, 26 Jun 2024 12:00:00 GMT
Content-Type: text/html; charset=UTF-8
Content-Length: 1234

<html>
  <body>
    <h1>Deletion of "file.html" accepted.</h1>
    <p>See <a href="http://example.com/tasks/123/status">the status monitor</a> for details.</p>
  </body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTTP statuses: {{HTTPStatus("200")}}, {{HTTPStatus("202")}}, {{HTTPStatus("204")}}
- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [HTTP headers](/en-US/docs/Web/HTTP/Headers)
