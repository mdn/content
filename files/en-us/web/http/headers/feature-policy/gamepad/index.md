---
title: 'Feature-Policy: gamepad'
slug: Web/HTTP/Headers/Feature-Policy/gamepad
tags:
  - Feature Policy
  - Gamepad
  - HTTP
  - header
  - Experimental
browser-compat: http.headers.Feature-Policy.gamepad
---
{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Feature-Policy")}} header `gamepad` directive controls whether the current document is allowed to use the [Gamepad API](/en-US/docs/Web/API/Gamepad_API).
When this policy is disabled, calls to {{domxref('Navigator.getGamepads()')}} will throw a `SecurityError` {{domxref('DOMException')}}.
In addition, the {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} and {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} events will not fire.

## Syntax

```http
Feature-Policy: gamepad <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

Default allow list for `gamepad` is `'self'`.

## Examples

### General example

SecureCorp Inc. wants to disable the Gamepad API within all browsing contexts except for its own origin and those whose origin is `https://example.com`.
It can do so by delivering the following HTTP response header to define a feature policy:

```http
Feature-Policy: gamepad 'self' https://example.com
```

### With an \<iframe> element

FastCorp Inc. wants to disable `gamepad` for all cross-origin child frames, except for a specific \<iframe>.
It can do so by delivering the following HTTP response header to define a feature policy:

```http
Feature-Policy: gamepad 'self'
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

- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
