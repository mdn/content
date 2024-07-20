---
title: Cross-Origin Resource Policy (CORP) implementation
slug: Web/Security/Practical_implementation_guides/CORP
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

Cross-Origin Resource Policy (CORP) is set by the {{httpheader("Cross-Origin-Resource-Policy")}} response header, which lets websites and applications opt-in to protection against vulnerabilities related to certain cross-origin requests (such as those made by the {{htmlelement("script")}} and {{htmlelement("img")}} elements).

## Problem

Some side-channel hardware vulnerabilities (also known as Cross-site leaks, or XS-Leaks), such as [Meltdown](<https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)>) and [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>), exploit a race condition arising as part of speculative execution functionality of modern processors. This functionality is designed to improve performance but can be manipulated to disclose sensitive data.

## Solution

Use `Cross-Origin-Resource-Policy` to block [`no-cors`](/en-US/docs/Web/API/RequestInit#mode) cross-origin requests to given resources. As this policy is expressed via a response header, the actual request is not prevented. Instead, the browser prevents the result from being leaked by stripping out the response body.

The possible values are:

- `same-origin`
  - : Limits resource access to requests coming from the same origin. This is recommended for URLs that reply with sensitive user information or private APIs.
- `same-site`
  - : Limits resource access to requests coming from the same site. This is recommended for responses from origins whose functionality is shared across several other same-site origins. Examples include a company CDN that serves static resources, and a single sign-on (SSO) app that handles authentication.
- `cross-origin`
  - : Allows resources to be accessed by cross-origin requests. This is recommended only for responses from widely-used origins, such as public CDNs or widgets. This is the default value if `Cross-Origin-Resource-Policy` is not set.

Set the most restrictive value possible for your site.

If, in turn, your site requires access to cross-origin resources, opt into a better default by sending a {{httpheader("Cross-Origin-Embedder-Policy")}} header along with the associated requests. This will prevent loading of cross-origin resources that don't also explicitly send a `Cross-Origin-Resource-Policy: cross-origin` header.

## Examples

Instruct browsers to disallow cross-origin requests made in `no-cors` mode:

```http
Cross-Origin-Resource-Policy: same-origin
```

Instruct browsers to allow cross-origin resource access, including access to features with unthrottled timers (such as {{jsxref("SharedArrayBuffer")}} objects or {{domxref("Performance.now()")}}):

```http
Cross-Origin-Resource-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

This also permits such resources to be embedded.

## See also

- [Consider deploying Cross-Origin Resource Policy](resourcepolicy.fyi)
- [XS-Leaks Wiki](https://xsleaks.dev/)
- [`Access-Control-Allow-Origin`](/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
- [`Cross-Origin-Embedder-Policy`](/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy)
- [`Cross-Origin-Opener-Policy`](/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)
- [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS)
