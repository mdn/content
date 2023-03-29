---
title: DedicatedWorkerGlobalScope
slug: Web/API/DedicatedWorkerGlobalScope
page-type: web-api-interface
browser-compat: api.DedicatedWorkerGlobalScope
---

{{APIRef("Web Workers API")}}

The **`DedicatedWorkerGlobalScope`** object (the {{domxref("Worker")}} global scope) is accessible through the {{domxref("window.self","self")}} keyword. Some additional global functions, namespaces objects, and constructors, not typically associated with the worker global scope, but available on it, are listed in the [JavaScript Reference](/en-US/docs/Web/JavaScript/Reference). See also: [Functions available to workers](/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

{{InheritanceDiagram}}

## Instance properties

_This interface inherits properties from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}._

- {{domxref("DedicatedWorkerGlobalScope.name")}} {{ReadOnlyInline}}
  - : The name that the {{domxref("Worker")}} was (optionally) given when it was created using the {{domxref("Worker.Worker", "Worker()")}} constructor. This is mainly useful for debugging purposes.

### Instance properties inherited from WorkerGlobalScope

- {{domxref("caches", "DedicatedWorkerGlobalScope.caches")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("CacheStorage")}} object associated with the current context. This object enables functionality such as storing assets for offline use, and generating custom responses to requests.
- {{domxref("WorkerGlobalScope.console", "DedicatedWorkerGlobalScope.console")}} {{ReadOnlyInline}} {{Non-standard_inline}}
  - : Returns the {{domxref("console")}} associated with the worker.
- {{domxref("WorkerGlobalScope.fonts", "DedicatedWorkerGlobalScope.fonts")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("FontFaceSet")}} associated with the worker.
- {{domxref("indexedDB", "DedicatedWorkerGlobalScope.indexedDB")}} {{ReadOnlyInline}}
  - : Provides a mechanism for applications to asynchronously access capabilities of indexed databases; returns an {{domxref("IDBFactory")}} object.
- {{domxref("isSecureContext", "DedicatedWorkerGlobalScope.isSecureContext")}} {{ReadOnlyInline}}
  - : Returns a boolean indicating whether the current context is secure (`true`) or not (`false`).
- {{domxref("WorkerGlobalScope.location", "DedicatedWorkerGlobalScope.location")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("WorkerLocation")}} associated with the worker. `WorkerLocation` is a specific location object, mostly a subset of the {{domxref("Location")}} for browsing scopes, but adapted to workers.
- {{domxref("WorkerGlobalScope.navigator", "DedicatedWorkerGlobalScope.navigator")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("WorkerNavigator")}} associated with the worker. `WorkerNavigator` is a specific navigator object, mostly a subset of the {{domxref("Navigator")}} for browsing scopes, but adapted to workers.
- {{domxref("origin", "DedicatedWorkerGlobalScope.origin")}} {{ReadOnlyInline}}
  - : Returns the global object's origin, serialized as a string.
- {{domxref("performance_property", "DedicatedWorkerGlobalScope.performance")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("Performance")}} object associated with the worker, which is a regular performance object, but with a subset of its properties and methods available.
- {{domxref("Window.scheduler", "DedicatedWorkerGlobalScope.scheduler")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("Scheduler")}} object associated with the current context. This is the entry point for using the [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API).
- {{domxref("WorkerGlobalScope.self", "DedicatedWorkerGlobalScope.self")}}
  - : Returns an object reference to the `DedicatedWorkerGlobalScope` object itself.

## Instance methods

_This interface inherits methods from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}._

- {{domxref("DedicatedWorkerGlobalScope.close()")}}
  - : Discards any tasks queued in the `WorkerGlobalScope`'s event loop, effectively closing this particular scope.
- {{domxref("DedicatedWorkerGlobalScope.postMessage()")}}
  - : Sends a message — which can consist of `any` JavaScript object — to the parent document that first spawned the worker.

### Inherited from WorkerGlobalScope

- {{domxref("atob", "DedicatedWorkerGlobalScope.atob()")}}
  - : Decodes a string of data which has been encoded using base-64 encoding.
- {{domxref("btoa", "DedicatedWorkerGlobalScope.btoa()")}}
  - : Creates a base-64 encoded ASCII string from a string of binary data.
- {{domxref("Window.cancelAnimationFrame", "DedicatedWorkerGlobalScope.cancelAnimationFrame()")}}
  - : Cancels a callback scheduled by requestAnimationFrame.
- {{domxref("clearInterval", "DedicatedWorkerGlobalScope.clearInterval()")}}
  - : Cancels the repeated execution set using {{domxref("setInterval")}}.
- {{domxref("clearTimeout", "DedicatedWorkerGlobalScope.clearTimeout()")}}
  - : Cancels the repeated execution set using {{domxref("setTimeout")}}.
- {{domxref("WorkerGlobalScope.dump", "DedicatedWorkerGlobalScope.dump()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Writes a message to the console.
- {{domxref("WorkerGlobalScope.importScripts", "DedicatedWorkerGlobalScope.importScripts()")}}
  - : Imports one or more scripts into the worker's scope. You can specify as many as you'd like, separated by commas. For example: `importScripts('foo.js', 'bar.js');`
- {{domxref("Window.requestAnimationFrame", "DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
  - : Requests the browser to execute a callback function before painting the next frame.
- {{domxref("setInterval", "DedicatedWorkerGlobalScope.setInterval()")}}
  - : Schedules the execution of a function every X milliseconds.
- {{domxref("setTimeout", "DedicatedWorkerGlobalScope.setTimeout()")}}
  - : Sets a delay for executing a function.

## Events

- [`message`](/en-US/docs/Web/API/DedicatedWorkerGlobalScope/message_event)
  - : Fired when the worker receives a message from its parent.
- [`messageerror`](/en-US/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event)
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
