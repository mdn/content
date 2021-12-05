---
title: SharedWorkerGlobalScope
slug: Web/API/SharedWorkerGlobalScope
tags:
  - API
  - Interface
  - Reference
  - SharedWorkerGlobalScope
  - Web Workers
browser-compat: api.SharedWorkerGlobalScope
---
{{APIRef("Web Workers API")}}

The **`SharedWorkerGlobalScope`** object (the {{domxref("SharedWorker")}} global scope) is accessible through the {{domxref("window.self","self")}} keyword. Some additional global functions, namespaces objects, and constructors, not typically associated with the worker global scope, but available on it, are listed in the [JavaScript Reference](/en-US/docs/Web/JavaScript/Reference). See the complete list of [functions available to workers](/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Properties

_This interface inherits properties from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}, and therefore implements properties from {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, and {{domxref("WindowEventHandlers")}}._

- {{domxref("SharedWorkerGlobalScope.name")}} {{readOnlyinline}}
  - : The name that the {{domxref("SharedWorker")}} was (optionally) given when it was created using the {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} constructor. This is mainly useful for debugging purposes.
- {{domxref("SharedWorkerGlobalScope.applicationCache")}} {{readOnlyinline}} {{deprecated_inline}}
  - : This property returns the {{domxref("ApplicationCache")}} object for the worker.

### Properties inherited from WorkerGlobalScope

- {{domxref("WorkerGlobalScope.self")}}
  - : Returns an object reference to the `DedicatedWorkerGlobalScope` object itself.
- {{domxref("WorkerGlobalScope.console")}} {{readOnlyinline}}
  - : Returns the {{domxref("console")}} object associated with the worker.
- {{domxref("WorkerGlobalScope.location")}} {{readOnlyinline}}
  - : Returns the {{domxref("WorkerLocation")}} associated with the worker. `WorkerLocation` is a specific location object, mostly a subset of the {{domxref("Location")}} for browsing scopes, but adapted to workers.
- {{domxref("WorkerGlobalScope.navigator")}} {{readOnlyinline}}
  - : Returns the {{domxref("WorkerNavigator")}} associated with the worker. `WorkerNavigator` is a specific navigator object, mostly a subset of the {{domxref("Navigator")}} for browsing scopes, but adapted to workers.
- {{domxref("WorkerGlobalScope.performance")}} {{readOnlyinline}} {{Non-standard_inline}}
  - : Returns the {{domxref("Performance")}} object associated with the worker, which is a regular performance object, but with a subset of its properties and methods available.

### Event handlers

_This interface inherits event handlers from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}, and therefore implements event handlers from {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, and {{domxref("WindowEventHandlers")}}._

- {{domxref("SharedWorkerGlobalScope.onconnect")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("connect")}} event is raised — that is, when a {{domxref("MessagePort")}} connection is opened between the associated {{domxref("SharedWorker")}} and the main thread.

## Methods

_This interface inherits methods from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}, and therefore implements methods from {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, and {{domxref("WindowEventHandlers")}}._

- {{domxref("SharedWorkerGlobalScope.close()")}}
  - : Discards any tasks queued in the `SharedWorkerGlobalScope`'s event loop, effectively closing this particular scope.

### Inherited from WorkerGlobalScope

- {{domxref("WorkerGlobalScope.dump()")}} {{non-standard_inline}}
  - : Allows you to write a message to stdout — i.e. in your terminal. This is the same as Firefox's {{domxref("window.dump")}}, but for workers.
- {{domxref("WorkerGlobalScope.importScripts()")}}
  - : Imports one or more scripts into the worker's scope. You can specify as many as you'd like, separated by commas. For example: `importScripts('foo.js', 'bar.js');`

### Implemented from other places

- {{domxref("atob", "atob()")}}
  - : Decodes a string of data which has been encoded using base-64 encoding.
- {{domxref("btoa", "btoa()")}}
  - : Creates a base-64 encoded ASCII string from a string of binary data.
- {{domxref("WindowTimers.clearInterval()")}}
  - : Cancels the repeated execution set using {{domxref("setInterval()")}}.
- {{domxref("WindowTimers.clearTimeout()")}}
  - : Cancels the repeated execution set using {{domxref("setTimeout()")}}.
- {{domxref("setInterval()")}}
  - : Schedules the execution of a function every X milliseconds.
- {{domxref("setTimeout()")}}
  - : Sets a delay for executing a function.

## Events

Listen to this event using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

- [`connect`](/en-US/docs/Web/API/SharedWorkerGlobalScope/connect_event)
  - : Fired on shared workers when a new client connects.
    Also available via the [`onconnect`](/en-US/docs/Web/API/SharedWorkerGlobalScope/onconnect) property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SharedWorker")}}
- {{domxref("WorkerGlobalScope")}}
- [Using Web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Functions available to workers](/en-US/docs/Web/Guide/Needs_categorization/Functions_available_to_workers)
