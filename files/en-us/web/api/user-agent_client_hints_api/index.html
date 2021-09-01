---
title: User-Agent Client Hints API
slug: Web/API/User-Agent_Client_Hints_API
tags:
  - API
  - User-Agent Client Hints API
  - Overview
  - Reference
browser-compat: api.NavigatorUAData
---
<div>{{DefaultAPISidebar("User-Agent Client Hints API")}}</div>

<p>The User-Agent Client Hints API extends <a href="/en-US/docs/Glossary/Client_hints">Client Hints</a> to provide a way of exposing browser and platform information via User-Agent response and request headers, and a JavaScript API.</p>

<h2> Concepts and Usage</h2>

<p>Parsing the User-Agent string has historically been the way to get information about the user's browser or device. A typical user agent string looks like the following example, identifying Chrome 92 on Windows:</p>

<pre class="brush:html">Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36</pre>

<p>User agent Client Hints aims to provide this information in a more privacy-preserving way by enforcing a model where the server requests a set of information. The browser decides what to return. This approach means that a user-agent could provide settings that allow a user to hide some of the information that could fingerprint them from such requests.</p>

<p>In order to decide what to return, the information accessed via this API is split into two groups—<strong>low entropy</strong> and <strong>high entropy</strong> hints. Low entropy hints are those that do not give away much information, the API makes these easily accessible with every request. High entropy hints have the potential to give away more information and therefore are gated in such a way that the browser can make a decision as to whether to provide them. This decision could potentially be based on user preferences, or behind a permission request.</p>

<h3>Use cases for User-Agent Client Hints</h3>

<p>The <a href="">User-Agent Client Hints Explainer</a> explains some potential use cases for the API. These include:</p>

<ul>
  <li>Providing custom-tailored polyfills to users on identifying that their browser lacked some web platform feature.</li>
  <li>Working around browser bugs.</li>
  <li>Recording browser analytics.</li>
  <li>Adapting content based on user-agent information. This includes serving different content to mobile devices, in particular devices identified as low-powered. It might also include adapting the design to tailor the interfaces to the user's OS, or providing links to OS-specific ones.</li>
  <li>Providing a notification when a user logs in from a different browser or device, as a security feature.</li>
  <li>Providing the correct binary executable, on a site offering a download.</li>
  <li>Collecting information about the browser and device to identify application errors.</li>
  <li>Blocking spammers, bots, and crawlers.</li>
</ul>

<h2 id="Interfaces"> Interfaces</h2>

<dl>
  <dt>{{domxref("NavigatorUAData")}}</dt>
  <dd>Provides properties and methods to access data about the user's browser and operating system.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3>Getting the brands</h3>

<p>The following example prints the value of {{domxref("NavigatorUAData.brands")}} to the console.</p>

<pre class="brush:js">console.log(navigator.userAgentData.brands);</pre>

<h3>Returning high entropy values</h3>

<p>In the following example a number of hints are requested using the {{domxref("NavigatorUAData.getHighEntropyValues()")}} method. When the promise resolves, this information is printed to the console.</p>

<pre class="brush:js">navigator.userAgentData.getHighEntropyValues(
  ["architecture",
  "model",
  "platform",
  "platformVersion",
  "uaFullVersion"])
  .then(ua => { console.log(ua) });</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="https://web.dev/user-agent-client-hints/">Improving user privacy and developer experience with User-Agent Client Hints</a></li>
  <li><a href="https://web.dev/migrate-to-ua-ch/">Migrate to User-Agent Client Hints</a></li>
</ul>
