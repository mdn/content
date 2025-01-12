---
title: POST
slug: Web/HTTP/Methods/POST
page-type: http-method
browser-compat: http.methods.POST
---

{{HTTPSidebar}}

The **`POST`** HTTP method sends data to the server. The type of the body of the request is indicated by the {{HTTPHeader("Content-Type")}} header.

The difference between {{HTTPMethod("PUT")}} and `POST` is that `PUT` is {{Glossary("idempotent")}}: calling it once is no different from calling it several times successively (there are no _side_ effects).
Successive identical `POST` requests may have additional effects, such as creating the same order several times.

[HTML forms](/en-US/docs/Learn_web_development/Extensions/Forms) typically send data using `POST` and this usually results in a change on the server.
For HTML forms the format/encoding of the body content is determined by the [`enctype`](/en-US/docs/Web/HTML/Element/form#enctype) attribute of the {{HTMLElement("form")}} element or the [`formenctype`](/en-US/docs/Web/HTML/Element/input#formenctype) attribute of the {{HTMLElement("input") }} or {{HTMLElement("button")}} elements.
The encoding may be one of the following:

- `application/x-www-form-urlencoded`: the keys and values are encoded in key-value tuples separated by an ampersand (`&`), with an equals symbol (`=`) between the key and the value (e.g., `first-name=Frida&last-name=Kahlo`).
  Non-alphanumeric characters in both keys and values are {{Glossary("Percent-encoding", "percent-encoded")}}: this is the reason why this type is not suitable to use with binary data and you should use `multipart/form-data` for this purpose instead.
- `multipart/form-data`: each value is sent as a block of data ("body part"), with a user agent-defined delimiter (for example, `boundary="delimiter12345"`) separating each part.
  The keys are described in the {{HTTPHeader("Content-Disposition")}} header of each part or block of data.
- `text/plain`

When the `POST` request is sent following a {{domxref("Window/fetch", "fetch()")}} call, or for any other reason than an HTML form, the body can be any type.
As described in the HTTP 1.1 specification, `POST` is designed to allow a uniform method to cover the following functions:

- Annotation of existing resources
- Posting a message to a bulletin board, newsgroup, mailing list, or similar group of articles
- Adding a new user through a signup form
- Providing a block of data, such as the result of submitting a form, to a data-handling process
- Extending a database through an append operation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Request has body</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Successful response has body</th>
      <td>Yes</td>
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
        Allowed in <a href="/en-US/docs/Learn_web_development/Extensions/Forms">HTML forms</a>
      </th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
POST <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifies the target resource of the request when combined with the information provided in the {{HTTPHeader("Host")}} header.
    This is an absolute path (e.g., `/path/to/file.html`) in requests to an origin server, and an absolute URL in requests to proxies (e.g., `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : An optional query component preceded by a question-mark `?`.
    Often used to carry identifying information in the form of `key=value` pairs.

## Examples

### URL-encoded form submission

A form using `application/x-www-form-urlencoded` content encoding (the default) sends a request where the body contains the form data in `key=value` pairs, with each pair separated by an `&` symbol, as shown below:

```http
POST /test HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

field1=value1&field2=value2
```

### Multipart form submission

The `multipart/form-data` encoding is used when a form includes files or a lot of data.
This request body delineates each part of the form using a boundary string.
An example of a request in this format:

```http
POST /test HTTP/1.1
Host: example.com
Content-Type: multipart/form-data;boundary="delimiter12345"

--delimiter12345
Content-Disposition: form-data; name="field1"

value1
--delimiter12345
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--delimiter12345--
```

The {{HTTPHeader("Content-Disposition")}} header indicates how the form data should be processed, specifying the field `name` and `filename`, if appropriate.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [HTTP headers](/en-US/docs/Web/HTTP/Headers)
- {{HTTPHeader("Content-Type")}} header
- {{HTTPHeader("Content-Disposition")}} header
- {{HTTPMethod("GET")}} method
