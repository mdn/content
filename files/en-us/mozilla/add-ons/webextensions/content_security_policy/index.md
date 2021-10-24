---
title: Content Security Policy
slug: Mozilla/Add-ons/WebExtensions/Content_Security_Policy
tags:
  - WebExtensions
---
<div>{{AddonSidebar}}</div>

<div class="summary">
<p>Extensions developed with WebExtension APIs have a Content Security Policy (CSP) applied to them by default. This restricts the sources from which they can load<strong><a href="/en-US/docs/Web/HTML/Element/script"> </a></strong><a href="/en-US/docs/Web/HTML/Element/script">&lt;script&gt;</a> and <a href="/en-US/docs/Web/HTML/Element/object">&lt;object&gt;</a> resources, and disallows potentially unsafe practices such as the use of <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval">eval()</a></code>.</p>

<p>This article explains briefly what a CSP is, what the default policy is and what it means for an extension, and how an extension can change the default CSP.</p>
</div>

<p><a href="/en-US/docs/Web/HTTP/CSP">Content Security Policy</a> (CSP) is a mechanism to help prevent websites from inadvertently executing malicious content. A website specifies a CSP using an HTTP header sent from the server. The CSP is mostly concerned with specifying legitimate sources of various types of content, such as scripts or embedded plugins. For example, a website can use it to specify that the browser should only execute JavaScript served from the website itself, and not from any other sources. A CSP can also instruct the browser to disallow potentially unsafe practices, such as the use of <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval">eval()</a></code>.</p>

<p>Like websites, extensions can load content from different sources. For example, a browser action's popup is specified as an HTML document, and it can include JavaScript and CSS from different sources, just like a normal web page:</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;

&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
  &lt;/head&gt;

  &lt;body&gt;

    &lt;!--Some HTML content here--&gt;

    &lt;!--
      Include a third-party script.
      See also https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity.
    --&gt;
    &lt;script
      src="https://code.jquery.com/jquery-2.2.4.js"
      integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
      crossorigin="anonymous"&gt;
    &lt;/script&gt;

    &lt;!-- Include my popup's own script--&gt;
    &lt;script src="popup.js"&gt;&lt;/script&gt;
  &lt;/body&gt;

&lt;/html&gt;</pre>

<p>Compared to a website, extensions have access to additional privileged APIs, so if they are compromised by malicious code, the risks are greater. For this reason:</p>

<ul>
 <li>a fairly strict content security policy is applied to extensions by default. See <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy">default content security policy</a>.</li>
 <li>the extension's author can change the default policy using the <code>content_security_policy</code> manifest.json key, but there are restrictions on the policies that are allowed. See <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy">content_security_policy</a></code>.</li>
</ul>

<h2 id="Default_content_security_policy">Default content security policy</h2>

<p>The default content security policy for extensions is:</p>

<pre>"script-src 'self'; object-src 'self';"</pre>

<p>This will be applied to any extension that has not explicitly set its own content security policy using the <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy">content_security_policy</a></code> manifest.json key. It has the following consequences:</p>

<ul>
 <li>
  <p><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#location_of_script_and_object_resources">You may only load &lt;script&gt; and &lt;object&gt; resources that are local to the extension.</a></p>
 </li>
 <li>
  <p><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval()_and_friends">The extension is not allowed to evaluate strings as JavaScript.</a></p>
 </li>
 <li>
  <p><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#inline_javascript">Inline JavaScript is not executed.</a></p>
 </li>
</ul>

<h3 id="Location_of_script_and_object_resources">Location of script and object resources</h3>

<p>Under the default CSP you may only load <a href="/en-US/docs/Web/HTML/Element/script">&lt;script&gt;</a> and <a href="/en-US/docs/Web/HTML/Element/object">&lt;object&gt;</a> resources that are local to the extension. For example, consider a line like this in an extension's document:</p>

<pre class="brush: html"> &lt;script src="https://code.jquery.com/jquery-2.2.4.js"&gt;&lt;/script&gt;</pre>

<p>This will no longer load the requested resource: it will fail silently, and any object which you expected to be present from the resource will not be found. There are two main solutions to this:</p>

<ul>
 <li>
  <p>download the resource, package it in your extension, and refer to this version of the resource</p>
 </li>
 <li>
  <p>use the <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy">content_security_policy</a></code> key to allow the remote origin you need.</p>
 </li>
</ul>

<h3 id="eval()_and_friends">eval() and friends</h3>

<p>Under the default CSP extensions are not allowed to evaluate strings as JavaScript. This means that the following are not permitted:</p>

<pre class="brush: js">eval("console.log('some output');");</pre>

<pre class="brush: js">window.setTimeout("alert('Hello World!');", 500);</pre>

<pre class="brush: js">var f = new Function("console.log('foo');");</pre>

<h3 id="Inline_JavaScript">Inline JavaScript</h3>

<p>Under the default CSP inline JavaScript is not executed. This disallows both JavaScript placed directly in <code>&lt;script&gt;</code> tags and inline event handlers, meaning that the following are not permitted:</p>

<pre class="brush: html">&lt;script&gt;console.log("foo");&lt;/script&gt;</pre>

<pre class="brush: html">&lt;div onclick="console.log('click')"&gt;Click me!&lt;/div&gt;</pre>

<p>If you are currently using code like <code>&lt;body onload="main()"&gt;</code> to run your script when the page has loaded, listen for <a href="/en-US/docs/Web/API/Window/DOMContentLoaded_event">DOMContentLoaded</a> or <a href="/en-US/docs/Web/API/Window/load_event">load</a> instead.</p>
