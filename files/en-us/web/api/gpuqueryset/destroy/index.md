---
title: "GPUQuerySet: destroy() method"
short-title: destroy()
slug: Web/API/GPUQuerySet/destroy
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUQuerySet.destroy
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`destroy()`** method of the
{{domxref("GPUQuerySet")}} interface destroys the `GPUQuerySet`.

## Syntax

```js-nolint
destroy()
```

### Parameters

None.

### Return value

None ({{jsxref("Undefined")}}).

## Examples

```js
const querySet = device.createQuerySet({
  type: "occlusion",
  count: 32,
});

// Some time later

querySet.destroy();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
