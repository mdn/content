---
title: "GPUDevice: uncapturederror event"
short-title: uncapturederror
slug: Web/API/GPUDevice/uncapturederror_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.GPUDevice.uncapturederror_event
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`uncapturederror`** event of the {{domxref("GPUDevice")}} interface is fired when an error is thrown that has not been observed by a GPU error scope, to provide a way to report unexpected errors.

Known error cases should be handled using {{domxref("GPUDevice.pushErrorScope", "pushErrorScope()")}} and {{domxref("GPUDevice.popErrorScope", "popErrorScope()")}}.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("uncapturederror", (event) => {});

onuncapturederror = (event) => {};
```

## Event type

An {{domxref("GPUUncapturedErrorEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("GPUUncapturedErrorEvent")}}

## Examples

You could use something like the following as a global mechanism to pick up any errors that aren't handled by error scopes and capture them.

```js
device.addEventListener("uncapturederror", (event) => {
  // Re-surface the error.
  console.error("A WebGPU error was not captured:", event.error);

  reportErrorToServer({
    type: event.error.constructor.name,
    message: event.error.message,
  });
});
```

See [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling) for more examples and information.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
