---
title: Web Workers API
slug: Web/API/Web_Workers_API
page-type: web-api-overview
spec-urls: https://html.spec.whatwg.org/multipage/workers.html#workers
---

{{DefaultAPISidebar("Web Workers API")}}

**Web Workers** makes it possible to run a script operation in a background thread separate from the main execution thread of a web application. The advantage of this is that laborious processing can be performed in a separate thread, allowing the main (usually the UI) thread to run without being blocked/slowed down.

## Concepts and usage

A worker is an object created using a constructor (e.g. {{DOMxRef("Worker.Worker", "Worker()")}}) that runs a named JavaScript file — this file contains the code that will run in the worker thread.

In addition to the standard [JavaScript](/en-US/docs/Web/JavaScript) set of functions (such as {{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("Object")}}, {{jsxref("JSON")}}, etc.), you can run almost any code you like inside a worker thread. There are some exceptions: for example, you can't directly manipulate the DOM from inside a worker, or use some default methods and properties of the {{domxref("Window")}} object. For information about the code that you _can_ run see [supported functions](/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#functions_available_in_workers), and [supported Web APIs](/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers).

Data is sent between workers and the main thread via a system of messages — both sides send their messages using the `postMessage()` method, and respond to messages via the `onmessage` event handler (the message is contained within the {{domxref("Worker/message_event", "message")}} event's `data` property). The data is copied rather than shared.

Workers may in turn spawn new workers, as long as those workers are hosted within the same {{glossary("origin")}} as the parent page.

In addition, workers can make network requests using the {{domxref("WorkerGlobalScope/fetch", "fetch()")}} or {{domxref("XMLHttpRequest")}} APIs (although note that the {{domxref("XMLHttpRequest.responseXML", "responseXML")}} attribute of `XMLHttpRequest` will always be `null`).

### Worker types

There are a number of different types of workers:

- {{domxref("Worker", "Dedicated workers", "", "nocode")}} are workers that are utilized by a single script. This context is represented by a {{DOMxRef("DedicatedWorkerGlobalScope")}} object.
- {{domxref("SharedWorker", "Shared workers", "", "nocode")}} are workers that can be utilized by multiple scripts running in different windows, IFrames, etc., as long as they are in the same domain as the worker. They are a little more complex than dedicated workers — scripts must communicate via an active port.
- {{domxref("Service Worker API", "Service Workers", "", "nocode")}} essentially act as proxy servers that sit between web applications, the browser, and the network (when available). They are intended, among other things, to enable the creation of effective offline experiences, intercept network requests and take appropriate action based on whether the network is available, and update assets residing on the server. They will also allow access to push notifications and background sync APIs.

### Worker contexts

While {{domxref("Window")}} is not directly available to workers, many of the same methods are defined in a shared mixin (`WindowOrWorkerGlobalScope`), and made available to workers through their own {{domxref("WorkerGlobalScope")}}-derived contexts:

- {{domxref("DedicatedWorkerGlobalScope")}} for dedicated workers
- {{domxref("SharedWorkerGlobalScope")}} for shared workers
- {{domxref("ServiceWorkerGlobalScope")}} for [service workers](/en-US/docs/Web/API/Service_Worker_API)

## Interfaces

- {{DOMxRef("Worker")}}
  - : Represents a running worker thread, allowing you to pass messages to the running worker code.
- {{DOMxRef("WorkerLocation")}}
  - : Defines the absolute location of the script executed by the {{domxref("Worker")}}.
- {{DOMxRef("SharedWorker")}}
  - : Represents a specific kind of worker that can be accessed from several {{glossary("browsing context", "browsing contexts")}} (i.e. windows, tabs, or iframes) or even other workers.
- {{DOMxRef("WorkerGlobalScope")}}
  - : Represents the generic scope of any worker (doing the same job as {{DOMxRef("Window")}} does for normal web content). Different types of worker have scope objects that inherit from this interface and add more specific features.
- {{DOMxRef("DedicatedWorkerGlobalScope")}}
  - : Represents the scope of a dedicated worker, inheriting from {{DOMxRef("WorkerGlobalScope")}} and adding some dedicated features.
- {{DOMxRef("SharedWorkerGlobalScope")}}
  - : Represents the scope of a shared worker, inheriting from {{DOMxRef("WorkerGlobalScope")}} and adding some dedicated features.
- {{DOMxRef("WorkerNavigator")}}
  - : Represents the identity and state of the user agent (the client).

## Examples

We have created a couple of demos to show web worker usage:

- [Basic dedicated worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([run dedicated worker](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).
- [Basic shared worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([run shared worker](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)).
- [OffscreenCanvas worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) ([run OffscreenCanvas worker](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/)).

You can find out more information on how these demos work in [Using Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).

## Specifications

{{Specifications}}

## See also

- [Using Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{domxref("Worker")}} interface
- {{domxref("SharedWorker")}} interface
- {{domxref("Service Worker API", "", "", "nocode")}}
