---
title: X-Permitted-Cross-Domain-Policies
slug: Web/HTTP/Headers/X-Permitted-Cross-Domain-Policies
page-type: http-header
status:
  - non-standard
---

{{HTTPSidebar}}

The HTTP **`X-Permitted-Cross-Domain-Policies`** {{Glossary("response header")}} specifies if a cross-domain policy file (`crossdomain.xml`) is allowed.

A cross-domain policy file may grant clients, such as Adobe Acrobat or Apache Flex, permission to handle data across domains that would otherwise be restricted due to the [Same-Origin Policy](/en-US/docs/Web/Security/Same-origin_policy).
The `X-Permitted-Cross-Domain-Policies` header overrides such policy files so that clients still block unwanted requests.

Usage of this header is less common since Adobe Flash Player and Microsoft Silverlight have been deprecated.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-Permitted-Cross-Domain-Policies: <permitted-cross-domain-policy>
```

## Directives

- `none`
  - : No policy files are allowed anywhere on the target server, including in a master policy file.
- `master-only`
  - : Allows cross-domain access to the master policy file defined on the same domain.
- `by-content-type` (HTTP/HTTPS only)
  - : Only policy files served with `Content-Type: text/x-cross-domain-policy` are allowed.
- `by-ftp-filename` (FTP only)
  - : Only policy files whose file names are `crossdomain.xml` (URLs ending in `/crossdomain.xml`) are allowed.
- `all`
  - : All policy files on this target domain are allowed.
- `none-this-response`
  - : Indicates that the current document should not be used as a policy file despite other headers or its content.
    This value is unique to the HTTP header only.

## Description

Policy files are defined in a `crossdomain.xml` file, typically located at the root of the domain (`http://example.com/crossdomain.xml`) and define policies as so (the least permissive master policy definition):

```xml
<?xml version="1.0"?>
<!DOCTYPE cross-domain-policy SYSTEM "http://www.adobe.com/xml/dtds/cross-domain-policy.dtd">
<cross-domain-policy>
  <site-control permitted-cross-domain-policies="none"/>
</cross-domain-policy>
```

Instead of relying on policy files, clients may check for the `X-Permitted-Cross-Domain-Policies` header to detect a meta-policy.
The purpose of the HTTP header is for cases where people wish to declare a cross-domain policy, but cannot write to the root directory of the domain.

## Examples

### Disallowing cross-domain policy files

If you don't need to load application data in clients such as Adobe Flash Player or Adobe Acrobat (or legacy clients), then the header should be configured as `X-Permitted-Cross-Domain-Policies: none`:

```http
X-Permitted-Cross-Domain-Policies: none
```

Some security testing tools will check for the presence of a `X-Permitted-Cross-Domain-Policies: none` header because it can mitigate the risk of an unwanted policy file added to your site by accident or through malicious actions.

## Specifications

Documented in the [Adobe Cross Domain Policy File Specification](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/CrossDomain_PolicyFile_Specification.pdf).

## See also

- [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS)
- [Practical security implementation guides](/en-US/docs/Web/Security/Practical_implementation_guides)
- [HTTP Observatory](/en-US/observatory/) header testing tool
- [Cross Domain Configuration](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/xdomain.html) on adobe.com
- [X-Permitted-Cross-Domain-Policies](https://github.com/OWASP/www-project-secure-headers/blob/master/tab_headers.md#x-permitted-cross-domain-policies) in OWASP Secure Headers Project
