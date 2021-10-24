---
title: browserSettings.allowPopupsForUserEvents
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/allowPopupsForUserEvents
tags:
  - API
  - Add-ons
  - Extensions
  - Property
  - WebExtensions
  - allowPopupsForUserEvents
  - browserSettings
browser-compat: webextensions.api.browserSettings.allowPopupsForUserEvents
---
<div>{{AddonSidebar()}}</div>

<p>A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object that can be used to enable or disable the ability of web pages to open popups in response to user actions.</p>

<p>The underlying value is a boolean.</p>

<p>By default, browsers allow web pages to open popups in response to a particular set of events: for example, <a href="/en-US/docs/Web/API/Element/click_event">click</a>, <a href="/en-US/docs/Web/API/Element/mouseup_event">mouseup</a>, <a href="/en-US/docs/Web/API/HTMLFormElement/submit_event">submit</a>. If <code>allowPopupsForUserEvents</code> is set to <code>false</code>, no user events will be able to open popups. If it is set to <code>true</code>, the default set of events will be allowed to open popups.</p>

<p>For example, suppose a web page has code like this:</p>

<pre class="brush: js">window.addEventListener("click", (e) =&gt; {
  window.open("https://example.com","myPopup",'height=400,width=400');
});
</pre>

<p>By default, this will open a popup window. If your extension sets <code>allowPopupsForUserEvents</code> to <code>false</code>, then it will not open a popup, and the user will be informed that the popup was blocked.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Examples">Examples</h2>

<p>Toggle the setting:</p>

<pre class="brush: js">function toggleAllowPopup() {

  function toggle(current) {
    console.log(`Current value: ${current.value}`);
    browser.browserSettings.allowPopupsForUserEvents.set({value: !current.value});
  }

  browser.browserSettings.allowPopupsForUserEvents.get({}).then(toggle);
}

browser.browserAction.onClicked.addListener(() =&gt; {
  toggleAllowPopup();
});
</pre>

<p>{{WebExtExamples}}</p>
