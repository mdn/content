---
title: browserSettings.openUrlbarResultsInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openUrlbarResultsInNewTabs
tags:
  - API
  - Add-ons
  - Extensions
  - Property
  - Reference
  - WebExtensions
  - browserSettings
  - openUrlbarResultsInNewTabs
browser-compat: webextensions.api.browserSettings.openUrlbarResultsInNewTabs
---
<div>{{AddonSidebar()}}</div>

<p>A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object whose underlying value is a boolean.</p>

<p>When the user focuses the address bar and starts typing, the browser offers autocomplete suggestions: a dropdown list of web pages based on the user's incomplete input and their browsing history.</p>

<p>If set to <code>true</code>, then when the user selects one of these items, the item is opened in a new tab. If set to <code>false</code> (the default) the item is opened in the current tab.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Examples">Examples</h2>

<p>Set the setting to <code>true</code>:</p>

<pre class="brush: js">function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.openUrlbarResultsInNewTabs.set({value: true}).
  then(logResult);</pre>

<p>{{WebExtExamples}}</p>
