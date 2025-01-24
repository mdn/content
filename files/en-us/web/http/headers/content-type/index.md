---
title: Content-Type
slug: Web/HTTP/Headers/Content-Type
page-type: http-header
browser-compat: http.headers.Content-Type
---

{{HTTPSidebar}}

The HTTP **`Content-Type`** {{Glossary("representation header")}} is used to indicate the original {{Glossary("MIME type", "media type")}} of a resource before any content encoding is applied.

In responses, the `Content-Type` header informs the client about the media type of the returned data.
In requests such as {{HTTPMethod("POST")}} or {{HTTPMethod("PUT")}}, the client uses the `Content-Type` header to specify the type of content being sent to the server.
If a server implementation or configuration is strict about content type handling, a {{HTTPStatus("415")}} client error response may be returned.

The `Content-Type` header differs from {{HTTPHeader("Content-Encoding")}} in that `Content-Encoding` helps the recipient understand how to decode data to its original form.

> [!NOTE]
> This value may be ignored if browsers perform [MIME sniffing](/en-US/docs/Web/HTTP/MIME_types#mime_sniffing) (or content sniffing) on responses.
> To prevent browsers from using MIME sniffing, set the {{HTTPHeader("X-Content-Type-Options")}} header value to `nosniff`.
> See [MIME type verification](/en-US/docs/Web/Security/Practical_implementation_guides/MIME_types) for more details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Representation header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
      </th>
      <td>
        Yes*
      </td>
    </tr>
  </tbody>
</table>

\* Values can't contain a [CORS-unsafe request header byte](https://fetch.spec.whatwg.org/#cors-unsafe-request-header-byte): `"():<>?@[\]{},`, Delete `0x7F`, and control characters `0x00` to `0x19` except for Tab `0x09`.
It also needs to have a media type of its parsed value (ignoring parameters) of either `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain`.

## Syntax

```plain
Content-Type: <media-type>
```

For example:

```http
Content-Type: text/html; charset=utf-8
Content-Type: multipart/form-data; boundary=ExampleBoundaryString
```

## Directives

- `<media-type>`

  - : The [media type](/en-US/docs/Web/HTTP/MIME_types) of the resource or data.
    May contain the following parameters:

    - **`charset`**: Indicates the {{Glossary("character encoding")}} standard used.
      The value is case insensitive but lowercase is preferred.
    - **`boundary`**: For multipart entities, the `boundary` parameter is required.
      It is used to demarcate the boundaries of the multiple parts of the message.
      The value consists of 1 to 70 characters (not ending with white space) known to be robust in the context of different systems (e.g., email gateways).
      Often, the header boundary is prepended by two dashes in the request body, and the final boundary has two dashes appended at the end.

## Examples

### Serving assets with correct content type

In the following two example responses, JavaScript and CSS assets are served using `text/javascript` for JavaScript and `text/css` for CSS.
The correct content type for these resources helps the browser handle them more securely and with better performance.
See [Properly configuring server MIME types](/en-US/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types) for more information.

```http
HTTP/1.1 200
content-encoding: br
content-type: text/javascript; charset=utf-8
vary: Accept-Encoding
date: Fri, 21 Jun 2024 14:02:25 GMT
content-length: 2978

const videoPlayer=document.getElementById...
```

```http
HTTP/3 200
server: nginx
date: Wed, 24 Jul 2024 16:53:02 GMT
content-type: text/css
vary: Accept-Encoding
content-encoding: br

.super-container{clear:both;max-width:100%}...
```

### `Content-Type` in multipart forms

In a {{HTTPMethod("POST")}} request resulting from an HTML form submission, the `Content-Type` of the request is specified by the `enctype` attribute on the {{HTMLElement("form")}} element.

```html
<form action="/foo" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="Description input value" />
  <input type="file" name="myFile" />
  <button type="submit">Submit</button>
</form>
```

The request looks something like the following example with some headers omitted for brevity.
In the request, a boundary of `ExampleBoundaryString` is used for illustration, but in practice, a browser would create a string more like this `---------------------------1003363413119651595289485765`.

```http
POST /foo HTTP/1.1
Content-Length: 68137
Content-Type: multipart/form-data; boundary=ExampleBoundaryString

--ExampleBoundaryString
Content-Disposition: form-data; name="description"

Description input value
--ExampleBoundaryString
Content-Disposition: form-data; name="myFile"; filename="foo.txt"
Content-Type: text/plain

[content of the file foo.txt chosen by the user]
--ExampleBoundaryString--
```

### `Content-Type` in URL-encoded form submission

When forms don't involve file uploads and are using simpler fields, URL-encoded forms may be more convenient where the form data is included in the request body:

```html
<form action="/submit" method="post">
  <label for="comment">Comment:</label>
  <input type="text" id="comment" name="comment" value="Hello!" />
  <button type="submit">Submit</button>
</form>
```

```http
POST /submit HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 15

comment=Hello!
```

### `Content-Type` in a REST API using JSON

Many {{Glossary("REST")}} APIs use `application/json` as a content type which is convenient for machine-to-machine communication or programmatic interaction.
The following example shows a {{HTTPStatus("201", "201 Created")}} response showing the result of a successful request:

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "message": "New user created",
  "user": {
    "id": 123,
    "firstName": "Paul",
    "lastName": "Klee",
    "email": "p.klee@example.com"
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}} headers
- {{HTTPHeader("Vary")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Disposition")}}
- {{HTTPStatus("206", "206 Partial Content")}}
- {{HTTPHeader("X-Content-Type-Options")}}
