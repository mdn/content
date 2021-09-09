---
title: sessions.forgetClosedWindow()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/forgetClosedWindow
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - forgetClosedWindow
  - sessions
browser-compat: webextensions.api.sessions.forgetClosedWindow
---
<div>{{AddonSidebar()}}</div>

<div>Removes a closed window from the browser's list of recently closed windows.</div>


<div>Note that the sites visited by that window are not removed from the browser's history. Use the {{WebExtAPIRef("browsingData")}} or {{WebExtAPIRef("history")}} APIs to remove history.</div>


<p>This is an asynchronous function that returns a <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:js">var forgettingWindow = browser.sessions.forgetClosedWindow(
  sessionId            // string
)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
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
