---
title: HTMLIFrameElement.contentDocument
slug: Web/API/HTMLIFrameElement/contentDocument
browser-compat: api.HTMLIFrameElement.contentDocument
---
<p>If the iframe and the iframe's parent document are <a href="/en-US/docs/Web/Security/Same-origin_policy">Same Origin</a>, returns a <a href="/en-US/docs/Web/API/Document" title="The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree."><code>Document</code></a> (that is, the active document in the inline frame's nested browsing context), else returns <code>null</code>.</p>

<h2 id="Example_of_contentDocument">Example of contentDocument</h2>

<pre class="brush: js">var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;

iframeDocument.body.style.backgroundColor = "blue";
// This would turn the iframe blue.</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
