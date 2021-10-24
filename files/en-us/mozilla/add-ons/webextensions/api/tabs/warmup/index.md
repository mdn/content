---
title: tabs.warmup()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/warmup
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - tabs
  - warmup
browser-compat: webextensions.api.tabs.warmup
---
<div>{{AddonSidebar()}}</div>

<p>To optimize system resource usage, browsers may drop GPU resources associated with tabs that the user has not accessed for a certain amount of time. If a browser has done this for a tab, then reactivating the tab (for example, when the user switches to it) may take longer than it normally would.</p>

<p>The <code>tabs.warmup()</code> API enables an extension to start the process of rendering the resources for an inactive tab, if the extension expects that the user might switch to the tab soon. This then makes the actual tab switch faster than it would be otherwise.</p>

<p>Note this API does not work on discarded tabs and does not need to be called immediately prior to switching tabs. It is merely a performance improvement when the tab switch can be anticipated, such as when hovering over a button that when clicked would switch to the tab.</p>

<p>It is expected that this API would mostly be useful to tab management extensions.</p>

<p>This is an asynchronous function that returns a <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:js">var warming = browser.tabs.warmup(
  tabId               // integer
)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>tabId</code></dt>
 <dd><code>integer</code>. ID of the tab to warm up. If the argument passed here is not an integer (in particular, if it is <code>null</code> or <code>undefined</code>) then <code>warmup()</code> will throw an exception synchronously.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code> that will be fulfilled with no arguments if the tab identified by <code>tabId</code> is successfully warmed up. If <code>tabId</code> does not identify an open tab, or if warming up fails for some other reason, then the promise will be rejected with an error message.</p>

<h2 id="Examples">Examples</h2>

<p>This code adds a listener to the <code>browserAction.onClicked</code> event. The listener retrieves all tabs in the current window that contain pages under "https://developer.mozilla.org/" and warms up the first one that it finds.</p>

<pre class="brush: js">function onSuccess() {
  console.log("success!");
}

function onFailure(error) {
  // e.g. ID of a nonexistent tab
  console.error(error);
}

async function warmupMDN() {

  const mdnTabs = await browser.tabs.query({
    currentWindow: true,
    url: "https://developer.mozilla.org/*"
  });

  if (mdnTabs.length &gt; 0) {
    const warming = browser.tabs.warmup(mdnTabs[0].id);
    warming.then(onSuccess, onFailure);
  }

}

browser.browserAction.onClicked.addListener(warmupMDN);
</pre>

<p>{{WebExtExamples}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
