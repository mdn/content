---
title: MutationObserver
slug: Web/API/MutationObserver
tags:
  - API
  - DOM
  - DOM Reference
  - Interface
  - MutationObserver
  - NeedsContent
  - NeedsUpdate
  - Reference
  - mutation
  - observers
  - resize
browser-compat: api.MutationObserver
---
<div>{{APIRef("DOM WHATWG")}}</div>

<p>The {{domxref("MutationObserver")}} interface provides the ability to watch for changes being made to the <a href="/en-US/docs/Web/API/Document_Object_Model">DOM</a> tree. It is designed as a replacement for the older <a href="/en-US/docs/Web/API/MutationEvent">Mutation Events</a> feature, which was part of the DOM3 Events specification.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
	<dt>{{domxref("MutationObserver.MutationObserver", "MutationObserver()")}}</dt>
	<dd>Creates and returns a new <code>MutationObserver</code> which will invoke a specified callback function when DOM changes occur.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<dl>
	<dt>{{domxref("MutationObserver.disconnect()", "disconnect()")}}</dt>
	<dd>Stops the <code>MutationObserver</code> instance from receiving further notifications until and unless {{domxref("MutationObserver.observe", "observe()")}} is called again.</dd>
	<dt>{{domxref("MutationObserver.observe()", "observe()")}}</dt>
	<dd>Configures the <code>MutationObserver</code> to begin receiving notifications through its callback function when DOM changes matching the given options occur.</dd>
	<dt>{{domxref("MutationObserver.takeRecords()", "takeRecords()")}}</dt>
	<dd>Removes all pending notifications from the <code>MutationObserver</code>'s notification queue and returns them in a new {{jsxref("Array")}} of {{domxref("MutationRecord")}} objects.</dd>
</dl>

<h2 id="Mutation_Observer_customize_resize_event_listener_demo">Mutation Observer &amp; customize resize event listener &amp; demo</h2>

<p><a href="https://codepen.io/webgeeker/full/YjrZgg/">https://codepen.io/webgeeker/full/YjrZgg/</a></p>

<h2 id="Example">Example</h2>

<p>The following example was adapted from <a href="https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/">this blog post</a>.</p>

<pre class="brush: js">// Select the node that will be observed for mutations
const targetNode = document.getElementById('some-id');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
observer.disconnect();</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
	<li>{{domxref('PerformanceObserver')}}</li>
	<li>{{domxref('ResizeObserver')}}</li>
	<li>{{domxref('IntersectionObserver')}}</li>
	<li><a href="https://updates.html5rocks.com/2012/02/Detect-DOM-changes-with-Mutation-Observers">A brief overview</a></li>
	<li><a href="https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/">A more in-depth discussion</a></li>
	<li><a href="https://www.youtube.com/watch?v=eRZ4pO0gVWw">A screencast by Chromium developer Rafael Weinstein</a></li>
</ul>
