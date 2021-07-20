---
title: Planned changes to shared memory
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Planned_changes
tags:
  - Fetch
  - Guide
  - HTML
  - JavaScript
  - Security
  - SharedArrayBuffer
  - Spectre
  - postMessage
---
<p>{{JSRef}}</p>

<p>There is standardization work ongoing that enables developers to create <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer"><code>SharedArrayBuffer</code></a> objects again, but changes are needed in order to be use these across threads (i.e., <code>postMessage()</code> for <code>SharedArrayBuffer</code> objects throws by default). These changes provide further isolation between sites and help reduce the impact of attacks with high-resolution timers, which can be created with shared memory.</p>

<div class="note">
<p><strong>Note:</strong> Starting with Firefox 79, the features described in this document are enabled by default.</p>

<p>Chrome intends to implement similar restrictions.</p>
</div>

<h2 id="New_HTTP_header_bonanza">New HTTP header bonanza</h2>

<p>As a baseline requirement, documents will need to be in a <a href="/en-US/docs/Web/Security/Secure_Contexts">secure context</a>.</p>

<p>For top-level documents, two headers will need to be set:</p>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy"><code>Cross-Origin-Opener-Policy</code></a> with <code>same-origin</code> as value (protects your origin from attackers)</li>
 <li><a href="/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy"><code>Cross-Origin-Embedder-Policy</code></a> with <code>require-corp</code> as value (protects victims from your origin)</li>
</ul>

<p>With these two headers set, <code>postMessage()</code> will no longer throw for <code>SharedArrayBuffer</code> objects and shared memory across threads is therefore available.</p>

<p>Nested documents and dedicated workers will need to set the <a href="/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy"><code>Cross-Origin-Embedder-Policy</code></a> header as well with the same value. No further changes are needed for same-origin nested documents and subresources. Same-site (but cross-origin) nested documents and subresources will need to set the <a href="/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy" title="The HTTP Cross-Origin-Resource-Policy response header conveys a desire that the browser blocks no-cors cross-origin/cross-site requests to the given resource."><code>Cross-Origin-Resource-Policy</code></a> header with <code>same-site</code> as value. And their cross-origin (and cross-site) counterparts need to set the same header with <code>cross-origin</code> as value. Note that setting the <a href="/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy" title="The HTTP Cross-Origin-Resource-Policy response header conveys a desire that the browser blocks no-cors cross-origin/cross-site requests to the given resource."><code>Cross-Origin-Resource-Policy</code></a> header to any other value than <code>same-origin</code> opens up the resource to potential attacks, such as <a href="https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)">Spectre</a>.</p>

<p>Note that the <a href="/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy"><code>Cross-Origin-Opener-Policy</code></a> header limits your ability to retain a reference to popups. Direct access between two top-level window contexts will essentially only work if they are same-origin and carry the same two headers with the same two values.</p>

<h2 id="API_changes">API changes</h2>

<p>As a result of this newly required environment, there are a couple API implications:</p>

<ul>
 <li>The <code>Atomics</code> object is always available.</li>
 <li><code>SharedArrayBuffer</code> objects are in principle always available, but unfortunately the constructor on the global object is hidden, unless the two headers mentioned above are set, for compatibility with web content. There is hope that this restriction can be removed in the future. <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory">WebAssembly.Memory</a></code> can still be used to get an instance.</li>
 <li>Unless the two headers mentioned above are set, the various <code>postMessage()</code> APIs will throw for <code>SharedArrayBuffer</code> objects. If they are set, <code>postMessage()</code> on <code>Window</code> objects and dedicated workers will function and allow for memory sharing.</li>
 <li>To avoid having to check whether <code>postMessage()</code> throws, <a href="/en-US/docs/Web/API/WindowOrWorkerGlobalScope/crossOriginIsolated"><code>self.crossOriginIsolated</code></a> is being standardized (a getter that returns a boolean; <code>true</code> if the headers are set), available in window and worker contexts.</li>
</ul>

<h2 id="WebAssembly_Shared_Memory">WebAssembly Shared Memory</h2>

<p>The WebAssembly <a href="https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md">Threads</a> proposal allows <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory">WebAssembly.Memory</a></code> objects to be created with a new <code><a href="https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#javascript-api-changes">shared</a></code> constructor flag. When this flag is set to <code>true</code>, the constructed <code>Memory</code> object can be shared between workers via <code>postMessage()</code>, just like <code>SharedArrayBuffer</code>, and the backing <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer">buffer</a></code> of the <code>Memory</code> object is a <code>SharedArrayBuffer</code>. Therefore, the requirements listed above for sharing a <code>SharedArrayBuffer</code> between workers also apply to sharing a <code>WebAssembly.Memory</code>.</p>

<p>The WebAssembly Threads proposal also defines a new set of <a href="https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#atomic-memory-accesses">atomic</a> instructions. Just as <code>SharedArrayBuffer</code> and its methods are unconditionally enabled (and only sharing between threads is gated on the new headers), the WebAssembly atomic instructions are also unconditionally allowed.</p>

<h2 id="Further_reading">Further reading</h2>

<ul>
 <li><a href="https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit">COOP and COEP explained</a>.</li>
 <li><code>Cross-Origin-Opener-Policy</code>: <a href="https://github.com/whatwg/html/issues/3740">whatwg/html issue #3740</a>, <a href="https://gist.github.com/annevk/6f2dd8c79c77123f39797f6bdac43f3e">draft specification</a>.</li>
 <li><code>Cross-Origin-Embedder-Policy</code>: <a href="https://github.com/whatwg/html/issues/4175">whatwg/html issue #4175</a>, <a href="https://mikewest.github.io/corpp/">draft specification</a>.</li>
 <li><code>Cross-Origin-Resource-Policy</code>: <a href="https://fetch.spec.whatwg.org/#cross-origin-resource-policy-header">standardized in Fetch</a>, new <code>cross-origin</code> value is part of the <code>Cross-Origin-Embedder-Policy</code> effort.</li>
 <li><code>postMessage()</code> changes and <a href="/en-US/docs/Web/API/WindowOrWorkerGlobalScope/crossOriginIsolated"><code>self.crossOriginIsolated</code></a>: <a href="https://github.com/whatwg/html/issues/4732">whatwg/html issue #4732</a>, <a href="https://github.com/whatwg/html/issues/4872">whatwg/html issue #4872</a>, <a href="https://github.com/whatwg/html/pull/4734">draft specification</a>.</li>
</ul>
