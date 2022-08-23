---
title: From
slug: Web/HTTP/Headers/From
tags:
  - HTTP
  - Reference
  - header
browser-compat: http.headers.From
---
{{HTTPSidebar}}

The **`From`** request header contains an Internet email
address for a human user who controls the requesting user agent.

If you are running a robotic user agent (e.g. a crawler), the `From` header
must be sent, so you can be contacted if problems occur on servers, such as if the
robot is sending excessive, unwanted, or invalid requests.

> **Warning:** You must not use the `From` header for access control or authentication.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
From: <email>
```

## Directives

- \<email>
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
