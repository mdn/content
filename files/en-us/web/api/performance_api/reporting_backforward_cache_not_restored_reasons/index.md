---
title: Reporting back/forward cache not restored reasons
slug: Web/API/Performance_API/Reporting_backforward_cache_not_restored_reasons
page-type: web-api-overview
status:
  - experimental
browser-compat: api.PerformanceNavigationTiming.notRestoredReasons
---

{{DefaultAPISidebar("Performance API")}}{{SeeCompatTable}}

The {{domxref("PerformanceNavigationTiming.notRestoredReasons")}} property reports information on whether frames present in the document were blocked from using the [back/forward cache](https://web.dev/bfcache/) (bfcache) on navigation, and why. Developers can use this information to identify pages that need updates to make them bfcache-compatible, thereby improving site performance.

## Concepts and usage

Modern browsers provide an optimization feature for history navigation called the [back/forward cache](https://web.dev/bfcache/) (bfcache). This enables an instant loading experience when users go back to a page they have already visited. Pages can be blocked from entering the bfcache or get evicted while in the bfcache for different reasons, some required by a specification and some specific to browser implementations.

Previously, there was no way for developers to find out why their pages were blocked from using the bfcache in the wild, though there is a [test in Chrome dev tools](https://web.dev/bfcache/#test-to-ensure-your-pages-are-cacheable). To enable monitoring in the field use the `notRestoredReasons` property of the [`PerformanceNavigationTiming`](/en-US/docs/Web/API/PerformanceNavigationTiming) class. This returns an object containing related information on all frames present in the document:

- Details such as frame `id` and `name`, to help identify them in the HTML.
- Whether they were blocked from using the bfcache.
- Reasons why they were blocked from using the bfcache.

This allows developers to take action to make those pages bfcache-compatible, thereby improving site performance.

## Examples

A [`PerformanceNavigationTiming`](/en-US/docs/Web/API/PerformanceNavigationTiming) instance can be obtained from features such as [`Performance.getEntriesByType()`](/en-US/docs/Web/API/Performance/getEntriesByType) and [`PerformanceObserver`](/en-US/docs/Web/API/PerformanceObserver).

For example, you could invoke the following function to return all `PerformanceNavigationTiming` objects currently present in the performance timeline and log their `notRestoredReasons`:

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

The `PerformanceNavigationTiming.notRestoredReasons` property returns an object with the following structure, which represents the blocked state of the top-level frame:

```js
({
  blocked: true,
  children: [],
  id: "",
  name: "",
  reasons: ["Internal Error", "Unload handler"],
  src: "",
  url: "a.com",
});
```

The properties are as follows:

- `blocked`
  - : A boolean value specifying whether the navigated page is blocked from using the bfcache (`true`) or not (`false`).
- `childen`
  - : An array of objects representing the blocked state of any frames embedded in the top-level frame. Each object has the same structure as the parent object — this way, any number of levels of embedded frames can be represented inside the object recursively. If the frame has no children, the array will be empty.
- `id`
  - : A string representing the `id` attribute value of the frame (for example `<iframe id="foo" src="...">`). If the frame has no `id`, the value will be an empty string.
- `name`
  - : A string representing the `name` attribute value of the frame (for example `<iframe name="bar" src="...">`). If the frame has no `name`, the value will be an empty string.
- `reasons`
  - : An array of strings each representing a reason why the navigated page was blocked from using the bfcache. There are many different reasons why blocking could occur. See the [Blocking reasons](#blocking_reasons) for more details.
- `src`
  - : A string representing the path to the frame's source (for example `<iframe src="b.html">`). If the frame has no `src`, the value will be an empty string.
- `url`
  - : A string representing the URL of the navigated page.

### Reporting bfcache blocking in same-origin frames

When a page has same-origin frames embedded, the returned `notRestoredReasons` value will contain an object inside the `children` property representing the blocked state of each embedded frame.

For example:

```js
({
  blocked: false,
  children: [
    {
      url: "a.com",
      src: "b.a.com",
      id: "b",
      name: "b",
      blocked: false,
      reasons: [],
      children: [],
    },
    {
      url: "a.com",
      src: "c.a.com",
      id: "c",
      name: "c",
      blocked: true,
      reasons: ["BroadcastChannel"],
      children: [],
    },
    {
      url: "a.com",
      src: "d.a.com",
      id: "d",
      name: "d",
      blocked: false,
      reasons: [],
      children: [],
    },
  ],
  id: "",
  name: "",
  reasons: [],
  src: "",
  url: "a.com",
});
```

### Reporting bfcache blocking in cross-origin frames

When a page has cross-origin frames embedded, we limit the amount of information shared about them to avoid leaking cross-origin information. We only include information that the outer page already knows, and whether the cross-origin subtree blocked the bfcache or not. We don't include any blocking reasons or information about lower levels of the subtree (even if some sub-levels are same-origin).

For example:

```js
({
  blocked: false,
  children: [
    {
      url: "a.com",
      src: "c.a.com",
      id: "c",
      name: "c",
      blocked: true,
      reasons: ["ScreenReader"],
      children: [],
    },
    /* cross-origin frame */
    {
      url: "",
      src: "b.com",
      id: "d",
      name: "d",
      blocked: true,
      reasons: [],
      children: [],
    },
  ],
  id: "",
  name: "",
  reasons: [],
  src: "",
  url: "a.com",
});
```

If multiple cross-origin frames have blocking reasons, we randomly select one cross-origin frame and report whether it blocked bfcache or not. For the rest of the frames, we report `null` for the `blocked` value. This is to stop bad actors from inferring information about user state on sites they don't control by embedding multiple third-party frames into a page and then comparing the blocking information from each. For example, a page could embed 20 different social media sites and infer which sites the user is logged in on, by querying the not restored reasons data.

```js
({
  blocked: false,
  children: [
    /* cross-origin frames */
    {
      url: "",
      src: "b.com",
      id: "b",
      name: "b",
      blocked: null,
      reasons: [],
      children: [],
    },
    {
      url: "",
      src: "c.com",
      id: "c",
      name: "c",
      blocked: true,
      reasons: [],
      children: [],
    },
    {
      url: "",
      src: "d.com",
      id: "d",
      name: "d",
      blocked: null,
      reasons: [],
      children: [],
    },
  ],
  id: "",
  name: "",
  reasons: [],
  src: "",
  url: "a.com",
});
```

> **Note:** `notRestoredReasons` is not available inside embedded cross-origin frames. It is availale only in the top-level document in such cases.

## Blocking reasons

There are many different reasons why blocking could occur, and these reasons are browser-specific. As an example, Chrome's implementation has a few major categories of reasons:

- `Circumstantial`: This refers to blocking reasons not directly related to the developer's page code. For example, a related component crashed, something went wrong with the loading process, the page is in a temporary state that can't be cached, bfcache is disabled due to insufficient memory, or a [service worker](/en-US/docs/Web/API/Service_Worker_API) did something to the page that disqualifies it from being cached.
- `Extensions`: There are a few different reason messages related to extensions. There are several different reasons combined into the "Extensions" reason. The reasons concerning extension-related blocking are intentionally vague because it would be bad for privacy to give away too much information about what extensions the user has installed, which ones are active on the page, what they are doing, etc.
- `PageSupportNeeded`: The developer's code is using a web platform feature that is otherwise not bfcache blocking, but it is currently in a state that is bfcache blocking. For example, the page currently has a [BroadcastChannel](/en-US/docs/Web/API/BroadcastChannel) with registered listeners, or an open [IndexedDB](/en-US/docs/Web/API/IndexedDB_API) connection. Or the page has registered an [`unload` handler](/en-US/docs/Web/API/Window/unload_event), which currently [prevents the bfcache from being used in some browsers](https://web.dev/bfcache/#never-use-the-unload-event).
- `SupportPending`: The developer's code is using a web platform feature that disqualifies the page from the bfcache, for example the [Web Serial API](/en-US/docs/Web/API/Web_Serial_API), [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API), [File System Access API](/en-US/docs/Web/API/File_System_Access_API), or [Media Session API](/en-US/docs/Web/API/Media_Session_API). Or the page is using [`Cache-Control: no-store`](/en-US/docs/Web/HTTP/Headers/Cache-Control), which currently [prevents the bfcache from being used in some browsers](https://web.dev/bfcache/#minimize-use-of-cache-control-no-store). This category is also used to report the presence of a tool outside the page itself that is blocking the bfcache, such as a screen reader or password manager.

## Browser compatibility

{{Compat}}

## See also

- [`notRestoredReasons` API Explainer](https://github.com/WICG/bfcache-not-restored-reason/blob/main/NotRestoredReason.md)
- {{domxref("PerformanceNavigationTiming")}}
