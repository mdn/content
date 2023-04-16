---
title: "GPUQueue: onSubmittedWorkDone() method"
short-title: onSubmittedWorkDone()
slug: Web/API/GPUQueue/onSubmittedWorkDone
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUQueue.onSubmittedWorkDone
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`onSubmittedWorkDone()`** method of the
{{domxref("GPUQueue")}} interface returns a {{jsxref("Promise")}} that resolves when all the work submitted to the GPU via this `GPUQueue` at the point the method is called has been processed.

This includes the completion of any {{domxref("GPUBuffer.mapAsync", "mapAsync()")}} calls made on `GPUBuffer`s used in commands submitted to the queue, before `onSubmittedWorkDone()` is called.

## Syntax

```js-nolint
onSubmittedWorkDone()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with {{jsxref("Undefined")}}.

## Examples

```js
device.queue.onSubmittedWorkDone().then(() => {
  console.log("All submitted commands processed.");
});

device.queue.submit([commandEncoder.finish()]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
