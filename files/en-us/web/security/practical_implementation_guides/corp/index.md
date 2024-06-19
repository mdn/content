---
title: Cross-Origin Resource Policy (CORP) implementation
slug: Web/Security/Practical_implementation_guides/CORP
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

Cross-Origin Resource Policy is set by the {{httpheader("Cross-Origin-Resource-Policy")}} header, which lets websites and applications opt in to protection against certain requests from other origins (such as those issued with elements like {{htmlelement("script")}} and {{htmlelement("img")}}).

## Problem

Side-channel hardware vulnerabilities such as [Meltdown](<https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)>) and [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>) allow sensitive data disclosure due to a race condition arising as part of speculative execution functionality designed to improve performance.

## Solution

Use `Cross-Origin-Resource-Policy` to block [`no-cors`](/en-US/docs/Web/API/fetch#mode) cross-origin and/or cross-site requests to the given resource. Use the most restrictive value possible for your site: `same-site` or `same-origin` are recommended.

As this policy is expressed via a response header, the actual request is not prevented — rather, the browser prevents the result from being leaked by stripping the response body.

## Examples

Instruct browsers to disallow cross-origin no-cors requests:

```http
Cross-Origin-Resource-Policy: same-origin
```

## See also

- [`Access-Control-Allow-Origin`](/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
- [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS)
- [`Cross-Origin-Embedder-Policy`](/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy)
