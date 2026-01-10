---
title: "Permissions-Policy: geolocation directive"
short-title: geolocation
slug: Web/HTTP/Reference/Headers/Permissions-Policy/geolocation
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.geolocation
sidebar: http
---

{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header
`geolocation` directive controls whether the current document is allowed to
use the {{domxref('Geolocation')}} Interface.

Specifically, where a defined policy blocks use of this feature, calls to
{{domxref('Geolocation.getCurrentPosition','getCurrentPosition()')}} and
{{domxref('Geolocation.watchPosition','watchPosition()')}} will cause those functions'
callbacks to be invoked with a {{domxref('GeolocationPositionError')}} code of
`PERMISSION_DENIED`.

## Syntax

```http
Permissions-Policy: geolocation=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `geolocation` is `self`. The top-level browsing context and same-origin iframes are allowed access to the `geolocation` feature by default.

## Examples

### Basic usage

SecureCorp Inc. wants to disallow `geolocation` within all browsing contexts except for its own origin and those whose origin is `https://example.com`. It can do so by delivering the following HTTP response header to define a Permissions Policy:

```http
Permissions-Policy: geolocation=(self "https://example.com")
```

Then include an {{HTMLElement('iframe','allow','#Attributes')}} attribute on the `<iframe>` element:

```html
<iframe src="https://example.com/map" allow="geolocation"></iframe>
```

> [!NOTE]
> Specifying the `Permissions-Policy` header in this manner disallows `geolocation` for other origins, even if they would be allowed by the `<iframe>` `allow` attribute.

### Using the default policy

FastCorp Inc. wants to allow `geolocation` in a specific cross-origin child frame. Since the default allowlist for `geolocation` is `self`, it can do so by including an {{HTMLElement('iframe','allow','#Attributes')}} attribute on the `<iframe>` element:

```html
<iframe src="https://other.com/store-locator" allow="geolocation"></iframe>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
