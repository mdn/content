---
title: WorkerGlobalScope
slug: Web/API/WorkerGlobalScope
tags:
  - API
  - Interface
  - Reference
  - WorkerGlobalScope
  - Workers
browser-compat: api.WorkerGlobalScope
---
{{APIRef("Web Workers API")}}

The **`WorkerGlobalScope`** interface of the [Web Workers API](/en-US/docs/Web/API/Web_Workers_API) is an interface representing the scope of any worker. Workers have no browsing context; this scope contains the information usually conveyed by {{domxref("Window")}} objects — in this case event handlers, the console or the associated {{domxref("WorkerNavigator")}} object. Each `WorkerGlobalScope` has its own event loop.

This interface is usually specialized by each worker type: {{domxref("DedicatedWorkerGlobalScope")}} for dedicated workers, {{domxref("SharedWorkerGlobalScope")}} for shared workers, and {{domxref("ServiceWorkerGlobalScope")}} for [ServiceWorker](/en-US/docs/Web/API/Service_Worker_API). The `self` property returns the specialized scope for each context.

## Properties

_This interface inherits properties from the {{domxref("EventTarget")}} interface and `WindowOrWorkerGlobalScope` and {{domxref("WindowEventHandlers")}} mixins._

### Standard properties

- {{domxref("WorkerGlobalScope.navigator")}} {{readOnlyinline}}
  - : Returns the {{domxref("WorkerNavigator")}} associated with the worker. It is a specific navigator object, mostly a subset of the {{domxref("Navigator")}} for browsing scopes, but adapted to workers.
- {{domxref("WorkerGlobalScope.self")}} {{readOnlyinline}}
  - : Returns a reference to the `WorkerGlobalScope` itself. Most of the time it is a specific scope like {{domxref("DedicatedWorkerGlobalScope")}},  {{domxref("SharedWorkerGlobalScope")}} or {{domxref("ServiceWorkerGlobalScope")}}.
- {{domxref("WorkerGlobalScope.location")}} {{readOnlyinline}}
  - : Returns the {{domxref("WorkerLocation")}} associated with the worker. It is a specific location object, mostly a subset of the {{domxref("Location")}} for browsing scopes, but adapted to workers.

### Non-standard properties

- {{domxref("WorkerGlobalScope.performance")}} {{readOnlyinline}} {{Non-standard_inline}}
  - : Returns the {{domxref("Performance")}} associated with the worker. It is a regular performance object, except that only a subset of its property and methods are available to workers.
- {{domxref("WorkerGlobalScope.console")}} {{readOnlyinline}} {{Non-standard_inline}}
  - : Returns the {{domxref("console")}} associated with the worker.

### Properties implemented from elsewhere

- {{domxref("caches")}} {{readOnlyinline}}
  - : Returns the {{domxref("CacheStorage")}} object associated with the current context. This object enables functionality such as storing assets for offline use, and generating custom responses to requests.
- {{domxref("indexedDB")}} {{readonlyInline}}
  - : Provides a mechanism for applications to asynchronously access capabilities of indexed databases; returns an {{domxref("IDBFactory")}} object.
- {{domxref("isSecureContext")}} {{readOnlyinline}}
  - : Returns a boolean indicating whether the current context is secure (`true`) or not (`false`).
- {{domxref("origin")}} {{readOnlyinline}}
  - : Returns the global object's origin, serialized as a string. (This does not yet appear to be implemented in any browser.)

## Events

- `error`
  - : Fired when an error occurred.
    Also available via the {{domxref("WorkerGlobalScope.onerror")}} property.
- `offline`
  - : Fired when the browser has lost access to the network and the value of `navigator.onLine` switched to `false`.
    Also available via the {{domxref("WorkerGlobalScope.onoffline")}} property.
- `online`
  - : Fired when the browser has gained access to the network and the value of `navigator.onLine` switched to `true`.
    Also available via the {{domxref("WorkerGlobalScope.ononline")}} property.
- [`languagechange`](/en-US/docs/Web/API/WorkerGlobalScope/languagechange_event)
  - : Fired at the global/worker scope object when the user's preferred languages change.
    Also available via the {{domxref("WorkerGlobalScope.onlanguagechange")}} property.
- `rejectionhandled` {{non-standard_inline}}
  - : An event handler for handled [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "The Promise object is used for deferred and asynchronous computations. A Promise represents an operation that hasn't completed yet, but is expected in the future.") rejection events.
    Also available via the {{domxref("WorkerGlobalScope.onrejectionhandled")}} property.
- `unhandledrejection` {{non-standard_inline}}
  - : An event handler for unhandled [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "The Promise object is used for deferred and asynchronous computations. A Promise represents an operation that hasn't completed yet, but is expected in the future.") rejection events.
    Also available via the {{domxref("WorkerGlobalScope.onunhandledrejection")}} property.

## Methods

_This interface inherits methods from the {{domxref("EventTarget")}} interface and `WindowOrWorkerGlobalScope` and {{domxref("WindowEventHandlers")}} mixins._

### Standard methods

- {{domxref("WorkerGlobalScope.importScripts()")}}
  - : Imports one or more scripts into the worker's scope. You can specify as many as you'd like, separated by commas. For example: `importScripts('foo.js', 'bar.js');`

### Non-standard methods

- {{domxref("WorkerGlobalScope.dump()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Allows you to write a message to stdout — i.e. in your terminal. This is the same as Firefox's {{domxref("window.dump")}}, but for workers.

### Methods implemented from elsewhere

- {{domxref("atob", "atob()")}}
  - : Decodes a string of data which has been encoded using base-64 encoding.
- {{domxref("btoa", "btoa()")}}
  - : Creates a base-64 encoded ASCII string from a string of binary data.
- {{domxref("clearInterval()")}}
  - : Cancels the repeated execution set using {{domxref("setInterval()")}}.
- {{domxref("clearTimeout()")}}
  - : Cancels the delayed execution set using {{domxref("setTimeout()")}}.
- {{domxref("createImageBitmap()")}}
  - : Accepts a variety of different image sources, and returns a {{jsxref("Promise")}} which resolves to an {{domxref("ImageBitmap")}}. Optionally the source is cropped to the rectangle of pixels originating at _(sx, sy)_ with width sw, and height sh.
- {{domxref("fetch()")}}
  - : Starts the process of fetching a resource from the network.
- {{domxref("setInterval()")}}
  - : Schedules a function to execute every time a given number of milliseconds elapses.
- {{domxref("setTimeout()")}}
  - : Schedules a function to execute in a given amount of time.

## Example

You won't access `WorkerGlobalScope` directly in your code; however, its properties and methods are inherited by more specific global scopes such as {{domxref("DedicatedWorkerGlobalScope")}} and {{domxref("SharedWorkerGlobalScope")}}. For example, you could import another script into the worker and print out the contents of the worker scope's `navigator` object using the following two lines:

```js
importScripts('foo.js');
console.log(navigator);
```

> **Note:** Since the global scope of the worker script is effectively the global scope of the worker you are running ({{domxref("DedicatedWorkerGlobalScope")}} or whatever) and all worker global scopes inherit methods, properties, etc. from `WorkerGlobalScope`, you can run lines such as those above without specifying a parent object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other global object interface: {{domxref("Window")}}, {{domxref("DedicatedWorkerGlobalScope")}}, {{domxref("SharedWorkerGlobalScope")}}, , {{domxref("ServiceWorkerGlobalScope")}}
- Other Worker-related interfaces: {{domxref("Worker")}}, {{domxref("WorkerLocation")}}, {{domxref("WorkerGlobalScope")}}, and {{domxref("ServiceWorkerGlobalScope")}}.
- [Using web workers.](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
