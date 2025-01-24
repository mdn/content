---
title: PUT
slug: Web/HTTP/Methods/PUT
page-type: http-method
browser-compat: http.methods.PUT
---

{{HTTPSidebar}}

The **`PUT`** HTTP method creates a new resource or replaces a representation of the target resource with the request {{Glossary("HTTP Content", "content")}}.

The difference between `PUT` and {{HTTPMethod("POST")}} is that `PUT` is {{Glossary("idempotent")}}: calling it once is no different from calling it several times successively (there are no _side_ effects).

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
        Allowed in <a href="/en-US/docs/Learn_web_development/Extensions/Forms">HTML forms</a>
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
PUT <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifies the target resource of the request when combined with the information provided in the {{HTTPHeader("Host")}} header.
    This is an absolute path (e.g., `/path/to/file.html`) in requests to an origin server, and an absolute URL in requests to proxies (e.g., `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : An optional query component preceded by a question-mark `?`.
    Often used to carry identifying information in the form of `key=value` pairs.

## Examples

### Successfully creating a resource

The following `PUT` request asks to create a resource at `example.com/new.html` with the content `<p>New File</p>`:

```http
PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16

<p>New File</p>
```

If the target resource **does not** have a current representation and the `PUT` request successfully creates one, then the origin server must send a {{HTTPStatus("201", "201 Created")}} response:

```http
HTTP/1.1 201 Created
Content-Location: /new.html
```

If the target resource **does** have a current representation and that representation is successfully modified with the state in the request, the origin server must send either a {{HTTPStatus("200", "200 OK")}} or a {{HTTPStatus("204", "204 No Content")}} to indicate successful completion of the request:

```http
HTTP/1.1 204 No Content
Content-Location: /existing.html
```

## Specifications

{{Specifications}}

## Browser compatibility

The browser doesn't use the `PUT` method for user-initiated actions, so "browser compatibility" doesn't apply.
Developers can set this request method using [`fetch()`](/en-US/docs/Web/API/Window/fetch).

## See also

- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [HTTP headers](/en-US/docs/Web/HTTP/Headers)
- {{HTTPStatus("201", "201 Created")}}, {{HTTPStatus("204", "204 No Content")}} response statuses
