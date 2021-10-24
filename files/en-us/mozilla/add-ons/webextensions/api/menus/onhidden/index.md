---
title: menus.onHidden
slug: Mozilla/Add-ons/WebExtensions/API/menus/onHidden
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Reference
  - WebExtensions
  - menus
  - onHidden
browser-compat: webextensions.api.menus.onHidden
---
<div>{{AddonSidebar()}}</div>

<p>Fired when the browser stops displaying a menu: for example because the user clicked outside it or selected an item.</p>

<p>It is only triggered for menus that can be manipulated using the {{WebExtAPIRef("menus")}} API itself: this includes the context menu, the browser's tools menu, and the bookmarks menu.</p>

<p>This is most likely to be used in combination with the {{WebExtAPIRef("menus.onShown")}} and {{WebExtAPIRef("menus.refresh()")}} APIs: an extension can update the menu when it is shown, then undo the changes when it is hidden.</p>

<p>Firefox makes this event available via the <code>contextMenus</code> namespace as well as the <code>menus</code> namespace.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:js">browser.menus.onHidden.addListener(listener)
browser.menus.onHidden.removeListener(listener)
browser.menus.onHidden.hasListener(listener)
</pre>

<p>Events have three functions:</p>

<dl>
 <dt><code>addListener(listener)</code></dt>
 <dd>Adds a listener to this event.</dd>
 <dt><code>removeListener(listener)</code></dt>
 <dd>Stop listening to this event. The <code>listener</code> argument is the listener to remove.</dd>
 <dt><code>hasListener(listener)</code></dt>
 <dd>Check whether <code>listener</code> is registered for this event. Returns <code>true</code> if it is listening, <code>false</code> otherwise.</dd>
</dl>

<h2 id="addListener_syntax">addListener syntax</h2>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>
 <p>Function that will be called when this event occurs. The function will be passed no parameters.</p>
 </dd>
</dl>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Examples">Examples</h2>

<p>This example just logs a message whenever a menu is hidden:</p>

<pre class="brush: js">function hidden() {
  console.log("Menu was hidden");
}

browser.menus.onHidden.addListener(hidden);</pre>

<p>{{WebExtExamples}}</p>
