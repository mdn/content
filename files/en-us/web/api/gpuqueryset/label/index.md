---
title: "GPUQuerySet: label property"
short-title: label
slug: Web/API/GPUQuerySet/label
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUQuerySet.label
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`label`** property of the
{{domxref("GPUQuerySet")}} interface is a string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

This can be set by providing a `label` property in the descriptor object passed into the originating {{domxref("GPUDevice.createQuerySet()")}} call, or you can get and set it directly on the `GPUQuerySet` object.

## Value

A string. If this has not been previously set as described above, it will be an empty string.

## Examples

Setting and getting a label via `GPUQuerySet.label`:

```js
const querySet = device.createQuerySet({
  type: "occlusion",
  count: 32,
});

querySet.label = "myqueryset";

console.log(querySet.label); // "myqueryset"
```

Setting a label via the originating {{domxref("GPUDevice.createQuerySet()")}} call, and then getting it via `GPUQuerySet.label`:

```js
const querySet = device.createQuerySet({
  type: "occlusion",
  count: 32,
  label: "myqueryset",
});

console.log(querySet.label); // "myqueryset"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
