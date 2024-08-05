---
title: rel=prefetch
slug: Web/HTML/Attributes/rel/prefetch
page-type: html-attribute-value
browser-compat: html.elements.link.rel.prefetch
---

{{HTMLSidebar}}

The **`prefetch`** keyword for the [`rel`](/en-US/docs/Web/HTML/Element/link#rel) attribute of the {{HTMLElement("link")}} element provides a hint to browsers that the user is likely to need the target resource for future navigations, and therefore the browser can likely improve the user experience by preemptively fetching and caching the resource. `<link rel="prefetch">` is used for same-site navigation resources, or for subresources used by same-site pages.

The result is kept in the HTTP cache on disk. Because of this it is useful for prefetching subresources, even if they are not used by the current page. You could also use it to prefetch the next document the user will likely visit on the site. However, as a result you need to be careful with headers — for example certain [Cache-Control](/en-US/docs/Web/HTTP/Headers/Cache-Control) headers could block prefetching (for example `no-cache` or `no-store`).

> [!NOTE]
> Because of such limitations, you are advised to use the [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API) for document prefetches instead, where it is supported.

`<link rel="prefetch">` is functionally equivalent to a {{domxref("Window/fetch", "fetch()")}} call with a `priority: "low"` option set on it, except that the former will generally have an even lower priority, and it will have a [`Sec-Purpose: prefetch`](/en-US/docs/Web/HTTP/Headers/Sec-Purpose) header set on the request. Note that in general browsers will give prefetch resources a lower priority than preload ones (e.g. requested via [`<link rel="preload">`](/en-US/docs/Web/HTML/Attributes/rel/preload)) — the current page is more important than the next.

The fetch request for a `prefetch` operation results in an HTTP request that includes the HTTP header [`Sec-Purpose: prefetch`](/en-US/docs/Web/HTTP/Headers/Sec-Purpose). A server might use this header to change the cache timeouts for the resources, or perform other special handling.
The request will also include the {{HTTPHeader("Sec-Fetch-Dest")}} header with the value set to `empty`.

The {{HTTPHeader("Accept")}} header in the request will match the value used for normal navigation requests. This allows the browser to find the matching cached resources following navigation.

## Examples

### Basic prefetch

```js
<link rel="prefetch" href="main.js" />
```

### Navigation and subresource prefetches

Prefetching can be used to fetch both HTML and sub-resources for a possible next navigation. A common use case is to have a simple website landing page that fetches more "heavy-weight" resources used by the rest of the site.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

### The effects of cache partitioning

Many browsers now implement some form of [cache partitioning](https://developer.chrome.com/blog/http-cache-partitioning), which makes `<link rel="prefetch">` useless for resources intended for use by different top-level sites. This includes the main document when navigating cross-site. So, for example, the following prefetch:

```html
<link rel="prefetch" href="https://news.example/article" />
```

Would not be accessible from `https://aggregator.example/`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Speculative loading](/en-US/docs/Web/Performance/Speculative_loading) for a comparison of `<link rel="prefetch">` and other similar performance improvement features.
