---
title: Functions and classes available to Web Workers
slug: Web/API/Web_Workers_API/Functions_and_classes_available_to_workers
tags:
  - Reference
  - Web
---
<p>In addition to the standard <a href="/en-US/docs/Web/JavaScript">JavaScript</a> set of functions (such as {{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("Object")}}, {{jsxref("JSON")}}, etc), there are a variety of functions available from the DOM to workers. This article provides a list of those.</p>

<h2 id="Worker_Contexts_Functions">Worker Contexts &amp; Functions</h2>

<p><strong>Workers run in a different global context than the current window!</strong> While  {{domxref("Window")}} is not directly available to workers, many of the same methods are defined in a shared mixin (<code>WindowOrWorkerGlobalScope</code>), and made available to workers through their own {{domxref("WorkerGlobalScope")}}-derived contexts: </p>

<ul>
 <li>{{domxref("DedicatedWorkerGlobalScope")}} for dedicated workers</li>
 <li>{{domxref("SharedWorkerGlobalScope")}} for shared workers</li>
 <li>{{domxref("ServiceWorkerGlobalScope")}} for <a href="/en-US/docs/Web/API/ServiceWorker_API">service workers</a></li>
</ul>

<p>Some of the functions that are common to all workers and to the main thread (from <code>WindowOrWorkerGlobalScope</code>) are: {{domxref("atob", "atob()")}}, {{domxref("btoa", "btoa()")}}, {{domxref("clearInterval", "clearInterval()")}}, {{domxref("clearTimeout()")}},{{domxref("Window.dump()", "dump()")}} {{non-standard_inline}}, {{domxref("setInterval()")}}, {{domxref("setTimeout()")}}.</p>

<p>The following functions are <strong>only</strong> available to workers:</p>

<ul>
 <li>{{domxref("WorkerGlobalScope.importScripts", "WorkerGlobalScope.importScripts()")}} (all workers), </li>
 <li>{{domxref("DedicatedWorkerGlobalScope.postMessage")}} (dedicated workers only).</li>
</ul>

<h2 id="Web_APIs_available_in_workers">Web APIs available in workers</h2>

<div class="notecard note">
<p><strong>Note:</strong> If a listed API is supported by a platform in a particular version, then it can generally be assumed to work in web workers.</p>
</div>

<p>The following Web APIs are available to workers: {{domxref("Broadcast_Channel_API","Broadcast Channel API")}}, {{domxref("Cache", "Cache API")}},{{domxref("Channel_Messaging_API", "Channel Messaging API")}},{{domxref("Console API", "Console API")}}, {{domxref("Crypto")}}, {{domxref("CustomEvent")}}, {{domxref("Data_Store_API", "Data Store")}} (Firefox only), {{domxref("DOMRequest")}} and {{domxref("DOMCursor")}}, {{domxref("Fetch_API", "Fetch")}}, {{domxref("FileReader")}}, {{domxref("FileReaderSync")}} (only works in workers!), {{domxref("FormData")}}, {{domxref("ImageData")}}, {{domxref("IndexedDB_API", "IndexedDB")}}, <a href="/en-US/docs/Web/API/Network_Information_API">Network Information API</a>, {{domxref("Notifications_API", "Notifications")}}, {{domxref("Performance")}}, {{domxref("PerformanceEntry")}}, {{domxref("PerformanceMeasure")}}, {{domxref("PerformanceMark")}}, {{domxref("PerformanceObserver")}}, {{domxref("PerformanceResourceTiming")}}, {{jsxref("Promise")}}, <a href="/en-US/docs/Web/API/Server-sent_events">Server-sent events</a>, {{domxref("ServiceWorkerRegistration")}}, {{domxref("TextEncoder")}} and {{domxref("TextDecoder")}}, {{ domxref("URL") }}, <a href="/en-US/docs/Web/API/WebGL_API">WebGL</a> with {{domxref("OffscreenCanvas")}} (enabled behind a feature preference setting <code>gfx.offscreencanvas.enabled</code>), {{domxref("WebSocket")}}, {{domxref("XMLHttpRequest")}}.</p>

<p>Workers can also spawn other workers, so these APIs are also available: {{domxref("Worker")}}, {{domxref("WorkerGlobalScope")}}, {{domxref("WorkerLocation")}}, {{domxref("WorkerNavigator")}}.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Workers_API/Using_web_workers">Using web workers</a></li>
 <li>{{domxref("Worker")}}</li>
</ul>
