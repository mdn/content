---
title: "XRSession: end() method"
short-title: end()
slug: Web/API/XRSession/end
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRSession.end
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`end()`** method shuts down the
{{domxref("XRSession")}} on which it's called, returning a promise which resolves once
the session has fully shut down.

## Syntax

```js-nolint
end()
```

### Parameters

None.

### Return value

A {{jsxref("promise")}} that resolves without a value after any platform-specific steps
related to shutting down the session have completed. You can use the promise to do
things like update UI elements to reflect the shut down connection, trigger application
shut down, or whatever else you might need to do.

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
