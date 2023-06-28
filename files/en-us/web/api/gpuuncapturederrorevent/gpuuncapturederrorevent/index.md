---
title: "GPUUncapturedErrorEvent: GPUUncapturedErrorEvent() constructor"
short-title: GPUUncapturedErrorEvent()
slug: Web/API/GPUUncapturedErrorEvent/GPUUncapturedErrorEvent
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.GPUUncapturedErrorEvent.GPUUncapturedErrorEvent
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`GPUUncapturedErrorEvent()`** constructor creates a new
{{domxref("GPUUncapturedErrorEvent")}} object instance.

## Syntax

```js-nolint
new GPUUncapturedErrorEvent(type, options)
```

### Parameters

- `type`
  - : An enumerated value specifying the type of error. Possible values are:
    - `"internal"`
      - : The error is a {{domxref("GPUInternalError")}}.
    - `"out-of-memory"`
      - : The error is a {{domxref("GPUOutOfMemoryError")}}.
    - `"validation"`
      - : The error is a {{domxref("GPUValidationError")}}.
- `options`
  - : An object, which can contain the following properties:
    - `error`
      - : A {{domxref("GPUError")}} object instance providing access to the details of the error.

## Examples

A developer would not manually use the constructor to create a `GPUUncapturedErrorEvent` object. The user agent uses this constructor to create an appropriate object when the {{domxref("GPUDevice")}} {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} event fires to allow capturing of an unexpected error.

See the main [`GPUUncapturedErrorEvent`](/en-US/docs/Web/API/GPUUncapturedErrorEvent#examples) page for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
- [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling)
