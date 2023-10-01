---
title: Prefetch
slug: Glossary/Prefetch
page-type: glossary-definition
---

{{GlossarySidebar}}

Prefetching refers to the practice of speculatively fetching resources in the background for pages that the user is _likely_ to navigate to in the near future.
This can significantly reduce the load time for the prefetched page if the user does choose to navigate to it.
Prefetching might be used, for example, to fetch the page resources linked by a "Next" button, or a link popup that a user hovers over, or search results.

### Resource prefetching

Resources should be prefetched based on how likely it is that they will be needed in a future navigation.
Browsers can infer this automatically for some resources, such as the current URL in the address bar.

Browsers will also prefetch content for [`<link>`](/en-US/docs/Web/HTML/Element/link) elements with the [`rel="prefetch"`](/en-US/docs/Web/HTML/Attributes/rel/prefetch) attribute.
This allows developers to hint to the browser the likely navigation from the current page.
Note that only these links are prefetched (so `<a>` elements are not), and they are fetched at a lower priority than resources used by the current page, including elements with `fetchPriority="low"`.

Prefetching can be used to fetch both HTML and sub-resources for a possible next navigation. A common use case is to have a simple website landing page that fetches more "heavy-weight" resources used by the rest of the site.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="https://example.com/landing-page" />
```

The fetch request for a `prefetch` operation results in an HTTP Request that includes the HTTP header [`Sec-Purpose: prefetch`](/en-US/docs/Web/HTTP/Headers/Sec-Purpose). A server might use this header to change the cache timeouts for the resources, or perform other special handling.
The request should also include the {{HTTPHeader("Sec-Fetch-Dest")}} header with the value set to `empty`.
The {{HTTPHeader("Accept")}} header in the request should match the value used for normal navigation requests. This allows the browser to find the matching cached resources following navigation.
If a response is returned, it gets cached with the request in the HTTP cache.

> **Note:** Browser vendors are currently aligning around the HTTP headers that are sent, and may use different headers and values.
> The best place to track specification compliance is the [`Sec-Purpose`](/en-US/docs/Web/HTTP/Headers/Sec-Purpose) compatibility table.

### DNS Prefetching

[DNS prefetching](/en-US/docs/Web/HTML/Attributes/rel/dns-prefetch) resolves domain names in advance, speeding up load times by reducing the time associated with domain lookup at request time.

```html
<link rel="dns-prefetch" href="https://example.com/" />
```

## See also

- [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/blog/prerender-pages/#prerendering-from-the-address-bar) (developer.chrome.com)
- {{Glossary("prerender")}}
- [preload](/en-US/docs/Web/HTML/Attributes/rel/preload)
- [dns-prefetch](/en-US/docs/Web/HTML/Attributes/rel/dns-prefetch)
- [page prediction](/en-US/docs/Glossary/Page_prediction)
- [lazy loading](/en-US/docs/Web/Performance/Lazy_loading)
