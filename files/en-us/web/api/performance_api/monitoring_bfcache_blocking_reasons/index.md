---
title: Monitoring bfcache blocking reasons
slug: Web/API/Performance_API/Monitoring_bfcache_blocking_reasons
page-type: guide
status:
  - experimental
browser-compat: api.PerformanceNavigationTiming.notRestoredReasons
---

{{DefaultAPISidebar("Performance API")}}{{SeeCompatTable}}

The {{domxref("PerformanceNavigationTiming.notRestoredReasons")}} property reports information on why the current document was blocked from using the {{Glossary("bfcache")}} on navigation. Developers can use this information to identify pages that need updates to make them bfcache-compatible, thereby improving site performance.

## Back/forward cache (bfcache)

Modern browsers provide an optimization feature for history navigation called the back/forward cache ({{Glossary("bfcache")}}). This enables an instant loading experience when users go back to a page they have already visited. Pages can be blocked from entering the bfcache or get evicted while in the bfcache for different reasons, some required by a specification and some specific to browser implementations.

To enable monitoring bfcache blocking reasons, the [`PerformanceNavigationTiming`](/en-US/docs/Web/API/PerformanceNavigationTiming) class includes a `notRestoredReasons` property. This returns a {{domxref("NotRestoredReasons")}} object containing related information on the top-level frame and all {{htmlelement("iframe")}}s present in the document:

- Reasons why bfcache usage was blocked.
- Details such as frame `id` and `name`, to help identify `<iframe>`s in the HTML.

> [!NOTE]
> Historically, the deprecated {{domxref("PerformanceNavigation.type")}} property was used to monitor the bfcache, with developers testing for a `type` of `"TYPE_BACK_FORWARD"` to get an indication of the bfcache hit rate. This however did not provide any reasons for bfcache blocking, or any other data. The `notRestoredReasons` property should be used to monitor bfcache blocking, going forward.

## Logging bfcache blocking reasons

Ongoing bfcache blocking data can be obtained using a [`PerformanceObserver`](/en-US/docs/Web/API/PerformanceObserver), like this:

```js
const observer = new PerformanceObserver((list) => {
  let perfEntries = list.getEntries();
  perfEntries.forEach((navEntry) => {
    console.log(navEntry.notRestoredReasons);
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Alternatively, you can obtain historical bfcache blocking data using a suitable method such as [`Performance.getEntriesByType()`](/en-US/docs/Web/API/Performance/getEntriesByType):

```js
function returnNRR() {
  const navEntries = performance.getEntriesByType("navigation");
  for (let i = 0; i < navEntries.length; i++) {
    console.log(`Navigation entry ${i}`);
    let navEntry = navEntries[i];
    console.log(navEntry.notRestoredReasons);
  }
}
```

The code snippets shown above will log {{domxref("NotRestoredReasons")}} objects to the console. These objects have the following structure, which represents the blocked state of the top-level frame:

```js
{
  children: [],
  id: null,
  name: null,
  reasons: [
    { reason: "unload-listener" }
  ],
  src: "",
  url: "example.com",
}
```

The properties are as follows:

- {{domxref("NotRestoredReasons.children", "children")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : An array of {{domxref("NotRestoredReasons")}} objects, one for each child {{htmlelement("iframe")}} embedded in the current document, which may contain reasons why the top-level frame was blocked relating to the child frames. Each object has the same structure as the parent object — this way, any number of levels of embedded `<iframe>`s can be represented inside the object recursively. If the frame has no children, the array will be empty; if the document is in a cross-origin `<iframe>`, `children` will return `null`.
- {{domxref("NotRestoredReasons.id", "id")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A string representing the `id` attribute value of the `<iframe>` the document is contained in (for example `<iframe id="foo" src="...">`). If the document is not in an `<iframe>` or the `<iframe>` has no `id` set, `id` will return `null`.
- {{domxref("NotRestoredReasons.name", "name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A string representing the `name` attribute value of the `<iframe>` the document is contained in (for example `<iframe name="bar" src="...">`). If the document is not in an `<iframe>` or the `<iframe>` has no `name` set, `name` will return `null`.
- {{domxref("NotRestoredReasons.reasons", "reasons")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : An array of {{domxref("NotRestoredReasonDetails")}} objects, each representing a reason why the navigated page was blocked from using the bfcache. If the document is in a cross-origin `<iframe>`, `reasons` will return `null`, but the parent document may show a `reason` of `"masked"` if any `<iframe>`s blocked bfcache usage for the top-level frame. See [Blocking reasons](#blocking_reasons) for more details on the reasons.
- {{domxref("NotRestoredReasons.src", "src")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A string representing the path to the source of the `<iframe>` the document is contained in (for example `<iframe src="exampleframe.html">`). If the document is not in an `<iframe>`, `src` will return `null`.
- {{domxref("NotRestoredReasons.url", "url")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A string representing the URL of the navigated page or `<iframe>`. If the document is in a cross-origin `<iframe>`, `url` will return `null`.

### Reporting bfcache blocking in same-origin `<iframe>`s

When a page has same-origin `<iframe>`s embedded, the returned `notRestoredReasons` value will contain an array of objects inside the `children` property representing the blocking reasons related to each embedded frame.

For example:

```js
{
  children: [
    {
      children: [],
      id: "iframe-id",
      name: "iframe-name",
      reasons: [],
      src: "./index.html",
      url: "https://www.example.com/iframe-examples.html"
    },
    {
      children: [],
      id: "iframe-id2",
      name: "iframe-name2",
      reasons: [
        { "reason": "unload-listener" }
      ],
      src: "./unload-examples.html",
      url: "https://www.example.com/unload-examples.html"
    },
  ],
  id: null,
  name: null,
  reasons: [],
  src: null,
  url:"https://www.example.com"
}
```

### Reporting bfcache blocking in cross-origin `<iframe>`s

When a page has cross-origin frames embedded, the amount of information shared about them is limited to avoid leaking cross-origin information. Only information that the outer page already knows is included, and whether the cross-origin subtree caused bfcache blocking or not. No blocking reasons or information about lower levels of the subtree (even if some sub-levels are same-origin) are included.

For example:

```js
{
  children: [
    {
      children: [],
      id: "iframe-id",
      name: "iframe-name",
      reasons: [],
      src: "https://www.example2.com/",
      url: null
    }
  ],
  id: null,
  name: null,
  reasons: [
        { "reason": "masked" }
  ],
  src: null,
  url:"https://www.example.com"
}

```

For all the cross-origin `<iframe>`s, no blocking reasons are reported; for the top-level frame a reason of `"masked"` is reported, to indicate that the reasons are being kept hidden for privacy purposes. Note that `"masked"` may also be used for hiding user agent-specific reasons; it doesn't always indicate an issue in an `<iframe>`.

## Blocking reasons

There are many different reasons why blocking could occur, and browsers can choose to implement their own specific reasons for blocking, based on how they operate. Developers should avoid depending on specific wording for reasons and be prepared to handle new reasons being added and deleted.

The initial values listed in the specification are:

- `"fetch"`
  - : While unloading, a fetch initiated by the current document (e.g. via {{domxref("Window/fetch", "fetch()")}}) was canceled while ongoing. As a result, the page was not in a stable state that could be stored in the bfcache.
- `"lock"`
  - : While unloading, held locks and lock requests were terminated, so the page was not in a stable state that could be stored in the bfcache.
- `"masked"`
  - : The exact reason is hidden for privacy purposes. This value can mean one of the following:
    - The current document has children contained in a cross-origin {{htmlelement("iframe")}}, and they prevented storage in the bfcache.
    - The current Document could not be stored in the bfcache for user agent-specific reasons.
- `"navigation-failure"`
  - : The original navigation that created the current document errored, and storing the resulting error document in the bfcache was prevented.
- `"parser-aborted"`
  - : The current document never finished its initial HTML parsing, and storing the unfinished document in the bfcache was prevented.
- `"websocket"`
  - : While unloading, an open [WebSocket](/en-US/docs/Web/API/WebSockets_API) connect was shut down, so the page was not in a stable state that could be stored in the bfcache.

Additional blocking reasons may be used by some browsers, for example:

- `"unload-listener"`
  - : The page registers an [`unload`](/en-US/docs/Web/API/Window/unload_event) handler, which prevents bfcache usage. This serves as a useful warning, as `unload` is deprecated. See [usage notes](/en-US/docs/Web/API/Window/unload_event#usage_notes) for more information.
- `"response-cache-control-no-store"`
  - : The page uses `no-store` as a {{httpheader("Cache-Control")}} header value.
- `"related-active-contents"`
  - : The page was opened from another page that still has a reference to this page, for example using "duplicate tab" functionality.

## Browser compatibility

{{Compat}}

## See also

- [`notRestoredReasons` API Explainer](https://github.com/WICG/bfcache-not-restored-reason/blob/main/NotRestoredReason.md)
- {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}
- {{domxref("NotRestoredReasons")}}

> [!NOTE]
> This article is adapted from [Back/forward cache notRestoredReasons API](https://developer.chrome.com/docs/web-platform/bfcache-notrestoredreasons/) by Chris Mills and Barry Pollard, originally published on `developer.chrome.com` in 2023 under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/).
