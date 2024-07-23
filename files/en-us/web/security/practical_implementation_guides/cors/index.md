---
title: Cross-Origin Resource Sharing (CORS) configuration
slug: Web/Security/Practical_implementation_guides/CORS
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

Cross-Origin Resource Sharing (CORS) is handled using [`Access-Control-Allow-Origin`](/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) and related headers. `Access-Control-Allow-Origin` defines the non-same origins that are allowed to make requests to pages on your domain (i.e., via [`XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest) or [`fetch()`](/en-US/docs/Web/API/Window/fetch)).

## Problem

By default, [same-origin policy](/en-US/docs/Web/Security/Same-origin_policy) blocks cross-origin HTTP requests initiated by scripts. There are several use cases that require cross-origin script access; for example, Content Delivery Networks (CDNs) that provide hosting for JavaScript/CSS libraries and public API endpoints. However, cross-origin access presents a major security risk and must be carefully controlled.

## Solution

Use `Access-Control-Allow-Origin` to define the non-same origins that are allowed to make requests to pages on your domain.

If present, `Access-Control-Allow-Origin` should specify the minimum possible number of origins and resources for your site to function. For example, if your server provides both a website and an API intended for remote `XMLHttpRequest` access, only the API resources should return the `Access-Control-Allow-Origin` header.

Failure to set `Access-Control-Allow-Origin` appropriately will allow unauthorized origins to read the contents of any page on your site. This can be especially dangerous if those sites are able to send credentials, potentially exposing your site to [CSRF](/en-US/docs/Web/Security/Practical_implementation_guides/CSRF_prevention) attacks.

If credentialed access is required from specific origins, ensure `Access-Control-Allow-Origin` is set only to those origins, rather than reflecting the [`Origin`](/en-US/docs/Web/HTTP/Headers/Origin) header. If public non-credentialed access is required, set `Access-Control-Allow-Origin` to `*` and omit the `Access-Control-Allow-Credentials` header. Otherwise, omit both headers.

## Examples

Allow any site to read the contents of a JavaScript library:

```http
Access-Control-Allow-Origin: *
```

> **Note:** This setting is required for [Subresource integrity](/en-US/docs/Web/Security/Practical_implementation_guides/SRI) to work.

Allow `https://random-dashboard.example.org` to read the returned results of an API:

```http
Access-Control-Allow-Origin: https://random-dashboard.example.org
```

## See also

- [`Access-Control-Allow-Origin`](/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
- [`Access-Control-Allow-Credentials`](/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials)
- [`Access-Control-Allow-Headers`](/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers)
- [`Access-Control-Allow-Methods`](/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods)
- [`Access-Control-Expose-Headers`](/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers)
- [`Access-Control-Max-Age`](/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age)
- [`Access-Control-Request-Headers`](/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Headers)
- [`Access-Control-Request-Method`](/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Method)
- [`Origin`](/en-US/docs/Web/HTTP/Headers/Origin)
- [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS)
- [CORS for Developers](https://w3c.github.io/webappsec-cors-for-developers/) from W3C (2016)
