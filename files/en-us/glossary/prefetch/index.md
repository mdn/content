---
title: Prefetch
slug: Glossary/Prefetch
tags:
  - Glossary
  - Prefetch
  - Reference
  - Web Performance
---
Prefetching is when content is downloaded in the background, this is based on the assumption that the content will likely be requested, enabling the content to load instantly if and when the user requests it. The content is downloaded and cached for anticipated future use without the user making an explicit request for it.

### DNS Prefetching

Domain lookups can be slow, especially with network latency on mobile phones. They are most relevant when there are a plethora of links to external websites that may be clicked on, like search engine results, DNS prefetching resolves domain names in advance thereby speeding up load times by reducing the time associated with domain lookup at request time.

```html
<link rel="dns-prefetch" href="https://example.com/">
```

### Link prefetching

Link prefetching is a performance optimization technique that works by assuming which links the user is likely to click, then downloading the content of those links. If the user decides to click on one of the links, then the page will be rendered instantly as the content has already been downloaded.

The prefetch hints are sent in HTTP headers:

```http
Link: ; rel=dns-prefetch,
      ; as=script; rel=preload,
      ; rel=prerender,
      ; as=style; rel=preload
```

### Prefetch attribute value

Browsers will prefetch content when the prefetch [`<link>`](/en-US/docs/Web/HTML/Element/link) tag directs it to, giving the developer control over what resources should be prefetched.

```html
<link rel="prefetch" href="https://www.example.com/solutions" />
```

## See also

- defer
- async
- [preload](/en-US/docs/Web/HTML/Link_types/preload)
- [page prediction](/en-US/docs/Glossary/Page_prediction)
- [lazy loading](/en-US/docs/Web/Performance/Lazy_loading)
