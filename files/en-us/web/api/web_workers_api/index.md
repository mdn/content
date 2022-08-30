---
title: Web Workers API
slug: Web/API/Web_Workers_API
page-type: web-api-overview
tags:
  - API
  - Overview
  - Reference
  - Web Workers
spec-urls: https://html.spec.whatwg.org/multipage/workers.html#workers
---
{{DefaultAPISidebar("Web Workers API")}}

**Web Workers** makes it possible to run a script operation in a background thread separate from the main execution thread of a web application. The advantage of this is that laborious processing can be performed in a separate thread, allowing the main (usually the UI) thread to run without being blocked/slowed down.

## Web Workers concepts and usage

A worker is an object created using a constructor (e.g. {{DOMxRef("Worker.Worker", "Worker()")}}) that runs a named JavaScript file — this file contains the code that will run in the worker thread.

In addition to the standard [JavaScript](/en-US/docs/Web/JavaScript) set of functions (such as [`String`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Object`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object), [`JSON`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON), etc.), you can run almost any code you like inside a worker thread. There are some exceptions: for example, you can't directly manipulate the DOM from inside a worker, or use some default methods and properties of the [`window`](/en-US/docs/Web/API/Window) object. For information about the code that you _can_ run see [worker global context and functions](#worker_global_contexts_and_functions), and [supported web APIs](#supported_web_apis) below.

Data is sent between workers and the main thread via a system of messages — both sides send their messages using the `postMessage()` method, and respond to messages via the `onmessage` event handler (the message is contained within the {{domxref("Worker/message_event", "message")}} event's `data` property). The data is copied rather than shared.

Workers may in turn spawn new workers, as long as those workers are hosted within the same {{glossary("origin")}} as the parent page. In addition, workers may use [`XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest) for network I/O, with the exception that the `responseXML` and `channel` attributes on `XMLHttpRequest` always return `null`.

### Worker types

There are a number of different types of workers:

- Dedicated workers are workers that are utilized by a single script. This context is represented by a {{DOMxRef("DedicatedWorkerGlobalScope")}} object.
- {{DOMxRef("SharedWorker","Shared workers")}} are workers that can be utilized by multiple scripts running in different windows, IFrames, etc., as long as they are in the same domain as the worker. They are a little more complex than dedicated workers — scripts must communicate via an active port.
- [Service Workers](/en-US/docs/Web/API/Service_Worker_API) essentially act as proxy servers that sit between web applications, the browser, and the network (when available). They are intended, among other things, to enable the creation of effective offline experiences, intercept network requests and take appropriate action based on whether the network is available, and update assets residing on the server. They will also allow access to push notifications and background sync APIs.

> **Note:** As per the [Web workers Spec](https://html.spec.whatwg.org/multipage/workers.html#runtime-script-errors-2), worker error events should not bubble (see {{bug(1188141)}}. This has been implemented in Firefox 42.

### Worker global contexts and functions

Workers run in a different global context than the current {{DOMxRef("window")}}! While {{domxref("Window")}} is not directly available to workers, many of the same methods are defined in a shared mixin (`WindowOrWorkerGlobalScope`), and made available to workers through their own {{domxref("WorkerGlobalScope")}}-derived contexts:

- {{domxref("DedicatedWorkerGlobalScope")}} for dedicated workers
- {{domxref("SharedWorkerGlobalScope")}} for shared workers
- {{domxref("ServiceWorkerGlobalScope")}} for [service workers](/en-US/docs/Web/API/Service_Worker_API)

Some of the functions (a subset) that are common to all workers and to the main thread (from `WindowOrWorkerGlobalScope`) are: {{domxref("atob", "atob()")}}, {{domxref("btoa", "btoa()")}}, {{domxref("clearInterval", "clearInterval()")}}, {{domxref("clearTimeout()")}}, {{domxref("Window.dump()", "dump()")}} {{non-standard_inline}}, {{domxref("setInterval()")}}, {{domxref("setTimeout()")}}.

The following functions are **only** available to workers:

- {{domxref("WorkerGlobalScope.importScripts", "WorkerGlobalScope.importScripts()")}} (all workers),
- {{domxref("DedicatedWorkerGlobalScope.postMessage")}} (dedicated workers only).

### Supported Web APIs

> **Note:** If a listed API is supported by a platform in a particular version, then it can generally be assumed to be available in web workers. You can also test support for a particular object/function using the site: <https://worker-playground.glitch.me/>

The following Web APIs are available to workers: {{domxref("Barcode_Detection_API","Barcode Detection API")}}, {{domxref("Broadcast_Channel_API","Broadcast Channel API")}}, {{domxref("Cache", "Cache API")}}, {{domxref("Channel_Messaging_API", "Channel Messaging API")}}, {{domxref("Console API", "Console API")}}, [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) ({{domxref("Crypto")}}), {{domxref("CustomEvent")}}, {{domxref("Encoding_API", "Encoding API")}} ({{domxref("TextEncoder")}}, {{domxref("TextDecoder")}}, etc.), {{domxref("Fetch_API", "Fetch API")}}, {{domxref("FileReader")}}, {{domxref("FileReaderSync")}} (only works in workers!), {{domxref("FormData")}}, {{domxref("ImageData")}}, {{domxref("IndexedDB_API", "IndexedDB")}}, [Network Information API](/en-US/docs/Web/API/Network_Information_API), {{domxref("Notifications_API", "Notifications API")}}, {{domxref("Performance_API","Performance API")}} (including: {{domxref("Performance")}}, {{domxref("PerformanceEntry")}}, {{domxref("PerformanceMeasure")}}, {{domxref("PerformanceMark")}}, {{domxref("PerformanceObserver")}}, {{domxref("PerformanceResourceTiming")}}), {{jsxref("Promise")}}, [Server-sent events](/en-US/docs/Web/API/Server-sent_events), {{domxref("ServiceWorkerRegistration")}}, {{ domxref("URL_API","URL API") }} (e.g. {{ domxref("URL") }}), [WebGL](/en-US/docs/Web/API/WebGL_API) with {{domxref("OffscreenCanvas")}} (enabled behind a feature preference setting `gfx.offscreencanvas.enabled`), {{domxref("WebSocket")}}, {{domxref("XMLHttpRequest")}}.

Workers can also spawn other workers, so these APIs are also available: {{domxref("Worker")}}, {{domxref("WorkerGlobalScope")}}, {{domxref("WorkerLocation")}}, {{domxref("WorkerNavigator")}}.

## Web Worker interfaces

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

We have created a couple of simple demos to show basic usage:

- [Basic dedicated worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([run dedicated worker](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).
- [Basic shared worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([run shared worker](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)).

You can find out more information on how these demos work in [Using Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).

## Specifications

{{Specifications}}

## See also

- [Using Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{domxref("Worker")}} interface
- {{domxref("SharedWorker")}} interface
- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
