---
title: Subresource integrity
slug: Web/Security/Practical_implementation/SRI
page-type: guide
---

[Subresource Integrity (SRI)](/en-US/docs/Web/Security/Subresource_Integrity) enables browsers to verify that resources they fetch (for example, from a CDN) are delivered without unexpected manipulation. It works by allowing you to provide a cryptographic hash that a fetched resource must match.

## Problem

It is possible for attackers to modify the contents of JavaScript libraries hosted on content delivery networks (CDNs) in order to create vulnerabilities in all websites that make use of that hosted library.

For example, JavaScript code on `library.org` that is loaded from `example.org` has access to the entire contents of `example.org`. If this resource was modified by an attacker to include malicious code, it could modify download links, deface the site, steal credentials, cause denial-of-service attacks, etc.

## Solution

Use SRI to lock an external JavaScript resource to its known contents at a specific point in time. This is verified by a base64-encoded cryptographic hash. When you go to load the resource, you specify the hash in an `integrity` attribute.

If the file has been modified at any point thereafter, the hast won't match, and supporting web browsers will refuse to load it.

SRI should be used when loading all external JavaScript or stylesheet resources. The resources should all be loaded over HTTPS, and ideally from a similar origin. Fewer origins means less potential for tampering.

Note that CDNs must use [Cross-origin Resource Sharing (CORS)](/en-US/docs/Web/Security/Practical_implementation/CORS) by setting the [`Access-Control-Allow-Origin`](/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) header.

## Examples

Load jQuery 2.1.4 from their CDN:

```html
<script
  src="https://code.jquery.com/jquery-2.1.4.min.js"
  integrity="sha384-R4/ztc4ZlRqWjqIuvf6RX5yb/v90qNGx6fS48N0tRxiGkqveZETq72KgDVJCp2TC"
  crossorigin="anonymous"></script>
```

Load AngularJS 1.4.8 from their CDN:

```html
<script
  src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"
  integrity="sha384-r1y8TJcloKTvouxnYsi4PJAx+nHNr90ibsEn3zznzDzWBN9X3o3kbHLSgcIPtzAp"
  crossorigin="anonymous"></script>
```

Generate a hash yourself:

```bash
$ curl -s https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js | \
    openssl dgst -sha384 -binary | \
    openssl base64 -A

r1y8TJcloKTvouxnYsi4PJAx+nHNr90ibsEn3zznzDzWBN9X3o3kbHLSgcIPtzAp
```

## See also

- {{htmlelement("link")}}
- {{htmlelement("script")}}
- [SRI Hash Generator](https://www.srihash.org/) — generates the required {{htmlelement("script")}} elements for you, and informs you if the CDN lacks CORS support.

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}
