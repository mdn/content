---
title: Public-Key-Pins-Report-Only
slug: Web/HTTP/Headers/Public-Key-Pins-Report-Only
tags:
  - Deprecated
  - HPKP
  - HTTP
  - Deprecated
  - Security
  - header
browser-compat: http.headers.Public-Key-Pins-Report-Only
---
{{HTTPSidebar}}{{deprecated_header}}

> **Note:** Public Key Pinning mechanism was deprecated in favor of
> [Certificate Transparency](/en-US/docs/Web/Security/Certificate_Transparency)
> and {{HTTPHeader("Expect-CT")}} header.

The HTTP **`Public-Key-Pins-Report-Only`** response header was
used to send reports of pinning violation to the `report-uri` specified in
the header but, unlike {{HTTPHeader("Public-Key-Pins")}} still allows browsers to
connect to the server if the pinning is violated. The header is silently ignored in
modern browsers as support for HPKP has been removed. Use [Certificate Transparency](/en-US/docs/Web/Security/Certificate_Transparency)
and the {{HTTPHeader("Expect-CT")}} header instead.

For more information, see the {{HTTPHeader("Public-Key-Pins")}} header reference page
and the [HTTP Public Key Pinning](/en-US/docs/Web/HTTP/Public_Key_Pinning)
article.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```
Public-Key-Pins-Report-Only: pin-sha256="<pin-value>";
                             max-age=<expire-time>;
                             includeSubDomains;
                             report-uri="<uri>"
```

## Directives

- `pin-sha256="<pin-value>"`
  - : The quoted string is the Base64 encoded Subject Public Key Information
    ({{Glossary("SPKI")}}) fingerprint. It is possible to specify multiple pins for
    different public keys. Some browsers might allow other hashing algorithms than SHA-256
    in the future.
- max-age=\<expire-time>
  - : This directive is meaningless for the Public-Key-Pins-Report-Only header, it will be
    ignored by user agents and the header will not be cached.
- `includeSubDomains` {{optional_inline}}
  - : If this optional parameter is specified, this rule applies to all of the site's
    subdomains as well.
- `report-uri="<uri>"`
  - : Pin validation failures are reported to the given URL. This directive should be used
    with this header, otherwise this header will be a no-op.

## Example

```
Public-Key-Pins-Report-Only:
  pin-sha256="cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs=";
  pin-sha256="M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE=";
  includeSubDomains;
  report-uri="https://www.example.org/hpkp-report"
```

In this example,
**pin-sha256="cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs="** pins the
server's public key used in production. The second pin declaration
**pin-sha256="M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE="** also pins the
backup key. This key pinning is also valid for all subdomains, which is told by the
**includeSubDomains** declaration. Finally,
**report-uri="https\://www\.example.org/hpkp-report"** explains where to
report pin validation failures.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Public-Key-Pins")}}
