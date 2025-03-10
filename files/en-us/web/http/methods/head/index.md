---
title: HEAD
slug: Web/HTTP/Methods/HEAD
page-type: http-method
browser-compat: http.methods.HEAD
---

{{HTTPSidebar}}

The **`HEAD`** HTTP method requests the metadata of a resource in the form of [headers](/en-US/docs/Web/HTTP/Headers) that the server would have sent if the {{HTTPMethod("GET")}} method was used instead.
This method can be used in cases where a URL might produce a large download, for example, a `HEAD` request can read the {{HTTPHeader("Content-Length")}} header to check the file size before downloading the file with a `GET`.

If the response to a `HEAD` request shows that a cached URL response is now outdated, the cached copy is invalidated even if no `GET` request was made.

> [!WARNING]
> If a response to a `HEAD` request has a body, the response body must be ignored.
> Any {{glossary("Representation header", "representation headers")}} that describe the erroneous body are assumed to describe the response body that a `GET` request would have received.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Request has body</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Successful response has body</th>
      <td>No</td>
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
      <th scope="row">
        Allowed in <a href="/en-US/docs/Learn_web_development/Extensions/Forms">HTML forms</a>
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
HEAD <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifies the target resource of the request when combined with the information provided in the {{HTTPHeader("Host")}} header.
    This is an absolute path (e.g., `/path/to/file.html`) in requests to an origin server, and an absolute URL in requests to proxies (e.g., `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : An optional query component preceded by a question-mark `?`.
    Often used to carry identifying information in the form of `key=value` pairs.

## Examples

### Successfully retrieving resource metadata

The following `curl` command creates a `HEAD` request for `example.com`:

```bash
curl --head example.com
```

This is the equivalent to a `GET` request, except the server shouldn't include a message body in the response.
It creates an HTTP request that looks like this:

```http
HEAD / HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

The server sends back a {{HTTPStatus("200", "200 OK")}} response comprised only of headers.
The response is effectively metadata that describes the resource instead of the resource itself (some [caching](/en-US/docs/Web/HTTP/Caching) headers are omitted in this example for brevity):

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Date: Wed, 04 Sep 2024 10:33:11 GMT
Content-Length: 1234567
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [HTTP headers](/en-US/docs/Web/HTTP/Headers)
- {{HTTPMethod("GET")}} method
