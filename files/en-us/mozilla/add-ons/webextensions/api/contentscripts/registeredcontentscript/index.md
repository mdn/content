---
title: contentScripts.RegisteredContentScript
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/RegisteredContentScript
tags:
  - API
  - Extensions
  - Reference
  - RegisteredContentScript
  - Type
  - contentScripts
browser-compat: webextensions.api.contentScripts.RegisteredContentScript
---
<div>{{AddonSidebar()}}</div>

<p>A <code>RegisteredContentScript</code> is returned by a call to {{WebExtAPIRef("contentScripts.register()")}} and represents the content scripts registered in that call.</p>

<p>It defines a single function {{WebExtAPIRef("contentScripts.RegisteredContentScript.unregister", "unregister()")}}, which can be used to unregister the content scripts.</p>

<div class="notecard note">
<p><strong>Note:</strong> If this object is destroyed (for example because it goes out of scope) then the content scripts will be unregistered automatically, so you should keep a reference to this object for as long as you want the content scripts to stay registered.</p>
</div>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{WebExtAPIRef("contentScripts.RegisteredContentScript.unregister","unregister()")}}</dt>
 <dd>Unregisters the content scripts represented by this object.</dd>
</dl>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Examples">Examples</h2>

<p>This code toggles a registered content script on a browser action click:</p>

<pre class="brush: js">var registered = null;

async function register() {

  registered = await browser.contentScripts.register({
    matches: ["*://*.org/*"],
    js: [{
      code: "document.body.innerHTML = '&lt;h1&gt;This page has been eaten&lt;h1&gt;'"
    }],
    runAt: "document_idle"
  });

}

function toggle() {
  if (registered) {
    registered.unregister();
    registered = null;
  } else {
    register();
  }
}

browser.browserAction.onClicked.addListener(toggle);

</pre>

<p>{{WebExtExamples}}</p>
