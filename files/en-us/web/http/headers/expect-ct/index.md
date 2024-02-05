---
title: Expect-CT
slug: Web/HTTP/Headers/Expect-CT
page-type: http-header
browser-compat: http.headers.Expect-CT
---

{{HTTPSidebar}}{{Deprecated_Header}}

The `Expect-CT` header lets sites opt in to reporting and/or enforcement of [Certificate Transparency](/en-US/docs/Web/Security/Certificate_Transparency) requirements. Certificate Transparency (CT) aims to prevent the use of misissued certificates for that site from going unnoticed.

Only Google Chrome and other Chromium-based browsers implemented `Expect-CT`, and Chromium has deprecated the header from version 107, because Chromium now enforces CT by default. See the [Chrome Platform Status](https://chromestatus.com/feature/6244547273687040) update.

CT requirements can be satisfied via any one of the following mechanisms:

- X.509v3 certificate extension to allow embedding of signed certificate timestamps issued by individual logs. Most TLS certificates issued by publicly-trusted CAs and used online contain embedded CT.
- A TLS extension of type `signed_certificate_timestamp` sent during the handshake
- Supporting OCSP stapling (that is, the `status_request` TLS extension) and providing a `SignedCertificateTimestampList`

> **Note:** When a site enables the `Expect-CT` header, they are requesting that the browser check that any certificate for that site appears in **[public CT logs](https://github.com/google/certificate-transparency-community-site/blob/master/docs/google/known-logs.md)**.

> **Note:** Browsers **ignore** the `Expect-CT` header over HTTP; the header only has effect on HTTPS connections.

> **Note:** The `Expect-CT` is mostly obsolete since June 2021. Since May 2018, all new TLS certificates are expected to support SCTs by default. Certificates issued before March 2018 were allowed to have a lifetime of 39 months, so they had expired in June 2021. Chromium plans to deprecate `Expect-CT` header and to eventually remove it.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Expect-CT: report-uri="<uri>",
           enforce,
           max-age=<age>
```

## Directives

- `max-age`

  - : The number of seconds after reception of the `Expect-CT` header field during which the user agent should regard the host of the received message as a known `Expect-CT` host.

    If a cache receives a value greater than it can represent, or if any of its subsequent calculations overflows, the cache will consider this value to be either 2,147,483,648 (2^31) or the greatest positive integer it can represent.

- `report-uri="<uri>"` {{optional_inline}}

  - : The URI where the user agent should report `Expect-CT` failures.

    When present with the `enforce` directive, the configuration is referred to as an "enforce-and-report" configuration, signalling to the user agent both that compliance to the Certificate Transparency policy should be enforced _and_ that violations should be reported.

- `enforce` {{optional_inline}}

  - : Signals to the user agent that compliance with the Certificate Transparency policy should be enforced (rather than only reporting compliance) and that the user agent should refuse future connections that violate its Certificate Transparency policy.

    When both the `enforce` directive and the `report-uri` directive are present, the configuration is referred to as an "enforce-and-report" configuration, signalling to the user agent both that compliance to the Certificate Transparency policy should be enforced and that violations should be reported.

## Example

The following example specifies enforcement of Certificate Transparency for 24 hours and reports violations to `foo.example.com`.

```http
Expect-CT: max-age=86400, enforce, report-uri="https://foo.example.com/report"
```

## Notes

Root CAs manually added to the trust store override and suppress `Expect-CT` reports/enforcement.

Browsers will not remember an `Expect-CT` policy, unless the site has 'proven' it can serve a certificate satisfying the certificate transparency requirements. Browsers implement their own trust model regarding which CT logs are considered trusted for the certificate to have been logged to.

Builds of Chrome are designed to stop enforcing the `Expect-CT` policy 10 weeks after the installation's build date.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
