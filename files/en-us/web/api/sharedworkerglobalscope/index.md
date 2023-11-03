---
title: SharedWorkerGlobalScope
slug: Web/API/SharedWorkerGlobalScope
page-type: web-api-interface
browser-compat: api.SharedWorkerGlobalScope
---

{{APIRef("Web Workers API")}}

The **`SharedWorkerGlobalScope`** object (the {{domxref("SharedWorker")}} global scope) is accessible through the {{domxref("window.self","self")}} keyword. Some additional global functions, namespaces objects, and constructors, not typically associated with the worker global scope, but available on it, are listed in the [JavaScript Reference](/en-US/docs/Web/JavaScript/Reference). See the complete list of [functions available to workers](/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

{{InheritanceDiagram}}

## Instance properties

_This interface inherits properties from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}._

- {{domxref("SharedWorkerGlobalScope.name")}} {{ReadOnlyInline}}
  - : The name that the {{domxref("SharedWorker")}} was (optionally) given when it was created using the {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} constructor. This is mainly useful for debugging purposes.

### Instance properties inherited from WorkerGlobalScope

- {{domxref("caches", "SharedWorkerGlobalScope.caches")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("CacheStorage")}} object associated with the current context. This object enables functionality such as storing assets for offline use, and generating custom responses to requests.
- {{domxref("console", "SharedWorkerGlobalScope.console")}} {{ReadOnlyInline}} {{Non-standard_inline}}
  - : Returns the {{domxref("console")}} associated with the worker.
- {{domxref("crossOriginIsolated", "SharedWorkerGlobalScope.crossOriginIsolated")}} {{ReadOnlyInline}}
  - : Returns a boolean value that indicates whether the website is in a cross-origin isolation state.
- {{domxref("crypto_property", "SharedWorkerGlobalScope.crypto")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("Crypto")}} object associated to the global object.
- {{domxref("WorkerGlobalScope.fonts", "SharedWorkerGlobalScope.fonts")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("FontFaceSet")}} associated with the worker.
- {{domxref("indexedDB", "SharedWorkerGlobalScope.indexedDB")}} {{ReadOnlyInline}}
  - : Provides a mechanism for applications to asynchronously access capabilities of indexed databases; returns an {{domxref("IDBFactory")}} object.
- {{domxref("isSecureContext", "SharedWorkerGlobalScope.isSecureContext")}} {{ReadOnlyInline}}
  - : Returns a boolean indicating whether the current context is secure (`true`) or not (`false`).
- {{domxref("WorkerGlobalScope.location", "SharedWorkerGlobalScope.location")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("WorkerLocation")}} associated with the worker. `WorkerLocation` is a specific location object, mostly a subset of the {{domxref("Location")}} for browsing scopes, but adapted to workers.
- {{domxref("WorkerGlobalScope.navigator", "SharedWorkerGlobalScope.navigator")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("WorkerNavigator")}} associated with the worker. `WorkerNavigator` is a specific navigator object, mostly a subset of the {{domxref("Navigator")}} for browsing scopes, but adapted to workers.
- {{domxref("origin", "SharedWorkerGlobalScope.origin")}} {{ReadOnlyInline}}
  - : Returns the global object's origin, serialized as a string.
- {{domxref("performance_property", "SharedWorkerGlobalScope.performance")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("Performance")}} object associated with the worker, which is a regular performance object, but with a subset of its properties and methods available.
- {{domxref("Window.scheduler", "SharedWorkerGlobalScope.scheduler")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("Scheduler")}} object associated with the current context. This is the entry point for using the [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API).
- {{domxref("WorkerGlobalScope.self", "SharedWorkerGlobalScope.self")}}
  - : Returns an object reference to the `SharedWorkerGlobalScope` object itself.

## Instance methods

_This interface inherits methods from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}._

- {{domxref("SharedWorkerGlobalScope.close()")}}
  - : Discards any tasks queued in the `SharedWorkerGlobalScope`'s event loop, effectively closing this particular scope.

### Inherited from WorkerGlobalScope

- {{domxref("atob", "SharedWorkerGlobalScope.atob()")}}
  - : Decodes a string of data which has been encoded using base-64 encoding.
- {{domxref("btoa", "SharedWorkerGlobalScope.btoa()")}}
  - : Creates a base-64 encoded ASCII string from a string of binary data.
- {{domxref("clearInterval", "SharedWorkerGlobalScope.clearInterval()")}}
  - : Cancels the repeated execution set using {{domxref("setInterval")}}.
- {{domxref("clearTimeout", "SharedWorkerGlobalScope.clearTimeout()")}}
  - : Cancels the repeated execution set using {{domxref("setTimeout")}}.
- {{domxref("createImageBitmap", "SharedWorkerGlobalScope.createImageBitmap()")}}
  - : Accepts a variety of different image sources, and returns a {{jsxref("Promise")}} which resolves to an {{domxref("ImageBitmap")}}. Optionally the source is cropped to the rectangle of pixels originating at _(sx, sy)_ with width sw, and height sh.
- {{domxref("WorkerGlobalScope.dump", "SharedWorkerGlobalScope.dump()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Writes a message to the console.
- {{domxref("fetch", "SharedWorkerGlobalScope.fetch()")}}
  - : Starts the process of fetching a resource from the network.
- {{domxref("WorkerGlobalScope.importScripts", "SharedWorkerGlobalScope.importScripts()")}}
  - : Imports one or more scripts into the worker's scope. You can specify as many as you'd like, separated by commas. For example: `importScripts('foo.js', 'bar.js');`
- {{domxref("queueMicrotask", "SharedWorkerGlobalScope.queueMicrotask()")}}
  - : Queues a microtask to be executed at a safe time prior to control returning to the browser's event loop.
- {{domxref("setInterval", "SharedWorkerGlobalScope.setInterval()")}}
  - : Schedules the execution of a function every X milliseconds.
- {{domxref("setTimeout", "SharedWorkerGlobalScope.setTimeout()")}}
  - : Sets a delay for executing a function.
- {{domxref("structuredClone", "SharedWorkerGlobalScope.structuredClone()")}}
  - : Creates a [deep clone](/en-US/docs/Glossary/Deep_copy) of a given value using the [structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
- {{domxref("reportError", "SharedWorkerGlobalScope.reportError()")}}
  - : Reports an error in a script, emulating an unhandled exception.

## Events

Listen to this event using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

- {{domxref("SharedWorkerGlobalScope.connect_event", "connect")}}
  - : Fired on shared workers when a new client connects.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SharedWorker")}}
- {{domxref("WorkerGlobalScope")}}
- [Using Web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Functions available to workers](/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
