---
title: POST
slug: Web/HTTP/Methods/POST
page-type: http-method
browser-compat: http.methods.POST
---

{{HTTPSidebar}}

The **HTTP `POST` method** sends data to the server. The type of the body of the request is indicated by the {{HTTPHeader("Content-Type")}} header.

The difference between {{HTTPMethod("PUT")}} and `POST` is that `PUT` is idempotent: calling it once or several times successively has the same effect (that is no _side_ effect), where successive identical `POST` may have additional effects, like passing an order several times.

A `POST` request is typically sent via an [HTML form](/en-US/docs/Learn/Forms) and results in a change on the server. In this case, the content type is selected by putting the adequate string in the [`enctype`](/en-US/docs/Web/HTML/Element/form#enctype) attribute of the {{HTMLElement("form")}} element or the [`formenctype`](/en-US/docs/Web/HTML/Element/input#formenctype) attribute of the {{HTMLElement("input") }} or {{HTMLElement("button")}} elements:

- `application/x-www-form-urlencoded`: the keys and values are encoded in key-value tuples separated by `'&'`, with a `'='` between the key and the value. Non-alphanumeric characters in both keys and values are {{Glossary("Percent-encoding", "percent-encoded")}}: this is the reason why this type is not suitable to use with binary data (use `multipart/form-data` instead)
- `multipart/form-data`: each value is sent as a block of data ("body part"), with a user agent-defined delimiter ("boundary") separating each part. The keys are given in the `Content-Disposition` header of each part.
- `text/plain`

When the `POST` request is sent via a method other than an HTML form, such as a {{domxref("fetch()")}} call, the body can take any type. As described in the HTTP 1.1 specification, `POST` is designed to allow a uniform method to cover the following functions:

- Annotation of existing resources
- Posting a message to a bulletin board, newsgroup, mailing list, or similar group of articles;
- Adding a new user through a signup modal;
- Providing a block of data, such as the result of submitting a form, to a data-handling process;
- Extending a database through an append operation.

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
        Allowed in <a href="/en-US/docs/Learn/Forms">HTML forms</a>
      </th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
POST /test
```

## Example

A simple form using the default `application/x-www-form-urlencoded` content type:

```http
POST /test HTTP/1.1
Host: foo.example
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

field1=value1&field2=value2
```

A form using the `multipart/form-data` content type:

```http
POST /test HTTP/1.1
Host: foo.example
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--boundary--
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Disposition")}}
- {{HTTPMethod("GET")}}
