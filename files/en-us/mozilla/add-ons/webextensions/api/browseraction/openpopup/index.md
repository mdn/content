---
title: browserAction.openPopup()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/openPopup
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - browserAction
  - openPopup
browser-compat: webextensions.api.browserAction.openPopup
---
<div>{{AddonSidebar()}}</div>

<p>Open the browser action's popup.</p>

<p>You can only call this function from inside the handler for a <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/User_actions">user action</a>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:js">browser.browserAction.openPopup()
</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Return_value">Return value</h3>

<p>A <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code> that is resolved with no arguments.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Examples">Examples</h2>

<p>Open the popup when the user selects a context menu item:</p>

<pre class="brush: js">browser.menus.create({
  id: "open-popup",
  title: "open popup",
  contexts: ["all"]
});

browser.menus.onClicked.addListener(() =&gt; {
  browser.browserAction.openPopup();
});</pre>

<p>{{WebExtExamples}}</p>
