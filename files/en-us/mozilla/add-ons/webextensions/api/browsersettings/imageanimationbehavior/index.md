---
title: browserSettings.imageAnimationBehavior
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/imageAnimationBehavior
tags:
  - API
  - Add-ons
  - Extensions
  - Property
  - Reference
  - browserSettings
  - imageAnimationBehavior
browser-compat: webextensions.api.browserSettings.imageAnimationBehavior
---
<div>{{AddonSidebar()}}</div>

<p>A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object that can be used to change the way the browser handles animated images, such as GIFs.</p>

<p>The underlying value is a string that can take one of three values:</p>

<ul>
 <li>"normal": the default. Play animated images as normal.</li>
 <li>"none": don't animate images at all.</li>
 <li>"once": play the animation once.</li>
</ul>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Examples">Examples</h2>

<p>Disable animated images:</p>

<pre class="brush: js">  browser.browserSettings.imageAnimationBehavior.set({value: "none"});</pre>

<p>{{WebExtExamples}}</p>
