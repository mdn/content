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

- {{domxref("atob", "atob()")}}
- {{domxref("btoa", "btoa()")}}
- {{domxref("clearInterval", "clearInterval()")}}
- {{domxref("clearTimeout()")}}
- {{domxref("Window.dump()", "dump()")}} {{non-standard_inline}}
- {{domxref("queueMicrotask()")}}
- {{domxref("setInterval()")}}
- {{domxref("setTimeout()")}}
- {{domxref("structuredClone()")}}
- {{domxref("window.requestAnimationFrame")}} (dedicated workers only)
- {{domxref("window.cancelAnimationFrame")}} (dedicated workers only)

The following functions are **only** available to workers:

- {{domxref("WorkerGlobalScope.importScripts", "WorkerGlobalScope.importScripts()")}} (all workers)
- {{domxref("DedicatedWorkerGlobalScope.postMessage")}} (dedicated workers only)

## Web APIs available in workers

> **Note:** If a listed API is supported by a platform in a particular version, then it can generally be assumed to be available in web workers. You can also test support for a particular object/function using the site: <https://worker-playground.glitch.me/>

The following Web APIs are available to workers:

- {{domxref("Barcode_Detection_API","Barcode Detection API")}}
- {{domxref("Broadcast_Channel_API","Broadcast Channel API")}}
- {{domxref("Cache", "Cache API")}}
- {{domxref("Channel_Messaging_API", "Channel Messaging API")}}
- {{domxref("Console API", "Console API")}}
- [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) (e.g. {{domxref("Crypto")}})
- [CSS Font Loading API](/en-US/docs/Web/API/CSS_Font_Loading_API)
- {{domxref("CustomEvent")}}
- {{domxref("Encoding_API", "Encoding API")}} (e.g. {{domxref("TextEncoder")}}, {{domxref("TextDecoder")}})
- {{domxref("Fetch_API", "Fetch API")}}
- {{domxref("FileReader")}}
- {{domxref("FileReaderSync")}} (only works in workers!)
- {{domxref("FormData")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageData")}}
- {{domxref("IndexedDB_API", "IndexedDB")}}
- {{domxref("Media Source Extensions API", "Media Source Extensions API", "", "nocode")}} (dedicated workers only)
- [Network Information API](/en-US/docs/Web/API/Network_Information_API)
- {{domxref("Notifications_API", "Notifications API")}}
- {{domxref("OffscreenCanvas")}} (and all the canvas context APIs)
- {{domxref("Performance_API","Performance API")}}, including:
  - {{domxref("Performance")}}
  - {{domxref("PerformanceEntry")}}
  - {{domxref("PerformanceMeasure")}}
  - {{domxref("PerformanceMark")}}
  - {{domxref("PerformanceObserver")}}
  - {{domxref("PerformanceResourceTiming")}}
- [Server-sent events](/en-US/docs/Web/API/Server-sent_events)
- {{domxref("ServiceWorkerRegistration")}}
- {{domxref("URL_API","URL API")}} (e.g. {{domxref("URL")}})
- {{domxref('WebCodecs_API','','','true')}}
- {{domxref("WebSocket")}}
- {{domxref("XMLHttpRequest")}}

Workers can also spawn other workers, so these APIs are also available:

- {{domxref("Worker")}}
- {{domxref("WorkerGlobalScope")}}
- {{domxref("WorkerLocation")}}
- {{domxref("WorkerNavigator")}}

## See also

- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{domxref("Worker")}}
