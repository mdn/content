---
title: Navigator.clearAppBadge()
slug: Web/API/Navigator/clearAppBadge
page-type: web-api-instance-method
tags:
  - API
  - Badging API
  - Method
  - Reference
  - clearAppBadge
  - Navigator
  - Experimental
browser-compat: api.Navigator.clearAppBadge
---
{{APIRef("Badging API")}}{{SeeCompatTable}}

The **`clearAppBadge()`** method of the {{domxref("Navigator")}} interface clears a badge on the current app's icon by setting it to `nothing`. The value `nothing` indicates that no badge is currently set, and the status of the badge is _cleared_.

## Syntax

```js
clearAppBadge()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with {{jsxref("undefined")}}.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("Navigator")}} does not have a document that this action can be acted on.

## Examples

Once all messages in an application have been read, call `clearAppBadge()` to clear the badge and remove the notification.

```js
navigator.clearAppBadge()
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Badging for app icons](https://web.dev/badging-api/)
