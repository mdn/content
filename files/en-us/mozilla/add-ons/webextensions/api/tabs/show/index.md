---
title: tabs.show()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/show
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - show
  - tabs
browser-compat: webextensions.api.tabs.show
---
<div>{{AddonSidebar()}}</div>

<p>Shows one or more tabs that were previously hidden by a call to {{WebExtAPIRef("tabs.hide")}}.</p>

<p>This is an asynchronous function that returns a <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:js">var showing = browser.tabs.show(
  tabIds          // integer or integer array
)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>tabIds</code></dt>
 <dd><code>integer</code> or <code>array</code> of <code>integer</code>. The IDs of the tab or tabs to show.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code> that will be fulfilled with no arguments. If any error occurs, the promise will be rejected with an error message.</p>

<h2 id="Examples">Examples</h2>

<p>Show a single tab:</p>

<pre class="brush: js">function onShown() {
  console.log(`Shown`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.tabs.show(2).then(onShown, onError);</pre>

<p>Show multiple tabs:</p>

<pre class="brush: js">function onShown() {
  console.log(`Shown`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.tabs.show([15, 14, 1]).then(onShown, onError);</pre>

<p>{{WebExtExamples}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
