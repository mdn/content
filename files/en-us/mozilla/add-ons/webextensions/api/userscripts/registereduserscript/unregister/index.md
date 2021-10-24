---
title: RegisteredUserScript.unregister()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript/unregister
tags:
  - Add-ons
  - Extensions
  - Method
  - User Scripts API
  - WebExtensions
  - unregister
  - userScripts
browser-compat: webextensions.api.userScripts.RegisteredUserScript.unregister
---
<p>{{AddonSidebar}}</p>

<p>The <code>unregister()</code> method of the {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}} object unregisters the user scripts represented by the object, user scripts that were registered using  {{WebExtAPIRef("userScripts.register","userScripts.register()")}}.</p>

<div class="notecard note">
<p><strong>Note:</strong> User Scripts are automatically unregistered when the related extension page (from which the user scripts were registered) is unloaded, so you should register a user script from an extension page that persists at least as long as you want the user scripts to stay registered.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">const registeredUserScript = await browser.userScripts.register(
  userScriptOptions       // object
);
…
await registeredUserScript.unregister()</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Return_value">Return value</h3>

<p>A {{JSxRef("Promise")}} that is resolved once the user scripts are unregistered. The promise does not return a value.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{WebExtAPIRef("userScripts.register","userScripts.register()")}}</li>
 <li>{{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}</li>
</ul>
