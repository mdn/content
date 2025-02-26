---
title: Functions and classes available to Web Workers
slug: Web/API/Web_Workers_API/Functions_and_classes_available_to_workers
page-type: guide
---

{{DefaultAPISidebar("Web Workers API")}}

In addition to the standard [JavaScript](/en-US/docs/Web/JavaScript) set of functions (such as {{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("Object")}}, {{jsxref("JSON")}}, etc.), there are a variety of functions (and APIs) available in the workers. This article provides a list of those.

## Functions available in workers

The following functions are available to workers:

- {{domxref("WorkerGlobalScope.atob()")}}
- {{domxref("WorkerGlobalScope.btoa()")}}
- {{domxref("WorkerGlobalScope.clearInterval()")}}
- {{domxref("WorkerGlobalScope.clearTimeout()")}}
- {{domxref("WorkerGlobalScope.createImageBitmap()")}}
- {{domxref("WorkerGlobalScope.dump()")}} {{non-standard_inline}}
- {{domxref("WorkerGlobalScope.fetch()")}}
- {{domxref("WorkerGlobalScope.queueMicrotask()")}}
- {{domxref("WorkerGlobalScope.reportError()")}}
- {{domxref("WorkerGlobalScope.setInterval()")}}
- {{domxref("WorkerGlobalScope.setTimeout()")}}
- {{domxref("WorkerGlobalScope.structuredClone()")}}
- {{domxref("DedicatedWorkerGlobalScope.postMessage()")}} (dedicated workers only)
- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}} (dedicated workers only)
- {{domxref("DedicatedWorkerGlobalScope.cancelAnimationFrame()")}} (dedicated workers only)

The following functions are **only** available to workers:

- {{domxref("WorkerGlobalScope.importScripts()")}}

## Web APIs available in workers

> [!NOTE]
> If a listed API is supported by a platform in a particular version, then it can generally be assumed to be available in web workers. You can also test support for a particular object/function using the site: <https://worker-playground.glitch.me/>

The following Web APIs are available to workers:

- {{domxref("Background Fetch API", "", "", "nocode")}}
- {{domxref("Background Synchronization API", "", "", "nocode")}}
- {{domxref("Barcode Detection API", "", "", "nocode")}}
- {{domxref("Broadcast Channel API", "", "", "nocode")}}
- {{domxref("Canvas API", "", "", "nocode")}}
- {{domxref("Channel Messaging API", "", "", "nocode")}}
- {{domxref("Compression Streams API", "", "", "nocode")}}
- {{domxref("Compute Pressure API", "", "", "nocode")}}
- {{domxref("Console API", "", "", "nocode")}}
- {{domxref("Content Index API", "", "", "nocode")}}
- {{domxref("Cookie Store API", "", "", "nocode")}} (service workers only)
- {{domxref("CSS Font Loading API", "", "", "nocode")}}
- {{domxref("Encoding API", "", "", "nocode")}}
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
- {{domxref("Reporting API", "", "", "nocode")}}
- {{domxref("Server-Sent Events", "", "", "nocode")}}
- {{domxref("Service Worker API", "", "", "nocode")}}
- {{domxref("Streams API", "", "", "nocode")}}
- {{domxref("Trusted Types API", "", "", "nocode")}}
- {{domxref("URL API", "", "", "nocode")}}
- {{domxref("URL Pattern API", "", "", "nocode")}}
- {{domxref("User-Agent Client Hints API", "", "", "nocode")}}
- {{domxref("Web Crypto API", "", "", "nocode")}}
- {{domxref("Web Locks API", "", "", "nocode")}}
- {{domxref("Web Serial API", "", "", "nocode")}}
- {{domxref("Web Periodic Background Synchronization API", "", "", "nocode")}}
- {{domxref("WebCodecs API", "", "", "nocode")}}
- {{domxref("WebGL API", "", "", "nocode")}}
- {{domxref("WebGPU API", "", "", "nocode")}}
- {{domxref("WebHID API", "", "", "nocode")}} (dedicated and service workers only)
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
