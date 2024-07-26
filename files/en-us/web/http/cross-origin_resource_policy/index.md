---
title: Cross-Origin Resource Policy (CORP)
slug: Web/HTTP/Cross-Origin_Resource_Policy
page-type: guide
browser-compat: http.headers.Cross-Origin-Resource-Policy
---

{{HTTPSidebar}}

**Cross-Origin Resource Policy** is a policy set by the [`Cross-Origin-Resource-Policy` HTTP header](/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy) that lets websites and applications opt in to protection against certain requests from other origins (such as those issued with elements like `<script>` and `<img>`), to mitigate speculative side-channel attacks, like [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>), as well as Cross-Site Script Inclusion attacks.

CORP is an additional layer of protection beyond the default {{Glossary("same-origin policy")}}. Cross-Origin Resource Policy complements [Cross-Origin Read Blocking](https://fetch.spec.whatwg.org/#corb) (CORB), which is a mechanism to prevent some cross-origin reads by default.

> [!NOTE]
> The policy is only effective for [`no-cors`](https://fetch.spec.whatwg.org/#concept-request-mode) requests, which are issued by default for CORS-safelisted methods/headers.

As this policy is expressed via a _[response header](/en-US/docs/Glossary/Response_header)_, the actual request is not prevented—rather, the browser prevents the _result_ from being leaked by stripping the response body.

## Usage

> [!NOTE]
> Due to a [bug in Chrome](https://crbug.com/1074261), setting Cross-Origin-Resource-Policy can break PDF rendering, preventing visitors from being able to read past the first page of some PDFs. Exercise caution using this header in a production environment.

Web applications set a Cross-Origin Resource Policy via the {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP response header, which accepts one of three values:

- `same-site`

  - : Only requests from the same _{{Glossary("Site")}}_ can read the resource.

    > [!WARNING]
    > This is less secure than an {{Glossary("origin")}}. The [algorithm for checking if two origins are same site](https://html.spec.whatwg.org/multipage/origin.html#same-site) is defined in the HTML standard and involves checking the _registrable domain_.

- `same-origin`
  - : Only requests from the same _{{Glossary("origin")}}_ (i.e. scheme + host + port) can read the resource.
- `cross-origin`
  - : Requests from any _{{Glossary("origin")}}_ (both same-site and cross-site) can read the resource. This is useful when COEP is used (see below).

```http
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

During a cross-origin resource policy check, if the header is set, the browser will deny `no-cors` requests issued from a different origin/site.

## Relationship to cross-origin embedder policy (COEP)

The {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP response header, when used upon a document, can be used to require subresources to either be same-origin with the document, or come with a {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP response header to indicate they are okay with being embedded. This is why the `cross-origin` value exists.

## History

The concept was originally proposed in 2012 (as `From-Origin`), but [resurrected](https://github.com/whatwg/fetch/issues/687) in Q2 of 2018 and implemented in Safari and Chromium.

In early 2018, two side-channel hardware vulnerabilities known as _Meltdown_ and _Spectre_ were disclosed. These vulnerabilities allowed sensitive data disclosure due to a race condition which arose as part of speculative execution functionality, designed to improve performance.

In response, Chromium shipped [Cross-Origin Read Blocking](https://fetch.spec.whatwg.org/#corb), which automatically protects certain resources (of `Content-Type` HTML, JSON and XML) against cross-origin reads. If the application does not serve a [`no-sniff` directive](/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options), Chromium will attempt to guess the `Content-Type` and apply the protection anyway.

`Cross-Origin-Resource-Policy` is an opt-in response header which can protect _any_ resource; there is no need for browsers to sniff MIME types.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP Header
