---
title: IdleDetector.requestPermission()
slug: Web/API/IdleDetector/requestPermission
tags:
  - API
  - Method
  - Reference
  - requestPermission
  - IdleDetector
browser-compat: api.IdleDetector.requestPermission
---
{{securecontext_header}}{{DefaultAPISidebar("Idle Detection API")}} 

The **`requestPermission()`** method of the {{domxref("IdleDetector")}}
interface returns a {{jsxref('Promise')}} that resolves with a string when the user has chosen
whether to grant the origin access to their idle state. Resolves with
`"granted"` on acceptance and `"denied"` on refusal.

## Syntax

```js
IdleDetector.requestPermission()
```

### Parameters

None.

### Return Value

A `Promise` that resolves with `"granted"` or `"denied"`.

## Examples

The following example uses a `click` event on a button to trigger requesting the user for permission to detect when user is idle.

```js
startButton.addEventListener('click', async () => {
  if (await IdleDetector.requestPermission() != "granted") {
    console.error("Idle detection permission denied.");
    return;
  }
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

