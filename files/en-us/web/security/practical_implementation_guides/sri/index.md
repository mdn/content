---
title: Subresource integrity (SRI) implementation
slug: Web/Security/Practical_implementation_guides/SRI
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

[Subresource Integrity](/en-US/docs/Web/Security/Subresource_Integrity) (SRI) enables browsers to verify that resources they fetch (for example, from a CDN) are delivered without unexpected manipulation. It works by allowing you to provide a cryptographic hash that the fetched resource must match.

## Problem

If an attacker exploited a content delivery network (CDN) and modified the contents of JavaScript libraries hosted on that CDN, it would create vulnerabilities in all websites that use those libraries.

For example, JavaScript hosted on `library.org` that is loaded from `example.org` can access the entire contents of `example.org`. If an attacker modifies that hosted JavaScript to include malicious code, it could alter download links, deface the site, steal credentials, cause denial-of-service (DoS) attacks, and so on.

## Solution

Use SRI to lock an external JavaScript resource to its known contents at a specific point in time. This is verified by a base64-encoded cryptographic hash. Specify this hash in the `integrity` attribute when you load the resource.

If the file is modified after this point, the hash won't match, and supporting web browsers will refuse to load it.

SRI should be used when loading external JavaScript or stylesheet resources. The resources should be loaded over HTTPS.

Note that CDNs must use [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/Security/Practical_implementation_guides/CORS) by setting the [`Access-Control-Allow-Origin`](/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) header.

## Examples

Load jQuery 2.1.4 from its CDN:

```html
<script
  src="https://code.jquery.com/jquery-2.1.4.min.js"
  integrity="sha384-R4/ztc4ZlRqWjqIuvf6RX5yb/v90qNGx6fS48N0tRxiGkqveZETq72KgDVJCp2TC"
  crossorigin="anonymous"></script>
```

Load AngularJS 1.4.8 from its CDN:

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
- [SRI Hash Generator](https://www.srihash.org/) on `srihash.org`: Generates the required {{htmlelement("script")}} elements for you, and informs you if the CDN lacks CORS support.
