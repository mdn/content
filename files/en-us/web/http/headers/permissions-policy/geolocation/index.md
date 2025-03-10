---
title: "Permissions-Policy: geolocation"
slug: Web/HTTP/Headers/Permissions-Policy/geolocation
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.geolocation
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header
`geolocation` directive controls whether the current document is allowed to
use the {{domxref('Geolocation')}} Interface.

Specifically, where a defined policy blocks use of this feature, calls to
{{domxref('Geolocation.getCurrentPosition','getCurrentPosition()')}} and
{{domxref('Geolocation.watchPosition','watchPosition()')}} will cause those functions'
callbacks to be invoked with a {{domxref('GeolocationPositionError')}} code of
`PERMISSION_DENIED`.

By default, the Geolocation API can be used within top-level documents and their
same-origin child frames. This directive allows or prevents cross-origin frames from
accessing geolocation. This includes same-origin frames.

## Syntax

```http
Permissions-Policy: geolocation=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `geolocation` is `self`.

## Examples

### General example

SecureCorp Inc. wants to disable the Geolocation API within all browsing contexts
except for its own origin and those whose origin is `https://example.com`. It
can do so by delivering the following HTTP response header to define a Permissions Policy:

```http
Permissions-Policy: geolocation=(self "https://example.com")
```

### With an \<iframe> element

FastCorp Inc. wants to disable `geolocation` for all cross-origin child
frames, except for a specific `<iframe>`. It can do so by delivering the following
HTTP response header to define a Permissions Policy:

```http
Permissions-Policy: geolocation=(self)
```

Then include an {{HTMLElement('iframe','allow','#Attributes')}} attribute on the
`<iframe>` element:

```html
<iframe src="https://other.com/map" allow="geolocation"></iframe>
```

Interestingly, `allow` attributes can selectively enable features in certain frames, and not in others,
even if those frames contain documents from the same origin.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
