---
title: "Permissions-Policy: deferred-fetch-minimal"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch-minimal
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.deferred-fetch-minimal
---

{{HTTPSidebar}}{{SeeCompatTable}}

The **`deferred-fetch-minimal`** {{HTTPHeader("Permissions-Policy")}} directive is part of the [`fetchLater()` API](/en-US/docs/Web/API/fetchLater_API).

This directive, along with {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}}, determines how the overall 640KiB quota limit is distributed between the top-level origin and its cross-origin subframes. By default, the top-level origin is granted 512KiB, and each cross-origin subframe is granted 8KiB out of the remaining 128KiB. The `deferred-fetch-minimal` Permissions Policy can also block all origins; this will reallocate the 128KiB shared limit to the top-level quota, giving it access to the full 640KiB limit.

See [`fetchLater()` quotas](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas) guide for more details and examples.

## Syntax

```http
Permissions-policy: deferred-fetch-minimal=*
Permissions-policy: deferred-fetch-minimal=()
Permissions-policy: deferred-fetch-minimal=(self)
Permissions-policy: deferred-fetch-minimal=(<url-list>)
```

- `<url-list>`
  - : A space-separated list of origins that are allowed to use the secondary 128KiB quota (with a maximum of 8KiB per subframe).

A top-level frame with the `deferred-fetch-minimal` permission set to `self` or `()` does not allowed the default shared 128kb quota to be used by cross-origin subframes at all. Instead, the 128KiB quota for subframes is added to its normal quota.

## Default policy

The default allowlist for `deferred-fetch-minimal` is `*`.

## Examples

See [`fetchLater()` quotas](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas) for more examples.

### Using up the minimal quota

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. A subframe of `b.com` receives 64KiB upon creation, from the top-level's 512KiB limit.
2. A subframe of `c.com` is not listed and so receives 8KiB upon creation from the 128KiB shared limit.
3. 15 more subframes would receive 8KiB upon creation (similar to `c.com`, and another `c.com` subframe would also receive another 8KiB quota).
4. The next subframe would not be granted any quota.
5. If one of the subframes is removed, its deferred fetches will be sent.
6. The next subframe would receive an 8KiB quota, as there is quota available again.

## Revoking the minimal quota altogether with exceptions

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. A subframe of `b.com` receives 64KiB upon creation.
2. A subframe of `c.com` receives no quota upon creation.
3. The top-level document and its same-origin descendants can use up to the full 640KiB, but that is reduced to 574KiB if a `b.com` subframe is created.

## Revoking the minimal quota altogether with no exceptions

```http
Permissions-Policy: deferred-fetch-minimal=()
```

1. The top-level document and its same-origin descendants can use up the full 640KiB.
2. Subframes are not allocated any quota and cannot use `fetchLater()`.

## Restricting the minimal quota to named origins

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=("https://c.com")
```

1. A subframe of `b.com` receives 64KiB upon creation.
2. A subframe of `c.com` receives 8KiB upon creation.
3. A subframe of `d.com` receives no quota upon creation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`fetchLater()` quotas](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [`fetchLater()` API](/en-US/docs/Web/API/fetchLater_API)
- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
