---
title: Cross-origin Resource Sharing (CORS)
slug: Web/Security/Practical_implementation/CORS
page-type: guide
---

Cross-origin Resource Sharing (CORS) is handled using [`Access-Control-Allow-Origin`](/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) and related headers. `Access-Control-Allow-Origin` defines which non-same origins are allowed to make requests to pages on your domain (i.e. via [`XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest) or [`fetch()`](/en-US/docs/Web/API/fetch)).

## Problem

By default, [same-origin policy](/en-US/docs/Web/Security/Same-origin_policy) blocks cross-origin HTTP requests initiated by scripts. There are several use cases that require cross-origin script access, for example Content delivery networks (CDNs) that provide hosting for JavaScript/CSS libraries and public API endpoints. However, cross-origin access presents a major security risk and must be carefully controlled.

## Solution

Use `Access-Control-Allow-Origin` to define which foreign origins are allowed make requests to pages on your domain.

If present, `Access-Control-Allow-Origin` should specify the minimum possible number of origins and resources for your site to function. For example, if your server provides both a website and an API intended for remote `XMLHttpRequest` access, only the API resources should return the `Access-Control-Allow-Origin` header.

Failure to set `Access-Control-Allow-Origin` appropropriately will allow unauthorized origins to read the contents of any page on your origin.

## Examples

Allow any site to read the contents of a JavaScript library:

```http
Access-Control-Allow-Origin: *
```

> **Note:** Note that this would be required for [Subresource integrity](/en-US/docs/Web/Security/Practical_implementation/SRI) to work.

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

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}
