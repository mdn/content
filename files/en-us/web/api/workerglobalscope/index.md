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

- {{domxref("WorkerGlobalScope.caches")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Returns the {{domxref("CacheStorage")}} object associated with the current context. This object enables functionality such as storing assets for offline use, and generating custom responses to requests.
- {{domxref("console")}} {{ReadOnlyInline}} {{Non-standard_inline}}
  - : Returns the {{domxref("console")}} associated with the worker.
- {{domxref("WorkerGlobalScope.crossOriginIsolated")}} {{ReadOnlyInline}}
  - : Returns a boolean value that indicates whether the website is in a cross-origin isolation state.
- {{domxref("WorkerGlobalScope.crypto")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("Crypto")}} object associated to the global object.
- {{domxref("WorkerGlobalScope.fonts")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("FontFaceSet")}} associated with the worker.
- {{domxref("WorkerGlobalScope.indexedDB")}} {{ReadOnlyInline}}
  - : Provides a mechanism for workers to asynchronously access capabilities of indexed databases; returns an {{domxref("IDBFactory")}} object.
- {{domxref("WorkerGlobalScope.isSecureContext")}} {{ReadOnlyInline}}
  - : Returns a boolean indicating whether the current context is secure (`true`) or not (`false`).
- {{domxref("WorkerGlobalScope.location")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("WorkerLocation")}} associated with the worker. It is a specific location object, mostly a subset of the {{domxref("Location")}} for browsing scopes, but adapted to workers.r.
- {{domxref("WorkerGlobalScope.navigator")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("WorkerNavigator")}} associated with the worker. It is a specific navigator object, mostly a subset of the {{domxref("Navigator")}} for browsing scopes, but adapted to workers.
- {{domxref("WorkerGlobalScope.origin")}} {{ReadOnlyInline}}
  - : Returns the global object's origin, serialized as a string.
- {{domxref("WorkerGlobalScope.performance")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("Performance")}} associated with the worker. Only a subset of the properties and methods of the `Performance` interface are available to workers.
- {{domxref("WorkerGlobalScope.scheduler")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("Scheduler")}} object associated with the current context. This is the entry point for using the [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API).
- {{domxref("WorkerGlobalScope.trustedTypes")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("TrustedTypePolicyFactory")}} object associated with the global object, providing the entry point for using the {{domxref("Trusted Types API", "", "", "nocode")}}.
- {{domxref("WorkerGlobalScope.self")}} {{ReadOnlyInline}}
  - : Returns a reference to the `WorkerGlobalScope` itself. Most of the time it is a specific scope like {{domxref("DedicatedWorkerGlobalScope")}}, {{domxref("SharedWorkerGlobalScope")}} or {{domxref("ServiceWorkerGlobalScope")}}.

## Instance methods

_This interface inherits methods from the {{domxref("EventTarget")}} interface._

- {{domxref("WorkerGlobalScope.atob()")}}
  - : Decodes a string of data which has been encoded using base-64 encoding.
- {{domxref("WorkerGlobalScope.btoa()")}}
  - : Creates a base-64 encoded {{Glossary("ASCII")}} string from a string of binary data.
- {{domxref("clearInterval()", "WorkerGlobalScope.clearInterval()")}}
  - : Cancels the repeated execution set using {{domxref("setInterval()")}}.
- {{domxref("clearTimeout()", "WorkerGlobalScope.clearTimeout()")}}
  - : Cancels the delayed execution set using {{domxref("setTimeout()")}}.
- {{domxref("createImageBitmap()", "WorkerGlobalScope.createImageBitmap()")}}
  - : Accepts a variety of different image sources, and returns a {{jsxref("Promise")}} which resolves to an {{domxref("ImageBitmap")}}. Optionally the source is cropped to the rectangle of pixels originating at _(sx, sy)_ with width sw, and height sh.
- {{domxref("WorkerGlobalScope.dump()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Allows you to write a message to stdout — i.e. in your terminal. This is the same as Firefox's {{domxref("window.dump")}}, but for workers.
- {{domxref("WorkerGlobalScope.fetch()")}}
  - : Starts the process of fetching a resource from the network.
- {{domxref("WorkerGlobalScope.importScripts()")}}
  - : Imports one or more scripts into the worker's scope. You can specify as many as you'd like, separated by commas. For example: `importScripts('foo.js', 'bar.js');`.
- {{domxref("queueMicrotask()", "WorkerGlobalScope.queueMicrotask()")}}
  - : Queues a microtask to be executed at a safe time prior to control returning to the browser's event loop.
- {{domxref("setInterval()", "WorkerGlobalScope.setInterval()")}}
  - : Schedules a function to execute every time a given number of milliseconds elapses.
- {{domxref("setTimeout()", "WorkerGlobalScope.setTimeout()")}}
  - : Schedules a function to execute in a given amount of time.
- {{domxref("structuredClone()", "WorkerGlobalScope.structuredClone()")}}
  - : Creates a [deep clone](/en-US/docs/Glossary/Deep_copy) of a given value using the [structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
- {{domxref("reportError()", "WorkerGlobalScope.reportError()")}}
  - : Reports an error in a script, emulating an unhandled exception.

## Events

- {{domxref("WorkerGlobalScope/error_event", "error")}}
  - : Fired when an error occurred.
- {{domxref("WorkerGlobalScope/languagechange_event", "languagechange")}}
  - : Fired at the global/worker scope object when the user's preferred languages change.
- {{domxref("WorkerGlobalScope/offline_event", "offline")}}
  - : Fired when the browser has lost access to the network and the value of `navigator.onLine` switched to `false`.
- {{domxref("WorkerGlobalScope/online_event", "online")}}
  - : Fired when the browser has gained access to the network and the value of `navigator.onLine` switched to `true`.
- {{domxref("WorkerGlobalScope/rejectionhandled_event", "rejectionhandled")}}
  - : Fired on handled {{jsxref("Promise")}} rejection events.
- {{domxref("WorkerGlobalScope/securitypolicyviolation_event", "securitypolicyviolation")}}
  - : Fired when a [Content Security Policy](/en-US/docs/Web/HTTP/CSP) is violated.
- {{domxref("WorkerGlobalScope/unhandledrejection_event", "unhandledrejection")}}
  - : Fired on unhandled {{jsxref("Promise")}} rejection events.

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
- Other Worker-related interfaces: {{domxref("Worker")}}, {{domxref("WorkerLocation")}} and {{domxref("WorkerNavigator")}}
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
