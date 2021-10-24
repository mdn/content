---
title: tabs.toggleReaderMode()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - tabs
  - toggleReaderMode
browser-compat: webextensions.api.tabs.toggleReaderMode
---
<div>{{AddonSidebar()}}</div>

<p>Toggles Reader Mode for the given tab.</p>

<p>This function toggles Reader Mode for the given tab. It takes a tab ID as a parameter: if this is omitted, the currently active tab is toggled.</p>

<p>This is an asynchronous function that returns a <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>.</p>

<p>Reader Mode, also known as Reader View, is a browser feature that makes it easier for the user to focus on an article by:</p>

<ul>
 <li>hiding non-essential page elements like sidebars, footers, and ads</li>
 <li>changing the page's text size, contrast and layout for better readability.</li>
</ul>

<p>Reader Mode is useful specifically for articles: meaning, pages that have a body of text content as their main feature. Pages that don't have an identifiable article are not eligible for display in Reader Mode. To find out whether a page is an article, check the <code>isArticle</code> property of {{WebExtAPIRef("tabs.Tab")}}.</p>

<p>To find out whether a tab is already in Reader Mode, check the <code>isInReaderMode</code> property of {{WebExtAPIRef("tabs.Tab")}}. To track tabs changing into or out of Reader Mode, you'll need to keep track of the current state of all tabs, and check when <code>isInReaderMode</code> changes:</p>

<pre class="brush: js">function handleUpdated(tabId, changeInfo, tabInfo) {
  if (changeInfo.status === "complete") {
    console.log(`Tab ${tabId} reader mode: ${tabInfo.isInReaderMode}`);
  }
}

browser.tabs.onUpdated.addListener(handleUpdated);</pre>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:js">var toggling = browser.tabs.toggleReaderMode(
  tabId            // optional integer
)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>tabId</code>{{optional_inline}}</dt>
 <dd><code>integer</code>. The ID of the tab to display in Reader Mode. Defaults to the selected tab of the current window.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code> that will be fulfilled with no arguments when the tab has been updated. If any error occurs (for example, because the page was not an article), the promise will be rejected with an error message.</p>

<h2 id="Examples">Examples</h2>

<p>This code switches every new page into Reader Mode, if that page is eligible for it:</p>

<pre class="brush: js">function switchToReaderMode(tabId, changeInfo, tabInfo) {
  if (changeInfo.isArticle) {
    browser.tabs.toggleReaderMode(tabId);
  }
}

browser.tabs.onUpdated.addListener(switchToReaderMode);</pre>

<p>{{WebExtExamples}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
