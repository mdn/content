---
title: contextualIdentities.get()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/get
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - contextualIdentities
  - get
browser-compat: webextensions.api.contextualIdentities.get
---
<div>{{AddonSidebar()}}</div>

<p>Gets information about a contextual identity, given its cookie store ID.</p>

<p>This is an asynchronous function that returns a <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:js">var getContext = browser.contextualIdentities.get(
  cookieStoreId                  // string
)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>cookieStoreId</code></dt>
 <dd>
 <p><code>string</code>. The ID of this contextual identity's cookie store. Because contextual identities each have their own cookie store, this serves as an identifier for the contextual identity itself.</p>
 </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code> that will be fulfilled with a {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} that describes the identity. If the identity could not be found or the contextual identities feature is not enabled, the promise is rejected.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Examples">Examples</h2>

<p>This example tries to retrieve the contextual identity whose ID is "firefox-container-1":</p>

<pre class="brush: js">function onGot(context) {
  if (!context) {
    console.error("Context not found");
  } else {
    console.log(`Name: ${context.name}`);
  }
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities.get("firefox-container-1").then(onGot, onError);</pre>

<p>{{WebExtExamples}}</p>
