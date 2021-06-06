---
title: sessions.removeTabValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/removeTabValue
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - removeTabValue
  - sessions
browser-compat: webextensions.api.sessions.removeTabValue
---
<div>{{AddonSidebar()}}</div>

<p>Removes a value previously stored by a call to {{WebExtAPIRef("sessions.setTabValue")}}.</p>

<p>This is an asynchronous function that returns a <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:js">var removing = browser.sessions.removeTabValue(
  tabId,    // integer
  key       // string
)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>tabId</code></dt>
 <dd><code>integer</code>. ID of the tab whose data you are trying to remove. Error is thrown if ID is invalid.</dd>
 <dt><code>key</code></dt>
 <dd><code>string</code>. Key identifying the particular value to remove. This needs to match the key previously given in {{WebExtAPIRef("sessions.setTabValue")}}.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code> that will be resolved no arguments if the item was successfully removed. If the call failed (for example, because the tab ID could not be found) then the promise will be rejected with an error message.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Examples">Examples</h2>

<p>This code adds two context menu items: one stores a value associated with the current tab, the other one removes it:</p>

<pre class="brush: js">async function setOnActiveTab() {
  let tabArray = await browser.tabs.query({currentWindow: true, active: true});
  let tabId = tabArray[0].id;
  await browser.sessions.setTabValue(tabId, "my-key", "my-value");
}

async function removeFromActiveTab() {
  let tabArray = await browser.tabs.query({currentWindow: true, active: true});
  let tabId = tabArray[0].id;
  await browser.sessions.removeTabValue(tabId, "my-key");
}

browser.menus.create({
  id: "add-my-item",
  title: "add item",
  contexts: ["all"]
});

browser.menus.create({
  id: "remove-my-item",
  title: "remove item",
  contexts: ["all"]
});

browser.menus.onClicked.addListener((info) =&gt; {
  if (info.menuItemId === "add-my-item") {
    setOnActiveTab();
  } else {
    removeFromActiveTab();
  }
});</pre>

<p>{{WebExtExamples}}</p>
