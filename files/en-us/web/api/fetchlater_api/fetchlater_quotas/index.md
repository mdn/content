---
title: fetchLater() quotas
slug: Web/API/fetchLater_API/fetchLater_quotas
page-type: guide
---

{{DefaultAPISidebar("fetchLater API")}}

The overall quota for `fetchLater()` is 640KB per document. By default, this is divided into 512KB for the top-level origin (including direct subframes using that origin) and 128KB for cross-origin subframes. Each cross-origin iframe gets an 8KB quota by default, allocated when the subframe is added to the DOM (whether `fetchLater()` will be used in that subframe or not). This means that, in general, only the first 16 cross-origin subframes added to a page can use `fetchLater()` as they will use up the 128KB quota.

Only 64KB of the allocated quota for a document can be used concurrently for the same reporting origin (the request URL's origin). This prevents third-party libraries from reserving quota opportunistically before they have data to send.

The top-level origin can also choose to allow selected cross-origin subframes to have an increased 64KB quota, taken out of the larger 512KB limit by listing those origins in the {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} Permission Policy (e.g., `deferred-fetch=(self "https://b.com")`). Again this is allocated at when the subframe is added to the DOM, leaving less quota for the top-level origin.

The top-level origin can also revoke this entire 128KB default subframe quota and instead have the full 640KB quota for itself and any named `deferred-fetch` cross-origins. It does this by setting the {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} Permission Policy to `()`.

Subframes allocated the increased 64KB quota can delegate the full 64KB quota to further subframes but cannot allow new quotas nor delegate only parts of the 64KB quota to subframes. Take the example of `a.com` embedding an iframe of `b.com` which embeds an iframe of `c.com` where `a.com` has a `deferred-fetch=(self "https://b.com" "https://c.com")` Permission Policy. By default, as a subframe of a subframe, `c.com` has no quota, but `b.com` can delegate its full 64KB quota to `c.com` through the use of its own `deferred-fetch` Permission Policy of `deferred-fetch=(self "https://c.com")`. Further subframes must be included in the top-level `deferred-fetch` Permission Policy and 8KB minimal quotas cannot be delegated.

## Examples

### Using up the minimal quota

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. A subframe of `b.com` receives 64KB upon creation, from the top-level's 512KB limit.
2. A subframe of `c.com` is not listed and so receives 8KB upon creation from the 128KB shared limit.
3. 15 more subframes of different origins would receive 8KB upon creation (similar to `c.com`).
4. The next subframe would not be granted any quota.
5. If one of the subframes is removed, its deferred fetches will be sent.
6. The next subframe _would_ receive an 8KB quota, as there is quota available again.

### Revoking the minimal quota altogether with exceptions

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. A subframe of `b.com` receives 64KB upon creation.
2. A subframe of `c.com` receives no quota upon creation.
3. The top-level document and its same-origin descendants can use up to the full 640KB but that is reduced to 574KB if an `b.com` subframe is created.

### Revoking the minimal quota altogether with no exceptions

```http
Permissions-Policy: deferred-fetch-minimal=()
```

1. The top-level document and its same-origin descendants can use up the full 640KB.
2. Subframes are not allocated any quota and cannot use `fetchLater()`.

### Same-origin subframes share quota with the top-level and can delegate to subframes

Assuming a top-level document on `a.com`, which embeds a subframe of `a.com`, which embeds a subframe of `b.com`, and no explicit Permission Policies.

1. The top-level document of `a.com` has the default 512KB quota.
2. The subframe of `a.com` shares the 512KB quota.
3. The subframe `b.com` receives an 8KB quota.

### Same-origin subframes canot share quota with the top-level when separated by a cross-origin subframe

Assuming a top-level document on `a.com`, which embeds a subframe of `b.com`, which embeds a subframe of `a.com`, and no explicit Permission Policies.

1. The top-level frame of `a.com` has the default 512KB quota.
2. The subframe of `b.com` shares the 8KB quota.
3. The subframe `a.com` receives no quota; even though this is same-origin with the top origin, it is separated by a cross-origin.

### Secondary subframes of subframes do not get quota by default

Assuming a top-level document on `a.com`, which embeds a subframe of `b.com`, which embeds a subframe of `c.com`, and no explicit Permission Policies.

1. The top-level frame of `a.com` has the default 512KB quota.
2. The subframe of `b.com` receives 8KB of the default shared quota.
3. The subframe `c.com` receives no quota.

### Granting the full quota to a further subframe

Assuming a top-level document on `a.com`, which embeds a subframe of `b.com`, which embeds a subframe of `c.com`, and no explicit top-level Permission Policy, but a Permission Policy of the following on `b.com`:

```http
Permissions-Policy: deferred-fetch=("https://c.com")
```

1. The top-level frame of `a.com` has the default 512KB quota.
2. The subframe of `b.com` receives 8KB of the default shared quota.
3. The subframe of `b.com` delegates its full quota of 8KB to `c.com`. `b.com` cannot use `fetchLater()`.
4. The subframe `c.com` receives 8KB of quota.

### Redirects do not transfer quota

Assuming a top-level document on `a.com`, which embeds a subframe of `b.com`, which redirects to `c.com`, and no explicit top-level Permission Policies.

1. The top-level frame of `a.com` has the default 512KB quota.
2. The subframe of `b.com` receives 8KB of the default shared quota.
3. The 8KB is not transferred to `c.com` when `b.com` redirects to there, but the 8KB is not released.

### Redirects back to the top-level origin do allow use of the top-level origin

Assuming a top-level document on `a.com`, which embeds a subframe of `b.com`, which redirects to `a.com`, and no explicit top-level Permission Policies.

1. The top-level frame of `a.com` has the default 512KB quota.
2. The subframe of `b.com` receives 8KB of the default shared quota.
3. The 8KB is not transferred to `a.com` when `b.com` redirects to there, but it is able to share the full top-level quota again, and the 8KB is released.

### Examples which throw a `QuotaExceededError`

```js
// Maximum of 64KB per origin
fetchLater(a_72_kb_url);

// Maximum of 64KB per origin including headers
fetchLater("https://origin.example.com", { headers: headers_exceeding_64kb });

// Maximum of 64KB per origin including body and headers
fetchLater(a_32_kb_url, { headers: headers_exceeding_32kb });

// Maximum of 64KB per origin including body
fetchLater("https://origin.example.com", {
  method: "POST",
  body: body_exceeding_64_kb,
});

// Maximum of 64KB per origin including body and automatically added headers
fetchLater(a_62_kb_url /* with a 3kb referrer */);
```

### Examples which eventually throw a `QuotaExceededError`

In the following sequence, contained in the top-level document, the first two requests would succeed, but the third would throw. That's because, even though the overall 640KB quota was not exceeded, the third request exceeds the reporting-origin quota for `https://a.example.com` and would throw.

```js
fetchLater("https://a.example.com", { method: "POST", body: a_40kb_body });
fetchLater("https://b.example.com", { method: "POST", body: a_40kb_body });
fetchLater("https://a.example.com", { method: "POST", body: a_40kb_body });
```

## See also

- [`fetchLater()` API](/en-US/docs/Web/API/fetchLater_API)
