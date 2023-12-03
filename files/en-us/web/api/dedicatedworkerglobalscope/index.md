---
title: DedicatedWorkerGlobalScope
slug: Web/API/DedicatedWorkerGlobalScope
page-type: web-api-interface
browser-compat: api.DedicatedWorkerGlobalScope
---

{{APIRef("Web Workers API")}}

The **`DedicatedWorkerGlobalScope`** object (the {{domxref("Worker")}} global scope) is accessible through the {{domxref("WorkerGlobalScope.self","self")}} keyword. Some additional global functions, namespaces objects, and constructors, not typically associated with the worker global scope, but available on it, are listed in the [JavaScript Reference](/en-US/docs/Web/JavaScript/Reference). See also: [Functions available to workers](/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

{{InheritanceDiagram}}

## Instance properties

_This interface inherits properties from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}._

- {{domxref("DedicatedWorkerGlobalScope.name")}} {{ReadOnlyInline}}
  - : The name that the {{domxref("Worker")}} was (optionally) given when it was created using the {{domxref("Worker.Worker", "Worker()")}} constructor. This is mainly useful for debugging purposes.

## Instance methods

_This interface inherits methods from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}._

- {{domxref("DedicatedWorkerGlobalScope.close()")}}
  - : Discards any tasks queued in the `WorkerGlobalScope`'s event loop, effectively closing this particular scope.
- {{domxref("DedicatedWorkerGlobalScope.postMessage()")}}
  - : Sends a message — which can consist of `any` JavaScript object — to the parent document that first spawned the worker.

## Events

Listen to this event using {{domxref("EventTarget/addEventListener()", "addEventListener()")}} or by assigning an event listener to the `oneventname` property of this interface.

- {{domxref("DedicatedWorkerGlobalScope/message_event", "message")}}
  - : Fired when the worker receives a message from its parent.
- {{domxref("DedicatedWorkerGlobalScope/messageerror_event", "messageerror")}}
  - : Fired when a worker receives a message that can't be deserialized.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Worker")}}
- {{domxref("WorkerGlobalScope")}}
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Functions available to workers](/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
