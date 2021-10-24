---
title: sidebarAction.close()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/close
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - close
  - sidebarAction
browser-compat: webextensions.api.sidebarAction.close
---
<div>{{AddonSidebar()}}</div>

<p>Closes the sidebar in the active window, if it is the extension's own sidebar.</p>

<p>You can only call this function from inside the handler for a <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/User_actions">user action</a>.</p>

<p>This is an asynchronous function that returns a <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:js">browser.sidebarAction.close()
</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Return_value">Return value</h3>

<p>A <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code> that is resolved with no arguments.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Examples">Examples</h2>

<p>Close the sidebar when the user selects a context menu item:</p>

<pre class="brush: js">browser.menus.create({
  id: "close-sidebar",
  title: "close sidebar",
  contexts: ["all"]
});

browser.menus.onClicked.addListener(() =&gt; {
  browser.sidebarAction.close();
});</pre>

<p>{{WebExtExamples}}</p>
