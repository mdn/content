---
title: pkcs11.isModuleInstalled()
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11/isModuleInstalled
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - isModuleInstalled
  - pkcs11
browser-compat: webextensions.api.pkcs11.isModuleInstalled
---
<div>{{AddonSidebar()}}</div>

<p>Checks whether the named PKCS #11 module is currently installed in Firefox.</p>

<p>This is an asynchronous function that returns a <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:js">var checking = browser.pkcs11.isModuleInstalled(
  name              // string
)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>name</code></dt>
 <dd><code>string</code>. Name of the module to check.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code> that will be fulfilled with <code>true</code> if the module is installed, <code>false</code> otherwise.</p>

<p>If the module an error occurs, the promise will be rejected with an error message.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Examples">Examples</h2>

<p>Checks whether the module named "pkcs11_module" is installed:</p>

<pre class="brush: js">function logIsInstalled(isInstalled) {
  console.log(`Module is installed: ${isInstalled}`);
}

browser.pkcs11.isModuleInstalled("pkcs11_module").then(logIsInstalled);</pre>

<p>{{WebExtExamples}}</p>
