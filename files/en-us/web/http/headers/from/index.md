---
title: From
slug: Web/HTTP/Headers/From
page-type: http-header
browser-compat: http.headers.From
---

{{HTTPSidebar}}

The HTTP **`From`** {{Glossary("request header")}} contains an Internet email address for an administrator who controls an automated user agent.

If you are running a robotic user agent (a web crawler, for example), the `From` header must be sent in requests so you can be contacted if problems occur, such as a bot sending excessive, unwanted, or invalid requests.

> [!WARNING]
> You must not use the `From` header for access control or authentication.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
From: <email>
```

## Directives

- `<email>`
  - : A machine-usable email address.

## Examples

```http
From: webmaster@example.org
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Host")}}
