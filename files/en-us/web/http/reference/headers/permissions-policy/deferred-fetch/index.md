---
title: "Permissions-Policy: deferred-fetch"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.deferred-fetch
---

{{HTTPSidebar}}{{SeeCompatTable}}

The **`deferred-fetch`** {{HTTPHeader("Permissions-Policy")}} directive is part of the [`fetchLater()` API](/en-US/docs/Web/API/fetchLater_API).

This directive, along with {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}}, determines how the overall 640KiB quota limit is distributed between the top-level origin and its cross-origin subframes. By default, the top-level origin is granted 512KiB, and each cross-origin subframe is granted 8KiB out of the rest of the 128KiB. The `deferred-fetch` Permissions Policy can allow sub-frame origins to be granted a larger 64KiB quota out of the top-level 512KiB quota in place of the 8KiB minimal quota they would otherwise receive by default.

See [`fetchLater()` quotas](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas) for more details and examples.

## Syntax

```http
Permissions-policy: deferred-fetch=(self)
Permissions-policy: deferred-fetch=(self <url-list>)
Permissions-policy: deferred-fetch=(<url-list>)
```

- `<url-list>`
  - : A space-separated list of origins (each of which is given in quotation marks) which are granted a higher quota of 64KiB taken from the parent's main quota. The 64KiB quota is taken at the time the subframe is created.

A cross-origin subframe can grant `deferred-fetch` to one of its cross-origin subframe descendants, delegating its entire quota. This only works if none of the quota is currently being used.

Permissions Policy checks are not discernable from quota checks. Calling `fetchLater()` will throw a `QuotaExceededError` both if the quota is actually exceeded and if the quota was restricted for that origin via a Permissions Policy.

## Default policy

The default allowlist for `deferred-fetch` is `self`.

## Examples

See [`fetchLater()` quotas](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas) for more examples.

### Using up the minimal quota

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. A subframe of `b.com` receives 64KiB upon creation, from the top-level's 512KiB limit.
2. A subframe of `c.com` is not listed and so receives 8KiB upon creation from the 128KiB shared limit.
3. 15 more subframes of different origins would receive 8KiB upon creation (similar to `c.com`).
4. The next subframe would not be granted any quota.
5. If one of the subframes is removed, its deferred fetches will be sent.
6. The next subframe would receive an 8KiB quota, as there is quota available again.

## Revoking the minimal quota altogether

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. A subframe of `b.com` receives 64KiB upon creation.
2. A subframe of `c.com` receives no quota upon creation.
3. The top-level document and its same-origin descendants can use up to the full 640KiB, but that is reduced to 574KiB if a `b.com` subframe is created.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`fetchLater()` quotas](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [`fetchLater()` API](/en-US/docs/Web/API/fetchLater_API)
- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
