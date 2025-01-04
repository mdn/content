---
title: Speculative loading
slug: Web/Performance/Speculative_loading
page-type: guide
---

{{QuickLinksWithSubPages("Web/Performance")}}

**Speculative loading** refers to the practice of performing navigation actions (such as DNS fetching, fetching resources, or rendering documents) before the associated pages are actually visited, based on predictions as to what pages the user is most likely to visit next.

These predictions can be supplied by developers (for example, lists of the most popular destinations on their site) or determined by browser heuristics (for example based on popular sites in the user's history). When used successfully, such technologies can significantly improve performance by making pages available more quickly, or in some cases, instantly.

This page reviews available speculative loading technologies and when they can and should be used to improve performance.

## Speculative loading mechanisms

There are several mechanisms for speculative loading:

- **Prefetching** involves fetching some or all of the resources required to render a document (or part of a document) before they are needed, so that when the time comes to render it, rendering can be achieved much more quickly.
- **Prerendering** goes a step further, and actually renders the content ready to be shown when required. Depending on how this is done, this can result in an instant navigation from old page to new page.
- **Preconnecting** involves speeding up future loads from a given origin by preemptively performing part or all of the connection handshake (i.e. DNS + TCP + TLS).

> [!NOTE]
> The above descriptions are high-level and general. Exactly what browsers will do to achieve prefetching and prerendering depends on the features used. More exact feature descriptions are provided in the [Speculative loading features](#speculative_loading_features) section below.

## How is speculative loading achieved?

Speculative loading is achieved in two main ways.

First, some browsers will automatically prerender pages based on various heuristics to provide automatic performance improvements. Exactly how this is done depends on the browser implementation. Chrome, for example, automatically prerenders pages when matching strings are typed into the address bar — if it has a high confidence that you will visit that page (see [Viewing Chrome's address bar predictions](https://developer.chrome.com/docs/web-platform/prerender-pages#view_chromes_address_bar_predictions) for more details). In addition, it may automatically prerender search results pages when search terms are typed into the address bar, when instructed to do so by the search engine. It does this using the same mechanism as the [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API).

Second, there are several different platform features that developers can use to provide instructions on what speculative loading they want the browser to perform. These are reviewed in the next section.

## Speculative loading features

### `<link rel="preconnect">`

[`<link rel="preconnect">`](/en-US/docs/Web/HTML/Attributes/rel/preconnect) provides a hint to browsers that the user is likely to need resources from the specified resource's origin, and therefore the browser can likely improve performance by preemptively initiating a connection to that origin. Supporting browsers will preemptively perform part or all of the connection handshake (i.e. DNS + TCP + TLS).

For example:

```html
<link rel="preconnect" href="https://example.com" />
```

`<link rel="preconnect">` is widely supported across browsers, and will provide a benefit to any future cross-origin HTTP request, navigation or subresource. It has no benefit on same-origin requests because the connection is already open.

If a page needs to make connections to many third-party domains, preconnecting them all can be counterproductive. The `<link rel="preconnect">` hint is best used for only the most critical connections. For the others, just use `<link rel="dns-prefetch">` to save time on the first step — the DNS lookup.

You can also implement preconnect as an HTTP [Link](/en-US/docs/Web/HTTP/Headers/Link) header, for example:

```http
Link: <https://example.com>; rel="preconnect"
```

### `<link rel="dns-prefetch">`

[`<link rel="dns-prefetch">`](/en-US/docs/Web/HTML/Attributes/rel/dns-prefetch) provides a hint to browsers that the user is likely to need resources from the specified resource's origin, and therefore the browser may be able to improve performance by preemptively performing DNS resolution for that origin. It is identical to `<link rel="preconnect">` except that it only handles the DNS part.

Again, browser support is widespread, and it has no benefit on same-origin requests because the connection is already open.

For example:

```html
<link rel="dns-prefetch" href="https://example.com" />
```

> [!NOTE]
> See [Using dns-prefetch](/en-US/docs/Web/Performance/dns-prefetch) for more details.

### `<link rel="preload">`

[`<link rel="preload">`](/en-US/docs/Web/HTML/Attributes/rel/preload) provides a hint to browsers as to what resources are high-priority on _the current page_, so it can start downloading them early when it sees the {{htmlelement("link")}} element(s) in the {{htmlelement("head")}} of the page.

For example:

```html
<link rel="preload" href="main.js" as="script" />
<!-- CORS-enabled preload -->
<link
  rel="preload"
  href="https://www.example.com/fonts/cicle_fina-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

The result is kept in a per-document in-memory cache. If you preload something your current page doesn't use as a subresource, it is generally a waste of resources, although the result may populate the HTTP cache if headers allow.

You can also implement preload as an HTTP [Link](/en-US/docs/Web/HTTP/Headers/Link) header, for example:

```http
Link: <https://www.example.com/fonts/cicle_fina-webfont.woff2>; rel="preload"
```

Browser support for `<link rel="preload">`/`<link rel="modulepreload">` is widespread in modern browsers.

### `<link rel="modulepreload">`

[`<link rel="modulepreload">`](/en-US/docs/Web/HTML/Attributes/rel/modulepreload) provides a hint to browsers as to what JavaScript modules are high-priority on _the current page_, so it can start downloading them early.

For example:

```js
<link rel="modulepreload" href="main.js" />
```

It is a specialized version of `<link rel="preload">` for [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules) and works basically the same way. However, there are some differences:

- The browser knows the resource is a JavaScript module, as the `as` attribute is not needed, and it can use the correct credentials modes to avoid double-fetching.
- Rather than just downloading it and storing it in a cache, the browser downloads it, then parses and compiles it directly into the in-memory module map.
- The browser can also do the same for module dependencies automatically.

### `<link rel="prefetch">`

[`<link rel="prefetch">`](/en-US/docs/Web/HTML/Attributes/rel/prefetch) provides a hint to browsers that the user is likely to need the target resource for future navigations, and therefore the browser can likely improve the user experience by preemptively fetching and caching the resource. `<link rel="prefetch">` is used for same-site navigation resources, or for subresources used by same-site pages.

For example:

```js
<link rel="prefetch" href="main.js" />
```

Prefetching can be used to fetch both HTML and sub-resources for a possible next navigation. A common use case is to have a simple website landing page that fetches more "heavy-weight" resources used by the rest of the site.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

The result is kept in the HTTP cache on disk. Because of this it is useful for prefetching subresources, even if they are not used by the current page. You could also use it to prefetch the next document the user will likely visit on the site. However, as a result you need to be careful with headers — for example certain [Cache-Control](/en-US/docs/Web/HTTP/Headers/Cache-Control) headers could block prefetching (for example `no-cache` or `no-store`).

Many browsers now implement some form of [cache partitioning](https://developer.chrome.com/blog/http-cache-partitioning), which makes `<link rel="prefetch">` useless for resources intended for use by different top-level sites. This includes the main document when navigating cross-site. So, for example, the following prefetch:

```html
<link rel="prefetch" href="https://news.example/article" />
```

Would not be accessible from `https://aggregator.example/`.

> **Note:** `<link rel="prefetch">` is functionally equivalent to a {{domxref("Window/fetch", "fetch()")}} call with a `priority: "low"` option set on it, except that the former will generally have an even lower priority, and it will have a [`Sec-Purpose: prefetch`](/en-US/docs/Web/HTTP/Headers/Sec-Purpose) header set on the request.

> [!NOTE]
> The fetch request for a `prefetch` operation results in an HTTP Request that includes the HTTP header [`Sec-Purpose: prefetch`](/en-US/docs/Web/HTTP/Headers/Sec-Purpose). A server might use this header to change the cache timeouts for the resources, or perform other special handling.
> The request will also include the {{HTTPHeader("Sec-Fetch-Dest")}} header with the value set to `empty`.
> The {{HTTPHeader("Accept")}} header in the request will match the value used for normal navigation requests. This allows the browser to find the matching cached resources following navigation.
> If a response is returned, it gets cached with the request in the HTTP cache.

### `<link rel="prerender">` {{deprecated_inline}}{{non-standard_inline}}

> [!NOTE]
> This technology was only ever available in Chrome, and is now deprecated. You should use the [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API) instead, which supersedes this.

[`<link rel="prerender">`](/en-US/docs/Web/HTML/Attributes/rel/prerender) provides a hint to browsers that the user might need the target resource for the next navigation, and therefore the browser can likely improve performance by prerendering the resource. `prerender` is used for future navigations, same-site only, and as such makes sense for multi-page applications (MPAs), not single-page applications (SPAs).

For example:

```html
<link rel="prerender" href="/next-page" />
```

It will fetch the referenced document, then fetch any linked resources that are statically findable and fetch them too, storing the result in the HTTP cache on disk with a five-minute timeout. The exception is subresources loaded via JavaScript — it does not find these. It has other problems too — like `<link rel="prefetch">` it can also be blocked by [Cache-Control](/en-US/docs/Web/HTTP/Headers/Cache-Control) headers, and be rendered useless for resources intended for use by different top-level sites by browser [cache partitioning](https://developer.chrome.com/blog/http-cache-partitioning).

### Speculation Rules API

The [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API) is used to specify a set of rules that determine what future documents should be prefetched or prerendered by the browser. These rules are provided as JSON structures inside inline [`<script type="speculationrules">`](/en-US/docs/Web/HTML/Element/script/type/speculationrules) elements and external text files referenced by the {{httpheader("Speculation-Rules")}} response header.

## When should you use each feature?

The following table summarizes the features detailed above, and provides guidance on when to use each one.

| Speculative loading features                                                      | Purpose                                                  | When to use                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`<link rel="preconnect">`](/en-US/docs/Web/HTML/Attributes/rel/preconnect)       | Cross-origin connection warming                          | Use on your most critical cross-origin connections to provide performance improvements when connecting to them.                                                                                                                                                                                                                                                                                                    |
| [`<link rel="dns-prefetch">`](/en-US/docs/Web/HTML/Attributes/rel/dns-prefetch)   | Cross-origin connection warming                          | Use on all of your cross-origin connections to provide small performance improvements when connecting to them.                                                                                                                                                                                                                                                                                                     |
| [`<link rel="preload">`](/en-US/docs/Web/HTML/Attributes/rel/preload)             | High-priority loading of current page subresources       | Use to load high-priority resources faster on the current page, for strategic performance improvements. Don't preload everything, otherwise you won't see the benefit. Also has some other interesting uses — see [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) on Smashing Magazine (2016)                                                               |
| [`<link rel="modulepreload">`](/en-US/docs/Web/HTML/Attributes/rel/modulepreload) | High-priority loading of current page JavaScript modules | Use to preload high-priority JavaScript modules for strategic performance improvements.                                                                                                                                                                                                                                                                                                                            |
| [`<link rel="prefetch">`](/en-US/docs/Web/HTML/Attributes/rel/prefetch)           | Pre-populating the HTTP cache                            | Use to prefetch same-site future navigation resources or subresources used on those pages. Uses HTTP cache therefore has a number of issues with document prefetches, such as being potentially blocked by [Cache-Control](/en-US/docs/Web/HTTP/Headers/Cache-Control) headers. Use the [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API) for document prefetches instead, where it is supported. |
| [`<link rel="prerender">`](/en-US/docs/Web/HTML/Attributes/rel/prerender)         | Preparing for the next navigation                        | Deprecated; you are advised not to use this. Use [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API) prerender instead, where it is supported.                                                                                                                                                                                                                                                      |
| [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API) prefetch       | Preparing for the next navigation                        | Use to prefetch same or cross-site future navigation documents. Broad adoption is recommended, where it is supported; check to make sure the pages are [safe to prefetch](/en-US/docs/Web/API/Speculation_Rules_API#unsafe_prefetching). It doesn't handle subresource prefetches; for that you'll need to use `<link rel="prefetch">`.                                                                            |
| [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API) prerender      | Preparing for the next navigation                        | Use to preload same-origin future navigation resources, for near-instant navigations. Use on high-priority pages, where it is supported; check to make sure the pages are [safe to prerender](/en-US/docs/Web/API/Speculation_Rules_API#unsafe_prerendering).                                                                                                                                                      |

## See also

- [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/docs/web-platform/prerender-pages) on developer.chrome.com (2023)
