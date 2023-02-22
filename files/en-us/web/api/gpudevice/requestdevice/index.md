---
title: GPUAdapter.requestDevice()
slug: Web/API/GPUAdapter/requestDevice
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUAdapter.requestDevice
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`requestDevice()`** method of the
{{domxref("GPUAdapter")}} interface returns a {{jsxref("Promise")}} that fulfills with a {{domxref("GPUDevice")}} object via which you can start using the functionality of a device GPU.

## Syntax

```js-nolint
requestDevice()
requestDevice(descriptor)
```

### Parameters

- `descriptor` {{optional_inline}}
  - : An object containing the following properties:
    - `defaultQueue` {{optional_inline}}
      - : An object that describes the default {{domxref("GPUQueue")}} for the device. This defaults to an empty object if no value is provided.
    - `label` {{optional_inline}}
      - : A string providing an identifying label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.
    - `requiredFeatures` {{optional_inline}}
      - : An array of strings representing additional functionality that you want supported by the returned {{domxref("GPUDevice")}}. The `requestDevice()` call will fail if the `GPUAdapter` cannot provide these features. See {{domxref("GPUSupportedFeatures")}} for a full list of possible features. This defaults to an empty array if no value is provided.
    - `requiredLimits` {{optional_inline}}
      - : An object containing properties representing the limits that you want supported by the returned {{domxref("GPUDevice")}}. The `requestDevice()` call will fail if the `GPUAdapter` cannot provide these limits. Each key must be the name of a member of {{domxref("GPUSupportedLimits")}}. This defaults to an empty object if no value is provided.

> **Note:** Not all features and limits will be available to WebGPU in all browsers that support it, even if they are supported by the underlying hardware. See the {{domxref("GPUAdapter.features", "features")}} and {{domxref("GPUAdapter.limits", "limits")}} pages for more information.

### Return value

A {{jsxref("Promise")}} that fulfills with a {{domxref("GPUDevice")}} object instance.

### Exceptions

- `OperationError` {{domxref("DOMException")}}
  - : The promise rejects with an `OperationError` if the limits included in the `requiredLimits` property are not supported by the {{domxref("GPUAdapter")}}, either because they are not valid limits, or because their values are higher than the adapter's values for those limits.
- `TypeError` {{domxref("DOMException")}}
  - : The promise rejects with a `TypeError` if the features included in the `requiredFeatures` property are not supported by the {{domxref("GPUAdapter")}}.

## Examples

### Basic example

```js
async function init() {
  if (!navigator.gpu) {
    throw Error('WebGPU not supported.');
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error('Couldn\'t request WebGPU adapter.');
  }

  const device = await adapter.requestDevice();

  // ...

}
```

### Requesting specific features and limits

In the following code we:

1. Check whether a {{domxref("GPUAdapter")}} has the `texture-compression-astc` feature available. If so, we push it into the array of `requiredFeatures`.
2. Query the `GPUAdapter.limits` values of `maxTextureDimension3D` and `maxBindGroups` and add those maximum limits to the `requiredLimits` object.
3. Request a device with those feature and limit requirements.

```js
async function init() {
  if (!navigator.gpu) {
    throw Error('WebGPU not supported.');
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error('Couldn\'t request WebGPU adapter.');
  }

  const requiredFeatures = [];

  if (adapter.features.has('texture-compression-astc')) {
    requiredFeatures.push('texture-compression-astc')
  }

  const requiredLimits = {};

  requiredLimits.maxTextureDimension3D = adapter.limits.maxTextureDimension3D;
  requiredLimits.maxBindGroups = adapter.limits.maxBindGroups;

  const device = await adapter.requestDevice({
    requiredFeatures,
    requiredLimits
  });

  // ...

}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
