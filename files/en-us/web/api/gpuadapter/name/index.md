---
title: GPUAdapter.name
slug: Web/API/GPUAdapter/name
page-type: web-api-instance-property
status:
  - experimental
  - non-standard
browser-compat: api.GPUAdapter.name
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{Non-standard_Header}}

The **`name`** read-only property of the
{{domxref("GPUAdapter")}} interface returns a string containing the name of the adapter.

## Value

A string.

## Examples

```js
async function init() {
  if (!navigator.gpu) {
    throw Error('WebGPU not supported.');
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error('Couldn\'t request WebGPU adapter.');
  }

  console.log(adapter.name);

  // ...

}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
