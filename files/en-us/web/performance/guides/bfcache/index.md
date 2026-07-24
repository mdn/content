---
title: Back/forward cache (bfcache)
slug: Web/Performance/Guides/bfcache
page-type: guide
sidebar: performancesidebar
---

The **back/forward cache** (**bfcache**) is a browser optimization that may store a complete snapshot of a page in memory when a user navigates away. When the user presses the back or forward button, if the page is stored in the bfcache, the browser restores the snapshot instantly instead of reloading the page from the network. This makes back/forward navigations feel nearly instant.

This guide explains how bfcache works, how it differs from HTTP caching, what can prevent a page from being cached, and how to design pages that work well with it.

## How bfcache works

When a user navigates away from a page, the browser may store the entire page state in memory, including:

- The full DOM tree
- The JavaScript heap and execution state (paused mid-execution)
- Active timers, promises, and other pending work
- Loaded resources (images, stylesheets, scripts)

When the user navigates back, the browser restores this snapshot if available. JavaScript execution resumes where it left off, scroll position is preserved, and form inputs retain their values. No network requests are necessary to reconstruct the page.

A page can be evicted from the bfcache, and no longer be able to be restored for a number of reasons including:

- A period of time having passed
- A maximum number of history entries
- Certain APIs being used which are likely to be ineligible with restoring the page.

These reasons differ between browsers.

## bfcache versus HTTP caching

bfcache and HTTP caching solve different problems and operate independently:

|                     | bfcache                                       | HTTP cache                                                      |
| ------------------- | --------------------------------------------- | --------------------------------------------------------------- |
| **What is stored**  | Complete page snapshot (DOM, JS heap, layout) | Individual HTTP response bodies                                 |
| **When it is used** | Back/forward navigation only                  | Any request for a previously-fetched resource                   |
| **Speed**           | Near-instant (memory restore)                 | Faster than network, but page must still be parsed and rendered |
| **Freshness**       | No revalidation — snapshot is restored as-is  | Subject to `Cache-Control`, `ETag`, and `Last-Modified` headers |

[RFC 9111 Section 6](https://httpwg.org/specs/rfc9111.html#history.lists) makes this distinction explicit: HTTP cache directives apply to caching, not to history mechanisms like bfcache. A history mechanism _may_ display a previous representation even if it has expired according to HTTP cache rules. This means that `Cache-Control: no-cache` or `max-age=0` do not prevent bfcache — they only control HTTP cache revalidation. However, browsers may take decisions on bfcache eligibility based on various signals including `Cache-Control` headers. See the [`no-store`](#cache-control_no-store) section later in this article.

### Stale content after bfcache restoration

Because bfcache restores a snapshot without revalidation, the page may show outdated content. For example, if a user adds an item to a shopping cart on page B and then navigates back to page A (the product listing), the cart count in page A's header might be stale.

To handle this, listen for the {{domxref("Window/pageshow_event", "pageshow")}} event and update stale data when the page is restored from bfcache:

```js
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    // Page was restored from bfcache — refresh dynamic content
    updateCartCount();
  }
});
```

The `event.persisted` property is `true` only when the page is restored from bfcache.

Note that bfcache restores can also affect analytics: if a page is frequently restored from bfcache rather than reloaded, pageview counts may drop because the initial page load event does not fire again. Some analytics providers handle this automatically, but others require you to send a new pageview in the `pageshow` handler shown above.

## What blocks bfcache

Certain APIs and page behaviors prevent the browser from storing a page in bfcache:

### `unload` event listeners

Registering an [`unload`](/en-US/docs/Web/API/Window/unload_event) handler is the most common reason pages are excluded from bfcache. In the past Chrome and Firefox did not cache pages with `unload` listeners on desktop. Safari attempts to cache them, but will not run the listener, which can lead to unreliable behavior. On mobile, where `unload` is often much less reliable due to the nature of mobile applications including browsers, all browsers follow similar behavior to Safari and prioritise bfcache over running `unload` handlers.

> [!NOTE]
> Chrome is [moving toward allowing pages with `unload` handlers to use bfcache](https://developer.chrome.com/docs/web-platform/deprecating-unload), but this behavior varies across browser versions.

Use {{domxref("Window/pagehide_event", "pagehide")}} instead of `unload`. It fires in all the same situations, and does not block bfcache:

```js
window.addEventListener("pagehide", (event) => {
  // Clean up — runs both on normal navigation and bfcache storage
});
```

### Open connections

Pages with active connections may be excluded from bfcache. Close them during navigation:

- {{domxref("IndexedDB_API", "IndexedDB")}} connections
- Open {{domxref("WebSocket")}} or {{domxref("WebRTC")}} connections (currently blocks bfcache in Chrome but not in Safari; Chrome plans to close WebSockets on tab hide rather than blocking bfcache)
- In-progress {{domxref("Window/fetch", "fetch()")}} requests

Listen for the `pagehide` event to close connections, and re-open them in the `pageshow` event when restoring from bfcache.

### `Cache-Control: no-store`

Pages served with `Cache-Control: no-store` are ineligible for bfcache in most browsers. This header is intended for sensitive content that should not be stored in any cache. If your page is not sensitive, prefer `Cache-Control: no-cache` instead, which forces HTTP revalidation without blocking bfcache.

> [!NOTE]
> Chrome [allows `no-store` pages to use bfcache in limited cases](https://developer.chrome.com/docs/web-platform/bfcache-ccns), but many sites do not meet that criteria and other browsers do not do the same. Therefore it is still recommended to limit usage of `no-store` where possible.

### Other blocking conditions

Browsers may also exclude pages that use:

- Permissions that the user has not yet granted (e.g., pending geolocation prompts)
- `beforeunload` listeners (in some browsers)
- Certain browser extension content

The exact conditions vary by browser and version.

## Monitoring bfcache eligibility

Use the [Performance API's `notRestoredReasons`](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) to find out why a page was not restored from bfcache. In a `pageshow` event handler:

```js
window.addEventListener("pageshow", (event) => {
  if (!event.persisted) {
    const entry = performance.getEntriesByType("navigation")[0];
    console.log("Not restored reasons:", entry.notRestoredReasons);
  }
});
```

For [browsers that do not support `notRestoredReasons`](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons#browser_compatibility), the `pageshow` `persisted` property is still a good signal as to whether the bfcache was used or not.

You can also test bfcache behavior in Chrome DevTools by navigating to **Application > Back/forward cache** and clicking **Test back/forward cache**.

## Best practices

To maximize bfcache hit rates and handle restorations correctly:

- **Replace `unload` with `pagehide`**: The `unload` event is unreliable (especially on mobile) and blocks bfcache.
- **Avoid `Cache-Control: no-store`** unless the page contains genuinely sensitive data. Use `no-cache` instead or even a short caching period.
- **Update stale content in `pageshow`**: Listen for `event.persisted` and refresh any data that may have changed.
- **Close and reopen connections**: Tear down IndexedDB, WebSocket, and other connections in `pagehide`; re-establish them in `pageshow`.
- **Avoid `beforeunload` unless needed**: Only add `beforeunload` conditionally (e.g., when the user has unsaved changes), and remove it when it's no longer needed.

## See also

- {{Glossary("bfcache")}} glossary entry
- {{domxref("Window/pageshow_event", "pageshow")}} event
- {{domxref("Window/pagehide_event", "pagehide")}} event
- [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [Back and forward cache](https://web.dev/articles/bfcache) on web.dev
- [RFC 9111 Section 6: Relationship to Applications and Other Caches](https://httpwg.org/specs/rfc9111.html#history.lists)
