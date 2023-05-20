---
title: "Permissions-Policy: gamepad"
slug: Web/HTTP/Headers/Permissions-Policy/gamepad
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.gamepad
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `gamepad` directive controls whether the current document is allowed to use the [Gamepad API](/en-US/docs/Web/API/Gamepad_API).

Specifically, where a defined policy blocks use of this feature, calls to {{domxref('Navigator.getGamepads()')}} will throw a `SecurityError` {{domxref('DOMException')}}. In addition, the {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} and {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} events will not fire.

## Syntax

```http
Permissions-Policy: gamepad=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `gamepad` is `self`.

## Examples

### General example

SecureCorp Inc. wants to disable the Gamepad API within all browsing contexts except for its own origin and those whose origin is `https://example.com`.
It can do so by delivering the following HTTP response header to define a Permissions Policy:

```http
Permissions-Policy: gamepad=(self "https://example.com")
```

### With an \<iframe> element

FastCorp Inc. wants to disable `gamepad` for all cross-origin child frames, except for a specific `<iframe>`.
It can do so by delivering the following HTTP response header to define a Permissions Policy:

```http
Permissions-Policy: gamepad=(self)
```

Then include an {{HTMLElement('iframe','allow','#Attributes')}} attribute on the `<iframe>` element:

```html
<iframe src="https://other.com/game" allow="gamepad"></iframe>
```

iframe attributes can selectively enable features in certain frames, and not in others, even if those frames contain documents from the same origin.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
