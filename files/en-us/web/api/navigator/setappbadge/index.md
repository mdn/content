---
title: "Navigator: setAppBadge() method"
short-title: setAppBadge()
slug: Web/API/Navigator/setAppBadge
page-type: web-api-instance-method
browser-compat: api.Navigator.setAppBadge
---

{{APIRef("Badging API")}}{{securecontext_header}}

The **`setAppBadge()`** method of the {{domxref("Navigator")}} interface sets a badge on the icon associated with this app. If a value is passed to the method, this will be set as the value of the badge. Otherwise the badge will display as a dot, or other indicator as defined by the platform.

## Syntax

```js-nolint
setAppBadge()
setAppBadge(contents)
```

### Parameters

- `contents` {{optional_inline}}
  - : A {{jsxref("number")}} which will be used as the value of the badge. If `contents` is `0` then the badge will be set to `nothing`, indicating a cleared badge.

### Return value

A {{jsxref("Promise")}} that resolves with {{jsxref("undefined")}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the document is not fully active.
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the call was blocked by the [same-origin policy](/en-US/docs/Web/Security/Same-origin_policy).
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if {{domxref('PermissionStatus.state')}} is not `granted`.

## Examples

In the example below an unread count is passed to `setAppBadge()`. The badge should then display `30`.

```js
const unread = 30;
navigator.setAppBadge(unread);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Badging for app icons](https://developer.chrome.com/docs/capabilities/web-apis/badging-api/)
