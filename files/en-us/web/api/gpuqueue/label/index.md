---
title: "GPUQueue: label property"
short-title: label
slug: Web/API/GPUQueue/label
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUQueue.label
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`label`** read-only property of the
{{domxref("GPUQueue")}} interface is a string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

You can get and set it directly on the `GPUQueue` object.

## Value

A string. If no label value has previously been set, getting the label returns an empty string.

## Examples

Setting and getting a label via `GPUQueue.label`:

```js
device.queue.label = "myqueue";
console.log(device.queue.label); // "myqueue"
```

You can also set the queue's label at the time you request the device, like this:

```js
const device = adapter.requestDevice({
  defaultQueue: { label: "myqueue" },
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
