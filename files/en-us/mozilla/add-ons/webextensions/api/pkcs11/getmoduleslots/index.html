---
title: pkcs11.getModuleSlots()
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11/getModuleSlots
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - getModuleSlots
  - pkcs11
browser-compat: webextensions.api.pkcs11.getModuleSlots
---
<div>{{AddonSidebar()}}</div>

<p>Enumerate a module's slots. This function returns an array containing one entry for each slot. Each entry contains the slot's name and, if the slot contains a token, information about the token.</p>

<p>You can only call this for a module that is installed in Firefox.</p>

<p>This is an asynchronous function that returns a <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:js">var getting = browser.pkcs11.getModuleSlots(
  name              // string
)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>name</code></dt>
 <dd><code>string</code>. Name of the module. This must match the <code>name</code> property in the <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#pkcs_11_manifests">PKCS #11 manifest</a> for the module.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code> that will be fulfilled with an array of objects, one for each slot that the module provides access to. Each object has two properties:</p>

<ul>
 <li><code>name</code>: the name of the slot</li>
 <li><code>token</code>: if a token is present in this slot, a <code>Token</code> object. If no token is present in the slot, this property is <code>null</code>.</li>
</ul>

<p><code>Token</code> objects have the following properties:</p>

<dl>
 <dt><code>name</code></dt>
 <dd><code>string</code>. Name of the token.</dd>
 <dt><code>manufacturer</code></dt>
 <dd><code>string</code>. Name of the token's manufacturer.</dd>
 <dt><code>HWVersion</code></dt>
 <dd><code>string</code>. Hardware version, as a PKCS #11 version number (two 32-bit integers separated with a dot, like "1.0".</dd>
 <dt><code>FWVersion</code></dt>
 <dd><code>string</code>. Firmware version, as a PKCS #11 version number (two 32-bit integers separated with a dot, like "1.0".</dd>
 <dt><code>serial</code></dt>
 <dd><code>string</code>. Serial number, whose format is defined by the token specification.</dd>
 <dt><code>isLoggedIn</code></dt>
 <dd><code>boolean</code>: <code>true</code> if the token is logged on already, <code>false</code> otherwise.</dd>
</dl>

<p>If the module could not be found or some other error occurs, the promise will be rejected with an error message.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Examples">Examples</h2>

<p>Installs a module, then lists its slots and list the tokens they contain:</p>

<pre class="brush: js">function onInstalled() {
  return browser.pkcs11.getModuleSlots("my_module");
}

function onGotSlots(slots) {
  for (slot of slots) {
    console.log(`Slot: ${slot.name}`);
    if (slot.token) {
      console.log(`Contains token: ${slot.token.name}`);
    } else {
      console.log('Is empty');
    }
  }
}

browser.pkcs11.installModule("my_module")
.then(onInstalled)
.then(onGotSlots);</pre>

<p>{{WebExtExamples}}</p>
