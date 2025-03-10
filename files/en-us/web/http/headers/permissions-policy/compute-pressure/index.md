---
title: "Permissions-Policy: compute-pressure"
slug: Web/HTTP/Headers/Permissions-Policy/compute-pressure
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.compute-pressure
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `compute-pressure` directive controls access to the [Compute Pressure API](/en-US/docs/Web/API/Compute_Pressure_API).

## Syntax

```http
Permissions-Policy: compute-pressure=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `compute-pressure` is `self` allowing usage in same-origin nested frames but preventing third-party content from using the feature. Workers (dedicated and shared) adhere to the permission policy set by their owning document(s).

## Examples

### Enabling compute pressure on third-party content

Third-party usage can be selectively enabled using the `allow` attribute on {{HTMLElement("iframe")}} elements:

```html
<iframe src="https://example.com" allow="compute-pressure"></iframe>
```

### Disabling the Compute Pressure API completely

This HTTP response header disables compute pressure completely:

```http
Permissions-Policy: {"compute-pressure": []}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
- [Compute Pressure API](/en-US/docs/Web/API/Compute_Pressure_API)
