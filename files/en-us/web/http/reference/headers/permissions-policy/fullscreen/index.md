---
title: "Permissions-Policy: fullscreen directive"
short-title: fullscreen
slug: Web/HTTP/Reference/Headers/Permissions-Policy/fullscreen
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.fullscreen
sidebar: http
---

{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `fullscreen` directive controls whether the current document is allowed to use {{domxref('Element.requestFullscreen()')}}.

Specifically, where a defined policy blocks use of this feature, {{domxref('Element.requestFullscreen', "requestFullscreen()")}} calls will return a {{jsxref('Promise')}} that rejects with a {{jsxref('TypeError')}}.

> [!NOTE]
> If both this directive (i.e., via the `allow` attribute) and the `allowfullscreen` attribute are present on an `<iframe>` element, this directive takes precedence.

## Syntax

```http
Permissions-Policy: fullscreen=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `fullscreen` is `self`. The top-level browsing context and same-origin iframes are allowed access to the `fullscreen` feature by default.

## Examples

### Basic usage

SecureCorp Inc. wants to disallow `fullscreen` within all cross-origin iframes except those whose origin is `https://example.com`. It can do so by delivering the following HTTP response header to define a Permissions Policy:

```http
Permissions-Policy: fullscreen=(self "https://example.com")
```

SecureCorp Inc. must also include an {{HTMLElement('iframe','allow','#Attributes')}} attribute on each `<iframe>` element where `fullscreen` is to be allowed:

```html
<iframe src="https://example.com/presentation" allow="fullscreen"></iframe>
```

> [!NOTE]
> Specifying the `Permissions-Policy` header in this manner disallows `fullscreen` for other origins, even if they were allowed by the `<iframe>` `allow` attribute.

### Using the default policy

Without delivering an HTTP response header defining a Permissions Policy for `fullscreen`, user agents will apply the default allowlist `self`. In this mode, `fullscreen` is automatically allowed in the top-level browsing context and same-origin iframes, but not in cross-origin iframes.

To allow `fullscreen` in a cross-origin iframe, include an {{HTMLElement('iframe','allow','#Attributes')}} attribute on the `<iframe>` element:

```html
<iframe src="https://other.com/videoplayer" allow="fullscreen"></iframe>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
