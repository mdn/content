---
title: DedicatedWorkerGlobalScope
slug: Web/API/DedicatedWorkerGlobalScope
tags:
  - API
  - DedicatedWorkerGlobalScope
  - Interface
  - Reference
  - Web Workers
  - Workers
browser-compat: api.DedicatedWorkerGlobalScope
---
{{APIRef("Web Workers API")}}

The **`DedicatedWorkerGlobalScope`** object (the {{domxref("Worker")}} global scope) is accessible through the {{domxref("window.self","self")}} keyword. Some additional global functions, namespaces objects, and constructors, not typically associated with the worker global scope, but available on it, are listed in the [JavaScript Reference](/en-US/docs/Web/JavaScript/Reference). See also: [Functions available to workers](/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Properties

_This interface inherits properties from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}._

- {{domxref("DedicatedWorkerGlobalScope.name")}} {{readOnlyinline}}
  - : The name that the {{domxref("Worker")}} was (optionally) given when it was created using the {{domxref("Worker.Worker", "Worker()")}} constructor. This is mainly useful for debugging purposes.

### Properties inherited from WorkerGlobalScope

- {{domxref("WorkerGlobalScope.self")}}
  - : Returns an object reference to the `DedicatedWorkerGlobalScope` object itself.
- {{domxref("WorkerGlobalScope.console")}} {{readOnlyinline}}
  - : Returns the {{domxref("console")}} associated with the worker.
- {{domxref("WorkerGlobalScope.location")}} {{readOnlyinline}}
  - : Returns the {{domxref("WorkerLocation")}} associated with the worker. `WorkerLocation` is a specific location object, mostly a subset of the {{domxref("Location")}} for browsing scopes, but adapted to workers.
- {{domxref("WorkerGlobalScope.navigator")}} {{readOnlyinline}}
  - : Returns the {{domxref("WorkerNavigator")}} associated with the worker. `WorkerNavigator` is a specific navigator object, mostly a subset of the {{domxref("Navigator")}} for browsing scopes, but adapted to workers.
- {{domxref("WorkerGlobalScope.performance")}} {{readOnlyinline}} {{Non-standard_inline}}
  - : Returns the {{domxref("Performance")}} object associated with the worker, which is a regular performance object, but with a subset of its properties and methods available.

### Event handlers

_This interface inherits event handlers from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}._

- {{domxref("DedicatedWorkerGlobalScope.onmessage")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("message")}} event is raised. These events are of type {{domxref("MessageEvent")}} and will be called when the worker receives a message from the document that started it (i.e. from the {{domxref("Worker.postMessage")}} method.)
- {{domxref("DedicatedWorkerGlobalScope.onmessageerror")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("messageerror")}} event is raised.

## Methods

_This interface inherits methods from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}._

- {{domxref("DedicatedWorkerGlobalScope.close()")}}
  - : Discards any tasks queued in the `WorkerGlobalScope`'s event loop, effectively closing this particular scope.
- {{domxref("DedicatedWorkerGlobalScope.postMessage()")}}
  - : Sends a message — which can consist of `any` JavaScript object — to the parent document that first spawned the worker.

### Inherited from WorkerGlobalScope

- {{domxref("WorkerGlobalScope.dump()")}} {{non-standard_inline}}
  - : Writes a message to the console.
- {{domxref("WorkerGlobalScope.importScripts()")}}
  - : Imports one or more scripts into the worker's scope. You can specify as many as you'd like, separated by commas. For example: `importScripts('foo.js', 'bar.js');`

### Implemented from other places

- {{domxref("atob", "atob()")}}
  - : Decodes a string of data which has been encoded using base-64 encoding.
- {{domxref("btoa", "btoa")}}
  - : Creates a base-64 encoded ASCII string from a string of binary data.
- {{domxref("clearInterval")}}
  - : Cancels the repeated execution set using {{domxref("setInterval")}}.
- {{domxref("clearTimeout")}}
  - : Cancels the repeated execution set using {{domxref("setTimeout")}}.
- {{domxref("setInterval")}}
  - : Schedules the execution of a function every X milliseconds.
- {{domxref("setTimeout")}}
  - : Sets a delay for executing a function.

## Events

- [`message`](/en-US/docs/Web/API/DedicatedWorkerGlobalScope/message_event)
  - : Fired when the worker receives a message from its parent.
    Also available via the [`onmessage`](/en-US/docs/Web/API/DedicatedWorkerGlobalScope/onmessage) property.
- [`messageerror`](/en-US/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event)
  - : Fired when a worker receives a message that can't be deserialized.
    Also available via the [`onmessageerror`](/en-US/docs/Web/API/DedicatedWorkerGlobalScope/onmessageerror) property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Worker")}}
- {{domxref("WorkerGlobalScope")}}
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Functions available to workers](/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
