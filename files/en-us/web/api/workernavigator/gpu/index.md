---
title: "WorkerNavigator: gpu property"
short-title: gpu
slug: Web/API/WorkerNavigator/gpu
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.WorkerNavigator.gpu
---

{{APIRef("Web Workers API")}}{{SeeCompatTable}}

The **`gpu`** read-only property of the {{domxref("WorkerNavigator")}} interface returns the {{domxref("GPU")}} object for the current worker context, which is the entry point for the {{domxref("WebGPU_API", "WebGPU API", "", "nocode")}}.

## Value

A {{domxref("GPU")}} object.

## Examples

```js
// Can be run inside a web worker
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const device = await adapter.requestDevice();

  //...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGPU_API", "WebGPU API", "", "nocode")}}
