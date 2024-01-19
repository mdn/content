---
title: "WorkerNavigator: clearAppBadge() method"
short-title: clearAppBadge()
slug: Web/API/WorkerNavigator/clearAppBadge
page-type: web-api-instance-method
browser-compat: api.WorkerNavigator.clearAppBadge
---

{{APIRef("Badging API")}}{{securecontext_header}}

The **`clearAppBadge()`** method of the {{domxref("WorkerNavigator")}} interface clears a badge on the current app's icon by setting it to `nothing`. The value `nothing` indicates that no badge is currently set, and the status of the badge is _cleared_.

## Syntax

```js-nolint
clearAppBadge()
```

### Parameters

None.

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

Once all messages in an application have been read, call `clearAppBadge()` to clear the badge and remove the notification.

```js
navigator.clearAppBadge();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Badging for app icons](https://developer.chrome.com/docs/capabilities/web-apis/badging-api/)
