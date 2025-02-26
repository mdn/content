---
title: DELETE
slug: Web/HTTP/Methods/DELETE
page-type: http-method
spec-urls: https://www.rfc-editor.org/rfc/rfc9110.html#name-delete
---

{{HTTPSidebar}}

The **`DELETE`** HTTP method asks the server to delete a specified resource.

The `DELETE` method has no defined semantics for the message body, so this should be empty.

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
        Allowed in <a href="/en-US/docs/Learn_web_development/Extensions/Forms">HTML forms</a>
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
DELETE <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifies the target resource of the request when combined with the information provided in the {{HTTPHeader("Host")}} header.
    This is an absolute path (e.g., `/path/to/file.html`) in requests to an origin server, and an absolute URL in requests to proxies (e.g., `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : An optional query component preceded by a question-mark `?`.
    Often used to carry identifying information in the form of `key=value` pairs.

## Examples

### Successfully deleting a resource

The following request asks the server to delete the resource `file.html`:

```http
DELETE /file.html HTTP/1.1
Host: example.com
```

If the request is successful, there are several possible [successful response status codes](/en-US/docs/Web/HTTP/Status#successful_responses).
A {{HTTPStatus("204", "204 No Content")}} response means the request was successful and no additional information needs to be sent back to the client:

```http
HTTP/1.1 204 No Content
Date: Wed, 04 Sep 2024 10:16:04 GMT
```

A {{HTTPStatus("200", "200 OK")}} response means the request was successful and the response body includes a representation describing the outcome:

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

A {{HTTPStatus("202", "202 Accepted")}} response means the request has been accepted and will probably succeed, but the resource has not yet been deleted by the server.

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

The browser doesn't use the `DELETE` method for user-initiated actions, so "browser compatibility" doesn't apply.
Developers can set this request method using [`fetch()`](/en-US/docs/Web/API/Window/fetch).

## See also

- HTTP statuses: {{HTTPStatus("200")}}, {{HTTPStatus("202")}}, {{HTTPStatus("204")}}
- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [HTTP headers](/en-US/docs/Web/HTTP/Headers)
