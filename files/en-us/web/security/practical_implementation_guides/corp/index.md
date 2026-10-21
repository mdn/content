---
title: Cross-Origin Resource Policy (CORP) implementation
short-title: Cross-Origin Resource Policy (CORP)
slug: Web/Security/Practical_implementation_guides/CORP
page-type: guide
sidebar: security
---

Cross-Origin Resource Policy (CORP) is set by the {{httpheader("Cross-Origin-Resource-Policy")}} response header, which lets websites and applications opt in to protection against vulnerabilities related to certain cross-origin requests (such as those made by the {{htmlelement("script")}} and {{htmlelement("img")}} elements). CORP is an additional layer of protection beyond the default {{Glossary("same-origin policy")}}.

## Problem

By default, the {{Glossary("same-origin policy")}} prevents scripts from directly reading cross-origin responses, preventing user data leaks on the resource site. However, some side-channel hardware vulnerabilities, in particular [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>), exploit modern processors' speculative execution functionality, a performance feature, to disclose sensitive data, as long as the response bytes enter the embedder's memory. In addition, Cross-Site Script Inclusion (XSSI) attacks enable obtaining cross-origin data using traditional `<script>` elements. Thus, even channels traditionally considered secure for cross-origin embedding, which therefore don't require resource provider cooperation, may be insecure.

## Solution

Use `Cross-Origin-Resource-Policy` on the resource to block [`no-cors`](/en-US/docs/Web/API/RequestInit#mode) cross-origin requests, which are issued by default for certain APIs and elements, in particular `<script>` and `<img>` elements. As this policy is expressed via a response header, the actual request isn't prevented. Instead, the browser prevents the result from being leaked by turning the response into a network error.

The possible values are:

- `same-origin`
  - : Limits resource access to requests coming from the same _{{Glossary("origin")}}_. This is recommended for URLs that reply with sensitive user information or private APIs.
- `same-site`
  - : Limits resource access to requests coming from the same _{{Glossary("site")}}_. This is recommended for responses from origins whose functionality is shared across several other same-site origins. Examples include a company CDN that serves static resources, and a single sign-on (SSO) app that handles authentication.

    > [!WARNING]
    > This is more permissive than `same-origin`. The [algorithm for checking if two origins are same site](https://html.spec.whatwg.org/multipage/origin.html#same-site) is defined in the HTML standard and involves checking the _registrable domain_.

- `cross-origin`
  - : Allows resources to be accessed by cross-origin requests. This is recommended only for responses from widely-used origins, such as public CDNs or widgets. This is the default behavior if the header is not set, but it must be explicitly set in order for a cross-origin embedder using strict {{httpheader("Cross-Origin-Embedder-Policy")}} to embed the resource.

Set the most restrictive value possible for your site.

CORP is provided by the resource provider. If you are the embedder of such cross-origin resources, you can serve your document with a {{httpheader("Cross-Origin-Embedder-Policy")}} header with the value `require-corp`. The browser will prevent the document from loading cross-origin resources that don't explicitly send a `Cross-Origin-Resource-Policy` header that permits the embedder. This is part of making your site [cross-origin isolated](/en-US/docs/Web/API/Window/crossOriginIsolated).

## Examples

### Securing the resource provider

If a resource must not be loaded cross-origin in `no-cors` mode, the response for the resource should contain:

```http
Cross-Origin-Resource-Policy: same-origin
```

### Making the embedder cross-origin isolated

To enable {{jsxref("SharedArrayBuffer")}} and high-precision {{domxref("Performance.now()")}}, the document must be cross-origin isolated. Include the following headers on the document:

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

A page using `Cross-Origin-Embedder-Policy: require-corp` may only load cross-origin resources that explicitly opt in to being embedded. Resources can opt in by using an explicit CORP:

```http
Cross-Origin-Resource-Policy: cross-origin
```

For requests made with [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/Guides/CORS), use `Access-Control-Allow-Origin` instead:

```http
Access-Control-Allow-Origin: https://example.com
```

## See also

- [Consider deploying Cross-Origin Resource Policy](https://resourcepolicy.fyi/)
- [XS-Leaks Wiki](https://xsleaks.dev/)
- [`Access-Control-Allow-Origin`](/en-US/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)
- [`Cross-Origin-Embedder-Policy`](/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy)
- [`Cross-Origin-Opener-Policy`](/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy)
- [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/Guides/CORS)
