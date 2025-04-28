---
title: "GPU: wgslLanguageFeatures property"
short-title: wgslLanguageFeatures
slug: Web/API/GPU/wgslLanguageFeatures
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPU.wgslLanguageFeatures
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`wgslLanguageFeatures`** read-only property of the
{{domxref("GPU")}} interface returns a {{domxref("WGSLLanguageFeatures")}} object that reports the [WGSL language extensions](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) supported by the WebGPU implementation.

> [!NOTE]
> Not all WGSL language extensions are available to WebGPU in all browsers that support the API. We recommend you thoroughly test any extensions you choose to use.

## Value

A {{domxref("WGSLLanguageFeatures")}} object instance. This is a [setlike](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) object.

## Examples

```js
if (!navigator.gpu) {
  throw Error("WebGPU not supported.");
}

const wgslFeatures = navigator.gpu.wgslLanguageFeatures;

// Return the size of the set
console.log(wgslFeatures.size);

// Iterate through all the set values using values()
const valueIterator = wgslFeatures.values();
for (const value of valueIterator) {
  console.log(value);
}

// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
