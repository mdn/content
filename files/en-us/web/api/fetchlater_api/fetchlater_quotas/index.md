---
title: fetchLater() quotas
slug: Web/API/fetchLater_API/fetchLater_quotas
page-type: guide
---

{{DefaultAPISidebar("fetchLater API")}}

The overall quota for `fetchLater()` is 640KB per document and by default this is divided into 512KB for the top-level origin (including direct subframes using that origin), and 128KB for cross-origin subframes. Each cross-origin iframe gets an 8KB quota by default that is allocated at subframe creation time (whether `fetchLater()` will be used in that subframe or not). This means in general only the first 16 subframes can use `fetchLater()` as they will use up the 128KB quota.

The top-level origin can also choose to allow selected cross-origin subframes to have an increased 64KB quota, taken out of the larger 512KB limit by listing those origins in the {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} Permission Policy (e.g., `deferred-fetch=(self "https://b.com")`). Again this is allocated at subframe creation time, leaving less quota for the top-level origin.

The top-level origin can also revoke this entire 128KB default subframe quota and instead have the full 640KB quota for itself and any named `deferred-fetch` cross-origins. It does this by setting the {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} Permission Policy to `()`.

Subframes can only further delegate the full quota to further subframes but cannot allow new quotas nor delegate parts of it's quota to subframes. Take the example of `a.com` embedding an iframe of `b.com` which embeds an iframe of `c.com`. By default `c.com` has no quota, but `b.com` can delegate it's full 8KB quota to `c.com` through the use of the `deferred-fetch` Permission Policy.

## Examples

### Using up the minimal quota

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. A subframe of `b.com` receives 64KB upon creation, from the top-level's 512KB limit.
2. A subframe of `c.com` is not listed and so receives 8KB upon creation from the 128KB shared limit.
3. 15 more subframes of different origins would receive 8KB upon creation (similar to `c.com`).
4. The next subframe would not be greanted any quota.
5. One of the subrames is removed. Its deferred fetches are sent.
6. The next subframe would receive an 8KB quota again.

## Revoking the minimal quota altogether with exceptions

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. A subframe of `b.com` receives 64KB upon creation.
2. A subframe of `c.com` receives no quota upon creation.
3. The top-level document and its same-origin descendants can use up to the full 640KB but that is reduced to 574KB if an `b.com` subframe is created.

## Revoking the minimal quota altogether with no exceptions

```http
Permissions-Policy: deferred-fetch-minimal=()
```

1. The top-level document and its same-origin descendants can use up the full 640KB.
2. Subframes are not allocated any quota and cannot use `fetchLater`.

## Same-origin subframes share quota with the top-level and can delegate to subframes

Assuming a top-level document on `a.com` which embeds an iframe of `a.com` which embeds and iframe of `b.com`, and no explicit Permission Policies.

1. A top-level frame of `a.com` has the default 512KB quota.
2. A subframe of `a.com` shares the 512KB quota.
3. The subframe `b.com` receives 8KB quota.

## Same-origin subframes canot share quota with the top-level when separated by a cross-origin subframe

Assuming a top-level document on `a.com` which embeds an iframe of `b.com` which embeds and iframe of `a.com`, and no explicit Permission Policies.

1. A top-level frame of `a.com` has the default 512KB quota.
2. A subframe of `b.com` shares the 8KB quota.
3. The subframe `a.com` receives no quota, as even though this is same-origin as top-origin ir is separated by a cross-origin.

## Secondary subframes of subframes do not get quota by default

Assuming a top-level document on `a.com` which embeds an iframe of `b.com` which embeds and iframe of `c.com`, and no explicit Permission Policies.

1. A top-level frame of `a.com` has the default 512KB quota.
2. A subframe of `b.com` receives 8KB of the default shared quota.
3. The subframe `c.com` receives no quota.

## Granting the full quota to a further subframe

Assuming a top-level document on `a.com` which embeds an iframe of `b.com` which embeds and iframe of `c.com`, and no explicit top-level Permission Policy, but a Permission Policy of the following on `b.com`:

```http
Permissions-Policy: deferred-fetch=("https://c.com")
```

1. A top-level frame of `a.com` has the default 512KB quota.
2. A subframe of `b.com` receives 8KB of the default shared quota.
3. The subframe `b.com` delegates its full quota of 8KB to `c.com`. `b.com` cannot use `fetchLater()`.
4. The subframe `c.com` receives 8KB of quota.

## Redirects do not transfer quota

Assuming a top-level document on `a.com` which embeds an iframe of `b.com` which redirects to `c.com`, and no explicit top-level Permission Policies.

1. A top-level frame of `a.com` has the default 512KB quota.
2. A subframe of `b.com` receives 8KB of the default shared quota.
3. The 8KB is not transferred to `c.com` when `b.com` redirects to there, but the 8KB is not released.

## Redirects back to the top-level origin do allow use of the top-level origin

Assuming a top-level document on `a.com` which embeds an iframe of `b.com` which redirects to `a.com`, and no explicit top-level Permission Policies.

1. A top-level frame of `a.com` has the default 512KB quota.
2. A subframe of `b.com` receives 8KB of the default shared quota.
3. The 8KB is not transferred to `a.com` when `b.com` redirects to there, but it is able to share the full top-level quota again, anf the 8KB is released.

## See also

- [HTTP](/en-US/docs/Web/HTTP)
- [fetchLater() API](/en-US/docs/Web/API/fetchLater_API)
- [Using the fetchLater() API](/en-US/docs/Web/API/fetchLater_API/Using_fetchlater)
