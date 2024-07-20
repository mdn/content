---
title: "Permissions-Policy: bluetooth"
slug: Web/HTTP/Headers/Permissions-Policy/bluetooth
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.bluetooth
---

{{HTTPSidebar}} {{SeeCompatTable}}

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
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `bluetooth` is `self`.

## Examples

### General example

SecureCorp Inc. wants to disable the Web Bluetooth API within all browsing contexts except for its own origin and those whose origin is `https://example.com`.
It can do so by delivering the following HTTP response header to define a Permissions Policy:

```http
Permissions-Policy: bluetooth=(self "https://example.com")
```

### With an \<iframe> element

FastCorp Inc. wants to disable `bluetooth` for all cross-origin child frames, except for a specific `<iframe>`.
It can do so by delivering the following HTTP response header to define a Permissions Policy:

```http
Permissions-Policy: bluetooth=(self https://other.com/blue)
```

Then include an {{HTMLElement('iframe','allow','#Attributes')}} attribute on the `<iframe>` element:

```html
<iframe src="https://other.com/blue" allow="bluetooth"></iframe>
```

`<iframe>` attributes can selectively enable features in certain frames, and not in others, even if those frames contain documents from the same origin.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
