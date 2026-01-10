---
title: "Permissions-Policy: bluetooth directive"
short-title: bluetooth
slug: Web/HTTP/Reference/Headers/Permissions-Policy/bluetooth
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.bluetooth
sidebar: http
---

{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `bluetooth` directive controls whether the current document is allowed to use the [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API).

Specifically, where a defined policy disallows use of this feature, the methods of the {{domxref('Bluetooth')}} object returned by {{domxref('Navigator.bluetooth')}}, will block access:

- {{DOMxRef("Bluetooth.getAvailability()")}} will always fulfill its returned {{jsxref("Promise")}} with a value of `false`.
- {{DOMxRef("Bluetooth.getDevices()")}} will reject its returned {{jsxref("Promise")}} with a `SecurityError` {{domxref("DOMException")}}.
- {{DOMxRef("Bluetooth.requestDevice()")}} will reject its returned {{jsxref("Promise")}} with a `SecurityError` {{domxref("DOMException")}}.

## Syntax

```http
Permissions-Policy: bluetooth=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `bluetooth` is `self`. The top-level browsing context and same-origin iframes are allowed access to the `bluetooth` feature by default.

## Examples

### Basic usage

SecureCorp Inc. wants to disallow `bluetooth` within all browsing contexts except for its own origin and those whose origin is `https://example.com`. It can do so by delivering the following HTTP response header to define a Permissions Policy:

```http
Permissions-Policy: bluetooth=(self "https://example.com")
```

Then include an {{HTMLElement('iframe','allow','#Attributes')}} attribute on the `<iframe>` element:

```html
<iframe src="https://example.com/blue" allow="bluetooth"></iframe>
```

> [!NOTE]
> Specifying the `Permissions-Policy` header in this manner disallows `bluetooth` for other origins, even if they would be allowed by the `<iframe>` `allow` attribute.

### Using the default policy

FastCorp Inc. wants to allow `bluetooth` in a specific cross-origin child frame. Since the default allowlist for `bluetooth` is `self`, it can do so by including an {{HTMLElement('iframe','allow','#Attributes')}} attribute on the `<iframe>` element:

```html
<iframe src="https://other.com/blue" allow="bluetooth"></iframe>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
