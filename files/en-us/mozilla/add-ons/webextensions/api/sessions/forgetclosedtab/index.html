---
title: sessions.forgetClosedTab()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/forgetClosedTab
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - forgetClosedTab
  - sessions
browser-compat: webextensions.api.sessions.forgetClosedTab
---
<div>{{AddonSidebar()}}</div>

<div>Removes a closed tab from the browser's list of recently closed tabs.</div>


<div>Note that the sites visited by that tab are not removed from the browser's history. Use the {{WebExtAPIRef("browsingData")}} or {{WebExtAPIRef("history")}} APIs to remove history.</div>


<p>This is an asynchronous function that returns a <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:js">var forgettingTab = browser.sessions.forgetClosedTab(
  windowId,            // integer
  sessionId            // string
)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>windowId</code></dt>
 <dd><code>Integer</code>. The ID of the window that hosted the tab you want to forget.</dd>
 <dt><code>sessionId</code></dt>
 <dd><code>String</code>. The ID of the session you want to forget.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>. This will be fulfilled with no arguments when the session has been removed.</p>

<p>If an error occurs, the promise will be rejected with an error message.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Examples">Examples</h2>

<p>This code forgets the single most recently-closed session, whether it's a tab or a window:</p>

<pre class="brush: js">function forgetMostRecent(sessionInfos) {
  if (!sessionInfos.length) {
    console.log("No sessions found")
    return;
  }
  let sessionInfo = sessionInfos[0];
  if (sessionInfo.tab) {
    browser.sessions.forgetClosedTab(sessionInfo.tab.windowId, sessionInfo.tab.sessionId);
  } else {
    browser.sessions.forgetClosedWindow(sessionInfo.window.sessionId);
  }
}

function onError(error) {
  console.log(error);
}

browser.sessions.getRecentlyClosed({maxResults: 1})
.then(forgetMostRecent, onError);</pre>

<p>{{WebExtExamples}}</p>
