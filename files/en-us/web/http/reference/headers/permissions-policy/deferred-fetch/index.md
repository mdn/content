---
title: "Permissions-Policy: deferred-fetch"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch
page-type: http-permissions-policy-directive
browser-compat: http.headers.Permission-Policy.deferred-fetch
---

{{HTTPSidebar}}{{SeeCompatTable}}

The `deferred-fetch` and {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} {{HTTPHeader("Permissions-Policy")}} directives are part of the [`fetchLater()` API](/en-US/docs/Web/API/fetchLater_API).

They determine how the overall 640KB quota limit is distributed between the top-level origin and its cross-origin subframes. By default, the top-level origin is granted 512KB, and each cross-origin subframe is granted 8KB out of the rest of the 128KB. The `deferred-fetch` Permissions Policy can allow sub-frame origins to be granted a larger 64KB quota out of the top-level 512KB quota in place of the 8KB minimal quota they would otherwise receive by default.

See [`fetchLater()` quotas](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas) for more details and examples.

## Syntax

```http
Permissions-policy: deferred-fetch=(self)
Permissions-policy: deferred-fetch=(self <urllist>)
Permissions-policy: deferred-fetch=(<urllist>)
```

- `<urllist>`
  - : A space-separated list of origins (each of which is given in quotation marks) which are granted a higher quota of 64KB taken from the parent's main quota. The 64KB quota is taken at the time the subframe is created.

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

1. A subframe of `b.com` receives 64KB upon creation, from the top-level's 512KB limit.
2. A subframe of `c.com` is not listed and so receives 8KB upon creation from the 128KB shared limit.
3. 15 more subframes of different origins would receive 8KB upon creation (similar to `c.com`).
4. The next subframe would not be granted any quota.
5. If one of the subframes is removed, its deferred fetches will be sent.
6. The next subframe would receive an 8KB quota, as there is quota available again.

## Revoking the minimal quota altogether

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. A subframe of `b.com` receives 64KB upon creation.
2. A subframe of `c.com` receives no quota upon creation.
3. The top-level document and its same-origin descendants can use up to the full 640KB, but that is reduced to 574KB if a `b.com` subframe is created.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`fetchLater()` quotas](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [`fetchLater()` API](/en-US/docs/Web/API/fetchLater_API)
- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
