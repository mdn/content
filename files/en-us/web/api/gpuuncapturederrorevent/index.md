---
title: GPUUncapturedErrorEvent
slug: Web/API/GPUUncapturedErrorEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUUncapturedErrorEvent
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPUUncapturedErrorEvent`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} is the event object type for the {{domxref("GPUDevice")}} {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} event, used for telemetry and to report unexpected errors.

Known error cases should be handled using {{domxref("GPUDevice.pushErrorScope", "pushErrorScope()")}} and {{domxref("GPUDevice.popErrorScope", "popErrorScope()")}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("GPUUncapturedErrorEvent.GPUUncapturedErrorEvent", "GPUUncapturedErrorEvent()")}} {{Experimental_Inline}}
  - : Creates a new `GPUUncapturedErrorEvent` object instance.

## Instance properties

_Inherits properties from its parent, {{domxref("Event")}}._

- {{domxref("GPUUncapturedErrorEvent.error", "error")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A {{domxref("GPUError")}} object instance providing access to the details of the error.

## Examples

You could use something like the following as a global mechanism to pick up any errors that aren't handled by error scopes and capture them.

```js
// …

device.addEventListener("uncapturederror", (event) => {
  // Re-surface the error
  console.error("A WebGPU error was not captured:", event.error.message);
  reportErrorToServer({
    type: event.error.constructor.name,
    message: event.error.message,
  });
});

// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
- [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling)
