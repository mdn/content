---
title: Public-Key-Pins
slug: Web/HTTP/Headers/Public-Key-Pins
tags:
  - Deprecated
  - HPKP
  - HTTP
  - Deprecated
  - Reference
  - Security
  - header
browser-compat: http.headers.Public-Key-Pins
---
{{HTTPSidebar}}{{deprecated_header}}

> **Note:** The Public Key Pinning mechanism was deprecated
> in favor of [Certificate Transparency](/en-US/docs/Web/Security/Certificate_Transparency)
> and {{HTTPHeader("Expect-CT")}} header.

The HTTP **`Public-Key-Pins`** response header used to
associate a specific cryptographic public {{Glossary("key")}} with a certain web server
to decrease the risk of {{Glossary("MITM")}} attacks with forged certificates. However,
it has been removed from modern browsers and is no longer supported. Use [Certificate
Transparency](/en-US/docs/Web/Security/Certificate_Transparency) and {{HTTPHeader("Expect-CT")}} header instead.

For more information, see the [HTTP
Public Key Pinning](/en-US/docs/Web/HTTP/Public_Key_Pinning) article.

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
Public-Key-Pins: pin-sha256="<pin-value>";
                 max-age=<expire-time>;
                 includeSubDomains;
                 report-uri="<uri>"
```

## Directives

- `pin-sha256="<pin-value>"`
  - : The quoted string is the Base64 encoded Subject Public Key Information
    (SPKI) fingerprint. It is possible to specify multiple pins for
    different public keys. Some browsers might allow other hashing algorithms than SHA-256
    in the future.
- `max-age=<expire-time>`
  - : The time, in seconds, that the browser should remember that this site is only to be
    accessed using one of the defined keys.
- `includeSubDomains` {{optional_inline}}
  - : If this optional parameter is specified, this rule applies to all of the site's
    subdomains as well.
- `report-uri="<uri>"` {{optional_inline}}
  - : If this optional parameter is specified, pin validation failures are reported to the
    given URL.

## Example

> **Warning:** HPKP has the potential to lock out users for a long time
> if used incorrectly!
> The use of backup certificates and/or pinning the CA certificate is recommended.

```
Public-Key-Pins:
  pin-sha256="cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs=";
  pin-sha256="M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE=";
  max-age=5184000; includeSubDomains;
  report-uri="https://www.example.org/hpkp-report"
```

In this example,
**pin-sha256="cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs="** pins the
server's public key used in production. The second pin declaration
**pin-sha256="M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE="** also pins the
backup key. **max-age=5184000** tells the client to store this information
for two months, which is a reasonable time limit according to the IETF RFC. This key
pinning is also valid for all subdomains, which is told by the
**includeSubDomains** declaration. Finally,
**report-uri="https\://www\.example.org/hpkp-report"** explains where to
report pin validation failures.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Public-Key-Pins-Report-Only")}}
- {{HTTPHeader("Expect-CT")}}
