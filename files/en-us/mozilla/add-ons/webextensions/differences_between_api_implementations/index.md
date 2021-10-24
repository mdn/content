---
title: Differences between API implementations
slug: Mozilla/Add-ons/WebExtensions/Differences_between_API_implementations
tags:
  - Guide
  - WebExtensions
---
<div>{{AddonSidebar}}</div>

<p>The browser extensions API is still an <a href="https://browserext.github.io/browserext/">emerging standard</a>. As a result, while it is supported by most major browsers including Firefox, Chrome, Edge, and Opera, there are differences between the various implementations. This means that some changes may be necessary to implement your extension for multiple browsers.</p>

<p>Among the various browsers supporting the extensions API, Firefox is the most compliant with the emerging standard, and is, therefore, your best place to start when developing browser extensions.</p>

<p>The differences between browsers’ extensions API implementations fall into four areas: namespace, asynchronous event handling, API coverage, and manifest keys.</p>

<h2 id="Namespace">Namespace</h2>

<p>You reference all extensions API functions using a namespace, for example, <code>browser.alarms.create({delayInMinutes});</code> would create an alarm in Firefox that goes off after the time specified in <code>delayInMinutes</code>.</p>

<p>There are two API namespaces in use:</p>

<ul>
	<li>
	<p><code>chrome</code> used in Chrome and Opera.</p>
	</li>
	<li>
	<p><code>browser</code> used in Firefox and Edge.</p>
	</li>
</ul>

<h2 id="Asynchronous_event_handling">Asynchronous event handling</h2>

<p>JavaScript provides several ways in which to handle asynchronous events. The proposed extensions API standard is to use promises. The promises approach provides significant advantages when dealing with chained asynchronous event calls.</p>

<p>If you are unfamiliar with how JavaScript can handle asynchronous events or promises, take a look at <a href="https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee">Getting to know asynchronous JavaScript: Callbacks, Promises and Async/Await</a> or the MDN <a href="/en-US/docs/Web/JavaScript/Guide/Using_promises">Using promises</a> page.</p>

<p>Firefox is the only major browser that has implemented promises for the extensions API. All other browsers use callbacks.</p>

<h2 id="API_coverage">API coverage</h2>

<p>The differences in the extensions API function implementations among the browsers fall into three broad categories:</p>

<ul>
	<li>
	<p>Lack of support for an entire function. For example, at the time of writing, Edge doesn’t provide support for the <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy">privacy</a></code> function.</p>
	</li>
	<li>
	<p>Variations in the support for features within a function. For example, at the time of writing, Firefox doesn’t support the <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications">notification</a></code> function method <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onButtonClicked">onButtonClicked</a></code>, while Firefox is the only browser that supports <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onShown">onShown</a></code>.</p>
	</li>
	<li>
	<p>Proprietary functions, supporting browser-specific features. For example, at the time of writing, containers is a Firefox-specific feature supported by the <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities">contextualIdentities</a></code> function.</p>
	</li>
</ul>

<h2 id="Manifest_keys">Manifest keys</h2>

<p>The differences in the supported <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json"><code>manifest.json</code> keys</a> among the browsers fall broadly into two categories:</p>

<ul>
	<li>
	<p>Extension information attributes. For example, at the time of writing, Firefox and Opera include the <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer">developer</a></code> key enabling the addition of details about the developer of the extension, as well as the author, to be recorded.</p>
	</li>
	<li>
	<p>Extension features. For example, at the time of writing, Edge did not support the <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands">commands</a></code> key (which enables shortcut keys to be defined for an extension).</p>
	</li>
</ul>

<h2 id="More_information">More information</h2>

<p>You can find more detailed information about the differences in the supported browser extensions API features in:</p>

<ul>
	<li><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities">Chrome incompatibilities</a></li>
	<li><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs">Browser support for JavaScript APIs</a></li>
	<li><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json">Browser compatibility for manifest.json</a></li>
</ul>
