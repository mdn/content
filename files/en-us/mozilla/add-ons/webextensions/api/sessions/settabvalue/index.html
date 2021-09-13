---
title: sessions.setTabValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/setTabValue
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - sessions
  - setTabValue
browser-compat: webextensions.api.sessions.setTabValue
---
<div>{{AddonSidebar()}}</div>

<p>Stores a key/value pair to associate with a given tab. You can subsequently retrieve this value using {{WebExtAPIRef("sessions.getTabValue")}}.</p>

<p>Note that this data will only be visible to the extension that set it, and not to any other extensions.</p>

<p>This is an asynchronous function that returns a <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:js">var storing = browser.sessions.setTabValue(
  tabId,    // integer
  key,      // string
  value     // string or object
)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>tabId</code></dt>
 <dd><code>integer</code>. ID of the tab with which you want to associate the data. Error is thrown if ID is invalid.</dd>
 <dt><code>key</code></dt>
 <dd><code>string</code>. Key that you can later use to retrieve this particular data value.</dd>
 <dt><code>value</code></dt>
 <dd><code>string</code> or <code>object</code>. If this is an object it is <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify">stringified</a>, so object methods, for example, will be omitted. If a function is given here it will be stored as the value <code>null</code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code> that will be resolved with no arguments if the call succeeded. If the call failed (for example, because the tab ID could not be found) then the promise will be rejected with an error message.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Examples">Examples</h2>

<p>Set a value on the active tab when the user selects a menu item. Note that you'll need the "menus" <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permission</a> to run this example:</p>

<pre class="brush: js">async function setOnActiveTab() {
  let tabArray = await browser.tabs.query({currentWindow: true, active: true});
  let tabId = tabArray[0].id;
  await browser.sessions.setTabValue(tabId, "my-key", "my-value");
}

browser.menus.create({
  id: "my-item",
  title: "my item",
  contexts: ["all"]
});

browser.menus.onClicked.addListener(setOnActiveTab);</pre>

<p>{{WebExtExamples}}</p>
