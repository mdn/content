---
title: bfcache
slug: Glossary/bfcache
page-type: glossary-definition
---

{{GlossarySidebar}}

The **back/forward** cache, or **bfcache**, is a performance-enhancing feature available in modern browsers that enables instant back and forward navigation between previously-visited pages. It does this by storing a complete snapshot of a page as the user navigates away from it; the browser can then quickly restore the snapshot if the user decides to return to it, rather than needing to repeat the network requests required to load the page.

The snapshot contains the entire page in memory, including the JavaScript heap; in-progress code is paused when the user navigates away and resumed when they return to the page. A regular HTTP cache entry on the other hand contains only responses to previous requests. The bfcache therefore provides faster results than the HTTP cache.

The downside is that bfcache entries require more resources, and create complexity in terms of how to represent in-progress code. Some code features (for example the [`unload`](/en-US/docs/Web/API/Window/unload_event) handler) are not compatible, so their presence on a page blocks it from using the bfcache.

The bfcache is great for performance, so it is in your interests to make sure your pages are not blocked from using it. You can use the [`notRestoredReasons` API](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) to monitor whether pages are blocked from using the bfcache, and reasons why.

## See also

- [Back and forward cache](https://web.dev/articles/bfcache) on web.dev (2023)
