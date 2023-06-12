---
title: "IdleDetector: requestPermission() static method"
short-title: requestPermission()
slug: Web/API/IdleDetector/requestPermission_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.IdleDetector.requestPermission_static
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}

The **`requestPermission()`** static method of the {{domxref("IdleDetector")}}
interface returns a {{jsxref('Promise')}} that resolves with a string when the user has chosen
whether to grant the origin access to their idle state. Resolves with
`"granted"` on acceptance and `"denied"` on refusal.

## Syntax

```js-nolint
IdleDetector.requestPermission()
```

### Parameters

None.

### Return value

A `Promise` that resolves with `"granted"` or `"denied"`.

## Security

[Transient user activation](/en-US/docs/Web/Security/User_activation) is required. The user has to interact with the page or a UI element in order for this feature to work.

## Examples

The following example uses a `click` event on a button to trigger requesting the user for permission to detect when user is idle.

```js
startButton.addEventListener("click", async () => {
  if ((await IdleDetector.requestPermission()) !== "granted") {
    console.error("Idle detection permission denied.");
    return;
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
