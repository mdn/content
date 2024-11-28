---
title: "GPUAdapter: requestDevice() method"
short-title: requestDevice()
slug: Web/API/GPUAdapter/requestDevice
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUAdapter.requestDevice
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`requestDevice()`** method of the
{{domxref("GPUAdapter")}} interface returns a {{jsxref("Promise")}} that fulfills with a {{domxref("GPUDevice")}} object, which is the primary interface for communicating with the GPU.

## Syntax

```js-nolint
requestDevice()
requestDevice(descriptor)
```

### Parameters

- `descriptor` {{optional_inline}}
  - : An object containing the following properties:
    - `defaultQueue` {{optional_inline}}
      - : An object that provides information for the device's default {{domxref("GPUQueue")}} (as returned by {{domxref("GPUDevice.queue")}}). This object has a single property — `label` — which provides the default queue with a {{domxref("GPUQueue.label", "label")}} value. If no value is provided, this defaults to an empty object, and the default queue's label will be an empty string.
    - `label` {{optional_inline}}
      - : A string providing a label that can be used to identify the {{domxref("GPUDevice")}}, for example in {{domxref("GPUError")}} messages or console warnings.
    - `requiredFeatures` {{optional_inline}}
      - : An array of strings representing additional functionality that you want supported by the returned {{domxref("GPUDevice")}}. The `requestDevice()` call will fail if the `GPUAdapter` cannot provide these features. See {{domxref("GPUSupportedFeatures")}} for a full list of possible features. This defaults to an empty array if no value is provided.
    - `requiredLimits` {{optional_inline}}
      - : An object containing properties representing the limits that you want supported by the returned {{domxref("GPUDevice")}}. The `requestDevice()` call will fail if the `GPUAdapter` cannot provide these limits. Each key must be the name of a member of {{domxref("GPUSupportedLimits")}}. This defaults to an empty object if no value is provided.

> [!NOTE]
> Not all features and limits will be available to WebGPU in all browsers that support it, even if they are supported by the underlying hardware. See the {{domxref("GPUAdapter.features", "features")}} and {{domxref("GPUAdapter.limits", "limits")}} pages for more information.

### Return value

A {{jsxref("Promise")}} that fulfills with a {{domxref("GPUDevice")}} object instance.

If you make a duplicate call, i.e. call `requestDevice()` on a {{domxref("GPUAdapter")}} that `requestDevice()` was already called on, the promise fulfills with a device that is immediately lost. You can then get information on how the device was lost via {{domxref("GPUDevice.lost")}}.

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
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const device = await adapter.requestDevice();

  // ...
}
```

### Requesting specific features and limits

In the following code we:

1. Check whether a {{domxref("GPUAdapter")}} has the `texture-compression-astc` feature available. If so, we push it into the array of `requiredFeatures`.
2. Query the `GPUAdapter.limits` value of `maxBindGroups` to see if it is equal to or greater than 6. Our theoretical example app ideally needs 6 bind groups, so if the returned value is >= 6, we add a maximum limit of 6 to the `requiredLimits` object.
3. Request a device with those feature and limit requirements, plus a `defaultQueue` label.

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const requiredFeatures = [];

  if (adapter.features.has("texture-compression-astc")) {
    requiredFeatures.push("texture-compression-astc");
  }

  const requiredLimits = {};

  // App ideally needs 6 bind groups, so we'll try to request what the app needs
  if (adapter.limits.maxBindGroups >= 6) {
    requiredLimits.maxBindGroups = 6;
  }

  const device = await adapter.requestDevice({
    defaultQueue: {
      label: "my_queue",
    },
    requiredFeatures,
    requiredLimits,
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
