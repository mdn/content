---
title: WorkerGlobalScope
slug: Web/API/WorkerGlobalScope
page-type: web-api-interface
browser-compat: api.WorkerGlobalScope
---

{{APIRef("Web Workers API")}}

The **`WorkerGlobalScope`** interface of the [Web Workers API](/en-US/docs/Web/API/Web_Workers_API) is an interface representing the scope of any worker. Workers have no browsing context; this scope contains the information usually conveyed by {{domxref("Window")}} objects — in this case event handlers, the console or the associated {{domxref("WorkerNavigator")}} object. Each `WorkerGlobalScope` has its own event loop.

This interface is usually specialized by each worker type: {{domxref("DedicatedWorkerGlobalScope")}} for dedicated workers, {{domxref("SharedWorkerGlobalScope")}} for shared workers, and {{domxref("ServiceWorkerGlobalScope")}} for [ServiceWorker](/en-US/docs/Web/API/Service_Worker_API). The `self` property returns the specialized scope for each context.

{{InheritanceDiagram}}

## Instance properties

_This interface inherits properties from the {{domxref("EventTarget")}} interface._

### Standard properties

- {{domxref("caches", "WorkerGlobalScope.caches")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("CacheStorage")}} object associated with the current context. This object enables functionality such as storing assets for offline use, and generating custom responses to requests.
- {{domxref("WorkerGlobalScope.fonts")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("FontFaceSet")}} associated with the worker.
- {{domxref("indexedDB", "WorkerGlobalScope.indexedDB")}} {{ReadOnlyInline}}
  - : Provides a mechanism for applications to asynchronously access capabilities of indexed databases; returns an {{domxref("IDBFactory")}} object.
- {{domxref("isSecureContext", "WorkerGlobalScope.isSecureContext")}} {{ReadOnlyInline}}
  - : Returns a boolean indicating whether the current context is secure (`true`) or not (`false`).
- {{domxref("WorkerGlobalScope.location")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("WorkerLocation")}} associated with the worker. It is a specific location object, mostly a subset of the {{domxref("Location")}} for browsing scopes, but adapted to workers.r.
- {{domxref("WorkerGlobalScope.navigator")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("WorkerNavigator")}} associated with the worker. It is a specific navigator object, mostly a subset of the {{domxref("Navigator")}} for browsing scopes, but adapted to workers.
- {{domxref("origin", "WorkerGlobalScope.origin")}} {{ReadOnlyInline}}
  - : Returns the global object's origin, serialized as a string.
- {{domxref("performance_property", "WorkerGlobalScope.performance")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("Performance")}} associated with the worker. It is a regular performance object, except that only a subset of its property and methods are available to workers.
- {{domxref("Window.scheduler", "WorkerGlobalScope.scheduler")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("Scheduler")}} object associated with the current context. This is the entry point for using the [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API).
- {{domxref("WorkerGlobalScope.self")}} {{ReadOnlyInline}}
  - : Returns a reference to the `WorkerGlobalScope` itself. Most of the time it is a specific scope like {{domxref("DedicatedWorkerGlobalScope")}}, {{domxref("SharedWorkerGlobalScope")}} or {{domxref("ServiceWorkerGlobalScope")}}.

### Non-standard properties

- {{domxref("console")}} {{ReadOnlyInline}} {{Non-standard_inline}}
  - : Returns the {{domxref("console")}} associated with the worker.

## Instance methods

_This interface inherits methods from the {{domxref("EventTarget")}} interface._

### Standard methods

- {{domxref("atob", "WorkerGlobalScope.atob()")}}
  - : Decodes a string of data which has been encoded using base-64 encoding.
- {{domxref("btoa", "WorkerGlobalScope.btoa()")}}
  - : Creates a base-64 encoded {{Glossary("ASCII")}} string from a string of binary data.
- {{domxref("clearInterval", "WorkerGlobalScope.clearInterval()")}}
  - : Cancels the repeated execution set using {{domxref("setInterval()")}}.
- {{domxref("clearTimeout", "WorkerGlobalScope.clearTimeout()")}}
  - : Cancels the delayed execution set using {{domxref("setTimeout()")}}.
- {{domxref("createImageBitmap", "WorkerGlobalScope.createImageBitmap()")}}
  - : Accepts a variety of different image sources, and returns a {{jsxref("Promise")}} which resolves to an {{domxref("ImageBitmap")}}. Optionally the source is cropped to the rectangle of pixels originating at _(sx, sy)_ with width sw, and height sh.
- {{domxref("fetch", "WorkerGlobalScope.fetch()")}}
  - : Starts the process of fetching a resource from the network.
- {{domxref("WorkerGlobalScope.importScripts()")}}
  - : Imports one or more scripts into the worker's scope. You can specify as many as you'd like, separated by commas. For example: `importScripts('foo.js', 'bar.js');`
- {{domxref("setInterval", "WorkerGlobalScope.setInterval()")}}
  - : Schedules a function to execute every time a given number of milliseconds elapses.
- {{domxref("setTimeout", "WorkerGlobalScope.setTimeout()")}}
  - : Schedules a function to execute in a given amount of time.
- {{domxref("reportError", "WorkerGlobalScope.reportError()")}}
  - : Reports an error in a script, emulating an unhandled exception.

### Non-standard methods

- {{domxref("WorkerGlobalScope.dump()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Allows you to write a message to stdout — i.e. in your terminal. This is the same as Firefox's {{domxref("window.dump")}}, but for workers.

## Events

- `error`
  - : Fires when an error occurred.
- `offline`
  - : Fires when the browser has lost access to the network and the value of `navigator.onLine` switched to `false`.
- `online`
  - : Fires when the browser has gained access to the network and the value of `navigator.onLine` switched to `true`.
- [`languagechange`](/en-US/docs/Web/API/WorkerGlobalScope/languagechange_event)
  - : Fires at the global/worker scope object when the user's preferred languages change.
- `rejectionhandled` {{non-standard_inline}}
  - : Fires on handled [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) rejection events.
- `unhandledrejection` {{non-standard_inline}}
  - : Fires on unhandled [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) rejection events.

## Example

You won't access `WorkerGlobalScope` directly in your code; however, its properties and methods are inherited by more specific global scopes such as {{domxref("DedicatedWorkerGlobalScope")}} and {{domxref("SharedWorkerGlobalScope")}}. For example, you could import another script into the worker and print out the contents of the worker scope's `navigator` object using the following two lines:

```js
importScripts("foo.js");
console.log(navigator);
```

> **Note:** Since the global scope of the worker script is effectively the global scope of the worker you are running ({{domxref("DedicatedWorkerGlobalScope")}} or whatever) and all worker global scopes inherit methods, properties, etc. from `WorkerGlobalScope`, you can run lines such as those above without specifying a parent object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other global object interface: {{domxref("Window")}}, {{domxref("DedicatedWorkerGlobalScope")}}, {{domxref("SharedWorkerGlobalScope")}}, {{domxref("ServiceWorkerGlobalScope")}}
- Other Worker-related interfaces: {{domxref("Worker")}}, {{domxref("WorkerLocation")}}, {{domxref("WorkerGlobalScope")}}, and {{domxref("ServiceWorkerGlobalScope")}}
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
