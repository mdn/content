---
title: Options page
slug: Mozilla/Add-ons/WebExtensions/user_interface/Options_pages
tags:
  - WebExtensions
---
<div>{{AddonSidebar}}</div>

<p>An Options page enables you to define preferences for your extension that your users can change. Users can access the options page for an extension from the browser's add-ons manager:</p>

<p>{{EmbedYouTube("eODy24csH5M")}}</p>

<p>The way users access the page, and the way it's integrated into the browser's user interface, will vary from one browser to another.</p>

<p>You can open the page programmatically by calling <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage" title="If your add-on does not have an options page, or the browser failed to create one for some other reason, runtime.lastError will be set."><code>runtime.openOptionsPage()</code></a>.</p>

<p>Options pages have a Content Security Policy that restricts the sources from which they can load resources, and disallows some unsafe practices such as the use of <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval">eval()</a></code>. See <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy">Content Security Policy</a> for more details.</p>

<h2 id="Specifying_the_options_page">Specifying the options page</h2>

<p>To create an options page, write an HTML file defining the page. This page can include CSS and JavaScript files, like a normal web page. This page, from the <a href="https://github.com/mdn/webextensions-examples/tree/master/favourite-colour">favourite-color</a> example, includes a JavaScript file:</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;

&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"/&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;form&gt;
      &lt;label&gt;Favorite color&lt;/label&gt;
      &lt;input type="text" id="color"/&gt;
      &lt;button type="submit"&gt;Save&lt;/button&gt;
    &lt;/form&gt;
    &lt;script src="options.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

<p>JavaScript running in the page can use all the <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API">WebExtension APIs</a> that the add-on has <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permissions</a> for. In particular, you can use the <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage" title="Enables WebExtensions to store and retrieve data, and listen for changes to stored items."><code>storage</code></a> API to persist preferences.</p>

<p>Package the page's files in your extension.</p>

<p>You also need to include the <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui">options_ui</a></code> key in your manifest.json file, giving it the URL to the page.</p>

<pre class="brush: json">"options_ui": {
  "page": "options.html",
  "browser_style": true
},</pre>

<div class="note">
<p><strong>Note:</strong> <strong>Google Chrome</strong> and <strong>Opera</strong> use <code>chrome_style</code> instead of <code>browser_style</code>, so if you wish to support them, you need to add both keys.</p>
</div>

<p>See the <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui">options_ui</a></code> page for <strong>sharing options</strong> between your options page and background or content scripts.</p>

<h2 id="Options_content_design">Options content design</h2>

<p>For details on how to design your options content to match the style of Firefox, see the <a href="https://design.firefox.com/photon/index.html">Photon Design System</a> and <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles">browser styles</a> documentation.</p>

<h2 id="Examples">Examples</h2>

<p>The <a href="https://github.com/mdn/webextensions-examples">webextensions-examples</a> repository on GitHub includes the <a href="https://github.com/mdn/webextensions-examples/tree/master/favourite-colour">favourite-color</a> example which implements options page features.</p>
