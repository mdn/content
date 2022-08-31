---
title: 'Feature-Policy: geolocation'
slug: Web/HTTP/Headers/Feature-Policy/geolocation
tags:
  - Feature Policy
  - Geolocation
  - HTTP
  - header
browser-compat: http.headers.Feature-Policy.geolocation
---
{{HTTPSidebar}}

The HTTP {{HTTPHeader("Feature-Policy")}} header
`geolocation` directive controls whether the current document is allowed to
use the {{domxref('Geolocation')}} Interface. When this policy is enabled, calls to
{{domxref('Geolocation.getCurrentPosition','getCurrentPosition()')}} and
{{domxref('Geolocation.watchPosition','watchPosition()')}} will cause those functions'
callbacks to be invoked with a {{domxref('GeolocationPositionError')}} code of
`PERMISSION_DENIED`.

By default, the Geolocation API can be used within top-level documents and their
same-origin child frames. This directive allows or prevents cross-origin frames from
accessing geolocation. This includes same-origin frames.

## Syntax

```http
Feature-Policy: geolocation <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

Default allow list for `geolocation` is `'self'`.

## Examples

### General example

SecureCorp Inc. wants to disable the Geolocation API within all browsing contexts
except for its own origin and those whose origin is `https://example.com`. It
can do so by delivering the following HTTP response header to define a feature policy:

```http
Feature-Policy: geolocation 'self' https://example.com
```

### With an \<iframe> element

FastCorp Inc. wants to disable `geolocation` for all cross-origin child
frames, except for a specific \<iframe>. It can do so by delivering the following
HTTP response header to define a feature policy:

```http
Feature-Policy: geolocation 'self'
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

- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
