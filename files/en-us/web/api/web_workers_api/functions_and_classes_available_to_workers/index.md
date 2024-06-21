---
title: Functions and classes available to Web Workers
slug: Web/API/Web_Workers_API/Functions_and_classes_available_to_workers
page-type: guide
---

{{DefaultAPISidebar("Web Workers API")}}

In addition to the standard [JavaScript](/en-US/docs/Web/JavaScript) set of functions (such as {{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("Object")}}, {{jsxref("JSON")}}, etc.), there are a variety of functions available from the DOM to workers. This article provides a list of those.

## Worker Contexts & Functions

**Workers run in a different global context than the current window!** While {{domxref("Window")}} is not directly available to workers, many of the same methods are defined in a shared mixin (`WindowOrWorkerGlobalScope`), and made available to workers through their own {{domxref("WorkerGlobalScope")}}-derived contexts:

- {{domxref("DedicatedWorkerGlobalScope")}} for dedicated workers
- {{domxref("SharedWorkerGlobalScope")}} for shared workers
- {{domxref("ServiceWorkerGlobalScope")}} for [service workers](/en-US/docs/Web/API/Service_Worker_API)

Some of the functions (a subset) that are common to all workers and to the main thread (from `WindowOrWorkerGlobalScope`) are:

- {{domxref("WorkerGlobalScope.atob()", "atob()")}}
- {{domxref("WorkerGlobalScope.btoa()", "btoa()")}}
- {{domxref("clearInterval()")}}
- {{domxref("clearTimeout()")}}
- {{domxref("createImageBitmap()")}}
- {{domxref("WorkerGlobalScope.dump()", "dump()")}} {{non-standard_inline}}
- {{domxref("fetch()")}}
- {{domxref("queueMicrotask()")}}
- {{domxref("reportError()")}}
- {{domxref("setInterval()")}}
- {{domxref("setTimeout()")}}
- {{domxref("structuredClone()")}}
- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()", "requestAnimationFrame()")}} (dedicated workers only)
- {{domxref("DedicatedWorkerGlobalScope.cancelAnimationFrame()", "cancelAnimationFrame()")}} (dedicated workers only)

The following functions are **only** available to workers:

- {{domxref("WorkerGlobalScope.importScripts", "WorkerGlobalScope.importScripts()")}} (all workers)
- {{domxref("DedicatedWorkerGlobalScope.postMessage")}} (dedicated workers only)

## Web APIs available in workers

> **Note:** If a listed API is supported by a platform in a particular version, then it can generally be assumed to be available in web workers. You can also test support for a particular object/function using the site: <https://worker-playground.glitch.me/>

The following Web APIs are available to workers:

- {{domxref("Background Fetch API", "", "", "nocode")}}
- {{domxref("Background Synchronization API", "", "", "nocode")}}
- {{domxref("Barcode Detection API", "", "", "nocode")}}
- {{domxref("Broadcast Channel API", "", "", "nocode")}}
- {{domxref("Canvas API", "", "", "nocode")}}
- {{domxref("Channel Messaging API", "", "", "nocode")}}
- {{domxref("Console API", "", "", "nocode")}}
- {{domxref("Compression Streams API", "", "", "nocode")}}
- {{domxref("CSS Font Loading API", "", "", "nocode")}}
- {{domxref("CustomEvent")}}
- {{domxref("Encoding API", "", "", "nocode")}} (e.g. {{domxref("TextEncoder")}}, {{domxref("TextDecoder")}})
- {{domxref("Fetch API", "", "", "nocode")}}
- {{domxref("File API", "", "", "nocode")}}
- {{domxref("File System API", "", "", "nocode")}}
- {{domxref("Idle Detection API", "", "", "nocode")}}
- {{domxref("IndexedDB API", "", "", "nocode")}}
- {{domxref("Media Capabilities API", "", "", "nocode")}}
- {{domxref("Media Source Extensions API", "", "", "nocode")}} (dedicated workers only)
- {{domxref("Network Information API", "", "", "nocode")}}
- {{domxref("Notifications API", "", "", "nocode")}}
- {{domxref("Payment Handler API", "", "", "nocode")}}
- {{domxref("Performance API", "", "", "nocode")}}
- {{domxref("Permissions API", "", "", "nocode")}}
- {{domxref("Prioritized Task Scheduling API", "", "", "nocode")}}
- {{domxref("Push API", "", "", "nocode")}}
- {{domxref("Server-sent events", "", "", "nocode")}}
- {{domxref("Service Worker API", "", "", "nocode")}}
- {{domxref("Streams API", "", "", "nocode")}}
- {{domxref("Trusted Types API", "", "", "nocode")}}
- {{domxref("URL API", "", "", "nocode")}} (e.g. {{domxref("URL")}})
- {{domxref("URL Pattern API", "", "", "nocode")}}
- {{domxref("User-Agent Client Hints API", "", "", "nocode")}}
- {{domxref("WebCodecs API", "", "", "nocode")}}
- {{domxref("Web Crypto API", "", "", "nocode")}} (e.g. {{domxref("Crypto")}})
- {{domxref("Web Locks API", "", "", "nocode")}}
- {{domxref("Web Serial API", "", "", "nocode")}}
- {{domxref("Web Periodic Background Synchronization API", "", "", "nocode")}}
- {{domxref("WebGPU API", "", "", "nocode")}}
- {{domxref("WebUSB API", "", "", "nocode")}}
- {{domxref("WebSockets API", "", "", "nocode")}}
- {{domxref("XMLHttpRequest API", "", "", "nocode")}}

Workers can also spawn other workers, so these APIs are also available:

- {{domxref("Worker")}}
- {{domxref("WorkerGlobalScope")}}
- {{domxref("WorkerLocation")}}
- {{domxref("WorkerNavigator")}}

## See also

- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{domxref("Worker")}}
