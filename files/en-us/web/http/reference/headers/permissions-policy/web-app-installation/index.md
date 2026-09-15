---
title: "Permissions-Policy: web-app-installation directive"
short-title: web-app-installation
slug: Web/HTTP/Reference/Headers/Permissions-Policy/web-app-installation
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.web-app-installation
sidebar: http
---

{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `web-app-installation` directive controls whether or not the current document is allowed to install a [progressive web app (PWA)](/en-US/docs/Glossary/Progressive_web_apps) via the {{domxref("Navigator.install()")}} method or the {{htmlelement("install")}} element.

Specifically, where a defined policy blocks usage, installation will fail.

## Syntax

```http
Permissions-Policy: web-app-installation=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `web-app-installation` is `self`. The top-level browsing context and same-origin iframes are allowed access to the Prompt API by default.

## Examples

### Basic usage

SecureCorp Inc. wants to disallow `web-app-installation` within all cross-origin iframes except those whose origin is `https://example.com`. It can do so by delivering the following HTTP response header to define a Permissions Policy:

```http
Permissions-Policy: web-app-installation=(self "https://example.com")
```

SecureCorp Inc. must also include an {{HTMLElement('iframe','allow','#Attributes')}} attribute on each `<iframe>` element where `web-app-installation` is to be allowed:

```html
<iframe src="https://example.com/app" allow="web-app-installation"></iframe>
```

> [!NOTE]
> Specifying the `Permissions-Policy` header in this manner disallows `web-app-installation` for other origins, even if they are allowed by the `<iframe>` `allow` attribute.

### Using the default policy

If an allowlist for `web-app-installation` is not defined by a `Permissions-Policy` response header, user agents will apply the default allowlist `self`. In this mode, `web-app-installation` is automatically allowed in the top-level browsing context and same-origin iframes, but not in cross-origin iframes.

To allow `web-app-installation` in a cross-origin iframe, include an {{HTMLElement('iframe','allow','#Attributes')}} attribute on the `<iframe>` element:

```html
<iframe src="https://other.com/app" allow="language-model"></iframe>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
