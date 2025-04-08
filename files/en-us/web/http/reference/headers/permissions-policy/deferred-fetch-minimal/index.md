---
title: "Permissions-Policy: deferred-fetch-minimal"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch-minimal
page-type: http-permissions-policy-directive
---

{{HTTPSidebar}}{{SeeCompatTable}}

The `deferred-fetch` and {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} {{HTTPHeader("Permissions-Policy")}} header are part of the [`fetchLater()` API](/en-US/docs/Web/API/fetchLater_API)

They determine how the overall 640KB quota limit is distributed between the top level origin and its cross-origin subframes. By default the top-level origin is granted 512KB and each cross-origin subframe is granted 8KB out of the rest of the 128KB. The `deferred-fetch-minimal` Permission Policy can also block all origins and this will reallocate the 128KB shared limit to the top-level quota giving it access to the full 640KB limit.

See [`fetchLater()` quotas](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas) guide for more details and examples.

## Syntax

```http
Permissions-policy: deferred-fetch-minimal=*
Permissions-policy: deferred-fetch-minimal=()
Permissions-policy: deferred-fetch-minimal=(self)
Permissions-policy: deferred-fetch-minimal=(<urllist>)
```

- `<urllist>`
  - : A list of origins which are allowed to use the secondary 128KB quota (with a maximum of 8KB per origin). For `*`, `()` or `(self)`

A top level frame that has the deferred-fetch-minimal permission set to `self` or `()`, does not delegates the minimal 8kb quota to subframes at all. Instead, the 128KB quota for iframes is added to its normal quota.

## Default policy

The default allowlist for `deferred-fetch-minimal` is `*`.

## Examples

See [`fetchLater()` quotas](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas) for more examples.

### Using up the minimal quota

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. A subframe of `b.com` receives 64KB upon creation, from the top-level's 512KB limit.
2. A subframe of `c.com` is not listed and so receives 8KB upon creation from the 128KB shared limit.
3. 15 more subframes would receive 8KB upon creation (similar to `c.com`, and another `c.com` subframe would also receive another 8KB quota).
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`fetchLater()` quotas](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [`fetchLater()` API](/en-US/docs/Web/API/fetchLater_API)
- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
