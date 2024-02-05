---
title: HEAD
slug: Web/HTTP/Methods/HEAD
page-type: http-method
browser-compat: http.methods.HEAD
---

{{HTTPSidebar}}

The **HTTP `HEAD` method** requests the [headers](/en-US/docs/Web/HTTP/Headers) that would be returned if the `HEAD` request's URL was instead requested with the HTTP {{HTTPMethod("GET")}} method. For example, if a URL might produce a large download, a `HEAD` request could read its {{HTTPHeader("Content-Length")}} header to check the filesize without actually downloading the file.

> **Warning:** A response to a `HEAD` method _should not_ have a body. If it has one anyway, that body **must be** ignored: any {{glossary("Representation header", "representation headers")}} that might describe the erroneous body are instead assumed to describe the response which a similar `GET` request would have received.

If the response to a `HEAD` request shows that a cached URL response is now outdated, the cached copy is invalidated even if no `GET` request was made.

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
        Allowed in <a href="/en-US/docs/Learn/Forms">HTML forms</a>
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
HEAD /index.html
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPMethod("GET")}}
