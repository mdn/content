---
title: Using Deferred Fetch
slug: Web/API/Fetch_API/Using_Deferred_Fetch
page-type: guide
---

{{DefaultAPISidebar("Fetch API")}}

The **`fetchLater()` API** provides an interface to request a deferred fetch that can be sent after a specified period of time, or when the page is closed or navigated away from.

## Overview

Developers often need to send (or beacon) data back to the server, particularly at the end of a user's visit to a page — for example, for analytics services. There are several ways to do this: from adding 1 pixel {{HTMLElement("img")}} elements to the page, to {{domxref("XMLHttpRequest")}}, to the dedicated {{domxref("Beacon API", "Beacon API", "", "nocode")}}, and the {{domxref("Fetch API", "Fetch API", "", "nocode")}} itself.

The issue is that all of these methods suffer from reliability problems for end-of-visit beaconing. While the Beacon API and the {{domxref("Request.keepalive", "keepalive")}} property of the Fetch API will send data, even if the document is destroyed (to the best efforts that can be made in this scenario), this only solves part of the problem.

The other — more difficult — part to solve concerns deciding _when_ to send the data, since there is not an ideal time in a page's lifecycle to make the JavaScript call to send out the beacon:

- The {{domxref("Window.unload_event", "unload")}} and {{domxref("Window.beforeunload_event", "beforeunload")}} events are unreliable, and outright ignored by several major browsers.
- The {{domxref("Window.pagehide_event", "pagehide")}} and {{domxref("document.visibilitychange_event", "visibilitychange")}} events are more reliable, but still have issues on mobile platforms.

This means developers looking to reliably send out data via a beacon need to do so more frequently than is ideal. For example, they may send a beacon on each change, even if the final value for the page has not yet been reached. This has costs in network usage, server processing, and merging or discarding outdated beacons on the server.

Alternatively, developers can choose to accept some level of missing data — either by:

- Beaconing after a designated cut-off time and not collecting later data.
- Beaconing at the end of the page lifecycle but accepting that sometimes this will not be reliable.

The `fetchLater()` API extends the {{domxref("Fetch API", "Fetch API", "", "nocode")}} to allow setting fetch requests up in advance. These deferred fetches can be updated before they have been sent, allowing the payload to reflect the latest data to be beaconed.

The browser then sends the beacon when the tab is closed or navigated away from, or after a set time if specified. This avoids sending multiple beacons but still ensures a reliable beacon within reasonable expectations (i.e., excluding when the browser process shuts down unexpectedly during a crash).

Deferred fetches can also be aborted using an {{domxref("AbortController")}} if they are no longer required, avoiding further unnecessary costs.

## Quotas

Deferred fetches are batched and sent once the tab is closed; at this point, there is no way for the user to abort them. To avoid situations where documents abuse this bandwidth to send unlimited amounts of data over the network, the overall quota for a top-level document is capped at 640KiB.

Callers of `fetchLater()` should be defensive and catch `QuotaExceededError` errors in almost all cases, especially if they embed third-party JavaScript.

Since this cap makes deferred fetch bandwidth a scarce resource, which needs to be shared between multiple reporting origins (for example, several RUM libraries) and subframes from multiple origins, the platform provides a reasonable default division of this quota. In addition, it provides {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} and {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy) directives to allow dividing it differently when desired.

The overall quota for `fetchLater()` is 640KiB per document. By default, this is divided into a 512KiB top-level quota and a 128KiB shared quota:

- The 512KiB top-level quota by default is for any `fetchLater()` requests made from the top-level document and direct subframes using that origin.
- The 128KiB shared quota by default is for any `fetchLater()` requests made in cross-origin subframes (for example, `<iframe>`, `<object>`, `<embed>`, and `<frame>` elements).

`fetchLater()` requests can be made to any URL and are not restricted to the same origin as the document or the subframe, so it's important to differentiate between requests made in the top-level document content (whether to first-party or third-party origins) and those made in subframes.

For example, if a top-level `a.com` document includes a `<script>` that makes a `fetchLater()` request to `analytics.example.com`, this request would be bound by the top-level 512KiB limit. Alternatively, if the top-level document embeds an `<iframe>` with a source of `analytics.example.com` that makes a `fetchLater()` request, that request would be bound by the 128KiB limit.

### Quota limits by reporting origin and subframe

Only 64KiB of the top-level 512KiB quota can be used concurrently for the same reporting origin (the request URL's origin). This prevents third-party libraries from reserving quota opportunistically before they have data to send.

Each cross-origin subframe gets an 8KiB quota out of the shared 128KiB quota by default, allocated when the subframe is added to the DOM (whether `fetchLater()` will be used in that subframe or not). This means that, in general, only the first 16 cross-origin subframes added to a page can use `fetchLater()` as they will use up the 128KiB quota.

### Increasing subframe quotas by sharing the top-level quota

The top-level origin can give selected cross-origin subframes an increased quota of 64KiB, taking it out of the larger top-level 512KiB limit. It does this by listing those origins in the {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} Permissions Policy directive. This is allocated when the subframe is added to the DOM, leaving less quota for the top-level document and direct same-origin subframes. Multiple same-origin subdomains can each get a 64KiB quota.

### Restricting the shared quota

The top-level origin can also restrict the 128KiB shared quota to named cross-origin subframes by listing those origins in the {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} Permissions Policy. It can also revoke the entire 128KiB default subframe quota and instead keep the full 640KiB quota for itself and any named `deferred-fetch` cross-origins by setting the {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} Permissions Policy to `()`.

### Delegating quotas to subframes of subframes

By default, subframes of subframes are not allocated a quota and so cannot use `fetchLater()`. Subframes allocated the increased 64KiB quota can delegate the full 64KiB quota to further subframes and allow them to use `fetchLater()` by setting their own `deferred-fetch` Permissions Policy. They can only delegate their full quota to further subframes, not parts of it, and cannot specify new quotas. Subframes using the minimal 8KiB quota cannot delegate quotas to subframes. To be delegated quota, sub-subframes must be included in both the top-level and the subframe `deferred-fetch` {{httpheader('Permissions-Policy')}} directives.

### When quotas are exceeded

When quotas are exceeded, a `QuotaExceededError` is thrown when the {{domxref('Window.fetchLater()','fetchLater()')}} method is called to initiate the deferred request.

Permissions Policy checks are not discernible from quota checks. Calling `fetchLater()` will throw a `QuotaExceededError` both if the quota is actually exceeded and if the quota was restricted for that origin via a Permissions Policy.

Callers of `fetchLater()` should be defensive and catch `QuotaExceededError` errors in almost all cases, especially if they embed third-party JavaScript.

## Quota examples

### Using up the minimal quota

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. A `<iframe src="https://b.com/page">` receives 64KiB upon being added to the top-level document, from the top-level's 512KiB limit.
2. A `<iframe src="https://c.com/page">` is not listed and so receives 8KiB upon being added to the top-level document from the 128KiB shared limit.
3. 15 more cross-origin iframes would each receive 8KiB upon being added to the top-level document (similar to `c.com`).
4. The next cross-origin iframe would not be granted any quota.
5. If one of the cross-origin iframes is removed, its deferred fetches will be sent.
6. The next cross-origin iframe _would_ receive an 8KiB quota, as there is quota available again.

### Revoke Restricting the minimal quota to named origins

```http
Permissions-Policy: deferred-fetch-minimal=("https://b.com")
```

1. `<iframe src="https://b.com/page">` receives 8KiB upon being added to the top-level document.
2. `<iframe src="https://c.com/page">` receives no quota upon being added to the top-level document.
3. The top-level document and its same-origin descendants can use up to 512KiB.

### Revoking the minimal quota altogether with top-level exceptions

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. `<iframe src="https://b.com/page">` receives 64KiB upon being added to the top-level document.
2. `<iframe src="https://c.com/page">` receives no quota upon being added to the top-level document.
3. The top-level document and its same-origin descendants can use up to the full 640KiB but that is reduced to 574KiB if a `b.com` subframe is created (or even less if multiple `b.com` subframes are created, each of which will be allocated a 64KiB quota).

### Revoking the minimal quota altogether with no exceptions

```http
Permissions-Policy: deferred-fetch-minimal=()
```

1. The top-level document and its same-origin descendants can use up the full 640KiB.
2. Subframes are not allocated any quota and cannot use `fetchLater()`.

### Same-origin subframes share quota with the top-level and can delegate to subframes

Assuming a top-level document on `a.com`, which embeds a subframe of `a.com`, which embeds a subframe of `b.com`, and no explicit Permission Policies.

1. The top-level document of `a.com` has the default 512KiB quota.
2. `<iframe src="https://a.com/embed">` shares the 512KiB quota upon being added to the top-level document.
3. `<iframe src="https://b.com/embed">` receives an 8KiB quota upon being added to the top-level document.

### Same-origin subframes can not share quota with the top-level when separated by a cross-origin subframe

Assuming a top-level document on `a.com`, which embeds a `<iframe src="https://b.com/">`, which embeds a subframe of `<iframe src="https://a.com/embed">`, and no explicit Permission Policies.

1. The top-level document of `a.com` has the default 512KiB quota.
2. `<iframe src="https://b.com/">` shares the 8KiB quota.
3. `<iframe src="https://a.com/embed">` receives no quota; even though this is same-origin with the top origin, it is separated by a cross-origin.

### Secondary subframes of subframes do not get quota by default

Assuming a top-level document on `a.com`, which embeds a `<iframe src="https://b.com/">`, which embeds a `<iframe src="https://c.com/">`, and no explicit Permission Policies.

1. The top-level frame of `a.com` has the default 512KiB quota.
2. `<iframe src="https://b.com/">` receives 8KiB of the default shared quota.
3. `<iframe src="https://c.com/">` receives no quota.

### Granting the full quota to a further subframe

Assuming a top-level document on `a.com`, which embeds a `<iframe src="https://b.com/">`, which embeds a `<iframe src="https://c.com/">`.

Assuming that `a.com` has the following Permissions Policy:

```http
Permissions-Policy: deferred-fetch=("https://c.com" "https://c.com")
```

And, assuming that `b.com` has the following Permissions Policy:

```http
Permissions-Policy: deferred-fetch=("https://c.com")
```

1. The top-level frame of `a.com` has the default 512KiB quota.
2. `<iframe src="https://b.com/">` receives 64KiB of the default quota.
3. `<iframe src="https://b.com/">` delegates its full quota of 8KiB to `c.com`. `b.com` cannot use `fetchLater()`.
4. `<iframe src="https://c.com/">` receives 8KiB of quota.

### Redirects do not transfer quota

Assuming a top-level document on `a.com`, which embeds a `<iframe src="https://b.com/">`, which redirects to `c.com`, and no explicit top-level Permission Policies.

1. The top-level frame of `a.com` has the default 512KiB quota.
2. `<iframe src="https://b.com/">` receives 8KiB of the default shared quota.
3. The 8KiB is not transferred to `c.com` when `<iframe src="https://b.com/">` redirects to there, but the 8KiB is not released.

### Sandboxed same-origin iframes are effectively separate origins

As an example, if the following `<iframe>` is embedded on `https://www.example.com`:

```html
<iframe src="https://www.example.com/iframe" sandbox="allow-scripts"></iframe>
```

This would not be considered "same-origin", despite being hosted on the same origin as the top-level document, as the `<iframe>` is in a sandboxed environment. Therefore, by default, it should be allocated an 8KiB quota from the total shared 128KiB quota.

### Disallowing `fetchLater()` from iframes

You can use the `<iframe>` [`allow`](/en-US/docs/Web/HTML/Reference/Elements/iframe#allow) attribute to prevent `fetchLater()` quota from being allocated to the `<iframe>`:

```html
<iframe
  src="https://www.example.com/iframe"
  allow="deferred-fetch;deferred-fetch-minimal;"></iframe>
```

The `allow="deferred-fetch"` directive is needed to prevent same-origin iframes from using up the 512KiB quota, and the `allow="deferred-fetch-minimal"` directive is needed to prevent cross-origin iframes from using up the 128KiB quota. Including both directives will prevent both quotas from being used, regardless of the `src` value.

### Examples which throw a `QuotaExceededError`

```js
// Maximum of 64KiB per origin
const url = "<72KiB of characters>";
fetchLater(url);

// Maximum of 64KiB per origin including headers
fetchLater("https://origin.example.com", { headers: headersExceeding64KiB });

// Maximum of 64KiB per origin including body and headers
fetchLater("<32KiB of characters>", { headers: headersExceeding32KiB });

// Maximum of 64KiB per origin including body
fetchLater("https://origin.example.com", {
  method: "POST",
  body: bodyExceeding64KiB,
});

// Maximum of 64KiB per origin including body and automatically added headers
fetchLater("<62KiB of characters>" /* with a 3kb referrer */);
```

### Examples which eventually throw a `QuotaExceededError`

In the following sequence, contained in the top-level document, the first two requests would succeed, but the third would throw. That's because, even though the overall 640KiB quota was not exceeded, the third request exceeds the reporting-origin quota for `https://a.example.com` and would throw.

```js
fetchLater("https://a.example.com", { method: "POST", body: a40KiBBody });
fetchLater("https://b.example.com", { method: "POST", body: a40KiBBody });
fetchLater("https://a.example.com", { method: "POST", body: a40KiBBody });
```

### Redirects of subframes back to the top-level origin allow use of the top-level quota

Assuming a top-level document at `a.com`, which embeds `<iframe src="https://b.com/">`, which redirects to `a.com`, and no explicit top-level Permission Policies:

1. The top-level frame of `a.com` has the default 512KiB quota.
2. `<iframe src="https://b.com/">` receives 8KiB of the default shared quota of 128KiB.
3. The 8KiB is not transferred to `a.com` when `<iframe src="https://b.com/">` redirects there, but it can share the full top-level quota again, and the previously-allocated 8KiB quota is released.
