---
title: FileRequest.onprogress
slug: Web/API/FileRequest/onprogress
tags:
  - API
  - DOM
  - Files
  - Non Standard
  - Property
  - Reference
  - WebAPI
---
<p>{{APIRef("File System API")}} {{non-standard_header}}</p>

<h2 id="Summary">Summary</h2>

<p>This property specifies a callback function to be run repeatedly while the operation represented by a {{ domxref("FileRequest") }} object is in progress.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="eval"><em>instanceOfFileRequest</em>.onprogress = <em>function</em>;
</pre>

<p>Where <code><em>instanceOfFileRequest</em></code> is a {{ domxref("FileRequest") }} object and <code><em>function</em></code> is the JavaScript function to execute.</p>

<p>Each time the function callback is called, it gets an object as its first parameter. Those objects contain two properties:</p>

<dl>
 <dt><code>loaded</code></dt>
 <dd>A number representing the current amount of bytes processed by the operation.</dd>
 <dt><code>total</code></dt>
 <dd>A number representing the total amount of bytes that will be processed by the operation.</dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="brush: js">// Assuming 'request' which is a FileRequest object

request.onprogress = function (status) {
  var progress = document.querySelector('progress');

  progress.value = status.loaded;
  progress.max   = status.total;
}
</pre>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any current specification.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{ domxref("DOMRequest") }}</li>
 <li>{{ domxref("LockedFile") }}</li>
</ul>
