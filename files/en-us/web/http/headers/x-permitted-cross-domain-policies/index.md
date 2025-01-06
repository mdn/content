---
title: X-Permitted-Cross-Domain-Policies
slug: Web/HTTP/Headers/X-Permitted-Cross-Domain-Policies
page-type: http-header
status:
  - non-standard
---

{{HTTPSidebar}}

The HTTP **`X-Permitted-Cross-Domain-Policies`** {{Glossary("response header")}} defines a meta-policy that controls whether site resources can be accessed cross-origin by a document running in a web client like Adobe Acrobat or Microsoft Silverlight.

It can be used in cases where the website needs to declare a cross-domain policy, but cannot write to the root directory of the domain.

Usage of this header is less common since Adobe Flash Player and Microsoft Silverlight have been deprecated.
Some security testing tools will still check for the presence of a `X-Permitted-Cross-Domain-Policies: none` header because it can mitigate the risk of an overly-permissive policy file added to your site by accident or through malicious actions.

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

Web clients such as Adobe Acrobat or Apache Flex can load web documents, which may in turn load resources from the same site or other sites.
Access is restricted to same-site resources by default, due to the [same origin policy](/en-US/docs/Web/Security/Same-origin_policy), but cross-origin sites may choose to make some or all of their resources available to clients cross-origin using special files, referred to as a cross-domain policy files.

A "master" cross-domain policy file may be defined as `crossdomain.xml` file in the root of the domain, for example: `http://example.com/crossdomain.xml`.
The master file defines the _meta-policy_ for the whole site using the `permitted-cross-domain-policies` attribute of the `<site-control>` tag.
The meta-policy controls whether any policies are allowed, and the conditions for the other "sub" cross-domain policy files to be used.
These other policy files might be created in particular directories to specify access over the files in their given directory tree.

For example, this is the least permissive master policy definition, which does not permit any access, and does not allow the use of other "sub" policy files.

```xml
<?xml version="1.0"?>
<!DOCTYPE cross-domain-policy SYSTEM "http://www.adobe.com/xml/dtds/cross-domain-policy.dtd">
<cross-domain-policy>
  <site-control permitted-cross-domain-policies="none"/>
</cross-domain-policy>
```

The `X-Permitted-Cross-Domain-Policies` header can specify a meta-policy for the HTTP response it's included in, or override a meta-policy defined in the master cross-domain policy file, if present.
It takes the same values as the file's `permitted-cross-domain-policies` attribute and additionally `none-this-response`.

Most commonly, it's used to prevent any access to site resources in cases where the developer does not have access to create a master cross-domain policy file in the site root.

## Examples

### Disallowing cross-domain policy files

If you don't need to load application data in clients such as Adobe Flash Player or Adobe Acrobat (or legacy clients), then the header should be configured as `X-Permitted-Cross-Domain-Policies: none`:

```http
X-Permitted-Cross-Domain-Policies: none
```

## Specifications

Documented in the [Adobe Cross Domain Policy File Specification](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/CrossDomain_PolicyFile_Specification.pdf).

## See also

- [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS)
- [Practical security implementation guides](/en-US/docs/Web/Security/Practical_implementation_guides)
- [HTTP Observatory](/en-US/observatory/) header testing tool
- [Cross Domain Configuration](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/xdomain.html) on adobe.com
- [X-Permitted-Cross-Domain-Policies](https://github.com/OWASP/www-project-secure-headers/blob/master/tab_headers.md#x-permitted-cross-domain-policies) in OWASP Secure Headers Project
