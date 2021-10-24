---
title: UserScripts.UserScriptOptions
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/UserScriptOptions
tags:
  - Add-ons
  - Extensions
  - Firefox
  - Guide
  - Intermediate
  - NeedsExample
  - UserScriptOptions
  - WebExtensions
  - userScripts
---
<p>{{AddonSidebar}}</p>

<p>The UserScriptOptions object represents the content scripts to register. It has similar syntax to the contentScript options supported by browser.contentScripts.register. The differences are:</p>

<ul>
 <li>it does not support a css property (use browser.contentScripts.register to dynamically register/unregister stylesheets)</li>
 <li>It does support an optional scriptMetadata property (as a plain JSON object which contains some metadata properties associated to the registered userScripts)</li>
</ul>

<p>The UserScriptOptions object has the following properties:</p>

<dl>
 <dt><code>allFrames</code>{{optional_inline}}</dt>
 <dd>Same as <code>all_frames</code> in the <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code> key.</dd>
 <dt><code>excludeGlobs</code>{{optional_inline}}</dt>
 <dd>Same as <code>exclude_globs</code> in the <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code> key.</dd>
 <dt><code>excludeMatches</code>{{optional_inline}}</dt>
 <dd>Same as <code>exclude_matches</code> in the <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code> key.</dd>
 <dt><code>includeGlobs</code>{{optional_inline}}</dt>
 <dd>Same as <code>include_globs</code> in the <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code> key.</dd>
 <dt><code>js</code>{{optional_inline}}</dt>
 <dd>An array of objects. Each object has either a property named <code>file</code>, which is a URL starting at the extension's manifest.json and pointing to a JavaScript file to register, or a property named <code>code</code>, which is some JavaScript code to register.</dd>
 <dt><code>matchAboutBlank</code>{{optional_inline}}</dt>
 <dd>Same as <code>match_about_blank</code> in the <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code> key.</dd>
 <dt><code>matches</code></dt>
 <dd>Same as <code>matches</code> in the <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code> key.</dd>
 <dt><code>runAt</code>{{optional_inline}}</dt>
 <dd>Same as <code>run_at</code> in the <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code> key.</dd>
 <dt><code>scriptMetadata</code> {{optional_inline}}</dt>
 <dd>A user script metadata value</dd>
</dl>

<p>It has similar syntax to the contentScript options supported by browser.contentScripts.register.</p>
