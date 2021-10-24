---
title: userScripts.RegisteredUserScript
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript
tags:
  - API
  - Extensions
  - Reference
  - RegisteredUserScript
  - Type
  - userScripts
browser-compat: webextensions.api.userScripts.RegisteredUserScript
---
<p>{{AddonSidebar()}}</p>

<p>A <code>RegisteredUserScript</code> object is returned by a call to {{WebExtAPIRef("userScripts.register","userScripts.register()")}} and represents the user scripts registered in that call.</p>

<p>The object defines a single method, {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}}, which is used to unregister the user scripts.</p>

<div class="notecard note">
<p><strong>Note:</strong> If this object is destroyed (for example because it goes out of scope) then the associated scripts will be unregistered automatically, so you should keep a reference to this object for as long as you want the user scripts to stay registered.</p>
</div>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}}</dt>
 <dd>Unregisters the user scripts represented by this object.</dd>
</dl>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
