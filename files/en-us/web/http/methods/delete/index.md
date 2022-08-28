---
title: DELETE
slug: Web/HTTP/Methods/DELETE
tags:
  - HTTP
  - Reference
  - Request method
browser-compat: http.methods.DELETE
---
{{HTTPSidebar}}

The **HTTP `DELETE` request method** deletes the specified
resource.

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

## Example

### Request

```http
DELETE /file.html HTTP/1.1
Host: example.com
```

### Responses

If a `DELETE` method is successfully applied, there are several response
status codes possible:

- A {{HTTPStatus("202")}} (`Accepted`) status code if the action will
  likely succeed but has not yet been enacted.
- A {{HTTPStatus("204")}} (`No Content`) status code if the action has been
  enacted and no further information is to be supplied.
- A {{HTTPStatus("200")}} (`OK`) status code if the action has been enacted
  and the response message includes a representation describing the status.

```http
HTTP/1.1 200 OK
Date: Wed, 21 Oct 2015 07:28:00 GMT

<html>
  <body>
    <h1>File deleted.</h1>
  </body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTTP status: {{HTTPStatus("200")}}, {{HTTPStatus("202")}}, {{HTTPStatus("204")}}
