---
title: theme
slug: Mozilla/Add-ons/WebExtensions/API/theme
tags:
  - Extensions
  - Themes
  - WebExtensions
  - add-on
browser-compat: webextensions.api.theme
---
<div>{{AddonSidebar}}</div>

<p>Enables browser extensions to update the browser theme.</p>

<p>To use this API, an extension must request the "theme" <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permission</a> in its<a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json"> manifest.json</a> file.</p>

<div class="note">
<p><strong>Note:</strong> When we set up a theme in a background file, we must declare the 'theme' <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permission</a> and therefore we cannot use the <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme">theme</a> function of the manifest, since it's not compatible.</p>
</div>

<h2 id="Types">Types</h2>

<dl>
 <dt>{{WebExtAPIRef("theme.Theme")}}</dt>
 <dd>Represents the content of a theme.</dd>
</dl>

<h2 id="Functions">Functions</h2>

<dl>
 <dt>{{WebExtAPIRef("theme.getCurrent()")}}</dt>
 <dd>Gets the current browser theme.</dd>
 <dt>{{WebExtAPIRef("theme.update()")}}</dt>
 <dd>Updates the browser’s theme.</dd>
 <dt>{{WebExtAPIRef("theme.reset()")}}</dt>
 <dd>Removes any theme updates made in a call to {{WebExtAPIRef("theme.update()")}}.</dd>
</dl>

<h2 id="Events">Events</h2>

<dl>
 <dt>{{WebExtAPIRef("theme.onUpdated")}}</dt>
 <dd>Fired when the browser theme has been changed.</dd>
</dl>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<p>{{WebExtExamples("h2")}}</p>
