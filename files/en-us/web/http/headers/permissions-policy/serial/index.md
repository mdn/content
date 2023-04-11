---
title: "Permissions-Policy: serial"
slug: Web/HTTP/Headers/Permissions-Policy/serial
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.serial
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `serial` directive controls whether the current document is allowed to use the {{domxref("Web Serial API", "Web Serial API", "", "nocode")}} to communicate with serial devices, either directly connected via a serial port, or via USB or Bluetooth devices emulating a serial port.

Specifically, where a defined policy blocks use of this feature, {{domxref("Serial.requestPort()")}} and {{domxref("Serial.getPorts()")}} calls will return a {{jsxref("Promise")}} that rejects with a {{domxref("DOMException")}} of type `SecurityError`.

## Syntax

```http
Permissions-Policy: serial=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `serial` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
